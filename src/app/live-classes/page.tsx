"use client";
import Notification from "../live-classes/Notification"
import Calendar from "../live-classes/Calendar"
import SubjectCards from "../live-classes/SubjectCards"

export default function LivePage() {
    return (
        <>
            <section className="das py-5">
                <div className="container max-w-7xl mx-auto px-4">
                    <h1 className="text-3xl font-bold mb-4">Live Classes Schedule</h1>
                </div>
                <Notification/>
                <Calendar/>
                <SubjectCards />
            </section>
        </>
    );
}
