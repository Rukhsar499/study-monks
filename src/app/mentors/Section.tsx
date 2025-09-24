"use client";

import Image from "next/image";

type SectionProps = {
  title: string;
  description: string;
  buttonText: string;
  leftImage?: string;
  rightImage?: string;
};

export default function Section({
  title,
  description,
  buttonText,
  leftImage,
  rightImage,
}: SectionProps) {
  return (
    <section className="mb-[30px] md:mb-[100px] mt-[100px] relative">
      {/* Left Image (desktop only) */}
      {leftImage && (
        <div className="absolute top-0 left-80 hidden md:block">
          <Image
            src={leftImage}
            alt="Left decoration"
            width={250}
            height={250}
            className="z-10"
          />
        </div>
      )}

      {/* Content */}
      <div className="max-w-7xl container mx-auto px-4">
        <h2 className="text-[36px] font-bold text-center mb-5">{title}</h2>
        <p className="text-center text-[16px] text-[#484848]">{description}</p>
        <div className="flex justify-center items-center mt-5">
          <button
            className="bg-[#B2BF4D] text-[#000] text-left text-[16px] px-8 py-3 rounded-3xl"
            style={{ boxShadow: "0 4px 4px rgba(0, 0, 0, .39)" }}
          >
            {buttonText}
          </button>
        </div>
      </div>

      {/* Right Image (desktop only) */}
      {rightImage && (
        <div className="absolute top-0 right-80 hidden md:block">
          <Image
            src={rightImage}
            alt="Right decoration"
            width={250}
            height={250}
            className="z-10"
          />
        </div>
      )}
    </section>
  );
}
