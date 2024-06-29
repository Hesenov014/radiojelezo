import Image from 'next/image'
import React from 'react'

const Project = () => {
  return (
    <div className ='relative bg-cover flex items-end '>
      <Image className='absolute top-[60%] ' src={"/project.png"} width={1600} height={100} alt='' />
          </div>
         
  )
}

export default Project