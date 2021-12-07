import * as d3 from 'd3'
import { cloneDeep, throttle } from 'lodash'
export type VoronoiDatum = {
  x: number
  y: number
  imageUrl: string
  id: number | null | undefined
  title: string | null | undefined
  description: string | null | undefined
  fields: {
    color?: string | null | undefined
    name?: string | null | undefined
    id?: number | null | undefined
  }[]
}

export type EnrichedDatum = VoronoiDatum & {
  path: string
  index: number
}

export type Dimensions = { width: number; height: number }
export type Padding = {
  top: number
  right: number
  bottom: number
  left: number
}

export type VoronoiOptions = {
  offset: number
  transitionDuration: number
  cellGap: number
  imageSize: number
  padding: Padding
}
type Position = { x: number; y: number }

type Delta = Position[]

type Transition = 'hover' | 'expose' | 'zoom' | 'restore' | null

export type VoronoiContext = {
  delta: Delta
  transitioning: Transition | null
  selectedIndex: number | null
  locked: boolean
  viewState: Extract<Transition, 'hover' | 'expose'> | null
}

export const initializeVoronoiHelpers = (
  data: EnrichedDatum[],
  originalData: VoronoiDatum[],
  { width, height }: Dimensions,
  opts: VoronoiOptions,
  ctx: VoronoiContext,
  animateFn: (data: VoronoiDatum[], ctx: VoronoiContext) => void
) => {
  const zoomScale = d3.scaleLinear().domain([-20, 40]).clamp(true).range([-0.6, 1.2])
  const pushScale = d3
    .scalePow()
    .domain([0, Math.hypot(width, height)])
    .clamp(true)
    .range([opts.offset, 0])

  const animate = (name: Transition, animateContext: VoronoiContext, duration = opts.transitionDuration) => {
    const { delta } = animateContext
    const transition = d3
      .transition(name || '')
      .duration(duration)
      .tween('tween-' + name, function (d) {
        return (tweenValue) => {
          if (tweenValue) {
            const tweenDelta = delta.map((d) => ({ x: d.x * tweenValue, y: d.y * tweenValue }))
            const tweenData = d3
              .zip<EnrichedDatum>(data, tweenDelta as EnrichedDatum[])
              .map(([d, delta]) => ({ ...d, x: d.x + delta.x, y: d.y + delta.y }))
            animateFn(tweenData, {
              ...animateContext,
              delta: tweenDelta,
              transitioning: tweenValue < 1 ? name : null
            })
          }
        }
      })
    return {
      finalState: d3
        .zip<EnrichedDatum>(data, delta as EnrichedDatum[])
        .map(([d, delta]) => ({ ...d, x: d.x + delta.x, y: d.y + delta.y })),
      transition
    }
  }

  const restore = () => {
    d3.selectAll<SVGPathElement, EnrichedDatum>(`.cell`)
      .classed('hover-selected', false)
      .selectAll('.pattern')
      .transition('restore')
      .duration(opts.transitionDuration)
      .style('fill-opacity', 0.9)

    const restoreDelta = d3
      .zip(originalData, data)
      .map(([curr, original]) => ({ x: curr.x - original.x, y: curr.y - original.y }))
    return animate('restore', { ...ctx, delta: restoreDelta, selectedIndex: null, viewState: null })
  }

  const animateToState = (
    name: Transition,
    targetData: EnrichedDatum[],
    animateContext: VoronoiContext,
    duration?: number
  ) => {
    const delta = d3
      .zip(targetData, data)
      .map(([target, source]) => ({ x: target.x - source.x, y: target.y - source.y }))
    return animate(name, { ...animateContext, delta }, duration)
  }

  const selectCell = (index: number, options: { scale?: (val: any) => number; restoreData?: EnrichedDatum[] } = {}) => {
    console.log('select cell')
    const { scale = pushScale, restoreData = [...originalData] } = options

    d3.selectAll<SVGPathElement, EnrichedDatum>(`.cell`)
      .classed('hover-selected', (d) => d.index === index)
      .transition('select-pattern-selected')
      .duration(opts.transitionDuration)
      .select('.pattern')
      .style('fill-opacity', (d) => (d.index === index ? 0 : 0.9))

    // const newDelta = createDeltaPush(index, data, scale)

    // const restoreDelta = d3
    //   .zip(data, restoreData)
    //   .map(([curr, original]) => ({ x: curr.x - original.x, y: curr.y - original.y }))

    // const delta = d3
    //   .zip(newDelta, restoreDelta)
    //   .map(([fresh, restore]) => ({ x: fresh.x - restore.x, y: fresh.y - restore.y }))

    // return animate('hover', { ...ctx, delta, selectedIndex: index })
  }

  const zoomCell = (index: number, deltaY: number) => {
    const newDelta = createDeltaPush(index, data, (scalar) => scalar * zoomScale(deltaY))
    animate('zoom', { ...ctx, delta: newDelta, selectedIndex: index })
  }

  const exposeCell = async (index: number) => {
    d3.selectAll<SVGPathElement, EnrichedDatum>(`.cell`)
      .classed('hover-selected', (d) => d.index === index)
      .select('.pattern')
      .transition('expose-pattern-selected')
      .duration(opts.transitionDuration)
      .style('fill-opacity', (d) => (d.index === index ? 0 : 0.9))

    const exposeData =
      ctx.viewState === 'expose' && typeof ctx.selectedIndex === 'number'
        ? swapItems(data, index, ctx.selectedIndex || 0)
        : await simulateRadialForce(index)

    d3.selectAll<SVGPathElement, EnrichedDatum>(`.cell`)
      .classed('field-highlight', (d) => d.index === index)
      .select('.highlight-pattern')
      .style('fill', (d) => `url(#diagonalHatchHighlight-${d.fields[0].id})`)
      .transition('expose-highlight-field')
      .duration(opts.transitionDuration)
      .style('fill-opacity', (d) => (d.index === index ? 0 : 1))

    animateToState('expose', exposeData, { ...ctx, locked: true, selectedIndex: index, viewState: 'expose' })
  }
  const simulateRadialForce = (index: number) =>
    new Promise<EnrichedDatum[]>((resolve) => {
      console.log('simulation start', data)
      const aspect = width / height
      const x0 = width / 2
      const y0 = height / 2
      const radius = (Math.min(width, height) * 1) / 2
      const collideRadius = (radius * Math.PI) / data.length
      const clonedData = cloneDeep(data)
      const pushedData = clonedData.filter((d) => d.index !== index)
      const centerData = { ...clonedData[index], x: x0, y: y0 }
      d3.forceSimulation(pushedData)
        .force('r', d3.forceRadial(radius).strength(1).x(x0).y(y0))
        .force('charge', d3.forceCollide(collideRadius).iterations(2).strength(1))
        .alphaDecay(0.1)
        .on('end', function () {
          const nodes = circleToEllipse(this.nodes(), aspect > 1 ? aspect * 0.8 : aspect * 1.2, x0, y0)
          console.log('simulation end')
          resolve([...nodes.slice(0, index), centerData, ...nodes.slice(index)])
        })
    })
  return { animate, selectCell, zoomCell, exposeCell, restore }
}

const createDeltaPush = (index: number, data: Position[], transformScalar: (scalar: number) => number): Delta => {
  const { x, y } = data[index]
  return data.map((point, idx) => {
    const alpha = Math.atan2(point.y - y, point.x - x)
    const hyp = transformScalar(Math.hypot(point.y - y, point.x - x))
    return idx !== index
      ? {
          x: Math.cos(alpha) * hyp,
          y: Math.sin(alpha) * hyp
        }
      : { x: 0, y: 0 }
  })
}

function circleToEllipse(data: EnrichedDatum[], aspect = 1, x0 = 0, y0 = 0) {
  const aspectFactor = {
    x: aspect > 1 ? aspect : 1,
    y: aspect < 1 ? 1 / aspect : 1
  }
  const ellipseData = data.map((d) => ({
    ...d,
    x: x0 + (d.x - x0) * aspectFactor.x,
    y: y0 + (d.y - y0) * aspectFactor.y
  }))
  return ellipseData
}

function swapItems<T = any>(data: T[], idx1: number, idx2: number) {
  console.log('swap')
  const swappedData = data.map((d, idx) => (idx === idx1 ? data[idx2] : idx === idx2 ? data[idx1] : d))
  return swappedData
}
