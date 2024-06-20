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
      imageUrl: "/cardAcc1.svg"
    },
    {
      title: "PULSE Elite™ wireless headset",
      description: "Surround yourself with lifelike sound in your favourite games with the PULSE Elite™ wireless headset.",
      imageUrl: "/cardAcc2.svg"
    },
    {
      title: "Racing wheels",
      description: "Enhance your driving experience with the latest in racing wheel technology, designed to give you the edge in any racing game.",
      imageUrl: "/cardAcc3.svg" // Update the image URL if needed
    },
    {
      title: "T.Flight Hotas 4 flight stick",
      description: "Take control of the skies with the T.Flight Hotas 4, designed for enhanced precision and control in flight simulators.",
      imageUrl: "/cardAcc4.svg" // Update the image URL if needed
    },
    {
      title: "PlayStation 4 PRO",
      description: "Play with ultra-high resolution with the PlayStation 4 PRO, designed for the ultimate gaming experience.",
      imageUrl: "/cardAcc5.svg" // Update the image URL if needed
    },
    {
      title: "PlayStation 4 SLIM",
      description: "Play your favorite games with the sleek and compact PlayStation 4 SLIM, designed for efficient space usage and powerful gaming performance.",
      imageUrl: "/cardAcc6.svg" // Update the image URL if needed
    },
    {
      title: "Joy-Con Nintendo Switch Controllers",
      description: "Experience versatile gaming with Joy-Con controllers for the Nintendo Switch. Available in various colors, these controllers ensure fun and dynamic gameplay.",
      imageUrl: "/cardAcc7.svg" // Update the image URL if needed
    },
    {
      title: "Nintendo Switch V2",
      description: "Get gaming anywhere with the Nintendo Switch V2. With improved battery life and vibrant screen colors, the Switch V2 enhances your on-the-go gaming sessions.",
      imageUrl: "/cardAcc8.svg" // Update the image URL if needed
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

    <div className="grid grid-cols-1 grid-row-3 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {products.map((product, index) => (
        <div key={index} className="bg-[#DCDCDC] shadow-lg rounded-lg overflow-hidden ">
          <img src={product.imageUrl} alt={product.title} className=" w-full h-48  p-4 object-contain"/>
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