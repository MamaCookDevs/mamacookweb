import React from 'react'
import Location from '../img/mapLocation.png'

const Footer = () => {
  return (
    <section className=' id="footer" grid grid-cols-1 md:grid-cols-3 gap-2 w-full h-[603px] top-0 left-[0px] rounded-[100px_100px_0px_0px] bg-red-900'>
    <div  className=' py-2 flex-1 flex flex-col items-start md:items-center 
    justify-center gap-4'>
    <img src={Location} className='w-[400px] right-10 rounded-lg object-cover'
     alt='location' />
 

    </div>
    <div class="flex flex-col-2 flex text-white items-center w-full "
            >Help & Information</div>
 
    {/*<div className=' flex-1 w-full h-full md:w-auto px-4 py-40 mx:auto text-white'>
        Help & Information
  </div>*/}
    </section>

  )
}

export default Footer