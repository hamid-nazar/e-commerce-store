"use client"
import usePreviewModal from '@/hooks/usePreviewModal'
import React from 'react'
import { Modal } from '@/components/ui/Modal';
import { Gallery } from '@/components/ui/Gallery';
import { Info } from '@/components/Info';

export function PreviewModal() {
    const {isOpen, onClose} = usePreviewModal();
    const product = usePreviewModal((state) => state.data);

    if(!product){
        return null
    }

  return (
    <Modal
    isOpen={isOpen}
    onClose={onClose}>
        <div className='w-full grid grid-cols-1 items-start sm:grid-cols-12 gap-x-6 gap-y-8 lg:gap-x-8'>
            <div className='sm:col-span-4 lg:col-span-5'>
                <Gallery images={product.images} />
            </div>
            <div className='sm:col-span-8 lg:col-span-7'>
                <Info data={product} />
            </div>

        </div>

    </Modal>
  )
}
