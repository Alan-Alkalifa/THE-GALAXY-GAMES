'use client'
// Importing React and useState hook from React library
import React, { useState } from 'react';
// Importing a navigation component for the PS5 list page
import ListPs5Nav from '../component/listPs5Nav';

// Defining a functional component named Listps5
const Listps5 = () => {
  // State hooks to manage the image and product name
  const [image, setImage] = useState(null);
  const [productName, setProductName] = useState('Name of Product');

  // Event handler for drag over event to prevent the default behavior
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Event handler for drop event to handle file drop
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0]; // Accessing the dropped file
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (readEvent) => {
        setImage(readEvent.target.result); // Setting the image URL to display the image
      };
      reader.readAsDataURL(file); // Reading the file as a Data URL
    }
  };

  // JSX to render the component
  return (
    <>
      <ListPs5Nav />
      <div className='flex flex-auto justify-center gap-10'>
      <div className='flex justify-center'>
        <div className='relative'>
          <div
            className='border-2 rounded-lg bg-gradient-to-t from-[#A5A5A5] to-[#0E0E0E] border-gray-300 w-96 h-64 flex justify-center items-center'
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            {image ? (
              <img src={image} alt="Uploaded" className='w-full h-full object-cover' />
            ) : (
              <p>Drag and drop an image here</p>
            )}
          </div>
          <img src='/edit-icon2.svg' width={50} height={50} className='absolute top-0 right-0 p-2'/>
        </div>
      </div>

      <div className='flex justify-center'>
        <div className='relative'>
          <div
            className='border-2 rounded-lg bg-gradient-to-t from-[#A5A5A5] to-[#0E0E0E] border-gray-300 w-96 h-64 flex justify-center items-center'
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            {image ? (
              <img src={image} alt="Uploaded" className='w-full h-full object-cover' />
            ) : (
              <p>Drag and drop an image here</p>
            )}
          </div>
          <img src='/edit-icon2.svg' width={50} height={50} className='absolute top-0 right-0 p-2'/>
        </div>
      </div>
      </div>

      <div className='flex flex-col'>
        <div className='flex justify-normal py-10 w-full px-72 '>
          <div className='flex gap-4'>
            {/* Additional image drop areas and product information input fields */}
            <div className='relative flex'>
              <div
                className='border-4 rounded-lg bg-gradient-to-t from-[#A5A5A5] to-[#0E0E0E] border-gray-300 w-[250px] h-64 flex justify-center items-center'
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                {image ? (
                  <img src={image} alt="Uploaded" className='w-full h-full object-cover' />
                ) : (
                  <p>Drag and drop an image here</p>
                )}
              </div>
              <img src='/edit-icon2.svg' width={50} height={50} className='absolute top-0 right-0 p-2'/>
              {/* Product information section */}
              <div
            className='border-4 rounded-lg bg-gradient-to-t from-[#A5A5A5] to-[#0E0E0E] border-gray-300 w-[750px] h-64 flex justify-center items-center'
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            {image ? (
              <img src={image} alt="Uploaded" className='w-full h-full object-cover' />
            ) : (
              <p>Drag and drop an image here</p>
            )}
          </div>
              <div className='absolute end-0 top-20'>
                <div className='flex flex-col justify-center items-start p-3 rounded-lg -mx-40 bg-gradient-to-t from-[#A5A5A5] to-[#0E0E0E] border-gray-300'>
                  <div className='text-white'>
                    <input
                      type="text"
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                      className="bg-transparent text-green-400 text-lg font-bold outline-none"
                    />
                    <div className='flex justify-between text-center'>
                      <input
                        type="text"
                        placeholder="Rp Fill the Price"
                        className='text-green-400 bg-transparent outline-none'
                      />
                      <img src='/edit-icon2.svg' width={50} height={50} className=' top-0 right-0 p-2 -mx-[60px]'/>
                    </div>
                  </div>
                  <button className='mt-2 bg-transparent border border-green-400 hover:bg-green-400 hover:text-white text-green-400 font-bold py-2 px-4 rounded-full w-full'>
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-normal py-10 w-full px-72 '>
          <div className='flex gap-4'>
            {/* Additional image drop areas and product information input fields */}
            <div className='relative flex'>
              <div
                className='border-4 rounded-lg bg-gradient-to-t from-[#A5A5A5] to-[#0E0E0E] border-gray-300 w-[250px] h-64 flex justify-center items-center'
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                {image ? (
                  <img src={image} alt="Uploaded" className='w-full h-full object-cover' />
                ) : (
                  <p>Drag and drop an image here</p>
                )}
              </div>
              <img src='/edit-icon2.svg' width={50} height={50} className='absolute top-0 right-0 p-2'/>
              {/* Product information section */}
              <div
            className='border-4 rounded-lg bg-gradient-to-t from-[#A5A5A5] to-[#0E0E0E] border-gray-300 w-[750px] h-64 flex justify-center items-center'
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            {image ? (
              <img src={image} alt="Uploaded" className='w-full h-full object-cover' />
            ) : (
              <p>Drag and drop an image here</p>
            )}
          </div>
              <div className='absolute end-0 top-20'>
                <div className='flex flex-col justify-center items-start p-3 rounded-lg -mx-40 bg-gradient-to-t from-[#A5A5A5] to-[#0E0E0E] border-gray-300'>
                  <div className='text-white'>
                    <input
                      type="text"
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                      className="bg-transparent text-white text-lg font-bold outline-none"
                    />
                    <div className='flex justify-between text-center'>
                      <input
                        type="text"
                        placeholder="Rp Fill the Price"
                        className='text-green-400 bg-transparent outline-none'
                      />
                      <img src='/edit-icon2.svg' width={50} height={50} className=' top-0 right-0 p-2 -mx-[60px]'/>
                    </div>
                  </div>
                  <button className='mt-2 bg-transparent border border-green-400 hover:bg-green-400 hover:text-white text-green-400 font-bold py-2 px-4 rounded-full w-full'>
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-normal py-10 w-full px-72 '>
          <div className='flex gap-4'>
            {/* Additional image drop areas and product information input fields */}
            <div className='relative flex'>
              <div
                className='border-4 rounded-lg bg-gradient-to-t from-[#A5A5A5] to-[#0E0E0E] border-gray-300 w-[250px] h-64 flex justify-center items-center'
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                {image ? (
                  <img src={image} alt="Uploaded" className='w-full h-full object-cover' />
                ) : (
                  <p>Drag and drop an image here</p>
                )}
              </div>
              <img src='/edit-icon2.svg' width={50} height={50} className='absolute top-0 right-0 p-2'/>
              {/* Product information section */}
              <div
            className='border-4 rounded-lg bg-gradient-to-t from-[#A5A5A5] to-[#0E0E0E] border-gray-300 w-[750px] h-64 flex justify-center items-center'
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            {image ? (
              <img src={image} alt="Uploaded" className='w-full h-full object-cover' />
            ) : (
              <p>Drag and drop an image here</p>
            )}
          </div>
              <div className='absolute end-0 top-20'>
                <div className='flex flex-col justify-center items-start p-3 rounded-lg -mx-40 bg-gradient-to-t from-[#A5A5A5] to-[#0E0E0E] border-gray-300'>
                  <div className='text-white'>
                    <input
                      type="text"
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                      className="bg-transparent text-white text-lg font-bold outline-none"
                    />
                    <div className='flex justify-between text-center'>
                      <input
                        type="text"
                        placeholder="Rp Fill the Price"
                        className='text-green-400 bg-transparent outline-none'
                      />
                      <img src='/edit-icon2.svg' width={50} height={50} className=' top-0 right-0 p-2 -mx-[60px]'/>
                    </div>
                  </div>
                  <button className='mt-2 bg-transparent border border-green-400 hover:bg-green-400 hover:text-white text-green-400 font-bold py-2 px-4 rounded-full w-full'>
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className='absolute top-[1450px] my-2 left-1/2 transform -translate-x-1/2'><img src='/arrow-down.svg' width={25} height={25}/></button>

        
      </div>
    </>
  );
};

// Exporting the Listps5 component as the default export
export default Listps5;