import { randomNormal } from 'd3-random'
import { useCallback, useMemo } from 'react'

type UseJitterGridProps = {
  minItems: number
  width: number
  minHeight: number
  minTilePixels?: number
  relMargin: {
    top: number
    right: number
    bottom: number
    left: number
  }
  jitter?: number
}

export type GridCoordinate = [x: number, y: number]
export type GridPositions = GridCoordinate[][]
type GridData = {
  grid: GridPositions
  numCols: number
  numRows: number
  height: number
  width: number
}

export type UseJitterGridReturn = {
  gridSpecs?: {
    grid: GridPositions
    numCols: number
    numRows: number
    height: number
    width: number
  }
  getGridCoordinates?: (idx: number) => GridCoordinate
}

export const useJitterGrid = ({
  minItems,
  width,
  minHeight,
  relMargin,
  minTilePixels,
  jitter = 0.05
}: UseJitterGridProps): UseJitterGridReturn => {
  const gridData = useMemo(() => {
    try {
      if (width && minHeight) {
        const pixels = width * minHeight
        const pixelsPerItem = pixels / minItems
        const height = minTilePixels && pixelsPerItem < minTilePixels ? (minItems * minTilePixels) / width : minHeight

        const defaultSize = Math.sqrt(minItems)
        const aspect = width && height && Math.min(width / height, 1.5)

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
        const marginRight = Math.max(width * relMargin.right, minMarginX)
        const marginLeft = Math.max(width * relMargin.left, minMarginX)

        const fixedVerticalOffset = height * 0.03

        const colWidth = (width - (marginLeft + marginRight)) / Math.max(columns - 1, 1)
        const rowHeight = (height - (marginTop + marginBottom)) / Math.max(rows - 1, 1)

        const colPositions = Array.from({ length: columns }, (_, idx) => marginLeft + colWidth * idx)
        const rowPositions = Array.from({ length: rows }, (_, idx) => marginTop + rowHeight * idx)

        const orphanItems = minItems % columns

        const jitterFn = randomNormal(0, jitter)

        const gridPositions: GridPositions = Array.from({ length: rows }).map((_, rowIdx) => {
          if (rowIdx + 1 < rows || !orphanItems) {
            return Array.from({ length: columns }).map((_, colIndex) => {
              return [
                colPositions[colIndex] + colWidth * jitterFn(),
                rowPositions[rowIdx] + rowHeight * jitterFn() + fixedVerticalOffset * (colIndex % 2 ? 1 : -1)
              ]
            })
          }
          const adjustedColPositions = Array.from(
            { length: orphanItems },
            (_, idx) => (width / (orphanItems + 1)) * (idx + 1)
          )

          return Array.from({ length: columns }).map((_, colIndex) => {
            return [
              adjustedColPositions[colIndex] + adjustedColPositions[colIndex] * jitterFn(),
              rowPositions[rowIdx] + rowHeight * jitterFn() + fixedVerticalOffset * (colIndex % 2 ? 1 : -1)
            ]
          })
        })

        return { grid: gridPositions, numCols: columns, numRows: rows, height: height, width: width }
      }
    } catch (err) {
      console.error(err)
      return undefined
    }
  }, [
    width,
    minHeight,
    minItems,
    minTilePixels,
    relMargin.top,
    relMargin.bottom,
    relMargin.right,
    relMargin.left,
    jitter
  ])

  const getGridCoordinates = useCallback(
    (gridData: GridData) =>
      (idx: number): GridCoordinate => {
        const colIdx = idx % gridData.numCols
        const rowIdx = Math.floor(idx / gridData?.numCols)
        return gridData.grid[rowIdx][colIdx]
      },
    []
  )

  return { getGridCoordinates: gridData ? getGridCoordinates(gridData) : undefined, gridSpecs: gridData }
}
