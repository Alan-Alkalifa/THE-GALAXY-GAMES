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
      <div className="bg-black -mt-5 flex justify-center ">
 <img src="/games.svg" alt="banner-1" width={1300} height={0} className="image-responsive center lg:p-10 md:p-10 sm:p-10 sm:top-0"/>
</div>

<div className="bg-gradient-to-b from-black to-[#3B3B3B]">
<CardConsole/>
</div>

<div className="bg-[#3B3B3B] flex justify-center ">
 <img src="/trending.svg" alt="banner-1" width={1300} height={0} className="image-responsive center lg:p-10 md:p-10 sm:p-10 sm:top-0"/>
</div>

<div className="bg-gradient-to-t from-[#666666] to-[#3B3B3B]">
<CardCollection/>
</div>

<div className="bg-[#666666] -mt-5 flex justify-center ">
 <img src="/explore.svg" alt="banner-1" width={1300} height={0} className="image-responsive center lg:p-10 md:p-10 sm:p-10 sm:top-0"/>
</div>

<div className="bg-[#666666]">
<CardCategory/>

<div className="bg-[#666666] -mt-5 flex justify-center ">
 <img src="/accesories.svg" alt="banner-1" width={1300} height={0} className="image-responsive center lg:p-10 md:p-10 sm:p-10 sm:top-0"/>
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