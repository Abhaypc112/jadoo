import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <div>
        <div className='flex flex-col md:flex-row w-[100%] px-20 p-10'>
            <div className=" h-[15rem] grow-2  flex flex-col justify-center gap-10">
                <h3 className='text-5xl'>Jadoo.</h3>
                <p className='max-w-[50%] text-xs'>Book your trip in minute, get full
                    control for much longer.
                </p>
            </div>
            <div className=" grow-1 flex flex-col gap-5 justify-center p-10 ">
                <h2 className='text-xl font-semibold'>Company</h2>
                <div className='text-start'>
                    <p>About</p>
                    <p>Careers</p>
                    <p>Mobile</p>
                </div>
            </div>
            <div className=" grow-1 flex flex-col gap-5 justify-center p-10 ">
                <h2 className='text-xl font-semibold'>Contact</h2>
                <div className='text-start'>
                    <p>Help / FAQ</p>
                    <p>Press</p>
                    <p>Affiliates</p>
                </div>
            </div>
            <div className=" grow-1 flex flex-col gap-5 justify-center p-10 ">
                <h2 className='text-xl font-semibold'>More</h2>
                <div className='text-start'>
                    <p> Airline fees</p>
                    <p>Airline</p>
                    <p>Low fare tips</p>
                </div>
            </div>
            <div className="5 grow-2 flex flex-col items-center gap-5 p-10">
                <div className='flex gap-10'>
                    <div className='p-4 shadow-xl rounded-full w-11 h-11 flex justify-center items-center'><FaFacebookF className='w-20 h-20'/></div>
                    <div className='p-3 shadow-xl rounded-full w-11 h-11 flex justify-center items-center bg-pink-400'><FaInstagram className='w-30 h-30'/></div>
                    <div className='p-3 shadow-xl rounded-full w-11 h-11 flex justify-center items-center'><FaTwitter className='w-20 h-20'/></div>
                </div>
                <span className='text-md text-gray-600'>Discover our app</span>
                <div className='text-white flex gap-3'>
                    <span className='w-[8rem] bg-black rounded-3xl p-2 text-center'>Google Play</span>
                    <span className='w-[8rem] bg-black rounded-3xl p-2 text-center'>Apple Store</span>
                </div>
            </div>
        </div>
        <div className='w-[100%] h-40 flex justify-center'>
            <span className='text-sx'>All rights reserved@jadoo.co</span>
        </div>
    </div>
  )
}

export default Footer
