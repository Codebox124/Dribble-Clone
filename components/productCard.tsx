import Image from 'next/image'
import { designsProduct } from '@/constants'
import React from 'react'

export default function ProductCard() {
  return (
    <div className='grid md:grid-cols-3 xl:grid-cols-4 gap-8 md:mt-28 mt-16 px-9 sm:grid-cols-2'>
      {designsProduct.map((link) => {
        return(
          <div className='md:mb-20 mb-7'>
           <div>
           <Image className='' src={link.img} alt='' width={500}   height={400}  />
           </div>
           <div className='flex justify-between px-3  mt-5'>
            <div className='flex gap-2 items-center'>
                <Image src={link.icon} alt='' width={25} height={20} />
                <h2 className='text-sm font-medium'>{link.title}</h2>


            </div>
           <div className='flex justify-between gap-3'>
           <div className='flex  gap-2'>
                <span className='text-sm text-gray-700'>{link.likeImg}</span>
                <span className='text-sm'>{link.like}</span>

            </div>
            <div className='flex  gap-2'>
                <span className='text-sm text-gray-700'>{link.viewImg}</span>
                <span className='text-sm'>{link.views}</span>

            </div>

           </div>

           </div>
          </div>
        )
      })}
        
      </div>
  )
}
