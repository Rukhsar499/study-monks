import type { Metadata } from "next";
import Sidebar from "./components/Sidebar";

export const metadata: Metadata = {
    title: 'dashboard',
    description: 'dashboard Study Monks',
}


export default function dashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div className="bg-gray-50">
                <Sidebar />


                {children}
            </div>
        </>
    )
}