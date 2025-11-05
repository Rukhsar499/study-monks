"use client";
import { useEffect, useState } from "react";

interface Stat {
  id: number;
  label: string;
  value: number;
  color: string;
}

export default function StatsCards() {
  const [stats, setStats] = useState<Stat[]>([]);

  // 🔹 Demo: Static data (API ke jagah)
  useEffect(() => {
    const demoData: Stat[] = [
      { id: 1, label: "Tutorials", value: 266, color: "bg-[#FFCC00]" },
      { id: 2, label: "Live Classes", value: 138, color: "bg-[#66D0DD]" },
      { id: 3, label: "Worksheets", value: 30, color: "bg-[#A0E481]" },
      { id: 4, label: "MCQ Practices", value: 320, color: "bg-[#DC94DD]" },
    ];
    setStats(demoData);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`${stat.color} rounded-xl p-4 shadow cursor-pointer border-2 border-transparent hover:border-blue-500 transition`}
        >
          <p className="text-[50px] font-semibold text-black ">{stat.value}</p>
          <p className="text-sm text-black">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
