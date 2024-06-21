'use client'
import React, { useState, useRef } from 'react'; // Import useRef
import Image from 'next/image';
import SearchProduct from './SearchProduct';
import Link from 'next/link';

const ListPs5Nav = () => {
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
          </div>
          {/* Navigation links */}
          <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-10 space-y-4 sm:space-y-0 relative"
               onMouseLeave={() => setDropdownVisible(false)}>
            <Link href="/" className="hover:text-gray-300">ACCESSORIES</Link>
            <Link href="/" className="hover:text-gray-300">GAMES</Link>
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
              <Link href="/status-produk">
                <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Status Produk</p>
              </Link>
              <Link href="/pesanan-baru">
                <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Pesanan-Baru</p>
              </Link>
              <Link href="/list-ps5">
                <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Status Produk</p>
              </Link>
            </div>
            )}
          </div>
        </div>
        <div className='flex items-center justify-center gap-4'>
      <input type="text" placeholder="Find your true games" className="p-2 rounded bg-white text-black w-[1000px]" />
      <button className="p-2 rounded bg-gradient-to-t from-[#9D9D9D] to-[#474747] text-white w-auto flex justify-center">Short By<Image src="/arrow.svg" width={20} height={20} alt="Search" /></button>
      <div className='flex -gap-4 my-2'>
      <button className="p-3 border border-[#383838] hover:border-grey-400 rounded bg-gradient-to-t from-[#9D9D9D] to-[#474747] text-white w-auto h-auto flex justify-center"><Image src="/category.svg" width={20} height={20} alt="Search" /></button>
      <button className="p-3 border border-[#383838] hover:border-grey-400 rounded bg-black text-white w-auto h-auto flex justify-center"><Image src="/category3.svg" width={20} height={20} alt="Search" /></button>
      </div>
      </div>
    </div>
    </nav>
    
  );
};

export default ListPs5Nav;