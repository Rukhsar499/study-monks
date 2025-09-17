"use client";
import { useState } from "react";
import React from "react";
import { FaVideo, FaChalkboardTeacher, FaFileAlt, FaClipboardList, FaBook, FaShoppingCart, FaUsers, FaSignOutAlt, FaThLarge } from "react-icons/fa";

interface MenuItem {
  name: string;
  icon: React.ReactNode; // ✅ JSX.Element ki jagah ye use karo
  link: string;
}

const menuItems: MenuItem[] = [
  { name: "Dashboard", icon: <FaThLarge />, link: "/lms/dashboard" },
  { name: "My Videos", icon: <FaVideo />, link: "/lms/videos" },
  { name: "My Live Classes", icon: <FaChalkboardTeacher />, link: "/lms/live-classes" },
  { name: "Worksheets", icon: <FaFileAlt />, link: "/lms/worksheets" },
  { name: "MCQ Practices", icon: <FaClipboardList />, link: "/studymonks/lms/mcq" },
  { name: "Notices", icon: <FaBook />, link: "/lms/notices" },
  { name: "Order History", icon: <FaShoppingCart />, link: "/lms/orders" },
  { name: "My Referrals", icon: <FaUsers />, link: "/lms/referrals" },
  { name: "Logout", icon: <FaSignOutAlt />, link: "/logout" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`fixed top-0 left-0 h-screen bg-[#112B7A] text-white flex flex-col transition-all duration-300 ${
        isOpen ? "w-56" : "w-16"
      }`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex items-center justify-center py-4 text-xl font-bold border-b border-blue-900">
        {isOpen ? "StudyMonks" : "SM"}
      </div>

      <nav className="flex-1 mt-4">
        {menuItems.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            className="flex items-center gap-4 px-4 py-3 text-gray-200 hover:bg-blue-800 transition-colors"
          >
            <span className="text-lg">{item.icon}</span>
            {isOpen && <span className="text-sm">{item.name}</span>}
          </a>
        ))}
      </nav>
    </div>
  );
}
