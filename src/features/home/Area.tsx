import { ChevronRightIcon } from '@heroicons/react/outline'
import { Link } from 'gatsby'
import React from 'react'

import { AreaDetailFragment } from '../../../graphql-types'
import { Tags } from '../../common/components/Tags'
import { PATH } from '../../common/constants/paths'
import { SvgBlob } from '../blob/SvgBlob'

const flex = {
  left: 'start',
  center: 'center',
  right: 'end'
}

const blobOffset = {
  left: '-top-[20px] md:-top-[80px] -left-[100px] lg:-left-[140px] lg:-top-[60px]',
  center: 'lg:-top-[120px] left-0',
  right: 'lg:-right-[140px] lg:-top-[60px]'
}

type AreaProps = { area: AreaDetailFragment; alignment: 'left' | 'center' | 'right' }
export const Area = ({ area: { name, description, id, color: areaColor, tags, slug }, alignment }: AreaProps) => (
  <div className="relative">
    <div className="relative z-10">
      <Link to={`${PATH.PROJECTS}?area=${slug}`}>
        <div style={{ justifyContent: flex[alignment] }} className="flex group items-center gap-1 mb-2.5">
          <h2 className={`text-2xl font-light tracking-wider`}>{name}</h2>
          <div className="-mr-1 transition-transform group-hover:translate-x-0.5">
            <ChevronRightIcon style={{ color: areaColor || '' }} className="w-4 h-4" />
          </div>
        </div>
      </Link>
      <div style={{ justifyContent: flex[alignment] }} className={`flex w-full`}>
        <div
          style={{ alignItems: flex[alignment], alignContent: flex[alignment] }}
          className={`md:w-4/5 flex flex-col gap-y-4 `}
        >
          <p style={{ textAlign: alignment }} className={`text-secondary`}>
            {description}
          </p>
          <Tags tags={tags} color={areaColor || ''} />
        </div>
      </div>
    </div>
    <div className={`absolute w-full flex ${blobOffset[alignment]}`} style={{ justifyContent: flex[alignment] }}>
      <div className="w-[340px] md:w-[430px] lg:w-[500px] opacity-30 transition-transform -mx-14 -my-14">
        <SvgBlob
          variant="solid"
          color={areaColor || ''}
          isOutline
          shapeProps={{ growth: 6, edges: 6 }}
          id={id}
          pathClassName="animate-spinVerySlow"
        />
      </div>
    </div>
  </div>
)
