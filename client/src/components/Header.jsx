import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { BiSolidMoviePlay } from "react-icons/bi";
import { PiTelevisionFill } from "react-icons/pi";
import { Link, NavLink,   } from 'react-router-dom'
import userIcon from '../assets/user.png'

const Header = () => {

    
    const [searchInput,setSearchInput] = useState()

    const handleSubmit = (e)=>{
        e.preventDefault()
    }

  return (
    <header className="fixed top-0 w-full h-16 bg-black bg-opacity-50 z-40">
      <div className="container mx-auto px-3 flex items-center h-full">
        <Link to={"/"}>
          <img src={logo} alt="logo" width={120} />
        </Link>
        <nav className="hidden lg:flex items-center gap-1 ml-5">
          <div>
            <NavLink
              to="tv"
              className={({ isActive }) =>
                `px-2 hover:text-neutral-100 ${
                  isActive ? "text-neutral-100" : ""
                }`
              }
            > TV Shows
            </NavLink>
          </div>

          <div>
            <NavLink
              to="movie"
              className={({ isActive }) =>
                `px-2 hover:text-neutral-100 ${
                  isActive ? "text-neutral-100" : ""
                }`
              }
            >Movies
            </NavLink>
          </div>
        </nav>

        <div className="ml-auto flex items-center gap-5">
          <form className="flex items-center gap-2" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search here..."
              className="bg-transparent px-4 py-1 outline-none border-none hidden lg:block"
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
            />
            <button className="text-2xl text-white">
              {/* <IoSearchOutline/> */}
            </button>
          </form>

          <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all">
            <img src={userIcon} width="w-ful h-full" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header