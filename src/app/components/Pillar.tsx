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
        <section className="mb-[30px] md:mb-[50px]">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10">
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

                {/* Right Image with Text Labels */}
                <div className="relative flex justify-center items-center">
                    {/* Base Image */}
                    <Image
                        src="/assets/img/macs.webp"
                        alt="Four Pillars"
                        width={500}
                        height={500}
                        className="relative z-0 rounded-4xl border-10 border-[#ccdaff]"
                    />

                    {/* Text Labels positioned over image */}
                    <span
                        className={`absolute top-[7%] left-[220px] active-text -translate-x-1/2 text-[13px] uppercase font-semibold ${active === "mindful"
                                ? "animate-pulseGlow"
                                : "text-[#0000009c] hover:animate-pulseGlow"
                            }`}
                    >
                        Mindful <br /> Mastery
                    </span>

                    <span
                        className={`absolute top-[38%] left-[29%] -translate-y-1/2 text-[13px] uppercase active-text font-semibold ${active === "curiosity"
                             ? "animate-pulseGlow"
                                : "text-[#0000009c] hover:animate-pulseGlow"
                            }`}
                    >
                        Guided <br /> Curiosity
                    </span>

                    <span
                        className={`absolute top-[40%] right-[27%] -translate-y-1/2 text-[13px] uppercase active-text font-semibold ${active === "serenity"
                           ? "animate-pulseGlow"
                                : "text-[#0000009c] hover:animate-pulseGlow"
                            }`}
                    >
                        Digital <br /> Serenity
                    </span>

                    <span
                        className={`absolute bottom-[28%] right-[22%] -translate-x-1/2 text-[13px] uppercase active-text font-semibold ${active === "confidence"
                             ? "animate-pulseGlow"
                                : "text-[#0000009c] hover:animate-pulseGlow"
                            }`}
                    >
                        Expressive <br /> Confidence
                    </span>
                </div>
            </div>
        </section>
    );
}
