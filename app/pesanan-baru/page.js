'use client'
import React, { useState } from 'react';
import NavPesananBaru from '../component/NavPesananBaru';
import Image from 'next/image';

const cardData = [
  {
    id: 1,
    profile: "/dump-profile.svg",
    username: "Minjayyy03",
    paymentStatus: "Lunas",
    paymentMethod: "Mandiri",
    shipmentTracking: "32473285",
    status: "Sedang Packing",
    imagePaths: ["/figure-1.svg", "/figure-2.svg", "/figure-3.svg", "/figure-4.svg"]
  },
  {
    id: 2,
    profile: "/prof1.svg",
    username: "JAYanggg17",
    paymentStatus: "Belum Lunas",
    paymentMethod: "BCA",
    shipmentTracking: "98765432",
    status: "Sedang Packing",
    imagePaths: ["/g1.svg", "/f2.svg", "/f3.svg", "/g4.svg"]
  },
  {
    id: 3,
    profile: "/prof2.svg",
    username: "Jugwoon aja bang",
    paymentStatus: "Lunas",
    paymentMethod: "BRI",
    shipmentTracking: "102938475",
    status: "Sedang Packing",
    imagePaths: ["/f1.svg", "/f2.svg", "/f3.svg", "/f4.svg"]
  },
  {
    id: 4,
    profile: "/prof3.svg",
    username: "Yujin Nomu Kiyowo",
    paymentStatus: "Lunas",
    paymentMethod: "DANA",
    shipmentTracking: "192837465",
    status: "Sedang Packing",
    imagePaths: ["/h1.svg", "/h2.svg", "/h3.svg", "/H4.svg"]
  },
  {
    id: 5,
    profile: "/dump-profile.svg",
    username: "Minjayyy03",
    paymentStatus: "Lunas",
    paymentMethod: "Mandiri",
    shipmentTracking: "32473285",
    status: "Sedang Packing",
    imagePaths: ["/figure-1.svg", "/figure-2.svg", "/figure-3.svg", "/figure-4.svg"]
  },
  {
    id: 6,
    profile: "/prof1.svg",
    username: "Minjayyy03",
    paymentStatus: "Lunas",
    paymentMethod: "Mandiri",
    shipmentTracking: "32473285",
    status: "Sedang Packing",
    imagePaths: ["/figure-1.svg", "/figure-2.svg", "/figure-3.svg", "/figure-4.svg"]
  },
  {
    id: 7,
    profile: "/prof2.svg",
    username: "Minjayyy03",
    paymentStatus: "Lunas",
    paymentMethod: "Mandiri",
    shipmentTracking: "32473285",
    status: "Sedang Packing",
    imagePaths: ["/figure-1.svg", "/figure-2.svg", "/figure-3.svg", "/figure-4.svg"]
  },
  {
    id: 8,
    profile: "/prof3.svg",
    username: "Minjayyy03",
    paymentStatus: "Lunas",
    paymentMethod: "Mandiri",
    shipmentTracking: "32473285",
    status: "Sedang Packing",
    imagePaths: ["/figure-1.svg", "/figure-2.svg", "/figure-3.svg", "/figure-4.svg"]
  },
];

const PesananDikirim = () => {
  const [showMoreCards, setShowMoreCards] = useState(false);

  const toggleCards = () => {
    setShowMoreCards(!showMoreCards);
  };

  const visibleCards = showMoreCards ? cardData.slice(0, 8) : cardData.slice(0, 4);

  return (
    <>
      <NavPesananBaru />
      <h1 className='p-4 md:p-10 text-4xl md:text-[100px] font-bold text-center text-green-400 opacity-50'>
        PESANAN <span className='text-gray-400'>BARU</span>
      </h1>
      
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-t from-[#646464] to-black px-4 md:px-8">
        <div className="p-4 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-[1300px]">
          {visibleCards.map(card => (
            <div key={card.id} className="rounded-lg overflow-hidden shadow-lg bg-gradient-to-t from-[#646464] to-[#B0B0B0]">
              <div className="px-4 md:px-6 py-4">
                {/* Card Header */}
                <div className="font-bold mb-4">
                  <div className='flex items-center gap-2 text-white text-xl md:text-3xl'>
                    <div className="relative w-10 h-10 md:w-[50px] md:h-[50px]">
                      <Image 
                        src={card.profile} 
                        alt="Profile" 
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <span className='flex-1 truncate'>{card.username}</span>
                    <div className='text-gray-400'>
                      <Image 
                        src="/edit-icon.svg" 
                        alt="Edit" 
                        width={40} 
                        height={40} 
                        className='w-8 h-8 md:w-10 md:h-10'
                      />
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className='flex flex-col md:flex-row gap-4 py-2'>
                  {/* Image Grid */}
                  <div className='grid grid-cols-2 p-2 rounded-lg gap-1 bg-white bg-opacity-30 w-full md:w-auto'>
                    {card.imagePaths.map((path, index) => (
                      <div key={index} className="relative aspect-square">
                        <img 
                          src={path} 
                          alt={`Product ${index + 1}`} 
                          className='w-full h-full object-cover'
                        />
                      </div>
                    ))}
                  </div>

                  {/* Order Details */}
                  <div className='flex flex-col gap-4 px-2 md:px-8 w-full'>
                    <div className="text-sm md:text-base text-white space-y-2">
                      <p>Pembayaran: <span className='text-green-400'>{card.paymentStatus}</span></p>
                      <p>Metode pembayaran: {card.paymentMethod}</p>
                      <p>Resi Pengiriman: {card.shipmentTracking}</p>
                      <p>Status: {card.status}</p>
                    </div>
                    <button className="bg-green-400 hover:bg-green-500 text-black font-bold py-2 px-4 rounded-full text-sm md:text-base transition-colors">
                      Confirm to send product
                    </button>
                    <p className='text-white text-end text-sm md:text-base cursor-pointer hover:text-green-400 transition-colors'>
                      See more details
                    </p>
                  </div> 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Load More Button */}
      <div className="flex justify-center py-4 bg-[#646464]">
        <button 
          className='p-2 hover:bg-gray-500 rounded-full transition-colors' 
          onClick={toggleCards}
          aria-label={showMoreCards ? 'Show less' : 'Show more'}
        >
          <Image 
            src="/arrow-down.svg" 
            alt="Toggle cards" 
            width={20} 
            height={20} 
            className={`transform transition-transform ${showMoreCards ? 'rotate-180' : ''}`}
          />
        </button>
      </div>
    </>
  );
};

export default PesananDikirim;