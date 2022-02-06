import { ArrowNarrowRightIcon, ArrowRightIcon, ArrowSmRightIcon } from '@heroicons/react/outline'
import { DesktopComputerIcon } from '@heroicons/react/solid'
import { Link } from 'gatsby'
import React from 'react'

import { AreaDetailFragment } from '../../../graphql-types'
import { PATH } from '../../common/constants/paths'
import { SvgBlob } from '../blob/SvgBlob'
import { Tags } from './../../common/components/Tags'

const flex = {
  left: 'start',
  center: 'center',
  right: 'end'
}

const blobOffset = {
  left: '-top-[20px] md:-top-[90px] -left-[100px] lg:-left-[140px] lg:-top-[60px]',
  center: 'lg:-top-[140px] left-0',
  right: 'lg:-right-[140px] lg:-top-[60px]'
}

type FieldProps = { field: AreaDetailFragment; alignment: 'left' | 'center' | 'right' }
export const Field = ({ field: { name, description, id, color: fieldColor, tags, slug }, alignment }: FieldProps) => (
  <div className="relative">
    <div className="relative z-10">
      <h2 style={{ textAlign: alignment }} className={`text-2xl font-light tracking-wider mb-2.5`}>
        {name}
      </h2>
      <div style={{ justifyContent: flex[alignment] }} className={`flex w-full`}>
        <div
          style={{ alignItems: flex[alignment], alignContent: flex[alignment] }}
          className={`md:w-4/5 flex flex-col gap-y-4`}
        >
          <p style={{ textAlign: alignment }} className={`text-secondary`}>
            {description}
            <Link to={`${PATH.PROJECTS}?field=${slug}`}>
              <div className="inline-flex items-center gap-0.5 ml-4 text-sm tracking-wide align-middle text-tertiary">
                Projects
                <ArrowSmRightIcon style={{ color: fieldColor || '' }} className="w-4 h-4" />
              </div>
            </Link>
          </p>
          <Tags tags={tags} color={fieldColor || ''} />
        </div>
      </div>
    </div>
    <div className={`absolute w-full flex ${blobOffset[alignment]}`} style={{ justifyContent: flex[alignment] }}>
      <div className="w-[360px] md:w-[450px] lg:w-[550px] opacity-30 -mx-14 -my-14">
        <SvgBlob
          variant="solid"
          // colors={[fieldColor || '', 'var(--color-brand)']}
          color={fieldColor || ''}
          isOutline
          shapeProps={{ growth: 6, edges: 5 }}
          id={id}
          pathClassName="animate-spinVerySlow"
        />
      </div>
    </div>
  </div>
)
