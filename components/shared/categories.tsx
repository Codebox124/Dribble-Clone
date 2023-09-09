import React from 'react'
import { categories } from '@/constants'
import Link from 'next/link'
import ProductCard from '../productCard'

export default function Categories() {
  return (
  <div>
     <div className='mt-24 md:flex hidden justify-between md:px-9 px-2 py-2'>
    <div>
        <select className='select-text border px-3 py-2 rounded-md'>
            <option>Following</option>
            <option>Popular</option>
        </select>

    </div>
    <div className='flex gap-8'>
    {
        categories.map((link)=>{
            return(
               <Link href={'/'}>{link.name}</Link>

            )
        })
    }


    </div>
    <div>
    <select className='select-text border px-3 py-2 rounded-md'>
            <option>Filter</option>
          
        </select>

    </div>
   </div>

  </div>
  )
}
