import React from 'react'
import Link from 'next/link'
import {NavLinks} from '...@/MockData/Navigation'



const Navbar = () => {
    return (
        <div className='py-9 flex justify-center fixed w-full text-white gap-[50px] z-[9]'>
            {
                NavLinks.map(({id,title,href}) => {
                    return <Link key={id} href={href}>{title}</Link>
                })
            }
        </div>
   
     
    )
}

export default Navbar
