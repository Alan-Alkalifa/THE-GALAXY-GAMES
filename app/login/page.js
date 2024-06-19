import React from 'react';
import Image from 'next/image';
import AuthNav from '../component/AuthNav';
import Link from 'next/link';

const Login = () => {
  return (
    <>
      <AuthNav/>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-t from-[#656565] to bg-[#0D0D0D]">
        <div className='flex bg-gradient-to-t from-[#292929] to bg-[#111111] rounded-full'>
          <div>
            <Image src="/card-register.svg" width={450} height={50} alt="card"/>
          </div>
          <div className="w-full max-w-md p-8 space-y-3 bg-gradient-to-t from-[#292929] to bg-[#111111] rounded-e-3xl shadow-md">
            <h1 className='text-bold text-xl'>Login</h1> 
            <div className="flex justify-center space-x-2">
          <button className="flex px-8 py-2 justify-center items-center gap-2 text-white bg-[#5856D6] rounded-full hover:bg-[#5452E4]"><Image src="/facebook.svg" width={10} height={10} alt='facebook'/>Facebook</button>
          <button className="flex px-8 py-2 justify-center items-center gap-2 text-white bg-[#00BCD4] rounded-full hover:bg-[#01ACC2]"><Image src="/twitter.svg" width={15} height={15} alt='twitter'/>Twitter</button>
          <button className="flex px-8 py-2 justify-center items-center gap-2 text-white bg-red-600 rounded-full hover:bg-red-700"><Image src="/goggle.svg" width={15} height={15} alt='goggle'/>Google</button>
        </div>
            <p className="text-sm text-center text-gray-400 py-10"> ----- Or login with email ----- </p>
            <div className="space-y-4">
              <input type="email" placeholder="Email" className="bg-[#111111] w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"/>
              <div className='flex gap-3'>
                <input type="password" placeholder="Password" className="bg-[#111111] w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"/>
              </div>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="w-4 h-4 accent-green-400"/>
              <div className=' space-x-40'>
                <label className="ml-2 text-sm text-gray-400 py-3">Remember</label>
                <Link href='/forgot-password' className='ml-2 text-sm text-green-400 py-3 hover:text-green-600'>Forgot Password</Link>
              </div>
            </div>
            <button className="w-full py-2 mt-4 text-white bg-[#666666] rounded-full hover:bg-[#575959]">Continue</button>
            <Image src="/tag-card.svg" width={250} height={50} alt="card-tag" className='bg-[#E3E3E3] rounded-full w-full h-9'/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;