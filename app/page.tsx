import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='relative h-screen bg-hero-image bg-cover flex items-end text-white'>
      <Image className='absolute top-[60%] translate-y-[-50%] left-[10%]' src={"/fefm_logo 1.png"} width={500} height={500} alt='' />

      <div className='flex justify-between'>
        <div className='flex items-center gap-4'>
          <button>
            <Image src={"/play.png"} width={20} height={20} alt='' />
          </button>
          <div>
              <Image src={"/image.png"} width={30} height={30} alt='' />
          </div>
          <p>Alex G feat. Emily Yacina Treehouse</p>
        <div>
          <button>
            <Image src={'/Vector.png'}width={30} height={30} alt='' />
          </button>
        </div>
        </div>
       
      </div>
        <div className='absolute flex text-align: center'>
        <p className='text-5xl font-sans text-white'>Трансляции</p>
        </div>
    </div>
  )
}

export default About