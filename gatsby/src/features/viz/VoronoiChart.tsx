import * as d3 from 'd3'
import { UseCanvas2DDrawFn, useCanvas2D } from '../../common/hooks/useCanvas'
import { useAsyncEffect } from '@react-hook/async'
import { useDebounce } from '@react-hook/debounce'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import useSize from '@react-hook/size'

type VoronoiChartProps = {
  data: { x: number; y: number; imageUrl: string }[]
  margin?: number
}

export const VoronoiChart = ({ data, margin = 0 }: VoronoiChartProps) => {
  const chartRef = useRef()
  const [liveWidth, liveHeight] = useSize(chartRef)

  const [[width, height], setDimensions] = useDebounce([liveWidth, liveHeight], 400)

  const strokeStyle = {
    tertiary: getComputedStyle(document.documentElement).getPropertyValue('--text-tertiary'),
    primary: getComputedStyle(document.documentElement).getPropertyValue('--text-primary')
  }

  const {
    status,
    cancel,
    error,
    value: images
  } = useAsyncEffect(() => Promise.all(data.map(({ imageUrl }) => loadImage(imageUrl))), [])

  useEffect(() => {
    console.log(status, error, images)
  })

  useEffect(() => {
    setDimensions([liveWidth, liveHeight])
  }, [liveHeight, liveWidth, setDimensions])

  const particles = useMemo(() => data.map(({ x, y }) => [x * width, y * height]), [data, width, height])

  const memoOptions = useMemo(
    () => ({
      width,
      height
    }),
    [height, width]
  )

  const canvasRef = useCanvas2D(draw(particles, { strokeStyle, images }), memoOptions)

  return (
    <div ref={chartRef} className="h-full w-full">
      <canvas ref={canvasRef} />
    </div>
  )
}

const draw =
  (particles, { strokeStyle, images }): UseCanvas2DDrawFn =>
  (ctx) => {
    const width = ctx.canvas.width
    const height = ctx.canvas.height

    function clippingPath(polygon, img, x, y) {
      // save the unclipped context
      ctx.save()

      // define the path that will be clipped to
      ctx.beginPath()
      ctx.moveTo(polygon[0][0], polygon[0][1])
      for (let i = 0; i < polygon.length; i++) {
        console.log(polygon[i][0], polygon[i][1])
        ctx.lineTo(polygon[i][0], polygon[i][1])
      }
      ctx.closePath()

      // stroke the path
      // half of the stroke is outside the path
      // the outside stroke will survive the clipping that follows
      ctx.lineWidth = 2
      ctx.stroke()

      // make the current path a clipping path
      ctx.clip()

      // draw the image which will be clipped except in the clipping path
      ctx.drawImage(img, x, y)

      // restore the unclipped context (==undo the clipping path)
      ctx.restore()
    }

    function update() {
      const delaunay = d3.Delaunay.from(particles)

      const voronoi = delaunay.voronoi([0.5, 0.5, width - 0.5, height - 0.5])
      ctx.clearRect(0, 0, width, height)

      const polygons = Array.from(voronoi.cellPolygons())

      if (images) {
        polygons.forEach((polygon, i) => {
          clippingPath(polygon, images[i], i * 100, i * 80)
        })
      }

      ctx.beginPath()
      delaunay.render(ctx)
      ctx.strokeStyle = strokeStyle.tertiary
      ctx.stroke()

      ctx.beginPath()
      voronoi.render(ctx)
      voronoi.renderBounds(ctx)
      ctx.strokeStyle = strokeStyle.primary
      ctx.stroke()

      ctx.beginPath()
      delaunay.renderPoints(ctx, 2)
      ctx.fill()
    }

    ctx.canvas.ontouchmove = ctx.canvas.onmousemove = (event) => {
      event.preventDefault()
      particles[0] = [event.layerX, event.layerY]
      update()
    }

    update()

    return ctx.canvas
  }

const loadImage = (url: string) => {
  return new Promise<HTMLImageElement>(function (resolve) {
    const img = new Image()

    img.onload = (event) => resolve(event.path[0])
    img.onerror = resolve

    img.src = url
  })
}
