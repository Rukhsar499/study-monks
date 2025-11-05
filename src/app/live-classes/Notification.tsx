"use client";
import { useEffect, useState } from "react";

interface Notification {
    stage: string;
    expiryDate: string;
}

export default function SubscriptionAlert() {
    const [notification, setNotification] = useState<Notification | null>({
        stage: "Stage-8",
        expiryDate: "31st August 2025",
    });

    // Later API se data fetch karna hoga
    // useEffect(() => {
    //   fetch("/api/subscription")
    //     .then(res => res.json())
    //     .then(data => setNotification(data));
    // }, []);

    if (!notification) return null;

    return (
        <div className="container mx-auto px-4 max-w-7xl mt-7">
            <div className="bg-[#ffff] text-sm md:px-4 md:py-5 px-2 py-3">
                <span className="font-semibold text-[#0a2874] md:text-[16px] text-[14px]">Attention:</span>{" "}
                Your subscription is going to expire for{" "}
                <span className="font-medium">{notification.stage}</span> on{" "}
                <span className="font-medium">{notification.expiryDate}</span>.{" "}
                <a href="/renew" className="text-green-600 font-semibold hover:underline">
                    Renew Now
                </a>
            </div>
        </div>
    );
}
