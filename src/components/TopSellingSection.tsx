import React from 'react'
import DestinationCard from './DestinationCard'
import { destinations } from '@/data/destination'

const TopSellingSection = () => {
  return (
    <div className='mt-30'>
            <div className='flex flex-col w-[100%] items-center'>
                <h3 className='text-gray-500 font-semibold text-md'>Top Selling</h3>
                <h1 className='text-5xl font-bold font-volkhov text-[#181E4B] mt-6 mb-8'>Top Destinations</h1>
            </div>
            <div>
                <div className="flex flex-wrap gap-10 md:gap-0 justify-center md:justify-evenly w-[100%]">
              {destinations?.map((destination, index) => {
                return(
                    <DestinationCard
                        key={index}
                        place = {destination.place}
                        price = {destination.price}
                        image = {destination.image}
                        duration={destination.duration}
                    />
                )
              }
            )}
            </div>
            </div>
        </div>
  )
}

export default TopSellingSection
