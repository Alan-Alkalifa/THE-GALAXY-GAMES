import CardAccessories from "./component/CardAccessories";
import CardCategory from "./component/CardCategory";
import CardCollection from "./component/CardCollection";
import CardConsole from "./component/CardConsole";
import HomeNav from "./component/HomeNav";
import Image from "next/image"

export default function Home() {
  return (
    <body>
   <HomeNav/>
        <div className="flex justify-center items-center min-h-screen -mt-40">
        <div className="flex justify-center mt-2.5" style={{ marginTop: '10px' }}>
          <Image src="/main-banner.svg" alt="main-banner" width={1300} height={0} className="image-responsive lg:p-10 md:p-10 sm:p-10 sm:top-0"/>
        </div>
      </div>
      <div className="bg-black px-6 text-center -mt-[190px]">
  <h1 className="font-bold tracking-widest uppercase text-responsive 
               text-[5vw] md:text-[4vw] lg: lg:text-[100px] xl:text-[150px] 
               text-[#676767]">
    New Release<br/>
    <span className="text-white absolute top-[93%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 
                     text-[2vw] md:text-[1.5vw] lg:py-12 lg:text-[50px] xl:text-[62px]">
      All of Games
    </span>
  </h1>
</div>
<div className="bg-gradient-to-b from-black to-[#3B3B3B]">
<CardConsole/>
</div>

<div className="bg-[#3B3B3B]">
  <h1 className="font-bold tracking-widest text-center bg-[#3B3B3B] text-[5vw] md:text-[4vw] lg:text-[3vw] xl:text-[200px] text-[#676767]">
    TRENDING<br/>
    <span className="text-white absolute top-[236%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-[2vw] md:text-[1.5vw] lg:py-12 lg:text-[50px] xl:text-[62px w-full]">
      Top Collection
    </span>
  </h1>
</div>

<div className="bg-gradient-to-t from-[#666666] to-[#3B3B3B]">
<CardCollection/>
</div>

<div className="-mt-4 bg-[#666666]">
<h1 class="text-[#3D3D3D] font-bold text-[200px] tracking-widest text-center bg-[#666666]">EXPLORE<br/><span class="text-white text-[40px] absolute top-[397%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-full">Browse All Categories</span></h1>
</div>

<div className="bg-[#666666]">
<CardCategory/>
<div className="bg-[#666666] pb-5">
  <h1 className="font-bold tracking-widest w-full text-center text-responsive  bg-gradient-to-r from-[#C2B2BD] via-[#C2B2BD] to-[#ADC0C4] text-transparent bg-clip-text 
               text-[5vw] md:text-[4vw] lg: lg:text-[100px] xl:text-[150px] 
               text-[#676767]">
    NEW REALEASE  <br/>
    <span className="text-white absolute top-[493%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 
                     text-[2vw] md:text-[1.5vw] lg:py-12 lg:text-[50px] xl:text-[62px]">
      Get New One!</span>
      </h1>
</div>
</div>

<div className="bg-[#666666]">
<CardAccessories/>
</div>

<footer className="flex items-center justify-center w-full h-full bg-[#666666]"><Image src="/footerHome.svg" width={1000} height={1000} alt="footer"/>
</footer>
    </body>
  );
}