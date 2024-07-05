"use client"
import { Color, Size } from '@/types'
import React, { useState } from 'react'
import Button from './ui/Button'
import { Plus, X } from 'lucide-react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { IconButton } from './ui/IconButton'
import { Filter } from './Filter'


interface MobileFiltersProps {  
    sizes: Size[]
    colors: Color[]
}

export function MobileFilters({sizes, colors}: MobileFiltersProps) {

    const [open, setOpen] = useState(false)

    function onOpen() {
        setOpen(true)
    }

    function onClose() {
        setOpen(false)
    }


  return (
    <>
    <Button
     onClick={onOpen}
     className='flex items-center gap-x-2 lg:hidden'>
        Filters
        <Plus size={20} />
    </Button>

    <Dialog as='div' open={open} onClose={onClose} className={'relative z-40 lg:hidden'}>
        <div className='fixed inset-0 bg-black bg-opacity-25'/>

        <div className='fixed inset-0 z-40 flex'>
            <DialogPanel 
            className={
            `relative ml-auto w-full h-full max-w-xs flex 
            flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl`}>

                <div className='flex items-center justify-end px-4'>
                    <IconButton 
                    onClick={onClose} 
                    icon={<X size={15} />}/>
                </div>

                <div className='p-4'>
                    <Filter
                     valueKey={'sizeId'} 
                     name={'Sizes'}
                     data={sizes}/>
                    <Filter
                    valueKey={'colorId'} 
                    name={'Colors'}
                    data={colors}/>
                </div>

            </DialogPanel>

        </div>

    </Dialog>
    
    </>
  )
}
