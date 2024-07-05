"use client"
import { Summary } from '@/components/Summary';
import { CartItem } from '@/components/ui/CartItem';
import { Container } from '@/components/ui/Container';
import useCart from '@/hooks/useCart';
import React, { useEffect, useState } from 'react'

export default function CartPage() {

    const [isMounted, setIsMounted] = useState(false);

    const cart = useCart();
    const { items, add, remove, removeAll } = cart;

    useEffect(function () {
      setIsMounted(true)
    }, []);

    if (!isMounted) {
      return null
    }

  return (
    <div className='bg-white'>
        <Container>
            <div className='px-4 py-16 sm:px-6 lg:px-8 '>
                <h1 className='text-3xl font-bold text-black'>
                    Shopping Cart
                </h1>
                <div className='mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12'>

                    <div className='lg:col-span-7'>
                        {items.length === 0 && <p className='text-neutral-500'>No items added to cart</p>}
                        <ul>
                            {items.map(function (item) {
                                return <CartItem key={item.id} item={item}/>
                            })}
                        </ul>
                    </div>
                    <Summary/>
                </div>

            </div>
            
        </Container>
    </div>
  )
}
