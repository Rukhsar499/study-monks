import type { Metadata } from "next";
import Sidebar from "../lms/dashboard/components/Sidebar";


export const metadata: Metadata = {
    title: 'Faqs',
    description: 'My learning',
  }


export default function FaqLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
            <>
                <div className="bg-[#F0F3FF]">
                    <Sidebar />
    
    
                    {children}
                </div>
            </>
        )
}