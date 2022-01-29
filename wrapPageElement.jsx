import { navigate } from 'gatsby'
import React from 'react'
import { QueryParamProvider } from 'use-query-params'

import { ModalRoot } from './src/common/components/Modal'

function generatePath(location) {
  return location.pathname + location.search
}

const history = {
  push: (location) => {
    navigate(generatePath(location), { replace: false, state: location.state })
  },
  replace: (location) => {
    navigate(generatePath(location), { replace: true, state: location.state })
  }
}

export const wrapPageElement = ({ element, props }) => (
  <>
    <ModalRoot />
    <QueryParamProvider history={history} location={props.location}>
      {element}
    </QueryParamProvider>
  </>
)
