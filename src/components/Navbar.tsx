import Image from 'next/image';
import React from 'react';


const Navbar = () => {
  return (
    <header className='h-[5rem] flex justify-between items-center px-10 md:px-30 w-[100%] bg-transparent'>
        <div className="left w-[50%]">
         <Image width={100} height={100} src={"https://cdn.prod.website-files.com/6170700f1a1db6b3a0ac16ed/617938cf6b1c7ac24443ab5a_Jadoo-travel-logo.svg"} alt='Jadoo logo'></Image>
        </div>
        <div className="right w-[50%]  items-center justify-between font-poppins hidden md:flex">
            <a href="#" className="text-md hover:text-gray-700">
              Destinations
            </a>
            <a href="#" className="text-md hover:text-gray-700">
              Hotels
            </a>
            <a href="#" className="text-md hover:text-gray-700">
              Flights
            </a>
            <a href="#" className="text-md hover:text-gray-700">
              Bookings
            </a>
            <a href="#" className="text-md hover:text-gray-700">
              Login
            </a>
            <a href="#" className="border p-1 px-4 rounded text-md hover:text-gray-700">
              Sign Up
            </a>
            <a className="text-md hover:text-gray-700">
              EN
            </a>
        </div>
    </header>
  )
}

export default Navbar
