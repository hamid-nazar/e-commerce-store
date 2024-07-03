import axios from 'axios'
import { Product } from '@/types'


const URL = "http://localhost:3000/api/81fc69fd-e935-4b7f-b2bc-539777a81066/products";


export default async function getProduct(id: string): Promise<Product> {

  const response = await axios.get(`${URL}/${id}`)
  return response.data;
}
