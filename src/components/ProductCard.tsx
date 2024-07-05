"use client"
import React, { MouseEvent, MouseEventHandler } from 'react'
import Image from 'next/image'
import { Product } from '@/types'
import { IconButton } from './ui/IconButton'
import { Expand, ShoppingCart } from 'lucide-react'
import { Currency } from './ui/Currency'
import { useRouter } from 'next/navigation'
import usePreviewModal from '@/hooks/usePreviewModal'
import useCart from '@/hooks/useCart'

interface ProductCardProps {
    product: Product
}
export function ProductCard({product}: ProductCardProps) {
    
    const router = useRouter();

    const previewModal = usePreviewModal();
    const {isOpen, onOpen, onClose} = previewModal;
    
    const cart = useCart();
    const { items, add, remove, removeAll } = cart;


    function handleClick() {
        router.push(`/product/${product?.id}`)
    }

    function onPreview(event: MouseEvent<HTMLButtonElement>) {
        event.stopPropagation();

        onOpen(product);
    }

    function onAddToCart(event: MouseEvent<HTMLButtonElement>) {
        event.stopPropagation();
        add(product);
    }

  return (
    <div
     onClick={handleClick}
     className='bg-white group cursor-pointer rounded-xl border p-3 space-y-4'>
        {/* Image */}
        <div className='relative aspect-square rounded-xl bg-gray-100'>
            <Image
                src={product?.images?.[0].url}
                alt={product.name}
                fill
                className='aspect-square object-cover rounded-md'/>

            <div className='opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5'>
                <div className='flex justify-center gap-x-6'>

                    <IconButton 
                    onClick={onPreview}
                    icon={<Expand size={20} className='text-gray-600'/>}/>

                    <IconButton 
                    onClick={onAddToCart}
                    icon={<ShoppingCart size={20} className='text-gray-600'/>}/>

                </div>
            </div>
        </div>
        {/* Description */}
        <div>
            <p className='text-lg font-semibold'>
                {product.name}
            </p>
            <p className='text-sm text-gray-500'>
                {product.category.name}
            </p>
        </div>
        {/* Price */}

        <div className='flex items-center justify-between'>
            <Currency value={product.price} />
        </div>
    </div>
  )
}