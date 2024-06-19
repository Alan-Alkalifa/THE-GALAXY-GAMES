'use client'
import React, { useState, useRef } from 'react'; // Import useRef
import Image from 'next/image';
import SearchProduct from './SearchProduct';
import Link from 'next/link';

const HomeNav = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null); // Define the ref

  // Function to handle click outside to close dropdown
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  // Add event listener for clicks outside
  useRef(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-black text-white px-4 py-10 flex flex-col sm:flex-row">
      <div className='w-full'>
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
          {/* Logo and title */}
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
            <Image
             src="/Logo.svg" 
             width={50}
             height={50}
             alt="Logo" 
             className="h-8" />
            <span className="font-bold text-lg">THE GALAXY GAMES</span>
            <SearchProduct/>
          </div>

          {/* Navigation links */}
          <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-10 space-y-4 sm:space-y-0 relative"
               onMouseLeave={() => setDropdownVisible(false)}>
            <Link href="/login" className="hover:text-gray-300">LOGIN</Link>
            <Link href="/register" className="hover:text-gray-300">REGISTER</Link>
            <button className="p-2 rounded hover:bg-gray-700 text-white" onClick={() => setDropdownVisible(!dropdownVisible)}>
              <Image 
              src='/Settings.svg'
              width={35}
              height={35}
              alt='Icon Settings'
              className="h-5 w-5" />
            </button>
            {dropdownVisible && (
              <div ref={dropdownRef} className="absolute w-48 bg-white rounded-md shadow-xl top-9">
              <Link href="/checkout">
                <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Checkout</p>
              </Link>
              <Link href="/riwayat-pesanan">
                <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Riwayat Pesanan</p>
              </Link>
              <Link href="/status-pesanan">
                <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Status Pesanan</p>
              </Link>
              <Link href="/pesanan-dikirim">
                <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Pesanan Dikirim</p>
              </Link>
              <Link href="/list-ps5">
                <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Status Pesanan</p>
              </Link>
            </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HomeNav;