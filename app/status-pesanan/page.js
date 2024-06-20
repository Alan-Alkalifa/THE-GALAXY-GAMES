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

const StatusPesanan = () => {
  const [visibleCount, setVisibleCount] = useState(2);

  const loadMore = () => {
    setVisibleCount(prevCount => prevCount > 2 ? prevCount - 2 : prevCount + 2);
  };

  return (
    <>
      <RiwayatNav/>
      <h1 className='p-10 text-[100px] font-bold text-center text-green-400 opacity-50'>STATUS PRODUK</h1>

      <div className='flex items-center justify-between px-20'>
          <p className='text-center font-bold text-3xl'>Kimchipantha</p>
          <Image src='/profileCheckout.svg' alt='kimchipantha' width={100} height={100}/>
      </div>

      <p className='border-t px-32 mx-20 mt-3'></p>
      
      <div className='grid grid-cols-2 gap-10 p-10'>
        {orders.slice(0, visibleCount).map(order => (
          <div key={order.id} className="order-card bg-gradient-radial from-[#6C6C6C] to-[#343434] p-6 mx-10 rounded-lg">
            <Image src={order.image2} alt={order.name} width={300} height={347} className='inline-end'/>
            <Image src={order.image} alt={order.name} width={700} height={347} className='ml-5 p-5'/>
            <div className="order-info">
              <h3>{order.name}</h3>
              <p>Status: <span className='text-green-400'>{order.status}</span></p>
              <p>No Resi: <span className='text-green-400'>{order.trackingNumber}</span></p>
            </div>
          </div>
        ))}
      </div>

      {visibleCount !== 0 && (
        <div className="flex justify-center">
          <Image src='/arrow-down.svg' alt='arrow-down-on-square' width={20} height={20}/>
          <button onClick={loadMore} className="my-5 text-white font-bold py-2 px-4 rounded flex justify-center items-center">
              {visibleCount > 2 ? 'Please clickk to show less' : 'Please clickk to show more'}
          </button>
          
        </div>
      )}
    </>
  )
}
export default StatusPesanan