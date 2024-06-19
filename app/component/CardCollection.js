import React from 'react'

const CardCollection = () => {
    const cards = [
        { title: "The Last of Us Part II", imageUrl: "/card2.svg", description: "Experience Ellie's journey in the post-apocalyptic United States." },
        { title: "Marvel's Spider Man 2", imageUrl: "/card2.svg", description: "Join Spider-Man and Miles Morales for a new adventure." },
        { title: "Gran Turismo 7", imageUrl: "/card2.svg", description: "Race in a hyper-realistic racing simulator." },
        { title: "Pokémon Scarlet", imageUrl: "/card2.svg", description: "Embark on a new Pokémon adventure in a vibrant open world." },
        { title: "Pokémon Violet", imageUrl: "/card2.svg", description: "Discover new Pokémon and challenges in another exciting region." },
        { title: "Kirby and the Forgotten Land", imageUrl: "/card2.svg", description: "Join Kirby in a delightful 3D platforming adventure." }
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
                <button className="mt-4 bg-white hover:bg-slate-200 text-black font-bold py-2 px-4 rounded-full">
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