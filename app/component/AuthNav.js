'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
    
const AuthNav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#0D0D0D] text-white p-4 md:p-10">
      <div className='w-full'>
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo and title */}
          <Link href='/'>
            <div className="flex items-center space-x-2 md:space-x-4">
              <Image
                src="/Logo.svg" 
                width={50}
                height={50}
                alt="Logo" 
                className="h-6 md:h-8 w-auto"
              />
              <span className="font-bold text-sm md:text-lg">THE GALAXY GAMES</span>
            </div>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation links */}
          <div className="hidden md:flex items-center space-x-5">
            <Link href="/login" className="bg-[#828282] py-2 px-4 rounded-full hover:text-black hover:bg-white text-center">
              Login
            </Link>
            <Link href="/register" className="bg-[#828282] py-2 px-4 rounded-full hover:text-black hover:bg-white text-center">
              Register
            </Link>
            <button 
              className="px-4 rounded hover:bg-gray-700 text-white relative"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <Image 
                src='/Settings.svg'
                width={50}
                height={50}
                alt='Icon Settings'
                className="w-8 h-8"
              />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-20 right-10 bg-white shadow-lg mt-2 rounded-lg overflow-hidden z-50">
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

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 border-t border-gray-700 pt-4">
            <div className="flex flex-col space-y-3">
              <Link href="/login" className="bg-[#828282] py-2 px-4 rounded-full hover:text-black hover:bg-white text-center">
                Login
              </Link>
              <Link href="/register" className="bg-[#828282] py-2 px-4 rounded-full hover:text-black hover:bg-white text-center">
                Register
              </Link>
              <div className="border-t border-gray-700 pt-3">
                <Link href="/checkout">
                  <p className="block py-2 hover:bg-gray-700 px-4 rounded">Checkout</p>
                </Link>
                <Link href="/riwayat-pesanan">
                  <p className="block py-2 hover:bg-gray-700 px-4 rounded">Riwayat Pesanan</p>
                </Link>
                <Link href="/status-produk">
                  <p className="block py-2 hover:bg-gray-700 px-4 rounded">Status Produk</p>
                </Link>
                <Link href="/pesanan-baru">
                  <p className="block py-2 hover:bg-gray-700 px-4 rounded">Pesanan-Baru</p>
                </Link>
                <Link href="/kelola-produk">
                  <p className="block py-2 hover:bg-gray-700 px-4 rounded">Kelola Produk</p>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default AuthNav;