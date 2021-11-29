import * as d3 from 'd3'
import { useDebounceCallback } from '@react-hook/debounce'
import React, { useEffect } from 'react'
import usePrevious from '@react-hook/previous'
import useSize from '@react-hook/size'

type ContourChartProps = {
  data: { x: number; y: number }[]
  margin: number
}

export const ContourChart = ({ data, margin = 50 }: ContourChartProps) => {
  const containerRef = React.useRef(null)
  const svgRef = React.useRef(null)
  const [width, height] = useSize(containerRef)
  const prevData = usePrevious(data)

  const updateGraphDebounce = useDebounceCallback(updateGraph, 300)

  useEffect(() => {
    if (svgRef.current) {
      const svg = d3
        .select(svgRef.current)
        .attr('fill', 'none')
        .attr('stroke', 'var(--color-highlight)')
        .attr('stroke-linejoin', 'round')

      updateGraphDebounce(svg, getRandomData([width, height]), prevData, {
        width,
        height
      })
    }
  }, [prevData, height, width, updateGraphDebounce])

  return (
    <div ref={containerRef} className="h-full">
      <svg ref={svgRef} width={width} height={height} />
    </div>
  )
}

function getRandomData([width, height]: number[]) {
  const randomX = d3.randomNormal(width / 2, width / 10)
  const randomY = d3.randomNormal(height / 2, height / 10)
  return Array.from({ length: 50 }, () => ({
    x: randomX(),
    width,
    y: randomY(),
    height
  }))
}

function updateGraph(svg, data, prevData = [{ x: 0, y: 0 }], { width = 0, height = 0 }) {
  const circles = svg.selectAll('circle').data(data)
  circles
    .enter()
    .append('circle')
    .attr('cx', function (d) {
      return d.x
    })
    .attr('cy', function (d) {
      return d.y
    })
    .attr('r', 2)
    .attr('stroke', 'none')
    .attr('fill', 'var(--color-brand)')

  circles
    .transition()
    .duration(1000)
    .attr('cx', function (d) {
      return d.x
    })
    .attr('cy', function (d) {
      return d.y
    })

  const thresholds = width < 800 ? d3.range(0.005, 0.03, 0.005) : d3.range(0.001, 0.006, 0.0009)

  const contourFunc = d3
    .contourDensity()
    .thresholds(thresholds)
    .x(function (d) {
      return d.x
    })
    .y(function (d) {
      return d.y
    })
    .size([width, height])
    .bandwidth(30)

  // Mark the points as entering or exiting
  const entering = data.map((d) => {
    return {
      ...d,
      type: 'entering'
    }
  })
  const exiting = prevData
    ? prevData.map((d) => {
        return {
          ...d,
          type: 'exiting'
        }
      })
    : []

  // Combine the entering and exiting points
  const allData = entering.concat(exiting)

  // Start a global transition
  d3.transition()
    .duration(1000)
    .tween('contours', (d) => {
      return (tweenValue) => {
        const inverse = 1 - tweenValue

        // Set the weight accessor to return the tween value
        // Entering points will gradually increase their effect on the contour generator.
        // Exiting points will gradually decrease their effect on the contour generator.
        contourFunc.weight((d) => {
          return d.type === 'entering' ? tweenValue : inverse
        })

        const contours = contourFunc(allData)

        const contourPaths = svg.selectAll('path').data(contours)

        contourPaths.exit().remove()

        contourPaths.enter().append('path').style('opacity', 1)

        contourPaths.attr('d', d3.geoPath())
      }
    })
}
