'use client'
import React, { useState } from 'react';
import ListPs5Nav from '../component/listPs5Nav';

const Listps5 = () => {
  const [image, setImage] = useState(null);
  const [productName, setProductName] = useState('Name of Product');

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (readEvent) => {
        setImage(readEvent.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <ListPs5Nav />
      {/* Top Image Grid - Responsive */}
      <div className='flex flex-col md:flex-row justify-center gap-4 md:gap-10 px-4 md:px-8 mb-8'>
        {/* First Image Container */}
        <div className='w-full md:w-96'>
          <div className='relative'>
            <div
              className='border-2 rounded-lg bg-gradient-to-t from-[#A5A5A5] to-[#0E0E0E] border-gray-300 w-full h-64 flex justify-center items-center'
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              {image ? (
                <img src={image} alt="Uploaded" className='w-full h-full object-cover rounded-lg' />
              ) : (
                <p className='text-center text-sm md:text-base'>Drag and drop an image here</p>
              )}
            </div>
            <img src='/edit-icon2.svg' width={50} height={50} className='absolute top-0 right-0 p-2'/>
          </div>
        </div>

        {/* Second Image Container */}
        <div className='w-full md:w-96'>
          <div className='relative'>
            <div
              className='border-2 rounded-lg bg-gradient-to-t from-[#A5A5A5] to-[#0E0E0E] border-gray-300 w-full h-64 flex justify-center items-center'
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              {image ? (
                <img src={image} alt="Uploaded" className='w-full h-full object-cover rounded-lg' />
              ) : (
                <p className='text-center text-sm md:text-base'>Drag and drop an image here</p>
              )}
            </div>
            <img src='/edit-icon2.svg' width={50} height={50} className='absolute top-0 right-0 p-2'/>
          </div>
        </div>
      </div>

      {/* Product Cards Section */}
      <div className='flex flex-col space-y-8 w-full px-4 md:px-8 lg:px-72'>
        {/* Product Card - Repeated 3 times */}
        {[1, 2, 3].map((index) => (
          <div key={index} className='flex flex-col md:flex-row gap-4'>
            <div className='relative flex flex-col md:flex-row w-full gap-4'>
              {/* Thumbnail Image */}
              <div className='w-full md:w-[250px]'>
                <div
                  className='border-4 rounded-lg bg-gradient-to-t from-[#A5A5A5] to-[#0E0E0E] border-gray-300 h-64 flex justify-center items-center'
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                >
                  {image ? (
                    <img src={image} alt="Uploaded" className='w-full h-full object-cover rounded-lg' />
                  ) : (
                    <p className='text-center text-sm md:text-base'>Drag and drop an image here</p>
                  )}
                </div>
                <img src='/edit-icon2.svg' width={50} height={50} className='absolute top-0 right-0 p-2'/>
              </div>

              {/* Main Product Image */}
              <div className='w-full md:w-[750px]'>
                <div
                  className='border-4 rounded-lg bg-gradient-to-t from-[#A5A5A5] to-[#0E0E0E] border-gray-300 h-64 flex justify-center items-center'
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                >
                  {image ? (
                    <img src={image} alt="Uploaded" className='w-full h-full object-cover rounded-lg' />
                  ) : (
                    <p className='text-center text-sm md:text-base'>Drag and drop an image here</p>
                  )}
                </div>
              </div>

              {/* Product Info Card */}
              <div className='relative md:absolute md:end-0 md:top-20 w-full md:w-auto'>
                <div className='flex flex-col justify-center items-start p-4 rounded-lg md:-mx-40 bg-gradient-to-t from-[#A5A5A5] to-[#0E0E0E] border-gray-300'>
                  <div className='text-white w-full'>
                    <input
                      type="text"
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                      className="w-full bg-transparent text-green-400 text-lg font-bold outline-none mb-2"
                    />
                    <div className='flex justify-between items-center'>
                      <input
                        type="text"
                        placeholder="Rp Fill the Price"
                        className='text-green-400 bg-transparent outline-none'
                      />
                      <img src='/edit-icon2.svg' width={40} height={40} className='ml-2'/>
                    </div>
                  </div>
                  <button className='mt-4 w-full bg-transparent border border-green-400 hover:bg-green-400 hover:text-white text-green-400 font-bold py-2 px-4 rounded-full transition-colors'>
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Load More Button */}
        <button className='fixed bottom-8 left-1/2 transform -translate-x-1/2 z-10 hover:opacity-80 transition-opacity'>
          <img src='/arrow-down.svg' width={25} height={25} alt="Load more"/>
        </button>
      </div>
    </>
  );
};

export default Listps5;