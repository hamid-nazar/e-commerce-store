import getCategories from '@/actions/GetCategory';
import getColors from '@/actions/GetColors';
import getProducts from '@/actions/GetProducts';
import getSizes from '@/actions/GetSizes';
import { Billboard } from '@/components/Billboard';
import { Filter } from '@/components/Filter';
import { Info } from '@/components/Info';
import { ProductCard } from '@/components/ProductCard';
import { Container } from '@/components/ui/Container';
import { NoResults } from '@/components/ui/NoResults';
import React from 'react'


export const revalidate = 0;

interface CategoryPageProps {

    params: {
        categoryId: string
    },
    searchParams: {
        sizeId: string
        colorId: string
    }
}
export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const products = await getProducts({
                    categoryId: params.categoryId, 
                    sizeId: searchParams.sizeId, 
                    colorId: searchParams.colorId
                   });

  const category = await getCategories(params.categoryId);
  const sizes = await getSizes();
  const colors = await getColors();


  return (
    <div className='bg-white'>
      <Container>
        <Billboard data={category?.billboard} />
        <div className='px-4 sm:px-6 lg:px-8 pb-24'>

          <div className='lg:grid lg:grid-cols-5 lg:gap-x-8'>
            <div className='hidden lg:block'>
              <Filter
               valueKey={'sizeId'} 
               name={'Sizes'}
               data={sizes}/>

                <Filter
                valueKey={'colorId'} 
                name={'Colors'}
                data={colors}/>
            </div>
            <div className='mt-6 lg:mt-0 lg:col-span-4'>
              {products.length === 0 && <NoResults/>}
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                  {products.map(function (product) {
                    return (
                        <ProductCard key={product.id} product={product} />
                    )
                  })}
              </div>

            </div>

          </div>

        </div>
      </Container>
    </div>
  )
}
