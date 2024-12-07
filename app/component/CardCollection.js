'use client'
import React, { useState } from 'react'

const CardCollection = () => {
    const cards = [
      { 
        title: "The Last of Us Part II", 
        imageUrl: "/card2.svg", 
        description: "In a post-apocalyptic world, Joel is tasked with smuggling Ellie, a 14-year-old girl, out of a quarantine zone. What starts as a simple job soon becomes a harrowing journey across the country, facing infected and other survivors.",
        category: "PS4"
      },
      { 
        title: "Marvel's Spider Man 2", 
        imageUrl: "/cardO1.svg", 
        description: "Join Spider-Men, Peter Parker and Miles Morales, in a new adventure. The sequel to the acclaimed Marvel's Spider-Man game for PS5 promises more action, deeper narratives, and thrilling gameplay.",
        category: "PS5"
      },
      { 
        title: "Gran Turismo 7", 
        imageUrl: "/cardO2.svg", 
        description: "Gran Turismo 7 caters to both competitive and casual racers with a vast array of game modes including GT Campaign, Arcade, and Driving School. Dive into a comprehensive racing experience, perfecting your skills and competing at the highest levels.",
        category: "PS5"
      },
      { 
        title: "Pokémon Scarlet", 
        imageUrl: "/cardO3.svg", 
        description: "Explore a seamless open world where towns merge with untamed wilderness. Encounter Pokémon in diverse environments from skies to seas. Pokémon Scarlet offers an open-world adventure accessible to players of all ages, emphasizing exploration and battles.",
        category: "SWITCH"
      },
      { 
        title: "Pokémon Violet", 
        imageUrl: "/cardO4.svg", 
        description: "Pokémon Violet introduces a new chapter in the Pokémon series. Set in a richly expressed open world, this game allows for unprecedented freedom in exploration. Anticipate a fresh evolutionary step in the Pokémon franchise.",
        category: "SWITCH"
      },
      { 
        title: "Kirby and the Forgotten Land", 
        imageUrl: "/cardO5.svg", 
        description: "Join Kirby in a 3D platforming adventure across a mysterious world filled with remnants of a past civilization. Copy abilities from enemies and explore diverse landscapes in this unforgettable journey.",
        category: "SWITCH"
      }
    ];

    const [selectedCategory, setSelectedCategory] = useState('ALL');
    
    const filteredCards = selectedCategory === 'ALL' 
      ? cards 
      : cards.filter(card => card.category === selectedCategory);
      
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Filter Buttons */}
      <div className="flex justify-center items-center bg-[#3B3B3B] p-4 rounded-lg mb-8">
        <div className="bg-[#E7E7E7] p-2 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 md:space-x-4 w-full max-w-[900px] rounded-full">
          <button 
            className={`text-black hover:text-white hover:bg-black py-2 px-4 rounded-full transition-colors duration-300 ${
              selectedCategory === 'ALL' ? 'bg-black text-white' : 'bg-[#E7E7E7]'
            }`}
            onClick={() => setSelectedCategory('ALL')}
          >
            ALL
          </button>
          <button 
            className={`text-black hover:text-white hover:bg-black py-2 px-4 rounded-full transition-colors duration-300 ${
              selectedCategory === 'PS4' ? 'bg-black text-white' : 'bg-[#E7E7E7]'
            }`}
            onClick={() => setSelectedCategory('PS4')}
          >
            PLAYSTATION 4
          </button>
          <button 
            className={`text-black hover:text-white hover:bg-black py-2 px-4 rounded-full transition-colors duration-300 ${
              selectedCategory === 'PS5' ? 'bg-black text-white' : 'bg-[#E7E7E7]'
            }`}
            onClick={() => setSelectedCategory('PS5')}
          >
            PLAYSTATION 5
          </button>
          <button 
            className={`text-black hover:text-white hover:bg-black py-2 px-4 rounded-full transition-colors duration-300 ${
              selectedCategory === 'SWITCH' ? 'bg-black text-white' : 'bg-[#E7E7E7]'
            }`}
            onClick={() => setSelectedCategory('SWITCH')}
          >
            NINTENDO SWITCH
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredCards.map((card, index) => (
          <div 
            key={index} 
            className="bg-[#232427] text-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02]"
          >
            <div className="relative pt-[56.25%]">
              <img 
                src={card.imageUrl} 
                alt={card.title} 
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-4">{card.description}</p>
              <button className="w-full bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded-full transition-colors duration-300">
                Find out more
              </button>
            </div>
          </div>
        ))}
      </div>

      <h1 className='text-white text-center text-base sm:text-xl font-bold mt-8 mb-4'>
        SEE FOR MORE
      </h1>
    </div>
  )
}

export default CardCollection