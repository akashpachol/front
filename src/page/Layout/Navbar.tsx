import React, { useState, useEffect, useRef } from "react";

import { CiHeart, CiShoppingCart } from "react-icons/ci";
import {  Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import WishList from "../Home/WishList";


const Navbar = () => {




  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuDropdown, setMenuDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuDropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] =useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setIsOpen(open);
  };



  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleMenuDropdownToggle = () => {
    // Toggle the menuDropdown state
    setMenuDropdown(!menuDropdown);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownOpen(false);
    }
    if (
      menuDropdownRef.current &&
      !menuDropdownRef.current.contains(event.target as Node)
    ) {
      setMenuDropdown(false);
    }
  };

  const handleSubmit = () => {

    navigate("/login");
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (

      <nav className="bg-naviBlue">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center ">
            <div className=" inset-y-0 left-0 flex items-center md:hidden ">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={handleMenuDropdownToggle}
              >
                <svg
                  className={`block h-6 w-6 ${
                    menuDropdown ? "hidden" : "block"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className={`h-6 w-6 ${menuDropdown ? "block" : "hidden"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="w-1/6 "></div>
            <div    className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ">
             
              <div className="hidden sm:ml-6 md:block  md:w-4/5">
                <div className="relative flex  ">
                 <input type="text" className="shadow appearance-none border rounded-xl w-3/4 py-3 px-3 text-gray-700 leading-tight"  placeholder="search anything"/>
                 <button type="button" className="absolute md:right-14 lg:right-20  action_button  ">Yellow</button>

                
                </div>
              </div>
            </div>
            <div className="  flex items-center justify-around  lg:w-1/6 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 me-8">
            <div className="flex mx-1">
            <CiHeart className="text-3xl text-white" /> 

<span className="text-sm text-center my-auto text-white" onClick={toggleDrawer(true)}>wishlist</span>
            </div>
                <p className="mx-1">
                  <Link to={"/login"} className="text-white">Login</Link>
                </p>

              <div className="mx-1 flex">
             <CiShoppingCart className="text-3xl text-white" /> <span className="text-sm text-center my-auto text-white">cart</span>

             </div>
            </div>
          </div>
        </div>

        <div
          className={`sm:hidden ${menuDropdown ? "block" : "hidden"}`}
          id="mobile-menu"
          ref={menuDropdownRef}
        >
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a
              href="#"
              className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Team
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Projects
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Calendar
            </a>
          </div>
        </div>
        {isOpen&&(<WishList isOpen={isOpen}  toggleDrawer={toggleDrawer} />)} 

      </nav>
 
  );
};

export default Navbar;