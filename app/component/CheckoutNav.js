'use client'
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CheckoutNav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  
  // Function to toggle mobile menu
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Function to close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef, mobileMenuRef]);

  return (
    <nav className="bg-black text-white p-4 md:p-10">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo and title */}
          <Link href='/'>
            <div className="flex items-center space-x-2 md:space-x-4">
              <Image
                src="/Logo.svg" 
                width={40}
                height={40}
                alt="Logo" 
                className="h-6 md:h-8 w-auto" 
              />
              <span className="font-bold text-sm md:text-lg hidden sm:inline">THE GALAXY GAMES</span>
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button 
              className="md:hidden p-2 hover:bg-gray-700 rounded"
              onClick={toggleMobileMenu}
            >
              <div className="space-y-1">
                <div className="w-6 h-0.5 bg-white"></div>
                <div className="w-6 h-0.5 bg-white"></div>
                <div className="w-6 h-0.5 bg-white"></div>
              </div>
            </button>

            {/* Settings Button (Desktop) */}
            <div className="relative hidden md:block">
              <button 
                className="p-2 rounded hover:bg-gray-700 text-white" 
                onClick={toggleDropdown}
              >
                <Image 
                  src='/Settings.svg'
                  width={25}
                  height={25}
                  alt='Icon Settings' 
                />
              </button>

              {/* Desktop Dropdown */}
              {isDropdownOpen && (
                <div ref={dropdownRef} className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-50">
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
                  <Link href="/kelola-produk">
                    <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Kelola Produk</p>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            ref={mobileMenuRef}
            className="md:hidden mt-4 bg-gray-900 rounded-lg p-4 absolute left-0 right-0 z-50 mx-4"
          >
            <Link href="/checkout">
              <p className="block px-4 py-2 text-white hover:bg-gray-700 rounded">Checkout</p>
            </Link>
            <Link href="/riwayat-pesanan">
              <p className="block px-4 py-2 text-white hover:bg-gray-700 rounded">Riwayat Pesanan</p>
            </Link>
            <Link href="/status-produk">
              <p className="block px-4 py-2 text-white hover:bg-gray-700 rounded">Status Produk</p>
            </Link>
            <Link href="/pesanan-baru">
              <p className="block px-4 py-2 text-white hover:bg-gray-700 rounded">Pesanan-Baru</p>
            </Link>
            <Link href="/kelola-produk">
              <p className="block px-4 py-2 text-white hover:bg-gray-700 rounded">Kelola Produk</p>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default CheckoutNav;