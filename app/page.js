import CardAccessories from "./component/CardAccessories";
import CardCategory from "./component/CardCategory";
import CardCollection from "./component/CardCollection";
import CardConsole from "./component/CardConsole";
import HomeNav from "./component/HomeNav";
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <HomeNav />

      {/* Hero Section */}
      <section className="relative w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src="/main-banner.svg"
              alt="Main banner"
              fill
              priority
              className="object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Games Banner */}
      <section className="bg-black w-full overflow-hidden">
        <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8 lg:py-10">
          <div className="relative w-full aspect-[21/9] sm:aspect-[16/7] md:aspect-[16/6] lg:aspect-[16/5]">
            <Image
              src="/games.svg"
              alt="Games banner"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 85vw"
              priority
              className="object-cover object-center rounded-lg shadow-lg transform hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Console Section */}
      <section className="bg-gradient-to-b from-black to-[#3B3B3B] w-full">
        <CardConsole />
      </section>

      {/* Trending Banner */}
      <section className="bg-[#3B3B3B] w-full overflow-hidden">
        <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8 lg:py-10">
          <div className="relative w-full aspect-[21/9] sm:aspect-[16/7] md:aspect-[16/6] lg:aspect-[16/5]">
            <Image
              src="/trending.svg"
              alt="Trending banner"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 85vw"
              className="object-cover object-center rounded-lg shadow-lg transform hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Collection Section */}
      <section className="bg-gradient-to-t from-[#666666] to-[#3B3B3B] w-full">
        <CardCollection />
      </section>

      {/* Explore Banner */}
      <section className="bg-[#666666] w-full overflow-hidden">
        <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8 lg:py-10">
          <div className="relative w-full aspect-[21/9] sm:aspect-[16/7] md:aspect-[16/6] lg:aspect-[16/5]">
            <Image
              src="/explore.svg"
              alt="Explore banner"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 85vw"
              className="object-cover object-center rounded-lg shadow-lg transform hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Category Section */}
      <section className="bg-[#666666] w-full">
        <CardCategory />
        <div className="px-4 sm:px-6 lg:px-8 py-6 md:py-10">
          <div className="max-w-7xl mx-auto">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/accesories.svg"
                alt="Accessories banner"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Accessories Section */}
      <section className="bg-[#666666] w-full">
        <CardAccessories />
      </section>

      {/* Footer */}
      <footer className="bg-[#666666] w-full px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative aspect-[2/1] w-full">
            <Image
              src="/footerHome.svg"
              alt="Footer"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}