"use client"
import { brants } from '@/data/brants'
import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
  return (
    <div className='w-[100%] flex flex-col gap-10 mt-30 mb-10 px-20'>
    <div className='flex flex-col md:flex-row w-[100%] justify-between'>
        <div className='flex flex-col md:w-[40%]'>
            <h3 className='text-gray-500 font-semibold text-md uppercase'>Testimonials</h3>
            <h1 className='text-5xl font-bold font-volkhov text-[#181E4B] mt-6 mb-8'>What People Say About Us</h1>
        </div>
        <div>
          <div className='relative w-[100%] md:w-[40rem] h-[15rem] flex justify-center items-center'>
            <div className='rounded-2xl  shadow-2xl w-[35rem] h-[13rem] flex flex-col p-5 justify-center gap-3'>
              <span className='text-gray-500'>“After going through a number of sites, I had to settle for Jadoo because honestly it was a no brainer trying someone else”</span>
              <div>
                <h3 className='text-gray-700 font-semibold'>Mike Taylor</h3>
                <p className='text-gray-700'>Lahore, Pakistan</p>
              </div>
              <Image
                src="/images/pro1.png"
                alt="Product Image"
                width={70}
                height={70}
                className="absolute top-0 left-0 object-cover"
              />
          </div>
          </div>
        </div>
    </div>
        <div className='flex justify-evenly mt-30 mb-5'>
          {
            brants?.map((brant:any, index: number)=>{
              return(
                  <div key={index} className='p-1 px-10 flex justify-center items-center rounded-2xl hover:shadow-2xl'>
                   <Image
                      src={brant}
                      alt="brant"
                      width={100}
                      height={40}
                      className="w-25 h-10"
                    />
                  </div>
              )
            })
          }
        </div>
        <div className=' w-[100%] h-[20rem] rounded-2xl flex flex-col items-center justify-center gap-15 bg-pink-200'>
            <span className='text-2xl font-medium text-gray-500 md:max-w-[30%] text-center'>Subscribe to get information,
                  latest news and other interesting
                  offers about Cobham
            </span>
           <div className='flex flex-col md:flex-row w-[100%] justify-center gap-3 p-3'>
             <input type="text" className='md:w-[40%] border-none h-12 p-3 outline-none bg-white rounded-xl' placeholder='Enter message'/>
            <button className='p-2 px-4 bg-orange-400 rounded-xl text-white'>Subscribe</button>
           </div>

        </div>
    </div>
  )
}

export default AboutUs
