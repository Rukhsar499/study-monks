"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ZoomMtg } from "@zoom/meetingsdk";

type Tab = "recorded" | "classwork" | "homework" | "summary";
type HomeworkSubTab = "worksheet" | "student" | "invigilated";

interface PdfItem {
  id: number;
  title: string;
  subtitle?: string;
  icon?: string;
  fileUrl: string;
  worksheet?: string;
  studentAnswer?: string;
  invigilatedAnswer?: string;
}

export default function ClassPage() {
  const [activeTab, setActiveTab] = useState<Tab>("recorded");
  const [selectedPdf, setSelectedPdf] = useState<PdfItem | null>(null);
  const [activeHomeworkTab, setActiveHomeworkTab] =
    useState<HomeworkSubTab>("worksheet");

  // 🧩 Upload state
  const [uploadedStudentImages, setUploadedStudentImages] = useState<File[]>([]);
  const [uploadedInvigilatedImages, setUploadedInvigilatedImages] = useState<File[]>([]);

  // 🧩 Upload handlers
  const handleStudentImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setUploadedStudentImages((prev) => [...prev, ...Array.from(e.target.files!)]);
    }
  };

  const handleInvigilatedImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setUploadedInvigilatedImages((prev) => [...prev, ...Array.from(e.target.files!)]);
    }
  };

  // 🧩 Delete image handlers
  const handleDeleteStudentImage = (index: number) => {
    setUploadedStudentImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleDeleteInvigilatedImage = (index: number) => {
    setUploadedInvigilatedImages((prev) => prev.filter((_, i) => i !== index));
  };

  // 🧩 Submit handlers
  const handleStudentSubmit = () => {
    if (uploadedStudentImages.length === 0) {
      alert("Please upload at least one image before submitting!");
      return;
    }
    console.log("🧾 Submitted student images:", uploadedStudentImages);
    alert("Student homework submitted successfully!");
  };

  const handleInvigilatedSubmit = () => {
    if (uploadedInvigilatedImages.length === 0) {
      alert("Please upload at least one image before submitting!");
      return;
    }
    console.log("🧾 Submitted invigilated images:", uploadedInvigilatedImages);
    alert("Invigilated homework submitted successfully!");
  };

  // 🔹 Dummy Data
  const classworkPdfs: PdfItem[] = [
    {
      id: 1,
      title: "Classwork PDF 1",
      subtitle: "Chapter 1: Introduction",
      fileUrl: "/pdfs/classwork1.pdf",
    },
    {
      id: 2,
      title: "Classwork PDF 2",
      subtitle: "Chapter 2: Algebra Basics",
      fileUrl: "/pdfs/classwork2.pdf",
    },
  ];

  const homeworkPdfs: PdfItem[] = [
    {
      id: 1,
      title: "Homework 1",
      subtitle: "Worksheet on Fractions",
      fileUrl: "/pdfs/homework1.pdf",
      worksheet: "/pdfs/homework1.pdf",
      studentAnswer: "/pdfs/student1.pdf",
      invigilatedAnswer: "/pdfs/invigilated1.pdf",
    },
    {
      id: 2,
      title: "Homework 2",
      subtitle: "Worksheet on Decimals",
      fileUrl: "/pdfs/homework2.pdf",
      worksheet: "/pdfs/homework2.pdf",
      studentAnswer: "/pdfs/student2.pdf",
      invigilatedAnswer: "/pdfs/invigilated2.pdf",
    },
  ];

  // 🔹 Zoom SDK Integration (Recorded Tab)
  useEffect(() => {
    if (activeTab !== "recorded") return;

    async function initZoom(): Promise<void> {
      try {
        const response = await fetch("/api/zoom-meeting");
        const data = await response.json();

        const meetConfig = {
          sdkKey: data.sdkKey || "YOUR_ZOOM_SDK_KEY",
          signature: data.signature || "YOUR_GENERATED_SIGNATURE",
          meetingNumber: data.meetingNumber || "YOUR_MEETING_ID",
          userName: data.userName || "Student Name",
          passWord: data.passWord || "YOUR_MEETING_PASSWORD",
          role: 0,
          leaveUrl: "https://your-website.com",
        };

        ZoomMtg.setZoomJSLib("https://source.zoom.us/3.0.2/lib", "/av");
        ZoomMtg.preLoadWasm();
        ZoomMtg.prepareWebSDK();
        ZoomMtg.i18n.load("en-US");
        ZoomMtg.i18n.reload("en-US");

        ZoomMtg.init({
          leaveUrl: meetConfig.leaveUrl,
          success: () => {
            ZoomMtg.join({
              signature: meetConfig.signature,
              sdkKey: meetConfig.sdkKey,
              meetingNumber: meetConfig.meetingNumber,
              userName: meetConfig.userName,
              passWord: meetConfig.passWord,
              success: () => console.log("✅ Zoom meeting joined successfully"),
              error: (err: unknown) => console.error("Zoom Join Error:", err),
            });
          },
          error: (err: unknown) => console.error("Zoom Init Error:", err),
        });
      } catch (error: unknown) {
        console.error("Error fetching or initializing Zoom:", error);
      }
    }

    void initZoom();
  }, [activeTab]);

  return (
    <div className="p-4 container mx-auto max-w-7xl min-h-screen">
      {/* Tabs */}
      <div className="flex flex-wrap gap-3 mb-4">
        {["recorded", "classwork", "homework", "summary"].map((tab) => (
          <button
            key={tab}
            className={`pb-2 rounded-xl px-4 py-2 text-sm md:text-base transition-all duration-200 ${
              activeTab === tab
                ? "bg-[#309F5C] text-white shadow-md"
                : "bg-white border text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => {
              setActiveTab(tab as Tab);
              setSelectedPdf(null);
            }}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Content */}
      <div>
        {/* 1️⃣ Recorded Tab */}
        {activeTab === "recorded" && (
          <div className="w-full h-[600px] bg-black rounded-md overflow-hidden">
            <div id="zmmtg-root" className="w-full h-full"></div>
          </div>
        )}

        {/* 2️⃣ Classwork Tab */}
        {activeTab === "classwork" && (
          <div className="p-3">
            {classworkPdfs.map((pdf) => (
              <div
                key={pdf.id}
                className="flex items-center justify-between bg-white p-3 mb-3 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src="/assets/img/pdfs.png"
                    alt="PDF Icon"
                    width={40}
                    height={40}
                  />
                  <div>
                    <h3 className="font-semibold text-sm md:text-base">
                      {pdf.title}
                    </h3>
                    <p className="text-gray-500 text-xs">{pdf.subtitle}</p>
                  </div>
                </div>
                <a
                  href={pdf.fileUrl}
                  download
                  className="text-[#309F5C] font-semibold text-sm hover:underline flex items-center gap-1"
                >
                  Download
                </a>
              </div>
            ))}
          </div>
        )}

        {/* 3️⃣ Homework Tab */}
        {activeTab === "homework" && (
          <div className="flex flex-col md:flex-row gap-4">
            {/* Left Section */}
            <div className="md:w-1/3">
              {homeworkPdfs.map((pdf) => (
                <div
                  key={pdf.id}
                  onClick={() => setSelectedPdf(pdf)}
                  className={`flex items-center justify-between bg-white p-3 mb-3 rounded-xl cursor-pointer shadow-sm hover:shadow-md transition ${
                    selectedPdf?.id === pdf.id ? "border-l-4 border-[#309F5C]" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src="/assets/img/pdfs.png"
                      alt="PDF Icon"
                      width={40}
                      height={40}
                    />
                    <div>
                      <h3 className="font-semibold text-sm md:text-base">
                        {pdf.title}
                      </h3>
                      <p className="text-gray-500 text-xs">{pdf.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Section */}
            <div className="md:w-2/3  rounded-md p-3 bg-white">
              {selectedPdf ? (
                <div>
                  {/* Sub Tabs */}
                  <div className="flex gap-2 mb-3  pb-2 overflow-x-auto">
                    {["worksheet", "student", "invigilated"].map((tab) => (
                      <button
                        key={tab}
                        className={`px-3 py-1 rounded-md text-sm whitespace-nowrap transition-all duration-200 ${
                          activeHomeworkTab === tab
                            ? "bg-[#309F5C] text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                        onClick={() => setActiveHomeworkTab(tab as HomeworkSubTab)}
                      >
                        {tab === "worksheet"
                          ? "Worksheet"
                          : tab === "student"
                          ? "Student Answer"
                          : "Invigilated Answer"}
                      </button>
                    ))}
                  </div>

                  {/* Worksheet Tab */}
                  {activeHomeworkTab === "worksheet" && (
                    <iframe
                      src={selectedPdf.worksheet}
                      className="w-full h-[500px]"
                      title="Worksheet"
                    ></iframe>
                  )}

                  {/* Student Answer Tab */}
                  {activeHomeworkTab === "student" && (
                    <div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-4">
                        {uploadedStudentImages.map((img, index) => (
                          <div
                            key={index}
                            className="relative bg-[#F0F3FF] rounded-xl p-3 shadow-sm flex flex-col items-center justify-center"
                          >
                            <button
                              onClick={() => handleDeleteStudentImage(index)}
                              className="absolute top-2 right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center hover:bg-red-600"
                            >
                              ✕
                            </button>
                            <img
                              src={URL.createObjectURL(img)}
                              alt={`Image ${index + 1}`}
                              className="w-60 h-60 object-cover rounded-lg mb-2"
                            />
                            <p className="text-sm text-gray-700">
                              Image {index + 1}
                            </p>
                          </div>
                        ))}

                        {/* Upload box */}
                        <label className="flex flex-col items-center justify-center bg-[#F0F3FF]  border-gray-300 rounded-xl p-5 cursor-pointer hover:bg-gray-100 transition">
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleStudentImageUpload}
                          />
                          <div className="text-gray-400 text-sm">+ Upload Image</div>
                        </label>
                      </div>

                      {/* Submit Button */}
                      <div className="flex justify-end">
                        <button
                          onClick={handleStudentSubmit}
                          className="bg-[#309F5C] hover:bg-[#27894F] text-white font-medium px-6 py-2 rounded-lg shadow-md transition"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Invigilated Answer Tab */}
                  {activeHomeworkTab === "invigilated" && (
                    <div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-4">
                        {uploadedInvigilatedImages.map((img, index) => (
                          <div
                            key={index}
                            className="relative bg-gray-50 rounded-xl p-3 shadow-sm flex flex-col items-center justify-center"
                          >
                            <button
                              onClick={() => handleDeleteInvigilatedImage(index)}
                              className="absolute top-2 right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center hover:bg-red-600"
                            >
                              ✕
                            </button>
                            <img
                              src={URL.createObjectURL(img)}
                              alt={`Image ${index + 1}`}
                              className="w-20 h-20 object-cover rounded-lg mb-2"
                            />
                            <p className="text-sm text-gray-700">
                              Image {index + 1}
                            </p>
                          </div>
                        ))}

                        {/* Upload box */}
                        <label className="flex flex-col items-center justify-center bg-[#F0F3FF]  border-gray-300 rounded-xl p-5 cursor-pointer hover:bg-gray-100 transition">
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleInvigilatedImageUpload}
                          />
                          <div className="text-gray-400 text-sm">+ Upload Image</div>
                        </label>
                      </div>

                      {/* Submit Button */}
                      <div className="flex justify-end">
                        <button
                          onClick={handleInvigilatedSubmit}
                          className="bg-[#309F5C] hover:bg-[#27894F] text-white font-medium px-6 py-2 rounded-lg shadow-md transition"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-gray-500 text-sm">Select a homework to view details.</p>
              )}
            </div>
          </div>
        )}

        {/* 4️⃣ Summary Tab */}
        {activeTab === "summary" && (
          <div className="p-4 shadow bg-white rounded-md">
            <h2 className="text-lg font-semibold mb-2">Class Summary</h2>
            <p className="text-gray-600 leading-relaxed">
              This is the summary of the class. It explains key points, topics
              covered, and important notes.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
