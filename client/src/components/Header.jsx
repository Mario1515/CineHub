import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import { IoSearchOutline } from "react-icons/io5";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import userIcon from '../assets/user.png';
import { useAuthContext } from '../contexts/AuthProvider';
import axiosClient from '../hooks/useAxios';
import Logout from "../components/User/Logout";


const Header = () => {
  const navigate = useNavigate();
  const { user, setUser, setToken, isAuthenticated } = useAuthContext();

  const [searchInput, setSearchInput] = useState("");
  const [showLogoutDialog, setShowLogoutDialog] = useState(false); // State to manage dialog visibility

  useEffect(() => {
    if (searchInput) navigate(`/search?q=${searchInput}`);
  }, [searchInput]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleLogoutClick = () => {
    setShowLogoutDialog(true); // Show the confirmation dialog
  };

  const handleCloseDialog = () => {
    setShowLogoutDialog(false); // Close the confirmation dialog
  };

  const handleConfirmLogout = () => {
    axiosClient.post('/logout')
    .then(() => {
      setUser({})
      setToken(null)
      navigate(`/explore`)
    }).catch(() => {
      navigate(`/explore`)    
      });
    setShowLogoutDialog(false); 
  };

  return (
    <header className="fixed top-0 w-full h-16 bg-black bg-opacity-50 z-40">
      <div className="container mx-auto px-3 flex items-center h-full">
        {/* LOGO */}
        <Link to={"/"}>
          <img src={logo} alt="logo" width={120} />
        </Link>

        {/* MOVIES AND SHOWS NAV */}
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

        {/* SEARCH FIELD */}
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
              <IoSearchOutline />
            </button>
          </form>

          {/* USER SECTION */}
          {isAuthenticated ? (
            <>
              {/* User Profile */}
              <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all">
                <img src={userIcon} className="w-full h-full" alt="User Profile" />
              </div>
              {/* Logout */}
              <div>
                <button
                  className="px-2 hover:text-neutral-100"
                  onClick={handleLogoutClick}
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Login */}
              <div>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `px-2 hover:text-neutral-100 ${
                      isActive ? "text-neutral-100" : ""
                    }`
                  }
                >Login
                </NavLink>
              </div>
              {/* Signup */}
              <div>
                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    `px-2 hover:text-neutral-100 ${
                      isActive ? "text-neutral-100" : ""
                    }`
                  }
                >Signup
                </NavLink>
              </div>
            </>
          )}
        </div>
      </div>
      
  {/* Confirmation Dialog */}
    <Logout
        showLogoutDialog={showLogoutDialog}
        handleCloseDialog={handleCloseDialog}
      />
    </header>
  );
};

export default Header;