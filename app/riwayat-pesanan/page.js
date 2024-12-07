'use client'
import React, { useState } from 'react';
import RiwayatNav from '../component/RiwayatNav';
import Image from 'next/image';

const products = [
    {
      id: 1,
      image: "/cardPes1.svg",
    },
    {
      id: 2,
      image: "/cardPes2.svg",
    },
    {
      id: 3,
      image: "/cardPes3.svg",
    },
    {
      id: 4,
      image: "/cardPes4.svg",
    },
    {
      id: 5,
      image: "/cardPes5.svg",
    },
    {
      id: 6,
      image: "/cardPes6.svg",
    },
    {
      id: 7,
      image: "/cardPes7.svg",
    },
    {
      id: 8,
      image: "/cardPes8.svg",
    },
    {
      id: 9,
      image: "/cardPes8.svg",
    },
    {
      id: 10,
      image: "/cardPes1.svg",
    },
    {
      id: 11,
      image: "/cardPes2.svg",
    },
    {
      id: 12,
      image: "/cardPes3.svg",
    },
    {
      id: 13,
      image: "/cardPes4.svg",
    },
    {
      id: 14,
      image: "/cardPes5.svg",
    },
    {
      id: 15,
      image: "/cardPes6.svg",
    },
    {
      id: 16,
      image: "/cardPes7.svg",
    },
];

const RiwayatPesanan = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleCards = () => {
    setShowMore(!showMore);
  };

  return (
    <div className='min-h-screen bg-[#6C6C6C]'>
      <RiwayatNav/>
      <div className='bg-gradient-to-t from-[#6C6C6C] to-black'>
        {/* Responsive Header */}
        <h1 className='p-4 md:p-10 text-4xl md:text-[100px] font-bold text-center text-green-400 opacity-50 leading-tight'>
          RIWAYAT PESANAN
        </h1>

        {/* Profile Section */}
        <div className='flex items-center justify-between px-4 md:px-20 py-4'>
          <p className='text-center font-bold text-xl md:text-3xl'>Kimchipantha</p>
          <div className='relative w-16 h-16 md:w-[100px] md:h-[100px]'>
            <Image 
              src='/profileCheckout.svg' 
              alt='kimchipantha profile' 
              fill
              className='object-cover'
            />
          </div>
        </div>

        {/* Divider */}
        <div className='border-t border-gray-600 mx-4 md:mx-20'></div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 p-4 md:p-20">
          {/* Initial Products */}
          {products.slice(0, 8).map(product => (
            <div 
              key={product.id} 
              className="product-card relative group bg-[#151515] bg-opacity-45 rounded-lg p-3 md:p-5 transition-transform hover:scale-[1.02]"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image 
                  src={product.image} 
                  alt={`Product ${product.id}`} 
                  fill
                  className='rounded-lg object-cover p-2' 
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <p className="text-white text-base md:text-xl font-medium">More Details</p>
              </div>
            </div>
          ))}

          {/* Additional Products (Shown when expanded) */}
          {showMore && products.slice(8).map(product => (
            <div 
              key={product.id} 
              className="product-card relative group bg-[#151515] bg-opacity-45 rounded-lg p-3 md:p-5 transition-transform hover:scale-[1.02]"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image 
                  src={product.image} 
                  alt={`Product ${product.id}`} 
                  fill
                  className='rounded-lg object-cover p-2' 
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <p className="text-white text-base md:text-xl font-medium">More Details</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Show More Button */}
      <div className="flex justify-center p-6 md:p-10">
        <button 
          onClick={toggleCards} 
          className="p-2 rounded-full hover:bg-gray-700 transition-colors"
          aria-label={showMore ? 'Show less' : 'Show more'}
        >
          <Image 
            src='/arrow-down.svg' 
            alt='Toggle more products' 
            width={20} 
            height={20}
            className={`transform transition-transform duration-300 ${showMore ? 'rotate-180' : ''}`}
          />
        </button>
      </div>
    </div>
  );
};

export default RiwayatPesanan;