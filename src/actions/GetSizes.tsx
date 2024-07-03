import axios from 'axios'
import { Size } from '@/types'


const URL = "http://localhost:3000/api/81fc69fd-e935-4b7f-b2bc-539777a81066/sizes";

export default async function getSizes(): Promise<Size[]> {

  const response = await axios.get(URL)
  return response.data;
}