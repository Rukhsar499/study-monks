"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Teacher from "../Teacher"

export default function Page() {
  return (
    <>
      <Header />
      <section className="mentr bg-[url('/assets/img/mentrbg1.webp')] bg-cover bg-center min-h-[600px] flex items-center">
        <div className="max-w-7xl container mx-auto px-4">
          <h1 className="md:text-[45px] text-[40px] text-[#003C79] font-bold">
            Our Mentors
          </h1>
          <p className="text-[14px] text-gray-700">
            The Heart of the Study Monks Promise
          </p>
        </div>
      </section>
      <Teacher />
      <Footer />
    </>
  );
}