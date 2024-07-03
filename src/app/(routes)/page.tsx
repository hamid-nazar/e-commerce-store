import getBillboards from '@/actions/GetBillboards';
import getProducts from '@/actions/GetProducts';
import { Billboard } from '@/components/Billboard'
import { ProductList } from '@/components/ProductList';
import { Container } from '@/components/ui/Container'
import React from 'react'


export const revalidate = 0;
export default async function HomePage() {

  const billboard = await getBillboards("15bfd4e7-4772-40a9-889b-3afbfbb706e5")
  const products = await getProducts({isFeatured: true});

  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard data={billboard} />
     
        <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
          <ProductList title="Featured Products" products={products} />
        </div>
    </div>
    </Container>
  )
}
