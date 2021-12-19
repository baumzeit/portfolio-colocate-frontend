import * as d3 from 'd3'

export type VoronoiDatum = {
  x: number
  y: number
  imageUrl: string
  id: string
  title: string
  description: string
  fields: {
    color?: string
    name?: string
    id?: string
  }[]
}

export type EnrichedDatum = VoronoiDatum & {
  path: string
  id: string
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

export type SetModalFn = (p: EnrichedDatum) => void

type Position = { x: number; y: number }

type Delta = Position[]

type Transition = 'hover' | 'expose' | 'zoom' | 'restore' | null

export type VoronoiContext = {
  delta: Delta
  transitioning: Transition | null
  selectedId: string | null
  locked: boolean
  viewState: Extract<Transition, 'hover' | 'expose'> | null
}

export const initializeVoronoiActions = (
  data: EnrichedDatum[],
  originalData: VoronoiDatum[],
  { width, height }: Dimensions,
  opts: VoronoiOptions,
  updateFn: (data: VoronoiDatum[]) => void,
  setModalData: SetModalFn
) => {
  // const zoomScale = d3.scaleLinear().domain([-20, 40]).clamp(true).range([-0.6, 1.2])
  const pushScale = d3
    .scalePow()
    .domain([0, Math.hypot(width, height)])
    .clamp(true)
    .range([opts.offset, 0])

  // const animate = (name: Transition, animateContext: VoronoiContext, duration = opts.transitionDuration) => {
  //   const { delta } = animateContext
  //   const transition = d3
  //     .transition(name || '')
  //     .duration(duration)
  //     .tween('tween-' + name, function (d) {
  //       return (tweenValue) => {
  //         if (tweenValue) {
  //           const tweenDelta = delta.map((d) => ({ x: d.x * tweenValue, y: d.y * tweenValue }))
  //           const tweenData = d3
  //             .zip<EnrichedDatum>(data, tweenDelta as EnrichedDatum[])
  //             .map(([d, delta]) => ({ ...d, x: d.x + delta.x, y: d.y + delta.y }))
  //           updateFn(tweenData, {
  //             ...animateContext,
  //             delta: tweenDelta,
  //             transitioning: tweenValue < 1 ? name : null
  //           })
  //         }
  //       }
  //     })
  //   return {
  //     finalState: d3
  //       .zip<EnrichedDatum>(data, delta as EnrichedDatum[])
  //       .map(([d, delta]) => ({ ...d, x: d.x + delta.x, y: d.y + delta.y })),
  //     transition
  //   }
  // }

  const restore = () => {
    d3.selectAll<SVGPathElement, EnrichedDatum>(`.cell`)
      .classed('hover-selected', false)
      .selectAll('.pattern')
      .transition('restore')
      .duration(opts.transitionDuration)
      .style('fill-opacity', 0.9)

    // const restoreDelta = d3
    //   .zip(originalData, data)
    //   .map(([curr, original]) => ({ x: curr.x - original.x, y: curr.y - original.y }))
    // return animate('restore', { ...ctx, delta: restoreDelta, selectedIndex: null, viewState: null })
    return updateFn(originalData)
  }

  // const animateToState = (
  //   name: Transition,
  //   targetData: EnrichedDatum[],
  //   animateContext: VoronoiContext,
  //   duration?: number
  // ) => {
  //   const delta = d3
  //     .zip(targetData, data)
  //     .map(([target, source]) => ({ x: target.x - source.x, y: target.y - source.y }))
  //   return animate(name, { ...animateContext, delta }, duration)
  // }

  const selectCell = (
    selectedId: string,
    options: { scale?: (val: any) => number; restoreData?: EnrichedDatum[] } = {}
  ) => {
    console.log('select cell')
    const { scale = pushScale, restoreData = [...originalData] } = options

    d3.selectAll<SVGPathElement, EnrichedDatum>(`.cell`)
      .classed('hover-selected', (d) => d.id === selectedId)
      .transition('select-pattern-selected')
      .duration(opts.transitionDuration)
      .select('.pattern')
      .style('fill-opacity', (d) => (d.id === selectedId ? 0 : 0.9))

    // const newDelta = createDeltaPush(selectedId, data, scale)

    // const restoreDelta = d3
    //   .zip(data, restoreData)
    //   .map(([curr, original]) => ({ x: curr.x - original.x, y: curr.y - original.y }))

    // const delta = d3
    //   .zip(newDelta, restoreDelta)
    //   .map(([fresh, restore]) => ({ x: fresh.x - restore.x, y: fresh.y - restore.y }))

    // return animate('hover', { ...ctx, delta, selectedIndex: index })
  }

  // const zoomCell = (index: number, deltaY: number) => {
  //   const newDelta = createDeltaPush(index, data, (scalar) => scalar * zoomScale(deltaY))
  //   animate('zoom', { ...ctx, delta: newDelta, selectedIndex: index })
  // }

  const exposeCell = async (exposedId: string | null) => {
    const cells = d3.selectAll<SVGPathElement, EnrichedDatum>(`.cell`)
    if (cells.empty()) return
    cells
      .classed('hover-selected', (d) => d.id === exposedId)
      .select('.pattern')
      .transition()
      .duration(opts.transitionDuration)
      .style('fill-opacity', (d) => (d.id === exposedId ? 0 : 0.9))

    const defsCell = d3.selectAll<SVGGElement, EnrichedDatum>('.defs-cell')
    const imageCell = d3.selectAll<SVGGElement, EnrichedDatum>('.image-cell')
    const baseCell = d3.selectAll<SVGGElement, EnrichedDatum>('.base-cell')
    const definitionCell = d3.selectAll<SVGGElement, EnrichedDatum>('.definition-cell')
    const contentCell = d3.selectAll<SVGGElement, EnrichedDatum>('.content-cell')

    cells
      .classed('exposed', (d) => d.id === exposedId)
      .attr('transform-origin', '50% 50%')
      .style('pointer-events')
    const scaleTransform = `scale(${Math.sqrt(data.length)})`
    const translateTransform = (x: number, y: number) => `translate(${width / 2 - x}, ${height / 2 - y})`

    defsCell
      .selectAll<SVGPathElement, EnrichedDatum>('clipPath.path')
      .transition()
      .duration(opts.transitionDuration)
      .attr('transform', (d) => scaleTransform + translateTransform(d.x, d.y))

    d3.selectAll<SVGGElement, EnrichedDatum>([...baseCell, ...definitionCell, ...imageCell])
      .call((sel) =>
        sel
          .transition('fade-out-others')
          .duration(opts.transitionDuration * 0.6)
          .style('opacity', (d) => (exposedId === null || exposedId === d.id ? 1 : 0))
      )
      .transition('translate-scale')
      .duration(opts.transitionDuration)
      .attr('transform', (d) =>
        d.id === exposedId ? scaleTransform + translateTransform(d.x, d.y) : 'scale(1) translate(0, 0)'
      )

    contentCell
      .transition()
      .duration(opts.transitionDuration)
      .style('opacity', (d) => (d.id === exposedId ? 1 : 0))
      .attr('transform', (d) => (d.id === exposedId ? translateTransform(d.x, d.y) : 'translate(0,0)'))

    d3.transition()
      .delay(opts.transitionDuration)
      .call(() => setModalData(data.find((d) => d.id === exposedId)))

    // const fo = contentCell
    //   .selectAll('foreignObject.description')
    //   .data((d) => (exposedId !== d.id ? [] : [d]))
    //   .join(
    //     (enter) => {
    //       const fo = enter
    //         .append('foreignObject')
    //         .attr('x', (d) => d.x - width / 2 - 1)
    //         .attr('y', (d) => d.y - height / 2 - 1)
    //         .attr('width', width + 2)
    //         .attr('height', height + 2)
    //         .classed('description', true)

    //       // enter
    //       //   .append('rect')
    //       //   .attr('x', (d) => d.x - width / 2 - 1)
    //       //   .attr('y', (d) => d.y - height / 2 - 1)
    //       //   .attr('width', width)
    //       //   .attr('height', 80)
    //       //   .attr('fill', 'slategray')
    //       //   .on('mouseenter', () => exposeCell(null))
    //       return fo
    //     },
    //     (update) => update,
    //     (exit) => exit.transition().duration(opts.transitionDuration).style('opacity', 0).remove()
    //   )
    // fo.selectAll('.content')
    //   .data((d) => [d])
    //   .join('xhtml:div')
    //   .classed('content h-full bg-primary', true)
    //   .html((d) => renderToString(<ProjectDetail project={d} />))
    //   .style('opacity', 0)
    //   .transition()
    //   .duration(opts.transitionDuration * 1.4)
    //   .style('opacity', 1)

    // fo.attr('height', foHeight)

    // const exposeData =
    //   ctx.viewState === 'expose' && typeof ctx.selectedId === 'number'
    //     ? swapItems(data, id, ctx.selectedId || 0)
    //     : await simulateRadialForce(id)
    // const exposeData = await simulateRadialForce(data.findIndex((d) => d.id === id))

    // const selectedExposedCell = exposeData.find((d) => d.id === id)
    // const renderData = selectedExposedCell ? [selectedExposedCell] : []

    // d3.selectAll<SVGPathElement, EnrichedDatum>(`.cell`)
    //   .classed('field-highlight', (d) => d.index === index)
    //   .select('.highlight-pattern')
    //   .style('fill', (d) => `url(#diagonalHatchHighlight-${d.fields[0].id})`)
    //   .transition('expose-highlight-field')
    //   .duration(opts.transitionDuration)
    //   .style('fill-opacity', (d) => (d.index === index ? 0 : 1))

    // d3.selectAll<SVGPathElement, EnrichedDatum>(`.cell`)
    //   .transition('hide-remaining-cells')
    //   .duration(opts.transitionDuration)
    //   .style('opacity', (d) => (d.index === index ? 1 : 0))
    //   .attr('clip-path', (d) => (d.index === index ? 'none' : `url(#clip-${d.index})`))

    // animateToState('expose', exposeData, { ...ctx, selectedIndex: index, viewState: 'expose' })

    // updateFn(data, { ...ctx, selectedId: id, viewState: 'expose' })
  }
  //   const simulateRadialForce = (centerIdx: number) =>
  //     new Promise<EnrichedDatum[]>((resolve) => {
  //       console.log('simulation start', data)
  //       const aspect = width / height
  //       const x0 = width / 2
  //       const y0 = height / 2
  //       const radius = (Math.min(width, height) * 1) / 2
  //       const collideRadius = (radius * Math.PI) / data.length
  //       const clonedData = cloneDeep(data)
  //       const pushedData = clonedData.filter((d, idx) => idx !== centerIdx)
  //       const centerData = { ...clonedData[centerIdx], x: x0, y: y0 }
  //       d3.forceSimulation(pushedData)
  //         .force('r', d3.forceRadial(radius).strength(1).x(x0).y(y0))
  //         .force('charge', d3.forceCollide(collideRadius).iterations(2).strength(1))
  //         .alphaDecay(0.15)
  //         .on('end', function () {
  //           const nodes = circleToEllipse(this.nodes(), aspect > 1 ? aspect * 0.8 : aspect * 1.2, x0, y0)
  //           console.log('simulation end')
  //           resolve([...nodes.slice(0, centerIdx), centerData, ...nodes.slice(centerIdx)])
  //         })
  //     })
  return { selectCell, exposeCell, restore }
}

export function calculateModel<T extends { x: number; y: number }>(data: T[], bounds: number[]) {
  const delaunay = d3.Delaunay.from(
    data,
    (d) => d.x,
    (d) => d.y
  )

  const voronoi = delaunay.voronoi(bounds)
  return { voronoi, delaunay }
}

// const createDeltaPush = (
//   pushSourceIdx: number,
//   data: Position[],
//   transformScalar: (scalar: number) => number
// ): Delta => {
//   const { x, y } = data[pushSourceIdx]
//   return data.map((point, idx) => {
//     const alpha = Math.atan2(point.y - y, point.x - x)
//     const hyp = transformScalar(Math.hypot(point.y - y, point.x - x))
//     return idx !== pushSourceIdx
//       ? {
//           ...point,
//           x: Math.cos(alpha) * hyp,
//           y: Math.sin(alpha) * hyp
//         }
//       : { ...point, x: 0, y: 0 }
//   })
// }

// function circleToEllipse(data: EnrichedDatum[], aspect = 1, x0 = 0, y0 = 0) {
//   const aspectFactor = {
//     x: aspect > 1 ? aspect : 1,
//     y: aspect < 1 ? 1 / aspect : 1
//   }
//   const ellipseData = data.map((d) => ({
//     ...d,
//     x: x0 + (d.x - x0) * aspectFactor.x,
//     y: y0 + (d.y - y0) * aspectFactor.y
//   }))
//   return ellipseData
// }

// function swapItems<T = any>(data: T[], idx1: number, idx2: number) {
//   console.log('swap')
//   const swappedData = data.map((d, idx) => (idx === idx1 ? data[idx2] : idx === idx2 ? data[idx1] : d))
//   return swappedData
// }
