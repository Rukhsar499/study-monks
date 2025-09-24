"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Teacher from "./Teacher";
import MentorAccordion from "../mentors/MentorAccordion";
import Section from "../mentors/Section"
import Image from "next/image";

export default function Page() {
    return (
        <>
            <Header />
            <section className="mentr bg-[url('/assets/img/mentrbg1.webp')] bg-cover bg-center min-h-[600px] flex items-center mb-[30px] md:mb-[50px]">
                <div className="max-w-7xl container mx-auto px-4">
                    <h1 className="md:text-[45px] text-[40px] text-[#003C79] font-bold">
                        Our Mentors
                    </h1>
                    <p className="text-[14px] text-gray-700">
                        The Heart of the Study Monks Promise
                    </p>
                </div>
            </section>
            <section className="mb-[30px] md:mb-[50px]">
                <div className="max-w-7xl container mx-auto px-4">
                    <h2 className="text-[36px] font-bold text-center">Meet the Wise Guardians</h2>
                    <p className="text-center text-[14px] text-[#484848]">
                        Our mentors are the living embodiment of our philosophy. They are handpicked not only for their deep subject expertise but for their rare ability to guide and inspire. We believe so strongly in this that <span className="text-[#003c79] font-bold">only one out of 5 applicants</span> meet our rigorous standards for both academic excellence and empathetic guidance. Below, you will find dedicated partners for your child&apos;s educational journey.
                    </p>
                </div>
            </section>

            <Teacher />
            {/* <section className="mb-[30px] md:mb-[100px] mt-[100px] relative">
                <div className="absolute top-0 left-80 hidden md:block">
                    <Image
                        src="/assets/img/l-bh.png"
                        alt="Mother and Child"
                        width={250}
                        height={250}
                        className="z-10"
                    />
                </div>
                <div className="max-w-7xl container mx-auto px-4">
                    <h2 className="text-[36px] font-bold text-center mb-5">Ready to Find the Perfect Teacher?</h2>
                    <p className="text-center text-[16px] text-[#484848]">
                        Schedule a complimentary Clarity Session to speak with one of our academic counselors and discuss how we can tailor a learning path for your child.
                    </p>
                    <div className="flex justify-center items-center mt-5">
                        <button className="bg-[#B2BF4D] text-[#000] text-left text-[16px] px-8 py-3 rounded-3xl"
                            style={{ boxShadow: "0 4px 4px rgba(0, 0, 0, .39)" }}>
                            Schedule a clarity session
                        </button>
                    </div>
                </div>
                <div className="absolute top-0 right-80 hidden md:block">
                    <Image
                        src="/assets/img/r-bh.png"
                        alt="Mother and Child"
                        width={250}
                        height={250}
                        className="z-10"
                    />
                </div>
            </section> */}
            <Section
                title="Ready to Find the Perfect Teacher?"
                description="Schedule a complimentary Clarity Session to speak with one of our academic counselors and discuss how we can tailor a learning path for your child."
                buttonText="Schedule a clarity session"
                leftImage="/assets/img/l-bh.png"
                rightImage="/assets/img/r-bh.png"
            />
            <MentorAccordion />
            <Footer />
        </>
    );
}