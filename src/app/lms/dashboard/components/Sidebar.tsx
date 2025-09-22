"use client";
import { useState } from "react";
import { Menu, X, Bell } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<{ name: string } | null>({
    name: "Rukhsar",
  }); // login hone ke baad naam aayega

  return (
    <header className="bg-[#0a2874] text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Left - Logo + Nav */}
        <div className="flex items-center gap-6">
          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="/lms/dashboard" className="block hover:text-yellow-400">Dashboard</a>
            <a href="/lms/my-learning" className="block hover:text-yellow-400">My Learning</a>
            <a href="/lms/live-classes" className="block text-yellow-400">Live Classes</a>
            <a href="/lms/worksheets" className="block hover:text-yellow-400">WorkSheets</a>
            <a href="/lms/mcq-practices" className="block hover:text-yellow-400">MCQ Practices</a>
            <a href="/lms/notices" className="block hover:text-yellow-400">Notices</a>
            <a href="/lms/order-history" className="block hover:text-yellow-400">Order History</a>
            <a href="/lms/my-referrals" className="block hover:text-yellow-400">My Referrals</a>
          </nav>
        </div>

        {/* Right - Class dropdown, notification, user */}
        <div className="flex items-center gap-4">
          {/* Class Dropdown */}
          <select className="bg-[#1c3a8b] text-white rounded px-2 py-1 text-sm">
            <option>Class 7</option>
            <option>Class 8</option>
            <option>Class 9</option>
          </select>

          {/* Notifications */}
          <div className="relative">
            <Bell className="h-6 w-6" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-1 rounded-full">
              5
            </span>
          </div>

          {/* User */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-black">
              {user ? user.name.charAt(0) : "?"}
            </div>
            {user && <span className="hidden md:inline">{user.name}</span>}
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden bg-[#0a2874] px-4 py-3 space-y-2 text-sm">
          <a href="/lms/dashboard" className="block hover:text-yellow-400">Dashboard</a>
          <a href="/lms/my-learning" className="block hover:text-yellow-400">My Learning</a>
          <a href="/lms/live-classes" className="block text-yellow-400">Live Classes</a>
          <a href="/lms/worksheets" className="block hover:text-yellow-400">WorkSheets</a>
          <a href="/lms/mcq-practices" className="block hover:text-yellow-400">MCQ Practices</a>
          <a href="/lms/notices" className="block hover:text-yellow-400">Notices</a>
          <a href="/lms/order-history" className="block hover:text-yellow-400">Order History</a>
          <a href="/lms/my-referrals" className="block hover:text-yellow-400">My Referrals</a>
        </nav>
      )}
    </header>
  );
}
