"use client";

import { useParams } from "next/navigation";
import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { subjects, Subject, Topic } from "../../data/subjects";

export default function SubjectPage() {
  const { subject, topic } = useParams() as { subject: string; topic: string };

  // ✅ Find subject data by slug
  const subjectData = useMemo<Subject | undefined>(() => {
    return subjects.find((s) => s.id === subject);
  }, [subject]);

  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(topic);
  const [activeTab, setActiveTab] = useState<"sheets" | "videos" | "mcq">("sheets");

  // ✅ Set default topic if none selected
  useEffect(() => {
    if (subjectData && subjectData.topics.length > 0 && !selectedTopicId) {
      setSelectedTopicId(subjectData.topics[0].id);
    }
  }, [subjectData, selectedTopicId]);

  const selectedTopic: Topic | undefined = useMemo(() => {
    return subjectData?.topics.find((t) => t.id === selectedTopicId);
  }, [subjectData, selectedTopicId]);

  if (!subjectData) {
    return (
      <div className="text-center text-red-600 mt-20 text-xl">
        Subject not found ❌
      </div>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      {/* ✅ Subject Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        {subjectData.title}
      </h1>

      {/* ✅ Topic Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {subjectData.topics.map((t) => (
          <button
            key={t.id}
            onClick={() => setSelectedTopicId(t.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedTopicId === t.id
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {t.title}
          </button>
        ))}
      </div>

      {/* ✅ Resource Type Tabs */}
      <div className="flex justify-center gap-4 mb-6 border-b pb-2">
        {["sheets", "videos", "mcq"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`px-4 py-2 capitalize ${
              activeTab === tab
                ? "border-b-2 border-blue-600 text-blue-600 font-semibold"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ✅ Resources List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {selectedTopic?.resources
          .filter((r) => {
            if (activeTab === "sheets") return r.type === "sheet";
            if (activeTab === "videos") return r.type === "video";
            if (activeTab === "mcq") return r.type === "mcq";
            return false;
          })
          .map((r) => (
            <div
              key={r.id}
              className="border rounded-xl p-5 shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-gray-800 mb-2">{r.title}</h3>

              {r.type === "sheet" && (
                <Link
                  href={r.file || "#"}
                  target="_blank"
                  className="text-blue-600 hover:underline text-sm"
                >
                  📘 Open Sheet
                </Link>
              )}

              {r.type === "video" && (
                <video controls className="w-full rounded-lg mt-2">
                  <source src={r.file} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}

              {r.type === "mcq" && (
                <Link
                  href={r.file || "#"}
                  target="_blank"
                  className="text-green-600 hover:underline text-sm"
                >
                  🧠 Start MCQ
                </Link>
              )}
            </div>
          ))}
      </div>
    </main>
  );
}
