"use client";
import StatsCards from "./components/StatsCards";
import NoticeBar from "./components/NoticeBar";
import BasicBars from "./components/BasicBars";

export default function DashboardPage() {
    return (
        <>
            <section className="das py-5">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                    <p className="text-gray-600">Welcome to your LMS dashboard 👋</p>
                    <div className="mt-6">
                        <StatsCards />
                    </div>
                    <div className="mt-4">
                        <NoticeBar />
                    </div>
                     <div className="mt-4">
                        <NoticeBar />
                    </div>
                     <div className="mt-4">
                        <BasicBars />
                    </div>
                </div>
            </section>
        </>
    );
}
