"use client";

import { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import MentorPath from "../mentors/MentorPath";

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
            "1. What skills do you look for in a mentor who teaches a group?",
        content: [
            {
                description:
                    "Our mentors are the heartbeat of our method, and our selection process is exceptionally rigorous. Beyond subject mastery, we select for elite facilitators. Every candidate is assessed on their ability to manage group dynamics, encourage balanced participation, and foster a collaborative learning environment. Fewer than 3% of applicants possess the unique blend of expertise and emotional intelligence required to be a true Wise Guardian for a group.",
            },
        ],
    },
    
    {
        id: "panel2",
        title:
            "2. What if the group dynamic isn't the right fit for my child?",
        content: [
            {
                description:
                    "We are committed to finding the perfect learning environment for every child. Our academic counsellors are experts at creating balanced micro-classes. However, if for any reason the group dynamic isn't the ideal fit, we offer a simple, no-hassle guarantee. We will work with you to find a different micro-class that better suits your child's personality and learning style, ensuring their journey with us is always positive and productive.",
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
            <div className="container max-w-screen-xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between gap-6">
                    <div className="w-full md:w-[60%]">
                        <h2 className="text-2xl md:text-4xl font-bold text-[#001F3F]  text-center mb-3">
                            Frequently Asked Questions
                        </h2>
                        <div className="">
                            {accordionData.map((item) => (
                                <div
                                    key={item.id}
                                    className="border mb-3 border-gray-200 rounded-lg shadow-sm overflow-hidden"
                                >
                                    {/* Header */}
                                    <button
                                        onClick={() => togglePanel(item.id)}
                                        className={`w-full flex justify-between items-center px-4 py-3 text-left font-medium transition-all duration-300 ${expanded === item.id
                                                ? "bg-[#001F3F] text-white"
                                                : "bg-white text-[#001F3F]"
                                            }`}
                                    >
                                        <span className="font-poppins">{item.title}</span>
                                        {expanded === item.id ? (
                                            <FaArrowUp className="text-lg transition-colors" />
                                        ) : (
                                            <FaArrowDown className="text-lg transition-colors" />
                                        )}
                                    </button>

                                    {/* Content */}
                                    <div
                                        className={`transition-all duration-300 ease-in-out ${expanded === item.id
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
                    <div className="w-full md:w-[45%]">
                        <MentorPath />
                    </div>
                </div>
            </div>
        </section>
    );
}
