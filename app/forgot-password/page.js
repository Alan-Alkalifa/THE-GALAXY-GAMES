import React from 'react';
import Image from 'next/image';
import AuthNav from '../component/AuthNav';

const ForgotPassword = () => {
  return (
    <>
      <AuthNav/>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-t from-[#656565] to bg-[#0D0D0D] px-4 py-6 md:py-0">
        <div className='flex flex-col md:flex-row bg-gradient-to-t from-[#292929] to bg-[#111111] rounded-2xl overflow-hidden max-w-[95%] md:max-w-5xl mx-auto'>
          {/* Left Section */}
          <div className="w-full md:w-[500px] p-6 md:p-8 space-y-4 md:space-y-6">
            <h1 className='text-xl md:text-2xl font-bold text-center md:text-left mb-4'>Forgot Password</h1> 
            
            {/* Social Login Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-2">
              <button className="flex px-4 sm:px-6 py-2.5 justify-center items-center gap-2 text-white text-sm bg-[#5856D6] rounded-full hover:bg-[#5452E4] transition-colors">
                <Image src="/facebook.svg" width={16} height={16} alt='facebook' className="w-4 h-4"/>
                <span>Facebook</span>
              </button>
              <button className="flex px-4 sm:px-6 py-2.5 justify-center items-center gap-2 text-white text-sm bg-[#00BCD4] rounded-full hover:bg-[#01ACC2] transition-colors">
                <Image src="/twitter.svg" width={16} height={16} alt='twitter' className="w-4 h-4"/>
                <span>Twitter</span>
              </button>
              <button className="flex px-4 sm:px-6 py-2.5 justify-center items-center gap-2 text-white text-sm bg-red-600 rounded-full hover:bg-red-700 transition-colors">
                <Image src="/goggle.svg" width={16} height={16} alt='goggle' className="w-4 h-4"/>
                <span>Google</span>
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 py-4 md:py-6">
              <div className="flex-1 h-[1px] bg-gray-600"></div>
              <p className="text-sm text-gray-400 whitespace-nowrap">Or login with email</p>
              <div className="flex-1 h-[1px] bg-gray-600"></div>
            </div>

            {/* Email Input */}
            <div className="space-y-4">
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full px-4 py-3 text-sm bg-[#111111] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
              />
            </div>

            {/* Continue Button */}
            <div className='py-4 md:py-6'>
              <button className="w-full py-3 text-white text-sm bg-[#666666] rounded-full hover:bg-[#575959] transition-colors">
                Continue
              </button>
            </div>

            {/* Tag Card */}
            <div className="relative w-full h-10">
              <Image 
                src="/tag-card.svg" 
                fill
                alt="card-tag" 
                className='object-contain bg-[#E3E3E3] rounded-full'
              />
            </div>
          </div>

          {/* Right Image Section - Hidden on mobile */}
          <div className="hidden md:block md:w-[450px] relative">
            <div className="relative h-full min-h-[500px]">
              <Image 
                src="/card-forgotpass.svg" 
                fill
                alt="card"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;