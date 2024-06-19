'use client'
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SearchProduct from './SearchProduct';

const NavPesananBaru = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // Function to close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <nav className="bg-black text-white p-10 flex flex-row">
      <div className='w-full'>
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo and title */}
          <Link href='/'><div className="flex items-center space-x-4">
            <Image
             src="/Logo.svg" 
             width={50}
             height={50}
             alt="Logo" 
             className="h-8" />
            <span className="font-bold text-lg">THE GALAXY GAMES</span>
            <SearchProduct/>
          </div>
          </Link>
<div className='flex space-x-10'>
          <Link href="/"><p>GAMES</p></Link>
          <Link href="/"><p>ACCESSORIES</p></Link>
          </div>

          <div className="relative">
            <button className="px-15 rounded hover:bg-gray-700 text-white" onClick={toggleDropdown}>
              <Image 
              src='/Settings.svg'
              width={25}
              height={25}
              alt='Icon Settings' />
            </button>
            {isDropdownOpen && (
              <div ref={dropdownRef} className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-50">
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
  )
}
export default NavPesananBaru