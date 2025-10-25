// app/components/ClassHistory.tsx
"use client";

import { useState, useEffect } from "react";

interface ClassItem {
  id: number;
  title: string;
  subject: string;
  date: string; // ISO format
  topic: string;
}

const subjects = ["Math", "Science", "English", "History"];

const dummyClasses: ClassItem[] = [
  { id: 1, title: "Algebra Basics", subject: "Math", date: "2025-10-26", topic: "Algebra" },
  { id: 2, title: "Newton Laws", subject: "Science", date: "2025-10-20", topic: "Physics" },
  { id: 3, title: "Shakespeare", subject: "English", date: "2025-10-18", topic: "Literature" },
  { id: 4, title: "World War II", subject: "History", date: "2025-10-27", topic: "WWII" },
];

export default function ClassHistory() {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");
  const [searchDate, setSearchDate] = useState("");
  const [searchTopic, setSearchTopic] = useState("");
  const [filteredClasses, setFilteredClasses] = useState<ClassItem[]>([]);

  useEffect(() => {
    const today = new Date();
    let filtered = dummyClasses;

    // Filter by subject
    if (selectedSubject) {
      filtered = filtered.filter((cls) => cls.subject === selectedSubject);
    }

    // Filter by date
    if (searchDate) {
      filtered = filtered.filter((cls) => cls.date === searchDate);
    }

    // Filter by topic
    if (searchTopic) {
      filtered = filtered.filter((cls) =>
        cls.topic.toLowerCase().includes(searchTopic.toLowerCase())
      );
    }

    // Filter by tab
    if (activeTab === "upcoming") {
      filtered = filtered.filter((cls) => new Date(cls.date) >= today);
    } else {
      filtered = filtered.filter((cls) => new Date(cls.date) < today);
    }

    setFilteredClasses(filtered);
  }, [selectedSubject, activeTab, searchDate, searchTopic]);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      {/* Heading + Subject Dropdown */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Class History</h2>
        <select
          className="border border-gray-300 rounded px-3 py-1"
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
        >
          <option value="">All Subjects</option>
          {subjects.map((subj) => (
            <option key={subj} value={subj}>
              {subj}
            </option>
          ))}
        </select>
      </div>

      {/* Tabs */}
      <div className="flex border-b mb-4">
        <button
          className={`px-4 py-2 -mb-px font-medium border-b-2 ${
            activeTab === "upcoming" ? "border-blue-500 text-blue-500" : "border-transparent"
          }`}
          onClick={() => setActiveTab("upcoming")}
        >
          Upcoming Classes
        </button>
        <button
          className={`px-4 py-2 -mb-px font-medium border-b-2 ${
            activeTab === "past" ? "border-blue-500 text-blue-500" : "border-transparent"
          }`}
          onClick={() => setActiveTab("past")}
        >
          Past Classes
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-4">
        <input
          type="date"
          className="border border-gray-300 rounded px-3 py-1"
          value={searchDate}
          onChange={(e) => setSearchDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search by topic"
          className="border border-gray-300 rounded px-3 py-1"
          value={searchTopic}
          onChange={(e) => setSearchTopic(e.target.value)}
        />
      </div>

      {/* Class List */}
      <div className="space-y-3">
        {filteredClasses.length === 0 ? (
          <p className="text-gray-500">No classes found.</p>
        ) : (
          filteredClasses.map((cls) => (
            <div
              key={cls.id}
              className="p-3 border border-gray-200 rounded hover:shadow-sm transition"
            >
              <h3 className="font-semibold">{cls.title}</h3>
              <p className="text-gray-500 text-sm">
                {cls.subject} | {cls.topic} | {cls.date}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
    