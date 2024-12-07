import React from 'react';
import CheckoutNav from '../component/CheckoutNav';
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: "PlayStation Portal™",
    image: "/cardCheckout1.svg",
    image2: "/cardCheckoutps4.svg",
    alt: "/cardCheckoutps4.svg", 
    description: "PlayStation 5",
    price: "Rp 499,000",
    quantity: "1 Item"
  },
  {
    id: 2,
    name: "The Witcher Wild Hunt",
    image: "/cardCek1.svg",
    image2: "/cardCheckoutps4.svg",
    alt: "/cardCheckoutps4.svg",
    description: "PlayStation 5",
    price: "Rp 688,000",
    quantity: "1 Item"
  }
];

const Checkout = () => {
  return (
    <>
    <CheckoutNav/>
    <h1 className='p-4 md:p-10 text-4xl md:text-[100px] font-bold text-center text-green-400 opacity-50'>CHECKOUT</h1>
      <div className="bg-gradient-to-t from-[#3B3B3B] to-black p-4 md:p-10 text-white min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-10">
          {/* Product Display Section */}
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-4">
              {products.map(product => (
                <div key={product.id} className="border border-white bg-gradient-to-l from-[#3B3B3B] to-black p-4 rounded-lg">
                  <div className="flex flex-col md:flex-row items-center">
                    <img src={product.image} alt={product.alt} className="h-[200px] md:h-[373px] w-auto mb-4 md:mb-0 md:mr-4"/>
                    <div className='w-full md:w-auto text-center md:text-end'>
                    <img src={product.image2} className="h-[100px] md:h-[150px] mx-auto md:mr-4"/>
                      <h2 className="text-lg md:text-xl font-bold">{product.name}</h2>
                      <p className="text-gray-400">{product.description}</p>
                      <p className="text-2xl md:text-3xl font-bold text-green-400 py-4 md:py-10">{product.price}</p>
                      <p className='text-center md:text-end'>{product.quantity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Confirmation Information Section */}
          <div className="bg-gradient-to-t from-gray-300 to-[#3B3B3B] p-4 md:p-6 rounded-lg shadow-lg">
            <div className='flex flex-col sm:flex-row justify-between items-center mb-4'>
              <div className="text-center sm:text-left mb-4 sm:mb-0">
                <h3 className="text-2xl md:text-3xl font-bold text-green-400">Confirmation Information</h3>
                <h2><strong className="text-white text-xl md:text-2xl">Kimchipantha</strong></h2>
              </div>
              <div>
                <Image src="/profileCheckout.svg" width="80" height="80" alt='profile' className='relative md:w-[100px] md:h-[100px]'/>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              <div className="space-y-2">
                <p className="text-white font-semibold">Fill The Adress</p>
                <input placeholder='Jl.Setia Budi' className='p-2 w-full rounded-md ring-1 ring-white focus:ring-green-400 bg-gradient-to-r from-[#010101] to-[#666666]'/>
              </div>

              <div className="space-y-2">
                <p className="text-white font-semibold">Phone Number</p>
                <input placeholder='08579264278' className='p-2 w-full rounded-md ring-1 ring-white focus:ring-green-400 bg-gradient-to-r from-[#010101] to-[#666666]'/>
              </div>

              <div className="space-y-2">
                <p className="text-white font-semibold">Couriers</p>
                <input placeholder='Tiki Extra' className='p-2 w-full rounded-md ring-1 ring-white focus:ring-green-400 bg-gradient-to-r from-[#010101] to-[#666666]'/>
              </div>

              <div className="space-y-2">
                <p className="text-white font-semibold">Card Number</p>
                <input placeholder='111 1111 1111 1111' className='p-2 w-full rounded-md ring-1 ring-white focus:ring-green-400 bg-gradient-to-r from-[#010101] to-[#666666]'/>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-white font-semibold">Expiration Date</p>
                  <input placeholder='09/2022' className='p-2 w-full rounded-md ring-1 ring-white focus:ring-green-400 bg-gradient-to-r from-[#010101] to-[#666666]'/>
                </div>
                <div>
                  <p className="text-white font-semibold">CVV</p>
                  <input placeholder='999' className='p-2 w-full rounded-md ring-1 ring-white focus:ring-green-400 bg-gradient-to-r from-[#010101] to-[#666666]'/>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-white font-semibold">Card Type</p>
                <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
                  <button className='border-b rounded-lg hover:border-green-400'><Image src="/mastercard.svg" width="80" height="80" alt='bank' className='w-full h-auto'/></button>
                  <button className='border-b rounded-lg hover:border-green-400'><Image src="/livin.svg" width="80" height="80" alt='bank' className='w-full h-auto'/></button>
                  <button className='border-b rounded-lg hover:border-green-400'><Image src="/bca.svg" width="80" height="80" alt='bank' className='w-full h-auto'/></button>
                  <button className='border-b rounded-lg hover:border-green-400'><Image src="/seeall.svg" width="80" height="80" alt='bank' className='w-full h-auto'/></button>
                </div>
              </div>

              <div className="border-t border-white my-4"></div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <p className='font-bold'>Subtotal</p>
                  <p className='font-bold'>Rp.499.000/Item</p>
                </div>
                <div className="flex justify-end">
                  <p className='font-bold'>Rp.644.000/Item</p>
                </div>
                <div className="flex justify-between">
                  <p className='font-bold'>Shipping</p>
                  <p className='font-bold'>Rp.36.000</p>
                </div>
                <div className="flex justify-between">
                  <p className='font-bold'>Total (tax incl.)</p>
                  <p className='font-bold'>Rp.1.222.000</p>
                </div>
              </div>

              <button className="w-full rounded-lg bg-gradient-to-r from-[#010101] to-[#666666] text-white font-bold py-2 px-4 hover:border-green-400 border">
                <div className='flex justify-between items-center'>
                  <p className='font-semibold text-green-400'>Rp.1.222.000</p>
                  <p className='font-semibold flex items-center gap-1'>Buy Purchase <Image src="/right.svg" width="20" height="20" alt='arrow'/></p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;