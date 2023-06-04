"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../images/asef_logo.jpg';

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false)
  let mobileNav = ""
  mobileMenu ? mobileNav = "w-full md:block md:w-auto" : mobileNav = "hidden w-full md:block md:w-auto";
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center">
              <Image
                  src={logo}
                  alt="Picture of the logo"
                  width={40}
                  height={40}
              />  
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ALSEF Africa</span>
          </a>
          <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false"
            onClick={() => setMobileMenu(!mobileMenu)}>
            <span className="sr-only">Open main menu</span>
            {mobileMenu ? "X" : <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>}
          </button>
          <div className={mobileNav} id="navbar-solid-bg">
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700" onClick={() => setMobileMenu(!mobileMenu)}>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-pink-200 md:bg-transparent md:text-pink-700 md:p-0 md:dark:text-pink-500 md:dark:bg-transparent" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#about" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-pink-200 md:hover:bg-transparent md:border-0 md:hover:text-pink-700 md:p-0 dark:text-white md:dark:hover:text-pink-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
              </li>
              <li>
                <a href="#service" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-pink-200 md:hover:bg-transparent md:border-0 md:hover:text-pink-700 md:p-0 dark:text-white md:dark:hover:text-pink-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-pink-200 md:hover:bg-transparent md:border-0 md:hover:text-pink-700 md:p-0 dark:text-white md:dark:hover:text-pink-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Team</a>
              </li>
              <li>
                <a href="#contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-pink-200 md:hover:bg-transparent md:border-0 md:hover:text-pink-700 md:p-0 dark:text-white md:dark:hover:text-pink-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default Navbar