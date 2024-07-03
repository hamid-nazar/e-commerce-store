import axios from 'axios'
import { Billboard } from '@/types'


const URL = "http://localhost:3000/api/81fc69fd-e935-4b7f-b2bc-539777a81066/billboards";


export default async function getBillboards(id: string): Promise<Billboard> {

  const response = await axios.get(`${URL}/${id}`)
  return response.data;
}
