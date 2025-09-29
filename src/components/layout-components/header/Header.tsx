import React from 'react'
import Navbar from './Navbar'

function Header() {
  return (
    <div className='flex flex-row justify-between items-center bg-green-900'>
        <Navbar/>
        <h2 className='lg:ml-[-500px] text-[18px]'>Hello</h2>
<h2 className='lg:mr-[100px] text-[18px]'>Runaway</h2>
    </div>
  )
}

export default Header