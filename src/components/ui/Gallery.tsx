"use client"
import React from 'react'
import Image from 'next/image'
import { Image as ImageType } from '@/types'
import { TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { GalleryTab } from './GalleryTab'
interface GalleryProps {
    images: ImageType[]
}
export function Gallery({images}: GalleryProps) {

  return (
    <TabGroup as='div' className={'flex flex-col-reverse'}>

        <div className='w-full mx-auto mt-6 max-w-2xl hidden sm:block lg:max-w-none'>
            <TabList className='grid grid-cols-4 gap-6'>

                {images.map(function (image) {
                    return (
                        <GalleryTab key={image.id} image={image} />
                    )
                })}
            </TabList>
        </div> 
        
        <TabPanels className={"aspect-square w-full"}>
            {images.map(function (image) {
                return (
                    <TabPanel key={image.id}>
                        <div className='relative w-full h-full aspect-square sm:rounded-lg overflow-hidden'>

                            <Image
                                src={image.url}
                                alt={image.id.toString()}
                                fill
                                className="object-cover object-center"/>
                            
                        </div>
                    </TabPanel>
                )
            })}
        </TabPanels>

    </TabGroup>
  )
}
