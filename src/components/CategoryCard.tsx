"use client"
import { ICategory } from '@/types'
import Image from 'next/image'
import React from 'react'
import '@/styles/category.css'

const CategoryCard = ({title, description, image} : ICategory) => {

  return (
    <div className='w-[90%] md:w-[23rem] h-[25rem] flex justify-center items-center relative in'>
        <Image
            src={"https://cdn.prod.website-files.com/6170700f1a1db6b3a0ac16ed/617938d05808fe56062e63a5_category-active.svg"}
            alt='img'
            width={100}
            height={100}
            className='absolute out bottom-0 left-0 opacity-0 transition-opacity duration-800'
        />
      <div className='w-[18rem] h-[20rem] flex flex-col justify-center items-center gap-5 opacity-100 rounded-4xl z-10 hover:shadow-xl transition duration-800 ease-in-out shadow-[rgb(0, 0, 0)]  bg-white'>
        <img
            src={image}
            alt='img'
            width={100}
            height={100}
        />
        <h3 className='text-xl font-medium'>{title}</h3>
        <p className='text-md text-gray-600 max-w-[60%] text-center'>{description}</p>
      </div>
    </div>
  )
}

export default CategoryCard
