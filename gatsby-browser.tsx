import { WrapRootElementBrowserArgs } from 'gatsby'
import React from 'react'
import { QueryParamProvider } from 'use-query-params'
import { ReachAdapter } from 'use-query-params/adapters/reach'

import { wrapRootElement as baseRoot } from './wrap-root-element'
export { wrapPageElement } from './wrap-page-element'

export const wrapRootElement = (props: WrapRootElementBrowserArgs) => {
  return (
    <QueryParamProvider
      adapter={ReachAdapter}
      options={{
        enableBatching: true
      }}
    >
      {baseRoot(props)}
    </QueryParamProvider>
  )
}
