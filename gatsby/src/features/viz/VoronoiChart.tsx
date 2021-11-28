import * as d3 from 'd3'
import { UseCanvas2DDrawFn, useCanvas2D } from '../../common/hooks/useCanvas'
import { useAsyncEffect } from '@react-hook/async'
import { useDebounce } from '@react-hook/debounce'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import chunk from 'lodash.chunk'
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
  } = useAsyncEffect(() => Promise.all(data.map(({ imageUrl }) => (imageUrl ? loadImage(imageUrl) : null))), [])

  const particles = useMemo(() => data.map(({ x, y }) => [x * width, y * height]), [data, width, height])

  useEffect(() => {
    setDimensions([liveWidth, liveHeight])
  }, [liveHeight, liveWidth, setDimensions])

  const memoOptions = useMemo(
    () => ({
      width,
      height
    }),
    [height, width]
  )

  useEffect(() => {
    console.log(status, images)
  }, [images, status])

  useEffect(() => {
    console.log('particles', particles)
    console.log('memoOptions', memoOptions)
  }, [particles, memoOptions])

  const canvasRef = useCanvas2D(draw(particles, { strokeStyle, images }), memoOptions)

  return (
    <div ref={chartRef} className="h-full w-full">
      {width && height && <canvas ref={canvasRef} />}
    </div>
  )
}

function clippingPath(polygon: number[][], img: HTMLImageElement, x: number, y: number, ctx) {
  const minSize = 600
  // save the unclipped context
  ctx.save()

  // define the path that will be clipped to
  ctx.beginPath()
  ctx.moveTo(polygon[0][0], polygon[0][1])
  for (let i = 0; i < polygon.length; i++) {
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
  const aspectRatio = img.width / img.height
  const isLandscape = aspectRatio > 1
  const baseSize = Math.min(img.width, img.height, minSize)
  const imgWidth = isLandscape ? baseSize * aspectRatio : baseSize
  const imgHeight = isLandscape ? baseSize : baseSize / aspectRatio
  ctx.drawImage(img, x - imgWidth / 2, y - imgHeight / 2, imgWidth, imgHeight)

  // restore the unclipped context (==undo the clipping path)
  ctx.restore()
}
const draw =
  (particles, { strokeStyle, images }): UseCanvas2DDrawFn =>
  (ctx) => {
    const width = ctx.canvas.width
    const height = ctx.canvas.height

    function update() {
      const delaunay = d3.Delaunay.from(particles)

      const voronoi = delaunay.voronoi([-1, -1, width + 1, height + 1])
      ctx.clearRect(0, 0, width, height)

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

      const centers = Array.from(delaunay.points)
      const polygons = Array.from(voronoi.cellPolygons())
      const bundle = d3.transpose([images, polygons, chunk(centers, 2)])
      for (const [image, polygon, center] of bundle) {
        if (image) {
          clippingPath(polygon, image, center[0], center[1], ctx)
        }
      }
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
