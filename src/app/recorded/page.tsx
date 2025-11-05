"use client";

import { useState } from "react";
import Image from "next/image";

type Tab = "recorded" | "classwork" | "homework" | "summary";
type HomeworkSubTab = "worksheet" | "student" | "invigilated";

interface PdfItem {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
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

  // Dummy Data
  const classworkPdfs: PdfItem[] = [
    {
      id: 1,
      title: "Classwork PDF 1",
      subtitle: "Chapter 1: Introduction",
      icon: "/images/pdf-icon.png",
      fileUrl: "/pdfs/classwork1.pdf",
    },
    {
      id: 2,
      title: "Classwork PDF 2",
      subtitle: "Chapter 2: Algebra Basics",
      icon: "/images/pdf-icon.png",
      fileUrl: "/pdfs/classwork2.pdf",
    },
  ];

  const homeworkPdfs: PdfItem[] = [
    {
      id: 1,
      title: "Homework 1",
      subtitle: "Worksheet on Fractions",
      icon: "/images/pdf-icon.png",
      fileUrl: "/pdfs/homework1.pdf",
      worksheet: "/pdfs/homework1.pdf",
      studentAnswer: "/pdfs/student1.pdf",
      invigilatedAnswer: "/pdfs/invigilated1.pdf",
    },
    {
      id: 2,
      title: "Homework 2",
      subtitle: "Worksheet on Decimals",
      icon: "/images/pdf-icon.png",
      fileUrl: "/pdfs/homework2.pdf",
      worksheet: "/pdfs/homework2.pdf",
      studentAnswer: "/pdfs/student2.pdf",
      invigilatedAnswer: "/pdfs/invigilated2.pdf",
    },
  ];

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
      <div className="bg-white p-4 rounded-xl shadow-md">
        {/* 1️⃣ Recorded Tab */}
        {activeTab === "recorded" && (
          <div className="w-full h-[500px] bg-gray-100 flex items-center justify-center rounded-md">
            <iframe
              src="https://zoom.us"
              className="w-full h-full border rounded-md"
              title="Zoom Recorded Class"
            ></iframe>
          </div>
        )}

        {/* 2️⃣ Classwork Tab (Only Left Side List) */}
        {activeTab === "classwork" && (
          <div className="border rounded-md p-3 bg-gray-50">
            {classworkPdfs.map((pdf) => (
              <div
                key={pdf.id}
                className="flex items-center justify-between bg-white p-3 mb-3 rounded-md shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src="/assets/img/pdfs.png"
                    alt="PDF Icon"
                    className="w-10 h-10 object-contain"
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
                  className="text-blue-600 text-sm hover:underline"
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
            <div className="md:w-1/3 border rounded-md p-3 bg-gray-50">
              {homeworkPdfs.map((pdf) => (
                <div
                  key={pdf.id}
                  onClick={() => setSelectedPdf(pdf)}
                  className={`flex items-center justify-between bg-white p-3 mb-3 rounded-md cursor-pointer shadow-sm hover:shadow-md transition ${
                    selectedPdf?.id === pdf.id
                      ? "border-l-4 border-[#309F5C]"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src="/assets/img/"
                      alt="PDF Icon"
                      className="w-10 h-10 object-contain"
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

            {/* Right Section with 3 Sub-Tabs */}
            <div className="md:w-2/3 border rounded-md p-3 bg-white">
              {selectedPdf ? (
                <div>
                  {/* Sub Tabs */}
                  <div className="flex gap-2 mb-3 border-b pb-2 overflow-x-auto">
                    {["worksheet", "student", "invigilated"].map((tab) => (
                      <button
                        key={tab}
                        className={`px-3 py-1 rounded-md text-sm whitespace-nowrap transition-all duration-200 ${
                          activeHomeworkTab === tab
                            ? "bg-[#309F5C] text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                        onClick={() =>
                          setActiveHomeworkTab(tab as HomeworkSubTab)
                        }
                      >
                        {tab === "worksheet"
                          ? "Worksheet"
                          : tab === "student"
                          ? "Student Answer"
                          : "Invigilated Answer"}
                      </button>
                    ))}
                  </div>

                  {/* Sub Tab Content */}
                  {activeHomeworkTab === "worksheet" && (
                    <iframe
                      src={selectedPdf.worksheet}
                      className="w-full h-[500px]"
                      title="Worksheet"
                    ></iframe>
                  )}
                  {activeHomeworkTab === "student" && (
                    <iframe
                      src={selectedPdf.studentAnswer}
                      className="w-full h-[500px]"
                      title="Student Answer"
                    ></iframe>
                  )}
                  {activeHomeworkTab === "invigilated" && (
                    <iframe
                      src={selectedPdf.invigilatedAnswer}
                      className="w-full h-[500px]"
                      title="Invigilated Answer"
                    ></iframe>
                  )}
                </div>
              ) : (
                <p className="text-center text-gray-500 py-10">
                  Select a homework to view its worksheet and answers
                </p>
              )}
            </div>
          </div>
        )}

        {/* 4️⃣ Summary Tab */}
        {activeTab === "summary" && (
          <div className="p-4 shadow bg-white rounded-md">
            <h2 className="text-lg font-semibold mb-2">Class Summary</h2>
            <p className="text-gray-600 leading-relaxed">
              This is the summary of the class. It will explain key points,
              topics covered, and important notes in text format.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
