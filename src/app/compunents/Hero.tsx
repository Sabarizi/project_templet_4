import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='flex justify-center '>
      <div className='px-10 '>
        <Image src='/pic.png'alt='lamp'height={200}width={200}/>
       
      </div>
      <div className='py-11'>
      <p className='text-pink-600'>Best Furniture for your castle</p>
      <h1 className='text-2xl font-serif'>New Furiture Collection<br/>Trends in 2020</h1>
      <p className='text-blue-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
         Iusto modi inventore laudantium.
         <div><button className='flex bg-pink-500 text-white my-4 px-5 '>Shop Now</button></div>
       </p>
      </div>
      
      <div>
      <Image src='/pic2.png'alt='sofa'height={500}width={500}/>
      </div>
     
    </div>
  )
}

export default Hero
