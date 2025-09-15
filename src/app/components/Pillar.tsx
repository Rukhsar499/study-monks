"use client";

import { useState } from "react";
import Image from "next/image";

type Pillar = {
  id: string;
  title: string;
  description: string;
};

const pillars: Pillar[] = [
  {
    id: "mindful",
    title: "Mindful Mastery",
    description:
      "We move beyond rote learning to ensure deep conceptual understanding. Our mentors foster a calm, focused approach that builds lasting knowledge and unshakable confidence.",
  },
  {
    id: "curiosity",
    title: "Guided Curiosity",
    description:
      "Encouraging exploration through guided questioning, building analytical thinking and creative problem-solving skills.",
  },
  {
    id: "serenity",
    title: "Digital Serenity",
    description:
      "Helping learners maintain balance in the digital world while using technology mindfully and effectively.",
  },
  {
    id: "confidence",
    title: "Expressive Confidence",
    description:
      "Empowering learners to express ideas confidently, fostering communication and leadership abilities.",
  },
];

export default function OurPromise() {
  // ✅ default active is "mindful"
  const [active, setActive] = useState<string>("mindful");

  return (
    <section className="mb-[30px] md:mb-[50px]">
        <h2 className="text-2xl md:text-4xl font-bold text-[#001F3F] mb-3 text-center">Our Promise</h2>
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10">
        {/* Left Accordion */}
        <div>
          
          <p className="text-gray-600 mb-6">
            True education is not a race for grades; it is the art of building a
            confident, curious, and resilient mind.
          </p>

          {pillars.map((pillar) => (
            <div key={pillar.id} className="border-b">
              <button
                onClick={() => setActive(pillar.id)}
                className="w-full flex justify-between items-center py-4 text-left font-semibold text-lg"
              >
                {pillar.title}
                <span>{active === pillar.id ? "−" : "+"}</span>
              </button>

              {active === pillar.id && (
                <p className="text-gray-600 pb-4 transition-all duration-300">
                  {pillar.description}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Right Image with Text Labels */}
        <div className="relative flex justify-center items-center before:content-[''] before:absolute before:bottom-[-12%] before:right-0 before:w-80 before:h-80 before:bg-[url('/assets/img/squares.webp')] before:bg-no-repeat before:bg-contain before:z-[-1]">
          {/* Base Image */}
          <Image
            src="/assets/img/macs.webp"
            alt="Four Pillars"
            width={500}
            height={500}
            className="relative z-0 rounded-3xl shadow-xl border-10 border-[#ccdaff]"
          />

          {/* Labels */}
          <span
            className={`absolute text-[12px] md:text-[13px] uppercase font-semibold 
              top-[5%] left-[50%] md:left-[220px] xl:left-[247px] -translate-x-1/2 
              ${active === "mindful" ? "pulse-glow" : "text-[#0000009c]"}`}
          >
            Mindful <br /> Mastery
          </span>

          <span
            className={`absolute text-[12px] md:text-[13px] uppercase font-semibold 
              top-[34%] left-[30%] md:left-[29%] 
              ${active === "curiosity" ? "pulse-glow" : "text-[#0000009c]"}`}
          >
            Guided <br /> Curiosity
          </span>

          <span
            className={`absolute text-[12px] md:text-[13px] uppercase font-semibold 
              top-[36%] right-[25%] md:right-[27%] 
              ${active === "serenity" ? "pulse-glow " : "text-[#0000009c]"}`}
          >
            Digital <br /> Serenity
          </span>

          <span
            className={`absolute text-[12px] md:text-[13px] uppercase font-semibold 
              bottom-[25%] md:bottom-[28%] right-[22%] -translate-x-1/2 
              ${active === "confidence" ? "pulse-glow" : "text-[#0000009c]"}`}
          >
            Expressive <br /> Confidence
          </span>
        </div>
      </div>
    </section>
  );
}
