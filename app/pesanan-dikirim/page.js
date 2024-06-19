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
    profile: "/dump-profile.svg",
    username: "Minjayyy03",
    paymentStatus: "Lunas",
    paymentMethod: "Mandiri",
    shipmentTracking: "32473285",
    status: "Sedang Packing",
    imagePaths: ["/figure-1.svg", "/figure-2.svg", "/figure-3.svg", "/figure-4.svg"]
  },
  {
    id: 3,
    profile: "/dump-profile.svg",
    username: "Minjayyy03",
    paymentStatus: "Lunas",
    paymentMethod: "Mandiri",
    shipmentTracking: "32473285",
    status: "Sedang Packing",
    imagePaths: ["/figure-1.svg", "/figure-2.svg", "/figure-3.svg", "/figure-4.svg"]
  },
  {
    id: 4,
    profile: "/dump-profile.svg",
    username: "Minjayyy03",
    paymentStatus: "Lunas",
    paymentMethod: "Mandiri",
    shipmentTracking: "32473285",
    status: "Sedang Packing",
    imagePaths: ["/figure-1.svg", "/figure-2.svg", "/figure-3.svg", "/figure-4.svg"]
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
    profile: "/dump-profile.svg",
    username: "Minjayyy03",
    paymentStatus: "Lunas",
    paymentMethod: "Mandiri",
    shipmentTracking: "32473285",
    status: "Sedang Packing",
    imagePaths: ["/figure-1.svg", "/figure-2.svg", "/figure-3.svg", "/figure-4.svg"]
  },
  {
    id: 7,
    profile: "/dump-profile.svg",
    username: "Minjayyy03",
    paymentStatus: "Lunas",
    paymentMethod: "Mandiri",
    shipmentTracking: "32473285",
    status: "Sedang Packing",
    imagePaths: ["/figure-1.svg", "/figure-2.svg", "/figure-3.svg", "/figure-4.svg"]
  },
  {
    id: 8,
    profile: "/dump-profile.svg",
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

  // Determine the number of cards to show
  const visibleCards = showMoreCards ? cardData.slice(0, 8) : cardData.slice(0, 4);

  return (
    <>
      <NavPesananBaru />
      <h1 className='p-10 text-[100px] font-bold text-center text-green-400 opacity-50'>PESANAN <span className='text-gray-400 '>BARU</span></h1>
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-t from-[#646464] to-black">
        <div className="p-10 grid grid-cols-2 gap-4 items-center w-[1300px]">
          {visibleCards.map(card => (
            <div key={card.id} className=" rounded overflow-hidden shadow-lg bg-gradient-to-t from-[#646464] to-[#B0B0B0]">
              <div className="px-6 py-4">
                <div className="font-bold text-xl">
                  <div className='flex items-center gap-2 text-white text-3xl'>
                    <Image src={card.profile} alt="Profile" width={50} height={50} />
                    <span className='w-full'>{card.username}</span>
                    <div className='text-gray-400'>
                      <Image src="/edit-icon.svg" alt="Verified" width={40} height={40} className='mx-18' />
                    </div>
                  </div>
                </div>

                <div className='flex justify-normal gap-4 py-2'>
                  <div className='grid grid-cols-2 p-5 rounded-lg w-auto bg-white bg-opacity-30'>
                    <img src={card.imagePaths[0]} alt="Image 1" />
                    <img src={card.imagePaths[1]} alt="Image 2" />
                    <img src={card.imagePaths[2]} alt="Image 3" />
                    <img src={card.imagePaths[3]} alt="Image 4" />
                  </div>
                  <div className='flex flex-col gap-4 px-8'>
                    <p className="text-white text-base ">
                      Pembayaran: <span className='text-green-400'>{card.paymentStatus}</span><br/>
                      Metode pembayaran: {card.paymentMethod}<br/>
                      Resi Pengiriman: {card.shipmentTracking}<br/>
                      Status: {card.status}
                    </p>
                    <button className="bg-green-400 hover:bg-green-500 text-black font-bold py-2 px-4 rounded-full">
                      Confirm to send product
                    </button>
                    <p className='text-whire text-end'>See more details</p>
                  </div> 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center py-4 bg-[#646464]">
        <button className='' onClick={toggleCards}>
          {showMoreCards ? '' : ''}
          <Image src="/arrow-down.svg" alt="Arrow Down" width={20} height={20} />
        </button>
      </div>
    </>
  );
};

export default PesananDikirim;