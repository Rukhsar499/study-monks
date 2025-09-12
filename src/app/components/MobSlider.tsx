"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const MobSlider = () => {
  const [activeId, setActiveId] = useState(1); // default active box

  const slides = [
    {
      id: 1,
      title: "Assess & <br/> Strategize",
      content:
        "We begin with a Diagnostic Assessment & Strategic Blueprint to understand your child's unique needs, then co-create a personalized learning plan.",
    },
    {
      id: 2,
      title: "Engage & <br/> Build Concepts",
      content:
        "Live, interactive 1:8 Micro Classes to focus on deep conceptual understanding using curated resources to enable concept clarity and critical thinking.",
    },
    {
      id: 3,
      title: "Practice & <br/> Master",
      content:
        "Targeted assignments and continuous feedback by Mentors, reinforcing Application, Mastery & Exam Readiness for Cambridge Assessments.",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:pt-8">
      <h3 className="text-[#001F3F] md:text-[26px] border-b-2 border-black font-semibold inline-block">
        The Focus Chamber
      </h3>
      <p className="mt-3">
        The pinnacle of learning. Students synthesize knowledge to produce
        original work, formulate new hypotheses, and design innovative
        solutions.
      </p>

      {/* Mobile Slider */}
      <div className="block md:hidden">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            480: { slidesPerView: 1.2 },
            640: { slidesPerView: 1.5 },
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className={`rounded-xl shadow-md p-6 transition-transform hover:-translate-y-1 ${
                  activeId === slide.id
                    ? "bg-green-100"
                    : "bg-[#F4F4F4]"
                }`}
                onMouseEnter={() => setActiveId(slide.id)} // hover pe active set karo
              >
                <h4
                  className="text-lg font-bold text-[#001F3F] mb-2"
                  dangerouslySetInnerHTML={{ __html: slide.title }}
                />
                <p className="text-sm text-gray-600">{slide.content}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-3 gap-8 mt-[40px]">
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`p-6 transition-transform hover:-translate-y-1 cursor-pointer ${
              activeId === slide.id ? "bg-[#EEF7D3]" : "bg-[#F4F4F4]"
            }`}
            onMouseEnter={() => setActiveId(slide.id)} // hover pe active change hoga
          >
            <h4
              className="text-lg font-bold text-[#001F3F] mb-2"
              dangerouslySetInnerHTML={{ __html: slide.title }}
            />
            <p className="text-sm text-gray-600">{slide.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobSlider;
