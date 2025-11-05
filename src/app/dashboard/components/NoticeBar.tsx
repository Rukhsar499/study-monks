"use client";
import { useState, useEffect } from "react";

interface Notice {
  id: number;
  message: string;
  date: string;
}

export default function NoticeBar() {
  const [notice, setNotice] = useState<Notice | null>(null);

  useEffect(() => {
    // 🔹 Abhi ke liye dummy data (yaha later API se replace kar dena)
    const dummyNotice: Notice = {
      id: 1,
      message: "This is a general sample notice for the students of Study Monk.",
      date: "13th July 2025",
    };

    setNotice(dummyNotice);
  }, []);

  if (!notice) return null;

  return (
    <div className="bg-[#fff] text-blue-900 rounded-lg p-4 text-sm">
      <strong>Notices:</strong> {notice.message} (Posted on {notice.date})
    </div>
  );
}
