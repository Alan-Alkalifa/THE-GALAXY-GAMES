import React from 'react'
import Image from 'next/image'

const CardConsole = () => {
  return (
    <>
      <div className="flex justify-center items-center m-7">
        <div className="bg-[#E7E7E7] p-2 flex space-x-4 py-1 w-[700px] rounded-full justify-between">
          <button className="text-black hover:text-white hover:bg-black bg-[#E7E7E7] py-2 px-4 rounded-full">ALL</button>
          <button className="text-black hover:text-white hover:bg-black bg-[#E7E7E7] py-2 px-4 rounded-full">PLAYSTATION 4</button>
          <button className="text-black hover:text-white hover:bg-black bg-[#E7E7E7] py-2 px-4 rounded-full">PLAYSTATION 5</button>
          <button className="text-black hover:text-white hover:bg-black bg-[#E7E7E7] py-2 px-4 rounded-full">NINTENDO SWITCH</button>
        </div>
      </div>
      
      <div className="flex justify-center mr-20 p-2">
      <div className="grid grid-cols-3 gap-12 gap-x-20 max-w-screen-lg mx-auto">
      {/* Repeat this structure for each card */}
          <button className="bg-[#DCDCDC] rounded-lg shadow-lg overflow-hidden w-[340px] transform transition duration-300 hover:scale-105">
            <img src="/card1.svg" alt="Genshin Impact" className="w-full p-3 m-1"/>
            <div className="p-4">
              <div className='flex justify-between items-center text-center'>
                <p className="text-blue-500 text-base mb-4">Action</p>
                <Image src="/miniPS5.svg" alt="heart" width={70} height={70}/>
              </div>
              <h5 className="text-gray-900 text-xl text-left font-medium mb-2">Tunic</h5>
            </div>
          </button>

          <div className="bg-[#DCDCDC] rounded-lg shadow-lg overflow-hidden w-[340px] transform transition duration-300 hover:scale-105">
            <img src="/cardC5.svg" alt="Genshin Impact" className="w-full p-3 m-1"/>
            <div className="p-4">
            <div className='flex justify-between items-center text-center'>
                <p className="text-blue-500 text-base mb-4">Shooters</p>
                <Image src="/miniPS5.svg" alt="heart" width={70} height={70}/>
              </div>
              <h5 className="text-gray-900 text-xl text-left font-medium mb-2">Splatoon 3</h5>
            </div>
          </div>

          <button className="bg-[#DCDCDC] rounded-lg shadow-lg overflow-hidden w-[340px] transform transition duration-300 hover:scale-105">
            <img src="/cardC1.svg" alt="Genshin Impact" className="w-full p-3 m-1"/>
            <div className="p-4">
            <div className='flex justify-between items-center text-center'>
                <p className="text-blue-500 text-base mb-4">Action</p>
                <Image src="/miniPS5.svg" alt="heart" width={70} height={70}/>
              </div>
              <h5 className="text-gray-900 text-xl text-left font-medium mb-2">Luigi's Mansion 3</h5>
            </div>
          </button>

          <button className="bg-[#DCDCDC] rounded-lg shadow-lg overflow-hidden w-[340px] transform transition duration-300 hover:scale-105">
            <img src="/cardC2.svg" alt="Genshin Impact" className="w-full p-3 m-1"/>
            <div className="p-4">
            <div className='flex justify-between items-center text-center'>
                <p className="text-blue-500 text-base mb-4">Adventurer</p>
                <Image src="/miniPS5.svg" alt="heart" width={70} height={70}/>
              </div>
              <h5 className="text-gray-900 text-xl text-left font-medium mb-2">The Legend Of Zelda</h5>
            </div>
          </button>

          <button className="bg-[#DCDCDC] rounded-lg shadow-lg overflow-hidden w-[340px] transform transition duration-300 hover:scale-105">
            <img src="/cardC3.svg" alt="Genshin Impact" className="w-full p-3 m-1"/>
            <div className="p-4">
            <div className='flex justify-between items-center text-center'>
                <p className="text-blue-500 text-base mb-4">Action</p>
                <Image src="/miniPS5.svg" alt="heart" width={70} height={70}/>
              </div>
              <h5 className="text-gray-900 text-xl text-left font-medium mb-2">Kena: Bridge of Spirits</h5>
            </div>
          </button>

          <button className="bg-[#DCDCDC] rounded-lg shadow-lg overflow-hidden w-[340px] transform transition duration-300 hover:scale-105">
            <img src="/cardC4.svg" alt="Genshin Impact" className="w-full p-3 m-1"/>
            <div className="p-4">
            <div className='flex justify-between items-center text-center'>
                <p className="text-blue-500 text-base mb-4">Shooters</p>
                <Image src="/miniPS5.svg" alt="heart" width={70} height={70}/>
              </div>
              <h5 className="text-gray-900 text-xl text-left font-medium mb-2">Fortnite</h5>
            </div>
          </button>

        </div>
      </div>
    </>
  )
}
export default CardConsole