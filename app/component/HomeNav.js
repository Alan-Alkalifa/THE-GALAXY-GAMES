'use client'
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import SearchProduct from './SearchProduct';
import Link from 'next/link';

const HomeNav = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Function to handle click outside to close dropdown and mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-black text-white p-4 md:px-5 md:py-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo, title and search */}
          <div className="flex items-center justify-between w-full md:w-auto mb-4 md:mb-0">
            <Link href="/">
              <div className="flex items-center space-x-2 md:space-x-4">
                <Image
                  src="/Logo.svg" 
                  width={40}
                  height={40}
                  alt="Logo" 
                  className="h-6 md:h-8 w-auto"
                />
                <span className="font-bold text-sm md:text-lg">THE GALAXY GAMES</span>
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 hover:bg-gray-700 rounded"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="space-y-1">
                <div className="w-6 h-0.5 bg-white"></div>
                <div className="w-6 h-0.5 bg-white"></div>
                <div className="w-6 h-0.5 bg-white"></div>
              </div>
            </button>
          </div>

          {/* Search Bar - Full Width on Mobile */}
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <SearchProduct />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/login" className="hover:text-gray-300">LOGIN</Link>
            <Link href="/register" className="hover:text-gray-300">REGISTER</Link>
            <div className="relative">
              <button 
                className="p-2 rounded hover:bg-gray-700 text-white"
                onClick={() => setDropdownVisible(!dropdownVisible)}
              >
                <Image 
                  src='/Settings.svg'
                  width={25}
                  height={25}
                  alt='Icon Settings'
                  className="h-5 w-5"
                />
              </button>
              {dropdownVisible && (
                <div ref={dropdownRef} className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-xl z-50">
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

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div 
              ref={mobileMenuRef}
              className="md:hidden w-full mt-4 bg-gray-900 rounded-lg p-4"
            >
              <div className="flex flex-col space-y-3">
                <Link href="/login">
                  <p className="block px-4 py-2 text-white hover:bg-gray-700 rounded">LOGIN</p>
                </Link>
                <Link href="/register">
                  <p className="block px-4 py-2 text-white hover:bg-gray-700 rounded">REGISTER</p>
                </Link>
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
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default HomeNav;