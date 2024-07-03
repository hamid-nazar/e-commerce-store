import React from 'react'
import Image from 'next/image'
import {Image as ImageType } from '@/types'
import { Tab } from '@headlessui/react'
import { cn } from '@/lib/utils'
interface GalleryTabProps {
    image: ImageType
}
export function GalleryTab({image}: GalleryTabProps) {


  return (
    <Tab className={'relative flex items-center justify-center aspect-square rounded-md cursor-pointer bg-white'}>

        {({ selected }) => (

          <div>

            <span className='absolute inset-0 w-full h-full rounded-md overflow-hidden aspect-square'>
            <Image
              src={image.url}
              alt={image.id.toString()}
              fill
              className="object-cover object-center"/>
            </span>

            <span
            className={
              cn(
                'absolute inset-0 rounded-md ring-2 ring-offset-2 overflow-hidden aspect-square',
                selected ? 'ring-black' : 'ring-transparent'
              )
            }
            />
          </div>
        )}

    </Tab>
  )
}
