import * as d3 from 'd3'
import { UseCanvas2DDrawFn, useCanvas2D } from '../../common/hooks/useCanvas'
import { useAsyncEffect } from '@react-hook/async'
import { useDebounce } from '@react-hook/debounce'
import { useDebounceCallback } from '@react-hook/debounce'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import chunk from 'lodash.chunk'
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

  const {
    status,
    cancel,
    error,
    value: images
  } = useAsyncEffect(() => Promise.all(data.map(({ imageUrl }) => (imageUrl ? loadImage(imageUrl) : null))), [])

  const updateGraphDebounce = useDebounceCallback(drawVoronoi, 300)

  // useEffect(() => {
  //   console.log(width, height)
  // }, [height, images, status, width])

  useEffect(() => {
    if (svgRef.current) {
      const svg = d3.select(svgRef.current).attr('fill', 'none')

      updateGraphDebounce(svg, data, data, {
        width,
        height
      })
    }
  }, [updateGraphDebounce, data, width, height])

  return (
    <div ref={chartRef} className="h-full w-full">
      <svg ref={svgRef} width={width} height={height}>
        <defs></defs>
      </svg>
    </div>
  )
}

type Dimensions = { width: number; height: number }
type VoronoiOptions = Record<string, any>
type VoronoiDrawFn = (
  svg: d3.Selection<SVGSVGElement, unknown, null, undefined>,
  data: VoronoiDatum[],
  prevData: VoronoiDatum[],
  { width, height }: Dimensions,
  options?: VoronoiOptions
) => any

const drawVoronoi: VoronoiDrawFn = (svg, data, prevData, { width = 0, height = 0 }) => {
  const delaunay = d3.Delaunay.from(
    data,
    (d) => d.x,
    (d) => d.y
  )
  const voronoi = delaunay.voronoi([-1, -1, width + 1, height + 1])

  const defs = svg
    .select('defs')
    .selectAll('clipPath')
    .data(data.map((d, i) => ({ path: voronoi.renderCell(i), id: d.id })))
    .join('clipPath')
    .attr('id', (d) => `clip-${d.id}`)

  defs
    .selectAll('path')
    .data((d) => [d])
    .join('path')
    .attr('fill', 'none')
    .attr('d', (d) => d.path)

  svg
    .selectAll('image')
    .data(data.map((d, i) => ({ point: { x: delaunay.points[2 * i], y: delaunay.points[2 * i + 1] }, ...d })))
    .join('image')
    .attr('xlink:href', (d) => d.imageUrl)
    .attr('x', (d) => d.point.x - 250)
    .attr('y', (d) => d.point.y - 250)
    .attr('width', 500)
    .attr('height', 500)
    .attr('preserveAspectRatio', 'xMidYMid')
    .attr('clip-path', (d) => `url(#clip-${d.id})`)

  svg
    .selectAll('path.cell')
    .data(data.map((d, i) => ({ path: voronoi.renderCell(i), id: d.id })))
    .join('path')
    .attr('d', (d) => d.path)
    .classed('cell', true)
    .classed('stroke-secondary', true)
    .style('stroke-width', '2')

  svg
    .selectAll('circle')
    .data(data)
    .join('circle')
    .attr('cx', (d) => d.x)
    .attr('cy', (d) => d.y)
    .attr('r', 1.5)
    .attr('fill', 'red')
}

const loadImage = (url: string) => {
  return new Promise<HTMLImageElement>(function (resolve) {
    const img = new Image()

    img.onload = (event) => resolve(event.path[0])
    img.onerror = resolve

    img.src = url
  })
}

// function update() {
//   const delaunay = d3.Delaunay.from(particles)

//   const voronoi = delaunay.voronoi([-1, -1, width + 1, height + 1])
//   ctx.clearRect(0, 0, width, height)

//   ctx.beginPath()
//   delaunay.render(ctx)
//   ctx.strokeStyle = strokeStyle.tertiary
//   ctx.stroke()

//   ctx.beginPath()
//   voronoi.render(ctx)
//   voronoi.renderBounds(ctx)
//   ctx.strokeStyle = strokeStyle.primary
//   ctx.stroke()

//   ctx.beginPath()
//   delaunay.renderPoints(ctx, 2)
//   ctx.fill()

//   const centers = Array.from(delaunay.points)
//   const polygons = Array.from(voronoi.cellPolygons())
//   const bundle = d3.transpose([images, polygons, chunk(centers, 2)])
//   for (const [image, polygon, center] of bundle) {
//     if (image) {
//       clippingPath(polygon, image, center[0], center[1], ctx)
//     }
//   }

//   ctx.canvas.ontouchmove = ctx.canvas.onmousemove = (event) => {
//     event.preventDefault()
//     particles[0] = [event.layerX, event.layerY]
//     update()
//   }

//   update()

//   return ctx.canvas
// }
