import notEmpty from './notEmpty'

export const assertAndExtractNodes = <T extends { edges: { node: any }[] }>(data: T) =>
  data.edges.filter(notEmpty).map(({ node }) => node)
