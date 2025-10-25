"use client";

import { useState } from "react";
import { Document, Page } from "react-pdf"; // optional PDF viewer library


type Tab = "recorded" | "classwork" | "homework" | "summary";

interface PdfItem {
  id: number;
  title: string;
  fileUrl: string;
}

export default function ClassPage() {
  const [activeTab, setActiveTab] = useState<Tab>("recorded");
  const [selectedPdf, setSelectedPdf] = useState<PdfItem | null>(null);

  // Sample PDF data
  const classworkPdfs: PdfItem[] = [
    { id: 1, title: "Classwork PDF 1", fileUrl: "/pdfs/classwork1.pdf" },
    { id: 2, title: "Classwork PDF 2", fileUrl: "/pdfs/classwork2.pdf" },
  ];

  const homeworkPdfs: PdfItem[] = [
    { id: 1, title: "Homework PDF 1", fileUrl: "/pdfs/homework1.pdf" },
    { id: 2, title: "Homework PDF 2", fileUrl: "/pdfs/homework2.pdf" },
  ];

  return (
    <div className="p-4 container mx-auto max-w-7xl min-h-screen">
      {/* Tabs */}
      <div className="flex space-x-4  mb-4">
        {["recorded", "classwork", "homework", "summary"].map((tab) => (
          <button
            key={tab}
            className={`pb-2 rounded-xl px-4 py-2 ${
              activeTab === tab ? "bg-[#182C74] text-[#fff]" : "bg-gray-200"
            }`}
            onClick={() => setActiveTab(tab as Tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "recorded" && (
          <div className="w-full h-[500px] bg-gray-200 flex items-center justify-center">
            {/* Zoom screen/video */}
            <p>Recorded Zoom Class will appear here</p>
          </div>
        )}

        {activeTab === "classwork" && (
          <div className="flex gap-4">
            {/* Left PDF list */}
            <div className="w-1/3 border p-2">
              {classworkPdfs.map((pdf) => (
                <div
                  key={pdf.id}
                  className="flex justify-between items-center p-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => setSelectedPdf(pdf)}
                >
                  <span>{pdf.title}</span>
                  <a href={pdf.fileUrl} download className="text-blue-500">
                    Download
                  </a>
                </div>
              ))}
            </div>
            {/* Right Preview */}
            <div className="w-2/3 border p-2">
              {selectedPdf ? (
                <iframe
                  src={selectedPdf.fileUrl}
                  className="w-full h-[500px]"
                  title={selectedPdf.title}
                ></iframe>
              ) : (
                <p>Select a PDF to preview</p>
              )}
            </div>
          </div>
        )}

        {activeTab === "homework" && (
          <div className="flex gap-4">
            <div className="w-1/3 border p-2">
              {homeworkPdfs.map((pdf) => (
                <div
                  key={pdf.id}
                  className="p-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => setSelectedPdf(pdf)}
                >
                  {pdf.title}
                </div>
              ))}
            </div>
            <div className="w-2/3 border p-2">
              {selectedPdf ? (
                <iframe
                  src={selectedPdf.fileUrl}
                  className="w-full h-[500px]"
                  title={selectedPdf.title}
                ></iframe>
              ) : (
                <p>Select a homework PDF to preview</p>
              )}
            </div>
          </div>
        )}

        {activeTab === "summary" && (
          <div className="p-4 shadow bg-[#fff]">
            <h2 className="text-lg font-semibold mb-2">Class Summary</h2>
            <p>
              This is the summary of the class. It will explain key points, topics covered,
              and important notes in text format.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
