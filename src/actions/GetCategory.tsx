import axios from 'axios'
import { Category } from '@/types'


const URL = "http://localhost:3000/api/81fc69fd-e935-4b7f-b2bc-539777a81066/categories"


export default async function getCategories(id: string): Promise<Category> {

  const response = await axios.get(`${URL}/${id}`)
  return response.data;
}