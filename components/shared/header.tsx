'use client'
import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { navRoutes } from '@/constants'
export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className='md:px-8 px-3 py-4 shadow-md flex justify-between fixed bg-white top-0 w-full'>
      <div className=' '>
        <div>
          <Image src={'/header/Flexibble.png'} width={100} height={100} alt='' />
        </div>


        





      </div>

      <div className='md:flex items-center hidden  justify-center  gap-7'>
        
      {navRoutes.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;



          return (
            <div className=''>
              <Link href={link.route}>
                <h2 className='text-lg'>{link.label}</h2>
              </Link>
            </div>


          );
        })}
      </div>

      <div className='flex gap-3 justify-end items-center'>
        <div>
          <Image src={'/header/Rectangle 4.png'} width={30} height={30} alt='' />
        </div>
        <div>
          <button className='bg-[#9747FF] px-4 py-2 text-white rounded-lg text-sm'>Upload</button>
        </div>
      </div>

    </div>
  )
}


