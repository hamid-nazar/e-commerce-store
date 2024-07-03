import axios from 'axios'
import { Color } from '@/types'


const URL = "http://localhost:3000/api/81fc69fd-e935-4b7f-b2bc-539777a81066/colors";

export default async function getColors(): Promise<Color[]> {

  const response = await axios.get(URL)
  return response.data;
}