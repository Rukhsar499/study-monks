"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Notification from "../live-classes/Notification"

interface HomeworkData {
  title: string;
  description: string;
  pdfUrl: string;
}

export default function HomeworkPage() {
  const [homework, setHomework] = useState<HomeworkData | null>(null);
  const [images, setImages] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  // ✅ Fetch homework data from API (replace with your real API endpoint)
  useEffect(() => {
    async function fetchHomework() {
      try {
        const res = await fetch("/api/homework"); // e.g. from Laravel backend
        const data = await res.json();
        setHomework(data);
      } catch (error) {
        console.error("Error fetching homework:", error);
      }
    }
    fetchHomework();
  }, []);

  // ✅ Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setImages((prev) => [...prev, ...newFiles]);
      const newPreviews = newFiles.map((file) => URL.createObjectURL(file));
      setPreviewUrls((prev) => [...prev, ...newPreviews]);
    }
  };

  // ✅ Remove an image
  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
    setPreviewUrls(previewUrls.filter((_, i) => i !== index));
  };

  // ✅ Submit images
  const handleSubmit = async () => {
    const formData = new FormData();
    images.forEach((file) => formData.append("images[]", file));
    try {
      const res = await fetch("/api/upload-answers", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      alert(result.message || "Submitted successfully!");
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  return (
    <>
      <Notification />
      <div className="min-h-screen bg-[#f0f3ff] flex justify-center items-start p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl">
          {/* Left Section */}
          <div className="p-6">
            <h2 className="text-[24px] font-semibold text-[#1c398e] mb-2">
              {homework?.title || "Live Classes Home Work Sheet"}
            </h2>
            <div className="flex bg-[#fff] px-[20px] py-[10px] rounded-2xl mb-6 items-center align-middle">
              <Image
                src="/assets/img/pdfs.png"
                alt="Mother and Child"
                width={40}
                height={40}
                className="mr-4"
              />
              <p className="text-sm text-gray-600">
                {homework?.description || "This is a dummy home work pdf"}
              </p>
            </div>
            <h3 className="text-[22px] font-semibold mb-3 text-[#1c398e]">Upload Your Answers</h3>

            <div className="flex flex-wrap gap-3 mb-4">
              <label className="flex items-center justify-center w-24 h-24 border-2 border-dashed border-blue-400 rounded-xl cursor-pointer hover:bg-blue-100 transition">
                <span className="text-2xl text-blue-500">+</span>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>

              {previewUrls.map((url, index) => (
                <div key={index} className="relative w-24 h-24">
                  <Image
                    src={url}
                    alt={`Upload ${index}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={handleSubmit}
              className="bg-[#1c398e] hover:bg-blue-700 text-white px-10 py-2 rounded-lg transition"
            >
              Submit
            </button>
          </div>

          {/* Right Section (PDF Preview) */}
          <div className="bg-white shadow-lg rounded-2xl p-4 flex justify-center items-center">
            {homework?.pdfUrl ? (
              <iframe
                src={homework.pdfUrl}
                className="w-full h-[600px] rounded-lg border"
              />
            ) : (
              <p className="text-gray-500 text-center">
                PDF preview will appear here
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
