"use client";

import Image from "next/image";

export default function CambridgePath() {
    return (
        <section className="relative border border-gray-100  overflow-hidden px-6  md:pt-6 pb-3">
            <Image
                src="/assets/img/mummy-bg.webp"
                alt="background"
                fill
                className="absolute inset-0 -z-10"
            />
            {/* Background gradient circle */}
            <div className="absolute top-0 right-0 w-[300px] h-[260px] bg-white/50 rounded-full blur-2xl -z-0"></div>

            <div className="relative z-10 items-center">
                {/* Left Text Section */}
                <div className="text-left">
                    <h2 className="text-xl md:text-2xl font-bold text-[#172437] mb-4">
                        Mentors – Our Method Has a Heartbeat.
                    </h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                        A platform offers lessons, but a true mentor delivers a breakthrough. Our Mentors are more than experts in the Cambridge curriculum; they are experts in your child. And the right mentor can change a child's entire academic trajectory, unlocking their true potential.
                    </p>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Find that perfect mentor for your child. Unlock their potential.
                    </p>
                    <div className="">
                        <button className="bg-[#B2BF4D] text-[#000] text-left text-sm px-4 py-3 rounded-3xl"
                            style={{ boxShadow: "0 4px 4px rgba(0, 0, 0, .39)" }}>
                            Meet A Wise Gaurdian
                        </button>
                    </div>

                    {/* Right Image Section */}
                    <div className="flex justify-center md:justify-end -mt-17">
                        <Image
                            src="/assets/img/mentor-cta.png"
                            alt="Mother and Child"
                            width={22   0}
                            height={250}
                            className="relative z-10"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
