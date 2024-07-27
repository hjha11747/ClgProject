import React from 'react'
import logo from '../assets/logo.svg'
import profileTag from '../assets/profile.png'

const Navbar = () => {
  return (
    <nav className='max_padd_container flexBetween py-2 ring-1 ring-slate-900/5 relative'>
        <div><img src={logo} alt="" /></div>
        <div className=' uppercase bold-22 bg-secondary text-white px-3 rounded-md tracking-widest line-clamp-1 max-sm:bold-18 max-xs:py-2 max-sm:px-1'>Admin Panel </div>
        <div><img src={profileTag} alt="" className='h-12 w-12 rounded-full' /></div>
    </nav>
  )
}

export default Navbar