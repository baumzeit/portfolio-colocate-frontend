import { useState, useEffect, useCallback } from 'react'

type UseJitterGridProps = {
  minItems: number
  width: number | null
  minHeight: number | null
  minTilePixels?: number
  relMargin: {
    top: number
    right: number
    bottom: number
    left: number
  }
  jitter?: () => number
}

export const useJitterGrid = ({
  minItems,
  width,
  minHeight,
  relMargin,
  minTilePixels,
  jitter = () => 0
}: UseJitterGridProps) => {
  const [grid, setGrid] = useState<number[][][]>()
  const [numCols, setNumCols] = useState(0)
  const [numRows, setNumRows] = useState(0)
  const [height, setHeight] = useState(minHeight)

  useEffect(() => {
    try {
      if (width && minHeight) {
        const pixels = width * minHeight
        const pixelsPerItem = pixels / minItems
        const height = minTilePixels && pixelsPerItem < minTilePixels ? (minItems * minTilePixels) / width : minHeight

        const defaultSize = Math.sqrt(minItems)
        const aspect = width && height && Math.min(width / height, 1.5)

        // if (width) debugger
        const aspectFactor = {
          x: aspect > 1 ? aspect : 1,
          y: aspect < 1 ? 1 / aspect : 1
        }
        const virtualColumns = aspect ? defaultSize * aspectFactor.x : defaultSize
        const virtualRows = aspect ? defaultSize * aspectFactor.y : defaultSize

        const safeRows = Math.ceil(virtualRows)
        const safeColumns = Math.ceil(virtualColumns)

        const columns = safeColumns * safeColumns - minItems >= safeColumns ? safeColumns - 1 : safeColumns

        // const rows = safeRows
        const rows = safeRows - Math.floor((safeRows * columns - minItems) / columns)
        const minMarginY = height / (rows + 2)
        const minMarginX = width / (columns + 2)

        const marginTop = Math.max(height * relMargin.top, minMarginY)
        const marginBottom = Math.max(height * relMargin.bottom, minMarginY)
        const marginRight = Math.max(height * relMargin.right, minMarginX)
        const marginLeft = Math.max(height * relMargin.left, minMarginX)

        const fixedVerticalOffset = height * 0.03

        const colWidth = (width - (marginLeft + marginRight)) / Math.max(columns - 1, 1)
        const rowHeight = (height - (marginTop + marginBottom)) / Math.max(rows - 1, 1)

        const colPositions = Array.from({ length: columns }, (_, idx) => marginLeft + colWidth * idx)
        const rowPositions = Array.from({ length: rows }, (_, idx) => marginTop + rowHeight * idx)

        const orphanItems = minItems % columns

        const gridPositions = Array.from({ length: rows }).map((_, rowIdx) => {
          if (rowIdx + 1 < rows || !orphanItems) {
            return Array.from({ length: columns }).map((_, colIndex) => {
              return [
                colPositions[colIndex] + colWidth * jitter(),
                rowPositions[rowIdx] + rowHeight * jitter() + fixedVerticalOffset * (colIndex % 2 ? 1 : -1)
              ]
            })
          }
          const adjustedColPositions = Array.from(
            { length: orphanItems },
            (_, idx) => (width / (orphanItems + 1)) * (idx + 1)
          )

          return Array.from({ length: columns }).map((_, colIndex) => {
            return [
              adjustedColPositions[colIndex] + adjustedColPositions[colIndex] * jitter(),
              rowPositions[rowIdx] + rowHeight * jitter() + fixedVerticalOffset * (colIndex % 2 ? 1 : -1)
            ]
          })
        })

        setGrid(gridPositions)
        setNumCols(columns)
        setNumRows(rows)
        setHeight(height)
      }
    } catch (err) {}
  }, [
    jitter,
    minItems,
    relMargin.right,
    relMargin.top,
    relMargin.bottom,
    relMargin.left,
    width,
    minHeight,
    minTilePixels
  ])

  const getGridPosition = useCallback(
    (grid: number[][][]) => (idx: number) => {
      const colIdx = idx % numCols
      const rowIdx = Math.floor(idx / numCols)
      return grid[rowIdx][colIdx]
    },
    [numCols]
  )

  return { getGridPosition: grid ? getGridPosition(grid) : undefined, grid, numCols, numRows, height }
}
