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
    image: "/cardCheckout1.svg",
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
    <h1 className='p-10 text-[100px] font-bold text-center text-green-400 opacity-50'>CHECKOUT</h1>
      <div className="bg-gradient-to-t from-[#3B3B3B] to-black p-10 text-white min-h-screen">
        <div className="grid grid-cols-3 gap-10">
          {/* Product Display Section */}
          <div className="col-span-2">
            <div className="flex flex-col gap-4">
              {products.map(product => (
                <div key={product.id} className="border border-white bg-gradient-to-l from-[#3B3B3B] to-black p-4 rounded-lg flex items-center justify-between">
                  <div className="flex items-center">
                    <img src={product.image} alt={product.alt} className="h-[373px] mr-4"/>
                    <div className='mx-auto text-end'>
                    <img src={product.image2} className="h-[150px] mr-4"/>
                      <h2 className="text-xl font-bold text-center">{product.name}</h2>
                      <p className="text-gray-400 text-center">{product.description}</p>
                      <p className="text-3xl font-bold text-green-400 text-center py-10">{product.price}</p>
                      <p className=''>{product.quantity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Confirmation Information Section */}
<div className="bg-gradient-to-t from-gray-300 to-[#3B3B3B] p-6 rounded-lg shadow-lg py-5">
  <div className='flex justify-between '>
  <div className="items-center">
  <h3 className="text-3xl font-bold mb-4 text-green-400">Confirmation Information</h3>
  <h2><strong className="text-white text-2xl mb-4">Kimchipantha</strong></h2>
  </div>
  <div className=' float-end'>
    <Image src="/profileCheckout.svg" width="100" height="100" alt='profile' className='relative'/>
  </div>
 </div>

  <div className="mt-4">
    <p className="text-white font-semibold">Fill The Adress</p>
    <input placeholder='Jl.Setia Budi' className='my-2 p-2 w-full rounded-md ring-1 ring-white focus:ring-green-400 bg-gradient-to-r from-[#010101] to-[#666666]'></input>

    <p className="text-white font-semibold">Phone Number</p>
    <input placeholder='08579264278' className='my-2 p-2 w-full rounded-md ring-1 ring-white focus:ring-green-400 bg-gradient-to-r from-[#010101] to-[#666666]'></input>

    <p className="text-white font-semibold">Couriers</p>
    <input placeholder='Tiki Extra' className='my-2 p-2 w-full rounded-md ring-1 ring-white focus:ring-green-400 bg-gradient-to-r from-[#010101] to-[#666666]'></input>

    <p className="text-white font-semibold">Card Number</p>
    <input placeholder='111 1111 1111 1111' className='my-2 p-2 w-full rounded-md ring-1 ring-white focus:ring-green-400 bg-gradient-to-r from-[#010101] to-[#666666]'></input>

<div className='flex justify-between'>
<p className="text-white font-semibold">Expiration Date</p>
<p className="text-white font-semibold">CVV</p>
</div>
<div className='flex justify-between gap-20'>
    <input placeholder='09/2022' className='my-2 p-2 w-full rounded-md ring-1 ring-white focus:ring-green-400 bg-gradient-to-r from-[#010101] to-[#666666]'></input>
    <input placeholder='999' className='my-2 p-2 w-full rounded-md ring-1 ring-white focus:ring-green-400 bg-gradient-to-r from-[#010101] to-[#666666]'></input>
</div>

<p className="text-white font-semibold">Card Type</p>

<div className='flex justify-between'>
<button className='border-b rounded-lg hover:border-green-400'><Image src="/mastercard.svg" width="100" height="100" alt='bank' className='relative'/></button>
<button className='border-b rounded-lg hover:border-green-400'><Image src="/livin.svg" width="100" height="100" alt='bank' className='relative'/></button>
<button className='border-b rounded-lg hover:border-green-400'><Image src="/bca.svg" width="100" height="100" alt='bank' className='relative'/></button>
<button className='border-b rounded-lg hover:border-green-400'><Image src="/seeall.svg" width="100" height="100" alt='bank' className='relative'/></button>
</div>

<p className='border border-x border-white w-full m-3'/>

<div>
  <div className="flex justify-between"v>
  <p className='font-bold'>Subtotal</p>
  <p className='font-bold'>Rp.499.000/Item</p>
  </div>

  <div className="flex justify-end"v>
  <p className='font-bold'>Rp.644.000/Item</p>
  </div>

  <div className="flex justify-between"v>
  <p className='font-bold'>Shipping</p>
  <p className='font-bold'>Rp.36.000</p>
  </div>

  <div className="flex justify-between"v>
  <p className='font-bold'>Total (tax incl.)</p>
  <p className='font-bold'>Rp.1.222.000</p>
  </div>
</div>

  </div>
  <button className="mt-4 w-full rounded-lg bg-gradient-to-r from-[#010101] to-[#666666] text-white font-bold py-2 px-4 hover:border-green-400 border ">
    <div className='flex justify-between'>
  <p className=' font-semibold text-green-400'>Rp.1.222.000</p>
  <p className='font-semibold flex gap-1 justify-center'>Buy Purchase <Image src="/right.svg" width="25" height="25" alt='arrow'/></p>
  </div>
  </button>
</div>
          {/* Other sections remain unchanged */}
        </div>
      </div>
    </>
  );
}

export default Checkout;