"use client"
import React from 'react'
import qs from 'query-string'
import { useRouter, useSearchParams } from 'next/navigation'
import { Color, Size } from '@/types'
import Button from './ui/Button'
import { cn } from '@/lib/utils'


interface FilterProps {
    valueKey: string
    name: string
    data: (Size | Color)[]
 

}
export function Filter({valueKey, name, data}: FilterProps) {

    const router = useRouter();
    const searchParams = useSearchParams();
    const selectedValue = searchParams.get(valueKey)

    function onClick(id: string) {

        const current = qs.parse(searchParams.toString());
        
        const query = {
            ...current,
            [valueKey]: id
        };

        if(current[valueKey] === id) {
            delete query[valueKey];
        }

        if(current[valueKey] === id) {
            query[valueKey] = null;
        }

        const url = qs.stringifyUrl({
            url: window.location.href,
            query
        },
        { skipNull: true }
        );

        router.push(url);
    }   

  return (
    <div className='mb-8'>
        <h3 className='text-lg font-semibold'>
            {name}
        </h3>
        <hr className='my-4'/>
        <div className='flex flex-wrap gap-2'>

            {data.map(function (item) {
                return (
                    <div key={item.id} className='flex items-center'>
                        <Button
                        className={cn(`
                        rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300`,
                        selectedValue === String(item.id) && 'bg-black text-white')}
                        onClick={() => onClick(String(item.id))}>
                            {item.name}
                        </Button>
                    </div>
            
                )})
                    
            }
        </div>
    </div>
  )
}
