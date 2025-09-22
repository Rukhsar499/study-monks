"use client";
import Notification from "../live-classes/Notification"


export default function LivePage() {
    return (
        <>
            <section className="das py-5">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl font-bold">Live Classes Schedule</h1>
                </div>
                <Notification/>
            </section>
        </>
    );
}
