import React from 'react'

import { BiSolidMoviePlay } from "react-icons/bi";
import { PiTelevisionFill } from "react-icons/pi";
import { MdHomeFilled } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom'

const MobileNav = () => {
  return (
    <section className='lg:hidden h-14 bg-black bg-opacity-70 backdrop-blur-2xl fixed bottom-0 w-full z-40'>
        <div className='flex items-center justify-between h-full text-neutral-400'>
            
            {/* Home Navigation */}
            <NavLink 
            to="/" 
            className={({ isActive }) => 
                `px-3 flex h-full items-center flex-col justify-center ${isActive ? "text-white" : ""}`}
            >
            <div className='text-2xl'>
                <MdHomeFilled />
            </div>
            <p className='text-sm'>Home</p>
            </NavLink>

            {/* Movies Navigation */}
            <NavLink 
            to="/movie" 
            className={({ isActive }) => 
                `px-3 flex h-full items-center flex-col justify-center ${isActive ? "text-white" : ""}`}
            >
            <div className='text-2xl'>
                <BiSolidMoviePlay />
            </div>
            <p className='text-sm'>Movies</p>
            </NavLink>

            {/* TV Shows Navigation */}
            <NavLink 
            to="/tv" 
            className={({ isActive }) => 
                `px-3 flex h-full items-center flex-col justify-center ${isActive ? "text-white" : ""}`}
            >
            <div className='text-2xl'>
                <PiTelevisionFill />
            </div>
            <p className='text-sm'>TV Shows</p>
            </NavLink>


            {/* Search Navigation */}
            <NavLink 
            to="/search" 
            className={({ isActive }) => 
                `px-3 flex h-full items-center flex-col justify-center ${isActive ? "text-white" : ""}`}
            >
            <div className='text-2xl'>
                <IoSearchOutline />
            </div>
            <p className='text-sm'>Search</p>
            </NavLink>


        </div>
    </section>
  )
}

export default MobileNav