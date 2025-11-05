"use client";

import { useState } from "react";
import { Video, Mic, ScreenShare, X } from "lucide-react";

export default function LiveClassPage() {
  const [joined, setJoined] = useState(false);

  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col items-center justify-center">
      {!joined ? (
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl text-center">
          <h1 className="text-2xl font-semibold mb-4">Join Live Class</h1>
          <p className="text-gray-600 mb-6">
            Click below to join your scheduled live class.
          </p>
          <button
            onClick={() => setJoined(true)}
            className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition"
          >
            Join Class
          </button>
        </div>
      ) : (
        <div className="relative w-full h-full max-w-6xl bg-black rounded-lg shadow-lg flex flex-col">
          {/* Video Screen */}
          <div className="flex-1 flex items-center justify-center text-white text-xl">
            Rukhsar
          </div>

          {/* Control Bar */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 bg-gray-900 bg-opacity-70 px-4 py-2 rounded-full items-center">
            <button className="bg-gray-700 p-3 rounded-full hover:bg-gray-600">
              <Mic size={20} />
            </button>
            <button className="bg-gray-700 p-3 rounded-full hover:bg-gray-600">
              <Video size={20} />
            </button>
            <button className="bg-gray-700 p-3 rounded-full hover:bg-gray-600">
              <ScreenShare size={20} />
            </button>
            <button
              onClick={() => setJoined(false)}
              className="bg-red-600 p-3 rounded-full hover:bg-red-500"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
