"use client";
import React from "react";
import Image from "next/image";

const SnapshotSection = () => {
  return (
    <section className="relative py-16 bg-white  mb-[30px] md:mb-[150px]">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-[#001F3F] mb-3 text-center">
          The Study Monks Impact: A Snapshot
        </h2>

        {/* Circles */}
        <div className="flex justify-center items-center gap-[-30px] relative">
          {/* Circle 1 */}
          <div className="relative z-20 w-40 h-40 md:w-55 md:h-55 flex items-center justify-center rounded-full bg-[#a9cf84] text-white  shadow-lg">
            <span className="font-bold text-3xl">94%</span>
            <span className="absolute -bottom-20 -left-[0%] -translate-x-1/2 text-[#484848] text-sm w-70 leading-snug">
              <Image
                src="/assets/img/arrow3.png"
                alt="testimonial"
                className=""
                width={100} height={120}
              />
              of students report a significant increase in subject confidence.
            </span>
          </div>

          {/* Circle 2 */}
          <div className="relative z-10 w-40 h-40 md:w-60 md:h-60 flex items-center justify-center rounded-full bg-[#8db740] text-white text-2xl shadow-lg -ml-6 -mr-6">
            <span className="font-bold text-3xl">3X</span>

            {/* Arrow + Text */}
            <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 flex flex-col items-center text-center w-72 text-[#484848] text-sm leading-snug z-20">
              <Image
                src="/assets/img/arrow1.png"
                alt="testimonial"
                width={5}
                height={70}
                className="mb-2"
              />
              <p>more likely to actively participate in class discussions.</p>
            </div>
          </div>

          {/* Circle 3 */}
          <div className="relative z-9 w-40 h-40 md:w-65 md:h-65 flex items-center justify-center rounded-full bg-[#4D9135] text-white shadow-lg">
            <span className="font-bold text-3xl">4.8/5</span>
            <span className="absolute -bottom-12 left-[160%] -translate-x-1/2 text-[#484848] text-sm w-70 leading-snug">
              <Image
                src="/assets/img/arrow2.png"
                alt="testimonial"
                className=""
                width={100} height={120}
              />
              average satisfaction rating from our parent community.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SnapshotSection;
