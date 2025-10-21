"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react"; // ya Heroicons use kar sakte ho

export default function Footer() {
    return (
        <footer
            style={{
                background: 'linear-gradient(351deg, rgba(0, 31, 63, 1) 23%, rgba(0, 61, 124, 1) 50%)',
            }}
            className="text-gray-200 py-12"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Column 1: Logo */}
                    <div>
                         <Link href="/">
                            <span className="text-2xl font-bold text-blue-600"><Image src="/assets/img/white-logo.png" alt="Beyuvana" width={160} height={50} /></span>
                        </Link>
                        <p className="text-white-400">At the heart of our platform are inspiring mentors who guide every student, opening doors to infinite possibilities in learning and growth.</p>
                    </div>

                    {/* Column 2: Useful Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/our-story" className="hover:text-blue-500 text-sm">Our Story</Link>
                            </li>
                            <li>
                                <Link href="/cambridge-primary" className="hover:text-blue-500 text-sm">Cambridge Primary</Link>
                            </li>
                            <li>
                                <Link href="/cambridge-secondary" className="hover:text-blue-500 text-sm">Cambridge Secondary</Link>
                            </li>
                            <li>
                                <Link href="/contact-us" className="hover:text-blue-500 text-sm">Contact Us</Link>
                            </li>
                            <li>
                                <Link href="/faq" className="hover:text-blue-500 text-sm">Faq</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: About */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="hover:text-blue-500 text-sm">Refund Policy</Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:text-blue-500 text-sm">Terms of Service</Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:text-blue-500 text-sm">Content Policy</Link>
                            </li>
                            <li>
                                <Link href="/" className="hover:text-blue-500 text-sm">Cancellation Policy</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-sm">
                                <MapPin className="w-5 h-5 text-white-500" />
                                #311, Kanakapura Road, Bengaluru
                            </li>
                            <li className="flex items-center gap-2 text-sm">
                                <Phone className="w-5 h-5 text-white-500" />
                                +919535672142
                            </li>
                            <li className="flex items-center gap-2 text-sm">
                                <Mail className="w-5 h-5 text-white-500" />
                                info@studymonks.com
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom copyright */}
                <div className="mt-8 border-t border-gray-700 pt-6 text-center text-white-500 text-sm">
                    &copy; {new Date().getFullYear()} Copyright@Skolaris India Learning Solutions! • All Rights Reserved - Privacy Policy
                </div>
            </div>
        </footer>
    );
}
