"use client";

import { useState } from "react";
import { Minus, Plus, Check, ShoppingCart } from "lucide-react";

interface Plan {
  id: number;
  subject: string;
  price: number;
  type: string;
}

export default function SubscriptionDashboard() {
  const [activeMainTab, setActiveMainTab] = useState<"live" | "tutorial">("live");
  const [activeSubTab, setActiveSubTab] = useState<"monthly" | "annually">("monthly");
  const [cart, setCart] = useState<{ id: number; subject: string; price: number; qty: number; type: string }[]>([]);

  // ✅ Separate data for Live and Tutorial
  const plansData: Record<
    "live" | "tutorial",
    Record<"monthly" | "annually", Plan[]>
  > = {
    live: {
      monthly: [
        { id: 1, subject: "Physics Live", price: 4300, type: "Live Class" },
        { id: 2, subject: "Chemistry Live", price: 4300, type: "Live Class" },
        { id: 3, subject: "Maths Live", price: 4300, type: "Live Class" },
      ],
      annually: [
        { id: 4, subject: "Physics Live", price: 48000, type: "Live Class" },
        { id: 5, subject: "Chemistry Live", price: 48000, type: "Live Class" },
        { id: 6, subject: "Maths Live", price: 48000, type: "Live Class" },
      ],
    },
    tutorial: {
      monthly: [
        { id: 7, subject: "English Tutorial", price: 3500, type: "Video Tutorial" },
        { id: 8, subject: "Biology Tutorial", price: 3700, type: "Video Tutorial" },
        { id: 9, subject: "Computer Basics", price: 3200, type: "Video Tutorial" },
      ],
      annually: [
        { id: 10, subject: "English Tutorial", price: 42000, type: "Video Tutorial" },
        { id: 11, subject: "Biology Tutorial", price: 45000, type: "Video Tutorial" },
        { id: 12, subject: "Computer Basics", price: 40000, type: "Video Tutorial" },
      ],
    },
  };

  const addToCart = (plan: Plan) => {
    setCart((prev) => {
      if (prev.find((p) => p.id === plan.id)) return prev;
      return [...prev, { ...plan, qty: 1 }];
    });
  };

  const updateQty = (id: number, change: number) => {
    setCart((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, qty: Math.max(1, p.qty + change) } : p))
        .filter((p) => p.qty > 0)
    );
  };

  const total = cart.reduce((acc, p) => acc + p.price * p.qty, 0);

  return (
    <div className="bg-[#f4f6ff] min-h-screen">
      <div className="container mx-auto bg-[#f4f6ff]">
        <div className="p-6 flex flex-col md:flex-row gap-6">
          {/* Left Section */}
          <div className="flex-1 bg-white p-6">
            <div className="flex justify-between items-center mb-4 flex-wrap gap-3">
              <h2 className="text-lg font-semibold">Subscription</h2>
              <div className="flex gap-2">
                {(["live", "tutorial"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveMainTab(tab)}
                    className={`px-4 py-2 rounded-md text-sm font-medium ${
                      activeMainTab === tab
                        ? "bg-[#0a2874] text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                    }`}
                  >
                    {tab === "live" ? "Live Class" : "Tutorial"}
                  </button>
                ))}
              </div>
            </div>

            {/* Monthly / Annually Tabs */}
            <div className="flex gap-2 mb-6">
              {(["monthly", "annually"] as const).map((sub) => (
                <button
                  key={sub}
                  onClick={() => setActiveSubTab(sub)}
                  className={`px-4 py-2 rounded-md text-sm font-semibold ${
                    activeSubTab === sub
                      ? "bg-[#0a2874] text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  }`}
                >
                  {sub === "monthly" ? "Monthly" : "Annually"}
                </button>
              ))}
            </div>

            {/* Plan Cards */}
            <div className="flex flex-col gap-4">
              {plansData[activeMainTab][activeSubTab].map((plan) => (
                <div
                  key={plan.id}
                  className="flex justify-between items-center p-4 rounded-xl border border-gray-200 hover:shadow-md transition"
                >
                  <div>
                    <p className="font-semibold">{plan.subject}</p>
                    <p className="text-sm text-gray-500">
                      {activeSubTab === "monthly"
                        ? "Access for 30 days"
                        : "Access for 365 days"}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-lg text-gray-800">₹ {plan.price}</span>
                    {cart.find((p) => p.id === plan.id) ? (
                      <Check className="text-green-600" />
                    ) : (
                      <button
                        onClick={() => addToCart(plan)}
                        className="p-2 border border-yellow-400 rounded-md hover:bg-yellow-50"
                      >
                        <ShoppingCart className="w-5 h-5 text-yellow-500" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Cart */}
          <div className="w-full md:w-1/3 bg-white p-6 h-fit">
            <h3 className="font-semibold mb-4">Cart Details</h3>
            {cart.length === 0 ? (
              <p className="text-gray-500 text-sm">No items added</p>
            ) : (
              <div className="flex flex-col gap-3">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center border-b pb-2">
                    <div>
                      <p className="text-sm font-medium">{item.subject}</p>
                      <p className="text-xs text-gray-500">{item.type}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQty(item.id, -1)}
                        className="p-1 rounded-md hover:bg-gray-100"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span>{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.id, 1)}
                        className="p-1 rounded-md hover:bg-gray-100"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                      <span className="font-semibold text-sm">
                        ₹ {item.price * item.qty}
                      </span>
                    </div>
                  </div>
                ))}

                {/* Totals */}
                <div className="border-t pt-4 text-sm">
                  <div className="flex justify-between">
                    <p>Total Value</p>
                    <p>₹ {total}</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Your Savings</p>
                    <p className="text-green-600">₹ {Math.floor(total * 0.15)}</p>
                  </div>
                  <div className="flex justify-between font-semibold text-base mt-2">
                    <p>Total Payable</p>
                    <p>₹ {total - Math.floor(total * 0.15)}</p>
                  </div>
                </div>

                <button className="bg-[#309F5C] text-white rounded-md px-4 py-2 hover:bg-[#102f8a] transition mt-4">
                  Pay Now
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
