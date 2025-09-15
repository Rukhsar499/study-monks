"use client";

export default function CambridgeSection() {
  const cards = [
    {
      id: 1,
      title: "Cambridge Primary (Stages 4–6)",
      subtitle: "Building a Love for Learning",
      content:
        "For our youngest learners, we focus on sparking curiosity and building unshakable confidence. Our mentors create a nurturing environment where foundational concepts in English, Maths, and Science are explored in an engaging, interactive way.",
      btn: "View More",
    },
    {
      id: 2,
      title: "Cambridge Lower Secondary (Stages 7–9)",
      subtitle: "Deepening Knowledge, Building Skills",
      content:
        "As students advance, we shift focus to developing critical thinking and analytical skills. We guide them through the increasing rigor of English, Maths, and Science, preparing them for the challenges of IGCSE and beyond.",
      btn: "View More",
    },
  ];

  return (
    <section className="mb-[30px] md:mb-[50px]">
      <div className="container mx-auto px-4">
        <div className="bg-[#D9E6FF] py-16 px-6 md:px-12 rounded-xl text-center mx-auto">
          {/* Heading */}
          <h2 className="text-2xl md:text-4xl font-bold text-[#001F3F] mb-3">
            Tailored Guidance For Your Child&apos;s Cambridge Stage
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            We understand that a student&apos;s needs evolve dramatically as they
            progress through the Cambridge curriculum...
          </p>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {cards.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-none rounded-br-4xl shadow-sm px-12 py-12 text-left group transition hover:bg-[#F6F9FF]"
              >
                <h3 className="text-lg md:text-xl font-bold text-[#001F3F] mb-2">
                  {card.title}
                </h3>
                <h4 className="font-semibold text-gray-800 mb-3">
                  {card.subtitle}
                </h4>
                <p className="text-gray-600 mb-6">{card.content}</p>

                {/* Button */}
                <button className="w-15 h-15 text-[12px] flex items-center justify-center rounded-full border border-black text-black transition group-hover:bg-[#003C79] group-hover:text-white">
                  <span className="group-hover:hidden">{card.btn}</span>
                  <span className="hidden group-hover:block text-2xl -rotate-45">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
