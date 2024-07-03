import getProduct from '@/actions/GetProduct';
import getProducts from '@/actions/GetProducts'
import { Info } from '@/components/Info';
import { ProductList } from '@/components/ProductList';
import { Container } from '@/components/ui/Container';
import { Gallery } from '@/components/ui/Gallery';
import React from 'react'


export default async function ProductPage({ params }: { params: { productId: string } }) {

  const product = await getProduct(params.productId);

  const relatedProducts = await getProducts({categoryId: product?.category.id});
    
  return (
    <div className='bg-white'>
      <Container>
        <div className='px-4 sm:px-6 lg:px-8 py-10 '>

          <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8'>
            {/* Image gallery */}
            
            <Gallery images={product?.images} />

            <div className='mt-10 sm:mt-16 lg:mt-0 px-4 lg:px-0'>
              {/* Product info */}
              <Info data={product} />
            </div>
          </div>

          <hr className='my-10' />
          <ProductList title="Related Products" products={relatedProducts} />
        </div>
      </Container>
    </div>
  )
}
