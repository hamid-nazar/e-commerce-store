import axios from 'axios'
import qs from 'query-string'
import { Product } from '@/types'


const URL = "http://localhost:3000/api/81fc69fd-e935-4b7f-b2bc-539777a81066/products";


interface Query{
    categoryId?: string | number
    sizeId?: string | number
    colorId?: string | number
    isFeatured?: boolean
  
}

export default async function getProducts({ categoryId, sizeId, colorId, isFeatured }: Query = {}): Promise<Product[]> {
    const url = qs.stringifyUrl({
      url: URL,
      query: {
        categoryId: categoryId,
        sizeId: sizeId,
        colorId: colorId,
        isFeatured: isFeatured
      }
    })

  const response = await axios.get(url)
  return response.data;
}
