"use client"
import { Product } from '@/types'
import React from 'react'
import { Currency } from './ui/Currency'
import Button from './ui/Button'
import { ShoppingCart } from 'lucide-react'



interface InfoProps {
    data:Product
}
export function Info({data}: InfoProps) {


  return (
    <div>
       <h1 className='text-3xl font-bold text-gray-900'>
        {data.name}
        </h1>
        <div className='mt-3 flex items-end justify-between'>
            <p className='text-2xl text-gray-900'>
                <Currency value={data.price} />
            </p>
        </div>

        <hr className='my-4'/>

        <div className='flex flex-col gap-y-6'>
            <div className='flex items-center gap-x-4'>
                <h3 className='font-semibold text-black'>
                    Size:
                </h3>
                <div>
                    {data.size.value}
                </div>
            </div>
            <div className='flex items-center gap-x-4'>
                <h3 className='font-semibold text-black'>
                    Color:
                </h3>
                <div className='h-6 w-6 rounded-full border border-gray-600'
                    style={{backgroundColor: data.color.value}}/>
                
            </div>
            <div className='mt-4 flex items-center gap-x-'>
                <Button className='flex items-center gap-x-2'>
                    Add to cart
                    <ShoppingCart/>
                </Button>
            </div>
        </div>

    </div>
  )
}
