"use client";

import Image from "next/image";

export default function CambridgePath() {
  return (
    <section className="relative border border-gray-200 rounded-md overflow-hidden px-6 py-10 md:py-14">
  <Image
    src="/assets/img/mummy-bg.webp"
    alt="background"
    fill
    className="absolute inset-0 object-cover -z-10"
  />
      {/* Background gradient circle */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/50 rounded-full blur-2xl -z-0"></div>

      <div className="relative z-10 items-center">
        {/* Left Text Section */}
        <div className="text-left">
          <h2 className="text-xl md:text-2xl font-bold text-[#172437] mb-4">
            The Cambridge Path is a Promise. We Help Your Child Fulfil It.
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            You chose the Cambridge curriculum for its promise of a world-class
            education. Ensuring your child thrives in it is the next bridge to
            cross. Don’t let another term go by with the same nagging questions.
            Your 7-day complimentary trial begins with a strategic conversation
            with our expert mentor.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Discover how our focused approach builds not just knowledge, but the
            unshakable confidence to use it. Let’s build their roadmap to success
            today.
          </p>
          <button className="bg-[#a2c24d] text-[#172437] font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#8db740] transition">
            Create My Child’s <br /> Success Plan
          </button>
        </div>

        {/* Right Image Section */}
        <div className=" flex justify-center md:justify-end">
          <Image
            src="/assets/img/mummy.webp"
            alt="Mother and Child"
            width={400}
            height={400}
            className="relative z-10"
          />
        </div>
      </div>
    </section>
  );
}
