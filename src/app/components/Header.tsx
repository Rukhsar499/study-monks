"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Plus, Minus } from "lucide-react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <span className="text-2xl font-bold text-blue-600"><Image src="/assets/img/logos.png" alt="Beyuvana" width={160} height={50} /></span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex space-x-8">
                        <Link href="/" className="text-black-700 hover:text-blue-600 text-sm">
                            Home
                        </Link>
                        <Link href="/our-story" className="text-black-700 hover:text-blue-600 text-sm">

                            Our Story
                        </Link>
                        {/* Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-sm flex items-center text-black-700 hover:text-blue-600 gap-1"
                            >
                                The Cambridge Pathway
                                {isOpen ? (
                                    <Minus className="h-4 w-4" />
                                ) : (
                                    <Plus className="h-4 w-4" />
                                )}
                            </button>

                            {isOpen && (
                                <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-2 z-50">
                                    <Link
                                        href="/plans-and-pricing/primary"
                                        className="block px-4 py-2 text-black-700 hover:bg-gray-100"
                                    >
                                        Primary
                                    </Link>
                                    <Link
                                        href="/plans-and-pricing/secondary"
                                        className="block px-4 py-2 text-black-700 hover:bg-gray-100"
                                    >
                                        Secondary
                                    </Link>
                                </div>
                            )}
                        </div>
                        <Link href="/mentors" className="text-black-700 hover:text-blue-600 text-sm">
                            Our Mentors
                        </Link>
                        <Link href="/blogs" className="text-black-700 hover:text-blue-600 text-sm">
                            Resource Hub
                        </Link>
                        <Link href="/careers" className="text-black-700 hover:text-blue-600 text-sm">

                            Career
                        </Link>
                        <Link href="/plans-and-pricing" className="text-black-700 hover:text-blue-600 text-sm">
                            Plans & Pricing
                        </Link>
                    </nav>

                    {/* Free Trial Button */}
                    <div className="hidden md:block">
                        <Link
                            href="/free-trial"
                            style={{
                                background: 'linear-gradient(90deg, rgb(0 31 63 / 91%) 0%, rgb(0, 61, 124) 50%)',
                            }}
                            className="px-8 py-2 text-sm rounded-3xl text-white font-medium flex items-center gap-2"
                        >
                            <Image src="/assets/img/login.png" alt="Beyuvana" width={20} height={20} />
                            Free Trial
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-blue-600 focus:outline-none"
                        >
                            {isOpen ? (
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <nav className="px-4 py-3 space-y-2">
                        <Link href="/" className="block text-gray-700 hover:text-blue-600">
                            Home
                        </Link>
                        <Link href="/about" className="block text-gray-700 hover:text-blue-600">
                            About Us
                        </Link>
                        <Link href="/services" className="block text-gray-700 hover:text-blue-600">
                            Services
                        </Link>
                        <Link href="/contact" className="block text-gray-700 hover:text-blue-600">
                            Contact
                        </Link>
                        <Link
                            href="/free-trial"
                            className="block px-4 py-2 rounded-lg bg-blue-600 text-white text-center font-medium hover:bg-blue-700 transition"
                        >
                            Free Trial
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
