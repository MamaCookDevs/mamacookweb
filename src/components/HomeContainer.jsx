import React from 'react'

import Hero from '../img/heroBg.png'

const HomeContainer = () => {
  return (
     <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full id="home" '>
  <div className='py-2 flex-1 flex flex-col items-start md:items-center
   justify-center gap=4'> 
   <div className='flex items-center gap-4 justify-center px-4 py-2 rounded full'>

  </div>
  <div className= "p-4 flex-1"> 
  <p className='text-[3.5rem] items-center lg:text-[5rem] font-bold tracking-wide text-headingColor'>Enjoy the{" "}

  <span className='text-orange-900 text-[3.5rem] lg:text-[5rem] font-bold'> African Taste {""}</span>
  </p>
  
  <p className='text-base text-textColor text-center md:text-left md: w-[88%]'>
 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, impedit atque nostrum ipsa maxime tempore
  quisquam mollitia deleniti in provident ratione earum fugit dolorem quas, minima pariatur. Harum, qui doloremque!
  </p>
  <button type='button' className='bg-gradient-to-br from-orange-300 to-orange-500 w-full md:w-auto px-4 py-2 
  rounded-lg hover:shadow-lg transition-all ease-in-out'> Order Now</button>
  </div>
  </div>
  <div className='py-2 flex-1'>
  <img src={Hero} className= " ml-auto h-370 w-full lg:h-650 "alt ="heroBg.png" />

    <div className='w=full h-full absolute flex  items-center justify-center '></div>
    
  </div>
</section>
  )
}

export default HomeContainer