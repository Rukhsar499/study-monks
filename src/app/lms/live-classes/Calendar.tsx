"use client";
import { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";

// Dummy classes data (later API se ayega)
interface ClassData {
  id: number;
  title: string;
  subject: string;
  time: string; // "HH:MM AM/PM"
  details: string;
  date: string; // "YYYY-MM-DD"
}

const classesByDate: Record<string, ClassData[]> = {
  "2025-09-22": [
    {
      id: 1,
      title: "Definition of Photosynthesis",
      subject: "Mathematics",
      time: "4:00 PM",
      details: "This session covers the fundamentals of photosynthesis.",
      date: "2025-09-22",
    },
    {
      id: 2,
      title: "Advanced Geometry",
      subject: "Mathematics",
      time: "6:00 PM",
      details: "Deep dive into geometry basics and fundamentals.",
      date: "2025-09-22",
    },
  ],
  "2025-09-24": [
    {
      id: 3,
      title: "Introduction to Algebra",
      subject: "Mathematics",
      time: "5:00 PM",
      details: "Overview of algebraic expressions.",
      date: "2025-09-24",
    },
    {
      id: 4,
      title: "Basics of Trigonometry",
      subject: "Mathematics",
      time: "7:00 PM",
      details: "Understanding sin, cos, and tan.",
      date: "2025-09-24",
    },
  ],
};

export default function CalendarSection() {
  const today = new Date("2025-09-22"); // Later dynamically new Date()
  const todayStr = today.toISOString().split("T")[0];

  const [selectedDate, setSelectedDate] = useState(todayStr);
  const [selectedClass, setSelectedClass] = useState<ClassData | null>(null);
  const [activeTab, setActiveTab] = useState("overview");

  // ✅ Auto select first class of today's date
  useEffect(() => {
    const todayClasses = classesByDate[todayStr] || [];
    if (todayClasses.length > 0) {
      setSelectedClass(todayClasses[0]);
    }
  }, [todayStr]);

  // Dates range (-7, +7 days)
  const dates: Date[] = [];
  for (let i = -7; i <= 7; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    dates.push(d);
  }

  const formatDate = (d: Date) => d.toISOString().split("T")[0];
  const getDay = (d: Date) =>
    d.toLocaleDateString("en-US", { weekday: "short" });

  // Class status (Upcoming / Completed)
  const getClassStatus = (cls: ClassData) => {
    const classDateTime = new Date(`${cls.date} ${cls.time}`);
    return classDateTime > new Date() ? "upcoming" : "completed";
  };

  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* LEFT SECTION */}
        <div className="lg:col-span-1">
          {/* Calendar Slider */}
          <Splide
            options={{
              perPage: 7,
              start: 7, 
              rewind: false,
              pagination: false,
              arrows: false,
              gap: "0.5rem",
              breakpoints: {
               
                1024: { perPage: 6, start: 7 },
                768: { perPage: 5, start: 7 },
                480: { perPage: 4, start: 7 },
              },
            }}
            aria-label="Calendar Slider"
          >
            {dates.map((d) => {
              const dateStr = formatDate(d);
              const isToday = dateStr === todayStr;
              const isSelected = dateStr === selectedDate;
              const classes = classesByDate[dateStr] || [];
              const dotCount = classes.length;

              return (
                <SplideSlide key={dateStr}>
                  <div
                    onClick={() => {
                      setSelectedDate(dateStr);
                      setSelectedClass(null);
                    }}
                    className={`w-16 h-20 flex flex-col items-center justify-center rounded-lg cursor-pointer mx-auto
                      ${
                        isToday
                          ? "bg-green-600 text-white"
                          : isSelected
                          ? "bg-yellow-400 text-black"
                          : "bg-white text-black border"
                      }
                    `}
                  >
                    <span className="text-lg font-bold">{d.getDate()}</span>
                    <span className="text-xs">{getDay(d)}</span>
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
                </SplideSlide>
              );
            })}
          </Splide>

          {/* Classes List */}
          <div className="mt-4 space-y-3 ">
            {(classesByDate[selectedDate] || []).map((cls) => (
              <div
                key={cls.id}
                onClick={() => {
                  setSelectedClass(cls);
                  setActiveTab("overview");
                }}
                className={`w-full p-3 bg-white rounded-lg shadow flex items-start gap-3 cursor-pointer hover:bg-blue-50 ${
                  selectedClass?.id === cls.id ? "border border-blue-500" : ""
                }`}
              >
                <Image
                  src="/assets/img/adn-icon.png"
                  alt="Class Icon"
                  width={40}
                  height={40}
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

        {/* RIGHT SECTION */}
        <div className="bg-white rounded-lg shadow p-4 w-full">
          {selectedClass ? (
            <>
              {/* Header */}
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
                  {getClassStatus(selectedClass) === "upcoming" ? (
                    <span className="bg-yellow-400 text-black text-xs px-2 py-1 rounded">
                      Upcoming
                    </span>
                  ) : (
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                      Completed
                    </span>
                  )}
                </div>
              </div>

              {/* Tabs */}
              <div className="flex gap-2 mb-3">
                {["overview", "classwork", "homework"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1 text-sm rounded ${
                      activeTab === tab
                        ? "bg-green-600 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="text-sm text-gray-700">
                {activeTab === "overview" && <p>{selectedClass.details}</p>}
                {activeTab === "classwork" && (
                  <p>Classwork content will come from API.</p>
                )}
                {activeTab === "homework" && (
                  <p>Homework content will come from API.</p>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-3 mt-4">
                {getClassStatus(selectedClass) === "upcoming" ? (
                  <button className="px-8 py-3 bg-green-600 text-white rounded-xl text-[12px]">
                    Join Live Class
                  </button>
                ) : (
                  <button className="px-8 py-3 bg-blue-900 text-white rounded-xl text-[12px]">
                    Watch Recording
                  </button>
                )}
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
