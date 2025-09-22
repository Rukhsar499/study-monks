"use client";
import { useState } from "react";
import Image from "next/image";

// Dummy classes data (later API se ayega)
interface ClassData {
  id: number;
  title: string;
  subject: string;
  time: string;
  details: string;
}

const classesByDate: Record<string, ClassData[]> = {
  "2025-08-22": [
    {
      id: 1,
      title: "Definition of Photosynthesis",
      subject: "Mathematics",
      time: "4:00 PM",
      details: "This session covers the fundamentals of photosynthesis.",
    },
    {
      id: 2,
      title: "Advanced Geometry",
      subject: "Mathematics",
      time: "6:00 PM",
      details: "Deep dive into geometry basics and fundamentals.",
    },
  ],
  "2025-08-24": [
    {
      id: 3,
      title: "Introduction to Algebra",
      subject: "Mathematics",
      time: "5:00 PM",
      details: "Overview of algebraic expressions.",
    },
  ],
};

export default function CalendarSection() {
  const today = new Date("2025-08-24"); // later dynamically new Date()
  const [selectedDate, setSelectedDate] = useState(today.toISOString().split("T")[0]);
  const [hoverDate, setHoverDate] = useState<string | null>(null);
  const [selectedClass, setSelectedClass] = useState<ClassData | null>(null);

  // Generate dates range (-7, +7 days)
  const dates: Date[] = [];
  for (let i = -7; i <= 7; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    dates.push(d);
  }

  const formatDate = (d: Date) => d.toISOString().split("T")[0];
  const getDay = (d: Date) => d.toLocaleDateString("en-US", { weekday: "short" });

  return (
    <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-6 p-4  min-h-[500px]">
      {/* LEFT: Calendar + Classes */}
      <div>
        {/* Date strip */}
        <div className="flex gap-3 overflow-x-auto pb-2">
          {dates.map((d) => {
            const dateStr = formatDate(d);
            const isToday = dateStr === formatDate(today);
            const isSelected = dateStr === selectedDate;
            const isHover = hoverDate === dateStr;

            const classes = classesByDate[dateStr] || [];
            const dotCount = classes.length;

            return (
              <div
                key={dateStr}
                onMouseEnter={() => !isToday && setHoverDate(dateStr)}
                onMouseLeave={() => setHoverDate(null)}
                onClick={() => setSelectedDate(dateStr)}
                className={`w-16 h-20 flex flex-col items-center justify-center rounded-lg cursor-pointer relative
                  ${isToday ? "bg-green-600 text-white" : isHover || isSelected ? "bg-yellow-400 text-black" : "bg-white text-black border"}
                `}
              >
                <span className="text-lg font-bold">{d.getDate()}</span>
                <span className="text-xs">{getDay(d)}</span>

                {/* dots */}
                <div className="flex gap-1 mt-1">
                  {Array(dotCount)
                    .fill(0)
                    .map((_, i) => (
                      <span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-red-500"
                      />
                    ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Classes list */}
        <div className="mt-4 space-y-3">
          {(classesByDate[selectedDate] || []).map((cls) => (
            <div
              key={cls.id}
              onClick={() => setSelectedClass(cls)}
              className="p-3 bg-white rounded-lg shadow flex items-start gap-3 cursor-pointer hover:bg-blue-50"
            >
               <Image
                          src="/assets/img/adn-icon.png"
                          alt="Four Pillars"
                          width={40}
                          height={ 40}
                          className=""
                        />
              <div>
                <h3 className="font-medium text-blue-900">{cls.title}</h3>
                <p className="text-sm text-gray-600">
                  {cls.subject} • {cls.time}
                </p>
              </div>
            </div>
          ))}

          {(classesByDate[selectedDate] || []).length === 0 && (
            <p className="text-gray-500 text-sm">No classes for this date.</p>
          )}
        </div>
      </div>

      {/* RIGHT: Class Details */}
      <div className="bg-white rounded-lg shadow p-4">
        {selectedClass ? (
          <>
            <div className="flex items-center justify-between mb-3">
              <div>
                <h2 className="font-semibold text-lg text-blue-900">
                  {selectedClass.title}
                </h2>
                <p className="text-sm text-gray-600">
                  {selectedClass.subject} • {selectedClass.time}
                </p>
              </div>
              <div className="flex gap-2">
                <span className="bg-yellow-400 text-black text-xs px-2 py-1 rounded">
                  Upcoming
                </span>
                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                  Completed
                </span>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-3">
              <button className="px-3 py-1 bg-green-600 text-white text-sm rounded">
                Overview
              </button>
              <button className="px-3 py-1 bg-gray-200 text-sm rounded">
                Class work
              </button>
              <button className="px-3 py-1 bg-gray-200 text-sm rounded">
                Home Work
              </button>
            </div>

            {/* Details */}
            <p className="text-sm text-gray-700">{selectedClass.details}</p>

            {/* Actions */}
            <div className="flex gap-3 mt-4">
              <button className="px-4 py-2 bg-blue-900 text-white rounded">
                Watch Recording
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded">
                Join Live Class
              </button>
            </div>
          </>
        ) : (
          <p className="text-gray-500 text-sm">
            Select a class to view details.
          </p>
        )}
      </div>
    </div>
    </div>
  );
}
