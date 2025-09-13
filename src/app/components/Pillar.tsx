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
  const [active, setActive] = useState<string>("mindful");

  return (
    <section className="container mx-auto grid md:grid-cols-2 gap-10 py-12">
      {/* Left Accordion */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Our Promise</h2>
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

      {/* Right Image */}
      <div className="relative flex justify-center items-center">
        <Image
          src="/assets/img/pillars.png" // apna uploaded image yaha rakhna (public folder me)
          alt="Four Pillars"
          width={500}
          height={500}
          className={`transition-all duration-700 ease-in-out ${
            active === "mindful"
              ? "scale-105"
              : active === "curiosity"
              ? "rotate-3"
              : active === "serenity"
              ? "translate-y-2"
              : "translate-x-2"
          }`}
        />
        {/* Optional: active pillar label overlay */}
        <span className="absolute bottom-4 bg-blue-600 text-white text-sm px-3 py-1 rounded-full shadow">
          {pillars.find((p) => p.id === active)?.title}
        </span>
      </div>
    </section>
  );
}
