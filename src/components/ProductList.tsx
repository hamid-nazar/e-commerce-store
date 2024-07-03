import { Product } from '@/types'
import React from 'react'
import { NoResults } from './ui/NoResults'
import { ProductCard } from './ProductCard'


interface ProductListProps {
    title: string
    products: Product[]
}
export function ProductList({title, products}: ProductListProps) {
  return (
    <div className='space-y-8'>
        <h3 className='text-3xl font-bold'>
            {title}
        </h3>
        { products.length === 0 && <NoResults/> }

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {products.map(function (product) {
              return (
                  <ProductCard key={product.id} product={product} />
              )
            })}
        </div>
    </div>
  )
}

