import React from 'react'
import Image from 'next/image'


const Section1 = () => {
    return (
        <>
        <div className='relative font-serif w-full h-screen '>
        <div className='bg-purple-600 h-4/5 w-4/5 bottom-14 rounded-r-3xl absolute z-1' >
            
        </div>
        

        <div className='absolute z-10 right-0 top-6'>
        <Image className='rounded-l-3xl'
      src="https://pros.weddingpro.com/wp-content/uploads/2023/10/4_HP_elevate-pros.png"
      width={1085}
      height={0}
      alt="Picture of the author"
    /> 

        </div>

        <div className='absolute w-[58%] z-[11] bg-white bottom-0 left-12  border border-gray-300 p-10 rounded-xl '>  
            <strong className='text-5xl '>We elevate top wedding pros</strong> <br />
            <strong className='text-5xl '>(just like you!)</strong>
            <p className='mt-6 mr-2 text-lg'>WeddingPro helps wedding pros like you reach their unique business goals. Let us help you reach yours. Some categories we work with include <span className='italic'>Venues, Planners, Photographers, Officiants, DJs and so many more.</span> </p>

            <button className=" text-purple-900 py-2 px-4 rounded-3xl mt-10 border border-purple-900 hover:bg-purple-900 hover:text-white "><strong>Learn about our customers</strong></button>

      

        </div>
        </div>
        </>
    )
}

export default Section1


