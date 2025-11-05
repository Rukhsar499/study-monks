import type { Metadata } from "next";
import Sidebar from "../dashboard/components/Sidebar";


export const metadata: Metadata = {
    title: 'Live Class',
    description: 'Live Class',
  }


export default function LiveLayout({
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