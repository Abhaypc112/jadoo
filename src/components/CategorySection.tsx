"use client"
import { category } from '@/data/category'
import React from 'react'
import CategoryCard from './CategoryCard'

const CategorySection = () => {
  return (
   <div className='mt-30 px-4 md:px-8'>
  <div className='flex flex-col w-full items-center text-center'>
    <h3 className='text-gray-500 font-semibold text-md uppercase'>CATEGORY</h3>
    <h1 className='text-5xl font-bold font-volkhov text-[#181E4B] mt-6 mb-8'>
      We Offer Best Services
    </h1>
  </div>

  <div className="max-w-6xl mx-auto">
    <div className="flex flex-wrap md:flex-nowrap">
      {category?.map((category, index) => (
        <CategoryCard
          key={index}
          title={category.title}
          description={category.description}
          image={category.image}
        />
      ))}
    </div>
  </div>
</div>

  )
}

export default CategorySection
