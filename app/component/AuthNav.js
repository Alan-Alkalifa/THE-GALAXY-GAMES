import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
    
    const AuthNav = () => {
      return (
      <nav className="bg-[#0D0D0D] text-white p-10 flex flex-row">
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
            </div>
            </Link>
    
            {/* Navigation links */}
            <div className="flex items-center space-x-5">
              <Link href="/login" className="bg-[#828282] py-2 w-full rounded-full hover:text-black px-2 hover:bg-white text-center">Login</Link>
              <Link href="/register" className="bg-[#828282] py-2 w-full rounded-full hover:text-black px-4 hover:bg-white text-center">Register</Link>
              <button className="px-15 rounded hover:bg-gray-700 text-white">
                <Image 
                src='/Settings.svg'
                width={70}
                height={50}
                alt='Icon Settings' />
              </button>
            </div>
          </div>
    </div>
  </nav>
      );
    };
export default AuthNav