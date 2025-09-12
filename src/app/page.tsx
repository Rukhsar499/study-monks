
'use client';
import Image from "next/image";
import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import Rings from "../app/components/Rings";

export default function Home() {
  return (
    <>
      <Header />
     <section className="mb-[30px] md:mb-[50px] relative flex items-center justify-center text-center py-20 h-[750px] bg-gradient-to-b from-[#eef2ff] to-[#c7d2fe] overflow-hidden mb-12">

  {/* Circles */}
  <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
    <span
      className="absolute rounded-full opacity-60"
      style={{
        width: '400px',
        height: '400px',
        backgroundImage: "url('/assets/img/circles2.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        animation: 'pulse 3s ease-in-out infinite',
        animationDelay: '0s',
      }}
    ></span>
    <span
      className="absolute rounded-full opacity-60"
      style={{
        width: '520px',
        height: '520px',
        backgroundImage: "url('/assets/img/circles1.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        animation: 'pulse 3s ease-in-out infinite',
        animationDelay: '1s',
      }}
    ></span>
    <span
      className="absolute rounded-full opacity-60"
      style={{
        width: '650px',
        height: '650px',
        backgroundImage: "url('/assets/img/circles.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        animation: 'pulse 3s ease-in-out infinite',
        animationDelay: '2s',
      }}
    ></span>
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-3xl px-4">
    <h1 className="text-3xl sm:text-4xl md:text-5xl">
      Find Your <span className="font-bold border-b-2 border-black">Focus.</span> Find Your <span className="font-bold border-b-2 border-black">Voice.</span>
    </h1>
    <p className="mt-4 text-gray-700 text-sm sm:text-base">
      You chose the Cambridge path for its depth and global advantage. Our
      specialist mentors cultivate the focus and confidence your child needs
      to master its challenges and unlock their full potential.
    </p>
    <button
     className="mt-6 px-6 py-3 bg-transparent text-[#2F2F2F] border border-[#2F2F2F] font-medium rounded-full transition-all duration-300 ease-in-out transform hover:scale-105"
     >
      Experience the difference
    </button>
  </div>
</section>

<section className="mb-[30px] md:mb-[50px]">
  <div className="container mx-auto">
    <h2 className="text-3xl md:text-4xl text-[#001F3F] text-center">The Framework for Your Focus & Voice</h2>
    {/* 30% width custom utility */}
    <div className="w-full md:w-[30%]">
      <Rings />
    </div>
  </div>
</section>



      <Footer />
    </>
  );
}
