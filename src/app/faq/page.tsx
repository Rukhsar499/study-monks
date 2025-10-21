"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Section from "../mentors/Section"


export default function Page() {
    return (
        <>
            <Header />
            <section className="mentr bg-[url('/assets/img/faq-img.png')] bg-cover bg-center min-h-[600px] flex items-center">
                <div className="max-w-7xl container mx-auto px-4">
                    <h1 className="md:text-[45px] text-[40px] text-[#003C79] font-bold">
                        Frequently Asked Questions
                    </h1>
                    <h5 className="text-[24px] text-[#484848] font-[500]">
                        A 360° Guide for Parents
                    </h5>
                </div>
            </section>
            <section className="container mx-auto max-w-7xl px-4mentr bg-[url('/assets/img/studys.webp')] bg-cover bg-center min-h-[280px]  flex items-center"></section>

            <section className="mb-[30px] md:mb-[50px] relative -mt-50">
                <div className="max-w-7xl container mx-auto px-4">
                    <h2 className="text-[36px] font-bold text-center">A 360° Guide for Parents</h2>
                    <p className="text-center text-[14px] text-[#484848] mb-4">
                        Welcome to Study Monks. We understand that choosing the right educational support for your child is one of the most significant decisions you will make. In a world of endless options, clarity and trust are paramount.
                    </p>
                    <p className="text-center text-[14px] text-[#484848]">
                       This guide has been designed in a user-friendly, expandable format. Simply click on a question that interests you to reveal a detailed answer. This allows you to quickly find the information you need while still having access to a comprehensive, 360-degree view of our philosophy, our methods, and our unwavering commitment to your child's success and well-being. We invite you to explore this resource to understand how we nurture confident, curious, and resilient young minds within the Cambridge curriculum.
                    </p>
                </div>
            </section>
            <section className="container mx-auto max-w-7xl px-4mentr bg-[url('/assets/img/MONKS.webp')] bg-cover bg-center min-h-[280px] flex items-center -mt-[40px]"></section>
          

            <Section
                title="Ready to Begin the Journey?"
                description="Experience the Study Monks difference for yourself. Book a free trial class to see our Mindful Mastery approach in action."
                buttonText="Book a Free Trial"
                leftImage="/assets/img/l-bh.png"
                rightImage="/assets/img/r-bh.png"
            />
           
            <Footer />
        </>
    );
}