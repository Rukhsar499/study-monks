
'use client';

import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import Rings from "../app/components/Rings";
import Compass from "../app/components/Compass";
import MobSlider from "../app/components/MobSlider";
import CambridgeSection from "../app/components/CambridgeSection";
import Pillar from "../app/components/Pillar";
import BottomAccordion from "../app/components/BottomAccordion";
import Testimonial from "../app/components/Testimonial";
import Snapshot from "../app/components/Snapshot";


export default function Home() {
  const data = [
    {
      title: "The Cambridge Compass",
      text: [
        "Our proprietary",
        "Cambridge aligned framework",
        "is designed to provide purpose, direction, and clarity at every stage of your child's academic journey",
      ],
    },
    {
      title: "The Cambridge Code",
      text: [
        "Get our proprietary",
        "Curated content,",
        "designed for each Strand, Unit & Objective meticulously offering a clear and coherent pathway to success.",
      ],
    },
    {
      title: "The Mastery Method",
      text: [
        "Face your exams with unshakable confidence, powered by our Targeted",
        "Progression Test Prep",
        "and Comprehensive",
        "Checkpoint Prep.",
      ],
    },
  ];
  return (
    <>
      <Header />
      <section className="mb-12 md:mb-[50px] relative flex items-center justify-center text-center py-20 h-[750px] bg-gradient-to-b from-[#eef2ff] to-[#c7d2fe] overflow-hidden mb-12">

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
          <h2 className="text-3xl md:text-4xl text-[#001F3F] text-center">
            The Framework for Your Focus & Voice
          </h2>

          {/* Flex row with spacing */}
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-6 mt-6">
            <div className="w-full md:w-[35%] flex justify-center">
              <Rings />
            </div>
            <div className="w-full md:w-[60%]">
              <MobSlider />
            </div>
          </div>
        </div>
      </section>

      <Compass items={data} />
      <CambridgeSection />
      <Pillar />
      <section className="bg-[#172437] md:px-2 px-2 py-6 md:py-25 mb-[30px] md:mb-[50px] mt-[100px]  text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-[#fff]">The Heart of Our Promise: The Mentors</h2>
          <h3 className="text-[#ffc40c] text-[130px]">&lt; 20%</h3>
          <h4 className="text-[#fff] text-[30px] mb-4">Mentor Acceptance Rate</h4>
          <p className="text-[#fff] md:w-[60%] mx-auto w-[100%] mt-4">
            Our mentors are the living embodiment of our promise. They are handpicked not only for their deep subject expertise but for their rare ability to guide and nurture young minds. Fewer than 20% of applicants meet our rigorous standards for both academic excellence and empathetic guidance.
          </p>
        </div>
      </section>
       <Snapshot />
      <Testimonial />
     
      <BottomAccordion />
     
      <Footer />
    </>
  );
}
