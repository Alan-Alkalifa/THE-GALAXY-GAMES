import React from 'react';
import Image from 'next/image';
import AuthNav from '../component/AuthNav';
import Link from 'next/link';

const Login = () => {
  return (
    <>
      <AuthNav/>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-t from-[#656565] to bg-[#0D0D0D] px-4 py-8 md:p-0">
        <div className='flex flex-col md:flex-row bg-gradient-to-t from-[#292929] to bg-[#111111] rounded-2xl md:rounded-full w-full max-w-4xl mx-auto'>
          <div className="hidden md:block">
            <Image 
              src="/card-login.svg" 
              width={450} 
              height={500} 
              alt="card"
              className="object-cover h-full"
            />
          </div>
          <div className="w-full md:max-w-md p-6 md:p-8 space-y-4 bg-gradient-to-t from-[#292929] to bg-[#111111] rounded-2xl md:rounded-e-3xl shadow-md">
            <h1 className='text-bold text-2xl md:text-3xl text-white mb-6'>Login</h1> 
            <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-2">
              <button className="flex px-4 md:px-8 py-2 justify-center items-center gap-2 text-white bg-[#5856D6] rounded-full hover:bg-[#5452E4] text-sm md:text-base">
                <Image src="/facebook.svg" width={10} height={10} alt='facebook'/>
                Facebook
              </button>
              <button className="flex px-4 md:px-8 py-2 justify-center items-center gap-2 text-white bg-[#00BCD4] rounded-full hover:bg-[#01ACC2] text-sm md:text-base">
                <Image src="/twitter.svg" width={15} height={15} alt='twitter'/>
                Twitter
              </button>
              <button className="flex px-4 md:px-8 py-2 justify-center items-center gap-2 text-white bg-red-600 rounded-full hover:bg-red-700 text-sm md:text-base">
                <Image src="/goggle.svg" width={15} height={15} alt='goggle'/>
                Google
              </button>
            </div>
            <p className="text-sm text-center text-gray-400 py-6 md:py-10"> ----- Or login with email ----- </p>
            <div className="space-y-4">
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-[#111111] w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <div className='flex gap-3'>
                <input 
                  type="password" 
                  placeholder="Password" 
                  className="bg-[#111111] w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
            </div>
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center">
                <input type="checkbox" className="w-4 h-4 accent-green-400"/>
                <label className="ml-2 text-sm text-gray-400">Remember</label>
              </div>
              <Link 
                href='/forgot-password' 
                className='text-sm text-green-400 hover:text-green-600'
              >
                Forgot Password
              </Link>
            </div>
            <button className="w-full py-3 mt-6 text-white bg-[#666666] rounded-full hover:bg-[#575959] text-sm md:text-base">
              Continue
            </button>
            <div className="w-full mt-4">
              <Image 
                src="/tag-card.svg" 
                width={250} 
                height={50} 
                alt="card-tag" 
                className='bg-[#E3E3E3] rounded-full w-full h-9 object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;