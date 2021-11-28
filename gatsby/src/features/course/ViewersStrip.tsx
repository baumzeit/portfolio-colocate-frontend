import { Avatar } from '../../common/components/Avatar'
import { Viewer } from './Section'
import { useOnUserActionSubscription } from '@cs-present/graphql-client'
import React, { FC, useCallback, useEffect, useState } from 'react'

export const ViewersStrip: FC<{
  index: number
}> = ({ index }) => {
  const [viewers, setViewers] = useState<Viewer[]>([])
  const { data } = useOnUserActionSubscription()

  const addViewer = useCallback((viewer: Viewer) => {
    console.log('add Viewer', viewer.to, viewer.user)
    setViewers((vs) => (vs.find((v) => v.user === viewer.user) ? vs : [...vs, viewer]))
  }, [])

  const removeViewer = useCallback((viewer: Viewer) => {
    console.log('remove Viewer', viewer.to, viewer.user)
    setViewers((vs) => vs.filter((v) => v.user !== viewer.user))
  }, [])

  useEffect(() => {
    const viewer = data?.onUserAction
    if (viewer) {
      const viewerExists = viewers.find((v) => v.user === viewer.user)
      const viewerJoined = !viewerExists && viewer.to === index
      const viewerLeft = viewerExists && viewer.to !== index

      viewerJoined && addViewer(viewer)
      viewerLeft && removeViewer(viewer)
    }
  }, [addViewer, data, index, removeViewer, viewers])

  return (
    <div className="flex flex-col align-center">
      {viewers.map(({ user, isPresenting }, idx) => (
        <div key={user + idx} className="mb-3 last:mb-0 ml-auto">
          <Avatar name={user} highlight={isPresenting} />
        </div>
      ))}
    </div>
  )
}
