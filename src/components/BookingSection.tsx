import { bookingSteps } from '@/data/bookingSteps'
import React from 'react'

const BookingSection = () => {
  return (
    <div className='flex flex-col md:flex-row mt-30 items-center w-[100%] justify-center gap-30 relative'>
      <div className='left flex flex-col gap-2 items-center md:items-start'>
        <div className=''>
              <p className="text-gray-600 text-lg mb-2 font-semibold">
                Easy and Fast
              </p>
              <h1 className="text-4xl lg:text-5xl font-volkhov font-bold text-[#181E4B] leading-tight">
                Book Your Next Trip
                <br />
                In 3 Easy Steps
              </h1>
            </div>
            <div className='flex flex-col items-center md:items-start gap-5'>
                {
                bookingSteps?.map((steps,index)=>{
                    return(
                        <div key={index} className='flex justify-center items-center gap-5 w-[80%]'>
                            <div className={`${steps.color} w-22 h-17 rounded-2xl items-center justify-center flex`}><span>{steps.icon}</span></div>
                            <div>
                                <h3 className='text-lg font-semibold text-gray-600'>{steps.title}</h3>
                                <span className='text-gray-500'>{steps.description}</span>
                            </div>
                        </div>
                    )
                })
            }
            </div>
      </div>
      <div className="right md:mr-20">
        <img
            src={"https://cdn.prod.website-files.com/6170700f1a1db6b3a0ac16ed/618103548b0c7818deb95002_trip-to-greece.png"}
            alt='img'
            width={400}
            height={400}
            className='shadow-2xl rounded-2xl'
        />
        <img
            src={"https://cdn.prod.website-files.com/6170700f1a1db6b3a0ac16ed/617938cf127bae00a44979c2_trip-to-rome.png"}
            alt='img'
            width={300}
            height={300}
            className='absolute bottom-6 right-20 shadow-2xl rounded-2xl'
        />
      </div>
    </div>
  )
}

export default BookingSection
