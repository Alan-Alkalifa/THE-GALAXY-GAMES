'use client'
import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'

const SearchProduct = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="relative w-full max-w-md">
      <input 
        type="text" 
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Find your true games" 
        className="w-full px-4 py-2 pl-10 pr-4 rounded-lg bg-white text-black placeholder-gray-500
                 border border-gray-300 focus:outline-none focus:border-blue-500
                 text-sm md:text-base"
      />
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <FiSearch className="h-4 w-4 text-gray-400" />
      </div>
    </div>
  )
}

export default SearchProduct