import React from 'react'

import bannerImg from "../../assets/banner.png"

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12'>
         <div className='md:w-1/2 w-full flex items-center md:justify-end'>
            <img src={bannerImg} alt="" />
        </div>
        
        <div className='md:w-1/2 w-full'>
            <h1 className='md:text-5xl text-2xl font-medium mb-7'>Upcoming Stories To Be Told</h1>
            <p className='mb-10'> This week’s new releases have something for everyone! Enjoy the thrilling adventures of "Uhtred's Feast", laugh and fall in love with "Wake Up, Nat & Darcy", or dive into the suspense of "Everybody Is a Liar". Fantasy fans will be enchanted by "The Witch Queen of Redwinter", and mystery lovers can solve the latest case in James Patterson’s "The House of Cross". Don’t miss out—shop now and bring home your next favorite story!
</p>

            <button className='btn-primary'>Subscribe</button>
        </div>

       
    </div>
  )
}

export default Banner