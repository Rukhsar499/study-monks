// src/app/components/SubjectCards.tsx
"use client";
import Image from "next/image";

interface SubjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const subjects: SubjectCardProps[] = [
  {
    title: "English",
    description: "Enhance your reading, writing, and communication skills with interactive lessons and grammar practice.",
    image: "/assets/img/EducationScience.png", 
    link: "/subjects/english",
  },
  {
    title: "Mathematics",
    description: "Master numbers, equations, and problem-solving techniques through engaging examples and exercises.",
    image: "/assets/img/Maths.png",
    link: "/subjects/maths",
  },
  {
    title: "Science",
    description: "Explore the wonders of physics, chemistry, and biology with hands-on experiments and fun learning modules.",
    image: "/assets/img/enlishg.png",
    link: "/subjects/science",
  },
];

export default function SubjectCards() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl  font-bold text-left text-blue-900 mb-4">
         Live Classes
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((subject) => (
            <div
              key={subject.title}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative w-full h-52">
                <Image
                  src={subject.image}
                  alt={subject.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col h-[230px] justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">
                    {subject.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{subject.description}</p>
                </div>
                <a
                  href={subject.link}
                  className="mt-4 inline-block text-center bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg transition-all"
                >
                  View More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
