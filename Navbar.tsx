import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <Image src="/Header.png" alt='header' 
      height={500} width={1600}/>
    </div>
  )
}

export default Navbar
