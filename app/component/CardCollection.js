import React from 'react'

const CardCollection = () => {
    const cards = [
      { title: "The Last of Us Part II", imageUrl: "/card2.svg", description: "In a post-apocalyptic world, Joel is tasked with smuggling Ellie, a 14-year-old girl, out of a quarantine zone. What starts as a simple job soon becomes a harrowing journey across the country, facing infected and other survivors." },
      { title: "Marvel's Spider Man 2", imageUrl: "/cardO1.svg", description: "Join Spider-Men, Peter Parker and Miles Morales, in a new adventure. The sequel to the acclaimed Marvel’s Spider-Man game for PS5 promises more action, deeper narratives, and thrilling gameplay." },
      { title: "Gran Turismo 7", imageUrl: "/cardO2.svg", description: "Gran Turismo 7 caters to both competitive and casual racers with a vast array of game modes including GT Campaign, Arcade, and Driving School. Dive into a comprehensive racing experience, perfecting your skills and competing at the highest levels." },
      { title: "Pokémon Scarlet", imageUrl: "/cardO3.svg", description: "Explore a seamless open world where towns merge with untamed wilderness. Encounter Pokémon in diverse environments from skies to seas. Pokémon Scarlet offers an open-world adventure accessible to players of all ages, emphasizing exploration and battles." },
      {  title: "Pokémon Violet", imageUrl: "/cardO4.svg", description: "Pokémon Violet introduces a new chapter in the Pokémon series. Set in a richly expressed open world, this game allows for unprecedented freedom in exploration. Anticipate a fresh evolutionary step in the Pokémon franchise." },
      { title: "Kirby and the Forgotten Land", imageUrl: "/cardO5.svg", description: "Join Kirby in a 3D platforming adventure across a mysterious world filled with remnants of a past civilization. Copy abilities from enemies and explore diverse landscapes in this unforgettable journey." }
      ];
      
  return (
    <>
      <div className="flex justify-center items-center bg-[#3B3B3B]">
        <div className="bg-[#E7E7E7] p-2 flex space-x-4 py-1 w-full md:w-[700px] rounded-full justify-between">
          <button className="text-black hover:text-white hover:bg-black bg-[#E7E7E7] py-2 px-4 rounded-full">ALL</button>
          <button className="text-black hover:text-white hover:bg-black bg-[#E7E7E7] py-2 px-4 rounded-full">PLAYSTATION 4</button>
          <button className="text-black hover:text-white hover:bg-black bg-[#E7E7E7] py-2 px-4 rounded-full">PLAYSTATION 5</button>
          <button className="text-black hover:text-white hover:bg-black bg-[#E7E7E7] py-2 px-4 rounded-full">NINTENDO SWITCH</button>
        </div>
      </div>

      <div className='flex justify-center mr-30 p-2 mt-9 px-auto'>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 gap-x-20 max-w-screen-lg mx-auto">
          {cards.map((card, index) => (
            <div key={index} className="bg-[#232427] text-white rounded-lg overflow-hidden shadow-lg p-2">
              <img src={card.imageUrl} alt={card.title} className="w-full object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold">{card.title}</h3>
                <p className="text-sm">{card.description}</p>
              </div>
              <div>
              <button className="p-4 mx-2 bottom-full bg-white hover:bg-slate-200 text-black font-bold py-2 px-4 end-0 rounded-full">
              Find out more
              </button>
              </div>
            </div>
          ))}
          
        </div>
      </div>
      <h1 className='text-white text-center text-[20px] m-4'>SEE FOR MORE</h1>
    </>
  )
}

export default CardCollection