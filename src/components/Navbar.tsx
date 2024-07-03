import React from 'react'
import { Container } from '@/components/ui/Container'
import Link from 'next/link'
import { MainNav } from './MainNav'
import getCategories from '@/actions/GetCategories';
import { NavbarActions } from './NavbarActions';

export async function Navbar() {

  const categories = await getCategories();


  return (
    <div className='border-b'>
        <Container>
          <div className='relative flex items-center h-16 px-4 sm:px-6 lg:px-8'>
           <Link href='/' className='flex ml-4 lg:ml-0 gap-x-2'>
              <p className='font-bold text-xl'>
                X-Store
              </p>
            </Link>
            <MainNav data={categories} />
            <NavbarActions />
          </div>
        </Container>
    </div>
  )
}
