"use client";

import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

interface AccordionItem {
  id: string;
  title: string;
  content: {
    title?: string;
    description: string;
  }[];
}

const accordionData: AccordionItem[] = [
  {
    id: "panel1",
    title:
      "Why Choose Study Monks for your Child’s Cambridge Curriculum Journey ?",
    content: [
      {
        description:
          "As a parent, you want the absolute best for your child's education. The Cambridge Curriculum offers a strong foundation, but you might be wondering: How can I ensure my child not only keeps up but thrives in this demanding curriculum? Is rote memorization enough for success, or are there deeper skills they need to develop? How can I bridge the gap between what's taught in school and the specific needs of my child? Here at Study Monk, we address these concerns and go beyond traditional learning to empower your child on their Cambridge journey.",
      },
    ],
  },
  {
    id: "panel2",
    title: "3 Reasons Why We Are The Perfect Partners",
    content: [
      {
        title: "Building Blocks of Knowledge: One Engaging Lesson at a Time",
        description:
          "We take the complexity out of the Cambridge Curriculum with engaging, bite-sized lessons that act as building blocks for a strong foundation. Imagine your child asking Why? and How? - a sign that their natural curiosity is flourishing. This sets them on a path of learning that benefits their academic and professional careers.",
      },
      {
        title: "Beyond the Textbook: Equipping Your Child with Future-Ready Skills",
        description:
          "We equip your child with critical thinking, problem-solving, communication, and collaboration skills essential for success in the 21st century. Imagine your child confidently tackling complex problems and building skills that will distinguish them in any challenge they encounter.",
      },
      {
        title: "Bridging the Gap: Personalized Learning that Complements the Classroom",
        description:
          "Think of us as a powerful complement to classroom learning. We bridge the gap between classroom lessons and your child’s specific needs. Our personalized learning approach ensures targeted improvement, closes gaps, and accelerates progress.",
      },
    ],
  },
  {
    id: "panel3",
    title:
      "How much flexibility does Study Monks offer on choosing subjects for my child?",
    content: [
      {
        description:
          "Ultimately, the choice is yours! We offer individual enrolment in English, Mathematics, and Science. However, for a truly enriching experience that strengthens core skills and aligns with the spirit of the Cambridge Curriculum, we highly recommend all three subjects! Opting for all three unlocks a secret weapon – tutor flexibility that allows tutors to adjust the pace within a class and maximise the benefits of our finely tuned monthly calendars.",
      },
    ],
  },
];

export default function BottomAccordion() {
  const [expanded, setExpanded] = useState<string>("panel1");

  const togglePanel = (id: string) => {
    setExpanded(expanded === id ? "" : id);
  };

  return (
    <section className="faq mb-[30px] md:mb-[50px]">
        <div className="container mx-auto">
    <div className="d-flex w-full md:w-[55%]">
        <div className="">
      {accordionData.map((item) => (
        <div
          key={item.id}
          className="border mb-3 border-gray-200 rounded-lg shadow-sm overflow-hidden"
        >
          {/* Header */}
          <button
            onClick={() => togglePanel(item.id)}
            className={`w-full flex justify-between items-center px-4 py-3 text-left font-medium transition-all duration-300 ${
              expanded === item.id
                ? "bg-[#001F3F] text-white"
                : "bg-white text-[#001F3F]"
            }`}
          >
            <span className="font-poppins">{item.title}</span>
            {expanded === item.id ? (
              <FaArrowLeft className="text-lg transition-colors" />
            ) : (
              <FaArrowRight className="text-lg transition-colors" />
            )}
          </button>

          {/* Content */}
          <div
            className={`transition-all duration-300 ease-in-out ${
              expanded === item.id
                ? "max-h-screen opacity-100 p-4"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            {item.content.map((c, i) => (
              <div key={i} className="mb-3">
                {c.title && (
                  <h4 className="font-semibold text-[#001F3F] mb-1">
                    {c.title}
                  </h4>
                )}
                <p className="text-gray-700 text-sm leading-relaxed">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    </div>
    </div>
    </section>
  );
}
