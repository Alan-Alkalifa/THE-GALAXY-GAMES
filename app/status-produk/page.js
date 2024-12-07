'use client'
import React, { useState } from 'react'
import RiwayatNav from '../component/RiwayatNav'
import Image from 'next/image'

const orders = [
  {
    id: 1,
    name: "PlayStation Portal™",
    image: "/cardCheckout1.svg",
    image2: "/ps4.svg",
    status: "Proses sedang dijalan",
    trackingNumber: "2355778"
  },
  {
    id: 2,
    name: "The Witcher Wild Hunt",
    image: "/cardCek1.svg",
    image2: "/ps4.svg",
    status: "Proses sedang dijalan",
    trackingNumber: "2355778"
  },
  {
    id: 3,
    name: "Play Station 4",
    image: "/cardAcc5.svg",
    image2: "/ps4.svg",
    status: "Dikirim",
    trackingNumber: "2355779"
  },
  {
    id: 4,
    name: "Steering Wheel",
    image: "/cardAcc3.svg",
    image2: "/ps4.svg",
    status: "Dikirim",
    trackingNumber: "2355780"
  }
];

const StatusProduk = () => {
  const [visibleCount, setVisibleCount] = useState(2);

  const loadMore = () => {
    setVisibleCount(prevCount => prevCount > 2 ? prevCount - 2 : prevCount + 2);
  };

  return (
    <div className="min-h-screen bg-gradient-to-t from-[#6C6C6C] to-black">
      <RiwayatNav/>
      
      {/* Responsive Header */}
      <h1 className='p-4 md:p-10 text-4xl md:text-[100px] font-bold text-center text-green-400 opacity-50 leading-tight'>
        STATUS PRODUK
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
      
      {/* Orders Grid */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 p-4 md:p-10'>
        {orders.slice(0, visibleCount).map(order => (
          <div 
            key={order.id} 
            className="order-card bg-gradient-radial from-[#6C6C6C] to-[#343434] p-4 md:p-6 rounded-lg shadow-lg"
          >
            {/* Product Images */}
            <div className="relative flex flex-col md:flex-row items-center gap-4">
              <div className="relative w-full md:w-1/3 aspect-square">
                <Image 
                  src={order.image2} 
                  alt={`${order.name} console`}
                  fill
                  className='object-contain'
                />
              </div>
              <div className="relative w-full md:w-2/3 aspect-[16/9]">
                <Image 
                  src={order.image} 
                  alt={order.name}
                  fill
                  className='object-contain'
                />
              </div>
            </div>

            {/* Order Info */}
            <div className="order-info mt-4 space-y-2 text-white">
              <h3 className="text-lg md:text-xl font-bold">{order.name}</h3>
              <p className="text-sm md:text-base">
                Status: <span className='text-green-400'>{order.status}</span>
              </p>
              <p className="text-sm md:text-base">
                No Resi: <span className='text-green-400'>{order.trackingNumber}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount !== 0 && (
        <div className="flex flex-col items-center justify-center p-6 space-y-2">
          <button 
            onClick={loadMore} 
            className="group flex items-center gap-2 py-2 px-4 rounded-full hover:bg-gray-700/30 transition-colors"
          >
            <Image 
              src='/arrow-down.svg' 
              alt='Toggle view' 
              width={20} 
              height={20}
              className={`transform transition-transform duration-300 ${visibleCount > 2 ? 'rotate-180' : ''}`}
            />
            <span className="text-sm md:text-base text-white font-medium">
              {visibleCount > 2 ? 'Show Less' : 'Show More'}
            </span>
          </button>
        </div>
      )}
    </div>
  )
}

export default StatusProduk