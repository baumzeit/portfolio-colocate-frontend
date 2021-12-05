import * as d3 from 'd3'
import { cloneDeep } from 'lodash'

import { VoronoiChartProps } from './VoronoiChart'

export type VoronoiDatum = {
  x: number
  y: number
  imageUrl: string
  id: number | null | undefined
  title: string | null | undefined
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

export type VoronoiOptions = {
  offset: number
  transitionDuration: number
  cellGap: number
  padding: VoronoiChartProps['padding']
}
type Position = { x: number; y: number }

type Delta = Position[]

export type VoronoiContext = {
  delta: Delta
  transitioning: string | null
  selectedIndex: number | null
  locked: boolean
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

  const animate = (name: string, animateContext: VoronoiContext) => {
    const { delta } = animateContext
    const transition = d3
      .transition(name)
      .duration(opts.transitionDuration)
      .tween('tween-' + name, function (d) {
        return (tweenValue) => {
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
      .transition()
      .duration(450)
      .style('fill-opacity', 0.9)

    const restoreDelta = d3
      .zip(originalData, data)
      .map(([curr, original]) => ({ x: curr.x - original.x, y: curr.y - original.y }))
    return animate('restore', { ...ctx, delta: restoreDelta })
  }

  const animateToState = (name: string, targetData: EnrichedDatum[], animateContext: VoronoiContext) => {
    const delta = d3
      .zip(targetData, data)
      .map(([target, source]) => ({ x: target.x - source.x, y: target.y - source.y }))
    return animate(name, { ...animateContext, delta })
  }

  const selectCell = (index: number, options: { scale?: (val: any) => number; restoreData?: EnrichedDatum[] } = {}) => {
    console.log('select cell')
    const { scale = pushScale, restoreData = [...originalData] } = options

    d3.selectAll<SVGPathElement, EnrichedDatum>(`.cell`)
      .classed('hover-selected', (d) => d.index === index)
      .transition()
      .duration(450)
      .select('.pattern')
      .style('fill-opacity', (d) => (d.index === index ? 0 : 0.9))

    const newDelta = createDeltaPush(index, data, scale)

    const restoreDelta = d3
      .zip(data, restoreData)
      .map(([curr, original]) => ({ x: curr.x - original.x, y: curr.y - original.y }))

    const delta = d3
      .zip(newDelta, restoreDelta)
      .map(([fresh, restore]) => ({ x: fresh.x - restore.x, y: fresh.y - restore.y }))

    return animate('select', { ...ctx, delta, selectedIndex: index })
  }

  const zoomCell = (index: number, deltaY: number) => {
    const newDelta = createDeltaPush(index, data, (scalar) => scalar * zoomScale(deltaY))
    animate('zoom', { ...ctx, delta: newDelta, selectedIndex: index })
  }

  const exposeCell = (index: number) => {
    d3.selectAll<SVGPathElement, EnrichedDatum>(`.base-layer .cell`)
      .classed('hover-selected', (d) => d.index === index)
      .select('.pattern')
      .transition()
      .duration(450)
      .style('fill-opacity', (d) => (d.index === index ? 0 : 0.9))

    const radius = (Math.min(width, height) * 0.8) / 2
    const collideRadius = (radius * Math.PI) / data.length
    console.log('simulation start', data)
    const clonedData = cloneDeep(data)
    const pushedData = clonedData.filter((d) => d.index !== index)
    const centerData = { ...clonedData[index], x: width / 2, y: height / 2 }
    d3.forceSimulation(pushedData)
      .force(
        'r',
        d3
          .forceRadial(radius)
          .strength(1)
          .x(width / 2)
          .y(height / 2)
      )
      .force('charge', d3.forceCollide(collideRadius).iterations(2).strength(1))
      .alphaDecay(0.15)
      .on('end', function () {
        console.log('simulation end')
        const nodes = this.nodes()
        const mergedData = [...nodes.slice(0, index), centerData, ...nodes.slice(index)]
        animateToState('expose', mergedData, { ...ctx, locked: true })
      })
  }
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
