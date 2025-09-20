"use client";

import { useState } from "react";
import Image from "next/image";


export default function LoginModal() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
                <Image src="/assets/img/login.png" alt="Beyuvana" width={20} height={20} />
                <span>Login</span>
            </button>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-40 flex items-center justify-center bg-[#001a346e] bg-opacity-50">
                    <div className="bg-[#EFF7FF] rounded-lg shadow-lg w-full max-w-3xl flex overflow-hidden relative px-6 py-8">
                        {/* Left Image */}
                        <div className="w-1/2 hidden md:block">
                            <Image
                                src="/assets/img/login-img.png"
                                alt="Login Banner"
                                className="object-cover"
                                width={400}
                                height={400}
                            />
                        </div>

                        {/* Right Form */}
                        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center relative">
                            {/* Close Button */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute -top-10 -right-12 z-50 text-[#fff] bg-[#003C79] font-light w-15 h-15 rounded-4xl hover:text-gray-500 text-2xl"
                            >
                                &times;
                            </button>

                            <h2 className="text-2xl font-semibold mb-4 text-blue-900">Login Now!</h2>
                            <p className="text-gray-600 mb-6 text-sm">
                                Enter your phone no
                            </p>

                            <form className="space-y-4">
                                <input
                                    type="tel"
                                    placeholder="Enter phone number"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    required
                                />

                                <button
                                    type="submit"
                                    className="w-full bg-blue-900 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
                                >
                                    Continue
                                </button>

                                <p className="text-xs text-gray-400 mt-2">
                                    By continuing, you agree to Study Monk&apos;s Terms of Use and Privacy Policy.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
