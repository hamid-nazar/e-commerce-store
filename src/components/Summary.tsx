"use client"
import React, { useEffect } from 'react'
import { useSearchParams } from 'next/navigation';
import { Currency } from '@/components/ui/Currency'
import Button from '@/components/ui/Button'
import useCart from '@/hooks/useCart';
import axios from 'axios';
import toast from 'react-hot-toast';

export function Summary() {
    const searchParams = useSearchParams();
    const cart = useCart();
    const { items, add, remove, removeAll } = cart;

    const totalPrice = items.reduce(function (acc, item) {
        return acc + Number(item.price);
    }, 0)

    async function checkout() {

        try {

            const URL = "http://localhost:3000/api/81fc69fd-e935-4b7f-b2bc-539777a81066/checkout";

            const response = await axios.post(URL, { 
                productIds: items.map((item) => item.id)
             });
    
           console.log(response.data)
           console.log(window.location)
           
           window.location = response.data.url
            
           console.log(window.location)

        } catch (error: any) {

            toast("Something went wrong")
        }
       
    }

    useEffect(function () {

        if(searchParams.get("success")) {
            toast.success("Order placed successfully");
            removeAll();
        }

        if(searchParams.get("canceled")) {
            toast.error("Something went wrong");
        }

    }, [searchParams])

  return (
    <div className='mt-16 lg:mt-0 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:p-8 lg:col-span-5'>
        <h2 className='text-lg font-medium text-gray-900'>
            Order Summary
        </h2>
        <div className='space-y-4 mt-6'>
            <div className='flex items-center justify-between border-t pt-4 border-gray-200'>
                <div className='text-base font-medium text-gray-900'>
                    Order total
                </div>
                <Currency value={totalPrice} />

            </div>

        </div>
        <Button 
        onClick={checkout}
        className='w-full mt-6'>
            Checkout
        </Button>
    </div>
  )
}
