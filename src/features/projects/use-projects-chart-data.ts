import { getSrcSet } from 'gatsby-plugin-image'
import { useMemo } from 'react'

import { GridCoordinate } from '../../common/hooks/use-jitter-grid'
import notEmpty from '../../common/utility/not-empty'

type UseProjectsChartDataProps = {
  projects: Queries.ProjectDetailFragment[]
  getGridCoordinates: (idx: number) => GridCoordinate
}
export const useProjectsChartData = ({ projects, getGridCoordinates }: UseProjectsChartDataProps) =>
  useMemo(
    () =>
      getGridCoordinates
        ? projects.map(({ coverImage, id, areas, title, slug }, idx) => {
            const imageData = coverImage?.localFile?.childImageSharp?.gatsbyImageData
            return {
              x: getGridCoordinates(idx)[0],
              y: getGridCoordinates(idx)[1],
              imageSrcSet: imageData
                ? getSrcSet(imageData) || 'https://picsum.photos/600/300'
                : 'https://picsum.photos/600/' + (idx % 3 ? (idx % 2 ? '500' : '600') : '400'),
              id: id,
              title: String(title),
              slug: String(slug),
              areas:
                areas?.filter(notEmpty).map((d) => ({
                  color: String(d.color),
                  name: String(d.name),
                  id: d.id
                })) || []
            }
          })
        : [],
    [getGridCoordinates, projects]
  )
