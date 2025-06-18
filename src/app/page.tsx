import BookingSection from '@/components/BookingSection';
import CategorySection from '@/components/CategorySection';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import TopSellingSection from '@/components/TopSellingSection';
import React from 'react'
import AboutUs from '@/components/AboutUs';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className='flex flex-col'>
      <Navbar/>
      <HeroSection/>
      <CategorySection/>
      <TopSellingSection/>
      <BookingSection/>
      <AboutUs/>
      <Footer/>
    </div>
  )
}

export default Home;
