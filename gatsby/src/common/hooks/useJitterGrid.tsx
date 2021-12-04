import { useState, useEffect, useCallback } from 'react'

type UseJitterGridProps = {
  minItems: number
  width: number
  height: number
  relMargin: {
    top: number
    right: number
    bottom: number
    left: number
  }
  jitter?: () => number
}

export const useJitterGrid = ({ minItems, width, height, relMargin, jitter = () => 0 }: UseJitterGridProps) => {
  const [grid, setGrid] = useState<number[][][]>()
  const [numCols, setNumCols] = useState(0)
  const [numRows, setNumRows] = useState(0)

  useEffect(() => {
    const defaultSize = Math.sqrt(minItems)
    const aspect = width && height && Math.max(Math.min(width / height, 1.5), 0.5)
    const virtualRows = aspect ? defaultSize / aspect : defaultSize
    const virtualColumns = aspect ? defaultSize * aspect : defaultSize

    const rows = Math.ceil(virtualRows)
    const safeColumns = Math.ceil(virtualColumns)

    const columns = rows * safeColumns - minItems >= safeColumns ? safeColumns - 1 : safeColumns

    const marginTop = height * relMargin.top
    const marginBottom = height * relMargin.bottom
    const marginRight = width * relMargin.right
    const marginLeft = width * relMargin.left

    const colWidth = (width - (marginLeft + marginRight)) / (columns - 1)
    const rowHeight = (height - (marginTop + marginBottom)) / (rows - 1)

    const colPositions = Array.from({ length: columns }, (_, idx) => marginLeft + colWidth * idx)
    const rowPositions = Array.from({ length: rows }, (_, idx) => marginTop + rowHeight * idx)

    const orphanItems = minItems % columns

    const gridPositions = Array.from({ length: rows }).map((_, rowIdx) => {
      if (rowIdx + 1 < rows || !orphanItems) {
        return Array.from({ length: columns }).map((_, colIndex) => {
          return [
            colPositions[colIndex] + colWidth * jitter(),
            rowPositions[rowIdx] + rowHeight * jitter() + (colIndex % 2) * rowHeight * 0.2
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
          rowPositions[rowIdx] + rowHeight * jitter() + (colIndex % 2) * rowHeight * 0.2
        ]
      })
    })

    setGrid(gridPositions)
    setNumCols(columns)
    setNumRows(rows)
  }, [height, jitter, minItems, relMargin.right, relMargin.top, relMargin.bottom, relMargin.left, width])

  const getGridPosition = useCallback(
    (grid: number[][][]) => (idx: number) => {
      const colIdx = idx % numCols
      const rowIdx = Math.floor(idx / numCols)
      return grid[rowIdx][colIdx]
    },
    [numCols]
  )

  return { getGridPosition: grid ? getGridPosition(grid) : undefined, grid, numCols, numRows }
}
