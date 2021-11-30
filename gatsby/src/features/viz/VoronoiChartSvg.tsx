import * as d3 from 'd3'
import { useDebounceCallback } from '@react-hook/debounce'
import React, { useEffect, useMemo, useRef } from 'react'
import useSize from '@react-hook/size'

type VoronoiDatum = { x: number; y: number; title: string; imageUrl: string; id: string | number }
type VoronoiChartSvgProps = {
  data: VoronoiDatum[]
  margin?: number
}

export const VoronoiChartSvg = ({ data: unscaledData, margin = 0 }: VoronoiChartSvgProps) => {
  const chartRef = useRef()
  const svgRef = useRef<SVGSVGElement>(null)
  const [width, height] = useSize(chartRef)

  const data = useMemo(
    () => unscaledData.map((datum) => ({ ...datum, x: datum.x * width, y: datum.y * height })),
    [height, unscaledData, width]
  )

  const updateGraphDebounce = useDebounceCallback(drawVoronoi, 300)

  useEffect(() => {
    if (svgRef.current) {
      const svg = d3
        .select(svgRef.current)
        .attr('fill', 'none')
        .attr('stroke-linejoin', 'round')
        .attr('stroke-linecap', 'round')

      updateGraphDebounce(
        svg,
        data,
        {
          width,
          height
        },
        { offset: Math.min(width, height) / Math.sqrt(data.length) }
      )
    }
  }, [updateGraphDebounce, data, width, height])

  return (
    <div ref={chartRef} className="h-full w-full">
      <svg ref={svgRef} width={width} height={height}>
        <defs></defs>
        <g className="base-layer"></g>
        <g className="definition-layer"></g>
        <g className="content-layer"></g>
      </svg>
    </div>
  )
}

type Dimensions = { width: number; height: number }
type VoronoiOptions = {
  deltaField?: { index: number; delta: { x: number; y: number }[] }
  offset?: number
  transitionDuration?: number
}
type VoronoiDrawFn = (
  svg: d3.Selection<SVGSVGElement, unknown, null, undefined>,
  data: VoronoiDatum[],
  { width, height }: Dimensions,
  options?: VoronoiOptions
) => any

const drawVoronoi: VoronoiDrawFn = (svg, originalData, { width = 0, height = 0 }, options = {}) => {
  const configuredOptions = { offset: 50, transitionDuration: 550, ...options }

  const update = (data: VoronoiDatum[], options: VoronoiOptions = {}) => {
    const { deltaField, transitionDuration, offset } = options

    const pushScale = d3
      .scalePow()
      .domain([0, Math.hypot(width, height)])
      .range([offset, 0])

    const currentData = deltaField
      ? d3.zip<VoronoiDatum>(data, deltaField.delta).map(([d, delta]) => ({ ...d, x: d.x + delta.x, y: d.y + delta.y }))
      : data

    const delaunay = d3.Delaunay.from(
      currentData,
      (d) => d.x,
      (d) => d.y
    )
    const voronoi = delaunay.voronoi([-1, -1, width + 1, height + 1])

    svg.on('wheel', (e) => {
      const index = delaunay.find(e.x, e.y, deltaField?.index)
      const { x, y } = currentData[index]

      const zoomScale = d3.scaleLinear().domain([-50, 100]).clamp(true).range([-0.6, 1.2])

      const zoomFactor = zoomScale(e.deltaY)

      const newDelta = currentData.map((point, idx) => {
        const alpha = Math.atan2(point.y - y, point.x - x)
        const hyp = Math.hypot(point.y - y, point.x - x) * zoomFactor
        return idx !== index
          ? {
              x: Math.cos(alpha) * hyp,
              y: Math.sin(alpha) * hyp
            }
          : { x: 0, y: 0 }
      })

      d3.transition()
        .duration(transitionDuration)
        .tween('voronoi', (d) => {
          return (tweenValue) => {
            const tweenDelta = newDelta.map((d) => ({ x: d.x * tweenValue, y: d.y * tweenValue }))
            update(currentData, {
              ...options,
              deltaField: { index, delta: tweenDelta }
            })
          }
        })
    })

    svg.on('mousemove', (e) => {
      const index = delaunay.find(e.x, e.y, deltaField?.index)
      const cellChanged = index !== deltaField?.index
      d3.selectAll('.base-layer path.cell-gap').each(function (d, idx) {
        d3.select(this)
          .transition()
          .duration(350)
          .attr('fill', idx === index ? 'transparent' : 'rgba(0,0,0,0.2)')
      })
      if (cellChanged) {
        const { x, y } = currentData[index]
        const newDelta = currentData.map((point, idx) => {
          const alpha = Math.atan2(point.y - y, point.x - x)
          const hyp = pushScale(Math.hypot(point.y - y, point.x - x))
          return idx !== index
            ? {
                x: Math.cos(alpha) * hyp,
                y: Math.sin(alpha) * hyp
              }
            : { x: 0, y: 0 }
        })
        const restoreDelta = d3
          .zip(currentData, originalData)
          .map(([curr, original]) => ({ x: curr.x - original.x, y: curr.y - original.y }))

        const mergedDelta = d3
          .zip(newDelta, restoreDelta)
          .map(([fresh, restore]) => ({ x: fresh.x - restore.x, y: fresh.y - restore.y }))

        d3.transition()
          .duration(transitionDuration)
          .tween('voronoi', (d) => {
            return (tweenValue) => {
              const tweenDelta = mergedDelta.map((d) => ({ x: d.x * tweenValue, y: d.y * tweenValue }))
              update(currentData, {
                ...options,
                deltaField: { index, delta: tweenDelta }
              })
            }
          })
      }
    })

    const defs = svg
      .select('defs')
      .selectAll('clipPath')
      .data(currentData.map((d, i) => ({ path: voronoi.renderCell(i), id: d.id })))
      .join('clipPath')
      .attr('id', (d) => `clip-${d.id}`)

    defs
      .selectAll('path')
      .data((d) => [d])
      .join('path')
      .attr('fill', 'none')
      .attr('d', (d) => d.path)
      .attr('stroke-linejoin', 'round')

    const currentDataWithPaths = currentData.map((d, i) => ({ ...d, path: voronoi.renderCell(i), id: d.id }))

    const baseLayer = svg.select('g.base-layer')
    const definitionLayer = svg.select('g.definition-layer')
    const contentLayer = svg.select('g.content-layer')

    baseLayer
      .selectAll('image')
      .data(currentData)
      .join('image')
      .attr('xlink:href', (d) => d.imageUrl)
      .attr('x', (d) => d.x - 300)
      .attr('y', (d) => d.y - 300)
      .attr('width', 600)
      .attr('height', 600)
      .attr('preserveAspectRatio', 'xMidYMid slice')
      .attr('clip-path', (d) => `url(#clip-${d.id})`)

    baseLayer
      .selectAll('path.cell-gap')
      .data(currentDataWithPaths)
      .join('path')
      .attr('d', (d) => d.path)
      .classed('cell-gap stroke-current text-bg-primary', true)
      .attr('stroke-width', '32')

    definitionLayer
      .selectAll('path.definition')
      .data(currentDataWithPaths)
      .join('path')
      .attr('d', (d) => d.path)
      .attr('stroke-width', '1')
      .classed('definition stroke-current text-brand opacity-10', true)

    contentLayer
      .selectAll('circle')
      .data(currentData)
      .join('circle')
      .attr('cx', (d) => d.x)
      .attr('cy', (d) => d.y)
      .attr('r', 8)
      .attr('stroke', 'rgba(0,0,0,0.2)')
      .attr('stroke-width', 0.5)
      .classed('fill-current text-brand opacity-90', true)

    contentLayer
      .selectAll('text')
      .data(currentData)
      .join('text')
      .attr('x', (d) => d.x + 16)
      .attr('y', (d) => d.y - 18)
      .text((d) => d.title)
      .style('text-anchor', 'middle')
      .classed('fill-current text-xl xl:text-2xl text-primary font-semibold', true)

    // definitionLayer.raise()
    // contentLayer.raise()
  }

  update(originalData, configuredOptions)
}
