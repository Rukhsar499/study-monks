"use client";
import { useState, useRef, useEffect } from "react";
import { Menu, X, Bell } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<{ name: string } | null>({
    name: "Rukhsar Sheikh",
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  // helper function for active link
  const isActive = (path: string) =>
    pathname === path ? "text-yellow-400" : "hover:text-yellow-400";

  // close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // get initials from user name
  const getInitials = (name: string) => {
    const parts = name.trim().split(" ");
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
    return (
      parts[0].charAt(0).toUpperCase() + parts[parts.length - 1].charAt(0).toUpperCase()
    );
  };

  return (
    <header className="bg-[#0a2874] text-white relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Left - Logo + Nav */}
        <div className="flex items-center gap-6">
          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="/lms/dashboard" className={`block ${isActive("/lms/dashboard")}`}>
              Dashboard
            </a>
            <a href="/lms/my-learning" className={`block ${isActive("/lms/my-learning")}`}>
              My Learning
            </a>
            <a href="/lms/live-classes" className={`block ${isActive("/lms/live-classes")}`}>
              Live Classes
            </a>
            <a href="/lms/worksheets" className={`block ${isActive("/lms/worksheets")}`}>
              WorkSheets
            </a>
            <a href="/lms/mcq-practices" className={`block ${isActive("/lms/mcq-practices")}`}>
              MCQ Practices
            </a>
            <a href="/lms/notices" className={`block ${isActive("/lms/notices")}`}>
              Notices
            </a>
            <a href="/lms/order-history" className={`block ${isActive("/lms/order-history")}`}>
              Order History
            </a>
            <a href="/lms/my-referrals" className={`block ${isActive("/lms/my-referrals")}`}>
              My Referrals
            </a>
          </nav>
        </div>

        {/* Right - Class dropdown, notification, user */}
        <div className="flex items-center gap-4">
          <select className="bg-[#1c3a8b] text-white rounded px-2 py-1 text-sm">
            <option>Class 7</option>
            <option>Class 8</option>
            <option>Class 9</option>
          </select>

          <div className="relative">
            <Bell className="h-6 w-6 cursor-pointer" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-1 rounded-full">
              5
            </span>
          </div>

          {/* User avatar and dropdown */}
          <div className="relative" ref={dropdownRef}>
            <div
              className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-black cursor-pointer select-none"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {user ? getInitials(user.name) : "?"}
            </div>

            {/* Dropdown */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white text-black rounded-md shadow-lg py-2 text-sm z-50">
                <p className="px-4 py-2 text-gray-700 border-b font-semibold">
                  {user?.name}
                </p>
                <a
                  href="/lms/my-referrals"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  My Referrals
                </a>
                <a
                  href="/lms/subscription"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Subscription
                </a>
                <button
                  onClick={() => {
                    setUser(null);
                    setDropdownOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden bg-[#0a2874] px-4 py-3 space-y-2 text-sm">
          <a href="/lms/dashboard" className={`block ${isActive("/lms/dashboard")}`}>
            Dashboard
          </a>
          <a href="/lms/my-learning" className={`block ${isActive("/lms/my-learning")}`}>
            My Learning
          </a>
          <a href="/lms/live-classes" className={`block ${isActive("/lms/live-classes")}`}>
            Live Classes
          </a>
          <a href="/lms/worksheets" className={`block ${isActive("/lms/worksheets")}`}>
            WorkSheets
          </a>
          <a href="/lms/mcq-practices" className={`block ${isActive("/lms/mcq-practices")}`}>
            MCQ Practices
          </a>
          <a href="/lms/notices" className={`block ${isActive("/lms/notices")}`}>
            Notices
          </a>
          <a href="/lms/order-history" className={`block ${isActive("/lms/order-history")}`}>
            Order History
          </a>
          <a href="/lms/my-referrals" className={`block ${isActive("/lms/my-referrals")}`}>
            My Referrals
          </a>
        </nav>
      )}
    </header>
  );
}
