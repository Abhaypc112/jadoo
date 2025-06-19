import { IDestination } from '@/types'
import Image from 'next/image'
import React from 'react'
import { FaLocationArrow } from "react-icons/fa6"


const DestinationCard = ({image, place, price, duration}:IDestination) => {
  return (
    <div className='w-[20rem] h-[27rem] rounded-4xl shadow-2xl hover:shadow-gray-400 '>
     <Image
        src={image}
        alt="place-image"
        width={400}    
        height={500}
        className="rounded-t-4xl h-[70%]"
      />
      <div className='flex justify-between p-5 text-lg font-medium text-gray-500'>
        <span>{place}</span>
        <span>{price}</span>
      </div>
      <div className='px-5 flex items-center gap-3'>
        <FaLocationArrow className='text-gray-800'/>
        <span className=' font-medium text-gray-500'>{duration}</span>
      </div>
    </div>
  )
}

export default DestinationCard
