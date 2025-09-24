"use client";

import Image from "next/image";

export default function CambridgePath() {
    return (
        <section className="relative border border-gray-100 md:h-140 h-170 position-relative  overflow-hidden px-6 py-4  md:pt-6 pb-3">
            <Image
                src="/assets/img/mummy-bg.webp"
                alt="background"
                fill
                className="absolute inset-0 -z-10"
            />
            <div className="">
                <h2 className="text-xl md:text-2xl font-bold text-[#172437] mb-4">
                    Mentors – Our Method Has a Heartbeat.
                </h2>
                <p className="text-gray-600 text-sm  mb-4 leading-relaxed">
                    A platform offers lessons, but a true mentor delivers a breakthrough. Our Mentors are more than experts in the Cambridge curriculum; they are experts in your child. And the right mentor can change a child&apos;s entire academic trajectory, unlocking their true potential.
                </p>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    Find that perfect mentor for your child. Unlock their potential.
                </p>
                <div className="">
                    <button className="bg-[#B2BF4D] text-[#000] text-left text-[16px] px-8 py-3 rounded-3xl md-[mb-0] mb-4"
                        style={{ boxShadow: "0 4px 4px rgba(0, 0, 0, .39)" }}>
                        Meet A Wise Gaurdian
                    </button>
                </div>
                <div className="absolute bottom-0 right-0">
                    <Image
                        src="/assets/img/mentor-cta.png"
                        alt="Mother and Child"
                        width={220}
                        height={250}
                        className="z-10"
                    />
                </div>
            </div>
        </section>
    );
}
