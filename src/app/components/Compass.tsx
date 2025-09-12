"use client";

import React from "react";

type HighlightItem = {
  title: string;
  text: string[];
};

interface HighlightsProps {
  items: HighlightItem[];
}

const Highlights: React.FC<HighlightsProps> = ({ items }) => {
  return (
    <section className="champ mb-[30px] md:mb-[50px]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-transparent p-6 rounded-lg  transition duration-300"
            >
              <h4 className="font-semibold mb-2 text-[#001F3F] text-xl">{item.title}</h4>
              <p className="text-gray-700 leading-relaxed">
                {item.text.map((t, i) => (
                  <span key={i}>
                    {i === 1 || i === 3 ? (
                      <strong className="text-[#003C79]">{t}</strong>
                    ) : (
                      t
                    )}
                    {i < item.text.length - 1 && " "}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
