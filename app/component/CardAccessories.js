import React from 'react'

const products = [
    {
      title: "PlayStation Portal™ remote player",
      description: "Play your PS5 console over your home Wi-Fi with console quality controls using PlayStation Portal Remote Player.",
      imageUrl: "/card4.svg"
    },
    {
      title: "PULSE Explore™ wireless earbuds",
      description: "Enjoy lifelike gaming audio wherever play takes you with the PULSE Explore wireless earbuds.",
      imageUrl: "/card4.svg"
    },
    {
      title: "PULSE Elite™ wireless headset",
      description: "Surround yourself with lifelike sound in your favourite games with the PULSE Elite™ wireless headset.",
      imageUrl: "/card4.svg"
    },
    {
        title: "PULSE Elite™ wireless headset",
        description: "Surround yourself with lifelike sound in your favourite games with the PULSE Elite™ wireless headset.",
        imageUrl: "/card4.svg"
      },
      {
        title: "PULSE Elite™ wireless headset",
        description: "Surround yourself with lifelike sound in your favourite games with the PULSE Elite™ wireless headset.",
        imageUrl: "/card4.svg"
      },
      {
        title: "PULSE Elite™ wireless headset",
        description: "Surround yourself with lifelike sound in your favourite games with the PULSE Elite™ wireless headset.",
        imageUrl: "/card4.svg"
      },
    // Add other products similarly
  ];

const CardAccessories = () => {
    
  return (
    <>
    <div className="flex justify-center items-center bg-[#666666]">
      <div className="bg-[#E7E7E7] p-2 flex space-x-4 py-1 w-full md:w-[700px] rounded-full justify-between">
        <button className="text-black hover:text-white hover:bg-black bg-[#E7E7E7] py-2 px-4 rounded-full">ALL</button>
        <button className="text-black hover:text-white hover:bg-black bg-[#E7E7E7] py-2 px-4 rounded-full">PLAYSTATION 4</button>
        <button className="text-black hover:text-white hover:bg-black bg-[#E7E7E7] py-2 px-4 rounded-full">PLAYSTATION 5</button>
        <button className="text-black hover:text-white hover:bg-black bg-[#E7E7E7] py-2 px-4 rounded-full">NINTENDO SWITCH</button>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {products.map((product, index) => (
        <div key={index} className="bg-[#DCDCDC] shadow-lg rounded-lg overflow-hidden ">
          <img src={product.imageUrl} alt={product.title} className="w-full h-48 object-cover"/>
          <div className="p-4">
            <h3 className="font-semi text-2xl text-center text-black">{product.title}</h3>
            <p className='text-black'>{product.description}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default CardAccessories