"use client"
import { Product } from '@/types'
import Image from 'next/image'
import React from 'react'
import { IconButton } from './IconButton'
import { X } from 'lucide-react'
import { Currency } from './Currency'
import useCart from '@/hooks/useCart'

interface CartItemProps {
    item: Product
}
export function CartItem({ item }: CartItemProps) {

    const { remove } = useCart();

  return (
    <li className='flex border-b py-6'>
        <div className='relative h-24 w-24 overflow-hidden rounded-md sm:h-48 sm:w-48'>
            <Image
            src={item?.images[0].url}
            alt={item?.id.toString()}
            fill
            className="object-cover object-center"
            />
        </div>

        <div className='relative ml-4 flex flex-1 flex-col justify-between sm:ml-6'>

            <div className='absolute z-10 right-0 top-0'>
                <IconButton onClick={() => remove(item)} icon={<X size={15} />} />
            </div>

            <div className='relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0'>

                <div className='flex justify-between'>
                    <p className='text-lg font-semibold text-black'>
                        {item?.name}
                    </p>
                </div>

                <div className='mt-1 flex text-sm'>
                    <p className='text-gray-500'>
                        {item?.color.name}
                    </p>
                    <p className='text-gray-500 ml-4 border-l border-gray-200 pl-4'>
                        {item?.size.name}
                    </p>
                </div>

                <Currency value={item?.price} />

            </div>
    
        </div>

    </li>
  )
}
