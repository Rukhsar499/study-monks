"use client";

import { useState } from "react";
import Image from "next/image";

type Teacher = {
  id: number;
  name: string;
  qualification: string;
  intro: string;
  photo: string;
  video: string;
  heading: string;
  title: string;
  desc: string;
  stage: string;
  teach: string;
  credentials: string[];
};

const teachers: Teacher[] = [
  {
    id: 1,
    name: "Ms. Nidhi Malik",
    qualification: "Maths & Science",
    intro: "I help students see the universe in a grain of sand, connecting physics to the current world.",
    photo: "/assets/img/nidhi.png",
    video: "/assets/video/nidhi.mp4",
    heading: "My Teaching Philosophy",
    title: "What Parents & Students Say",
    desc: "Dr. Sharma made complex topics so clear. For the first time, my son enjoys physics and feels confident.",
    stage: "— Parent of a Stage 9 Student",
    teach: "Credentials & Experience",
    credentials: [
      "10+ years of teaching Astrophysics",
      "Author of 3 research papers",
      "Guest lecturer at IIT Delhi",
      "Mentor to 500+ students worldwide",
    ],
  },
  {
    id: 2,
    name: "Ms. Kamalpreet",
    qualification: "PhD, Mathematics",
    intro: "Making numbers fun and easy for students with real-world applications.",
    photo: "/assets/img/kamalpreet.png",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    heading: "My Teaching Philosophy",
    title: "What Parents & Students Say",
    desc: "Dr. Verma makes math understandable and fun.",
    stage: "— Parent of a Stage 8 Student",
    teach: "Credentials & Experience",
    credentials: [
      "10+ years of teaching Mathematics",
      "Author of 2 research papers",
      "Guest lecturer at IIT Bombay",
      "Mentor to 400+ students worldwide",
    ],
  },
  {
    id: 3,
    name: "Ms. Sujatha S",
    qualification: "Science",
    intro: "Helping students connect molecules with daily life chemistry.",
    photo: "/assets/img/sujatha.png",
    video: "/assets/video/sujatha.mp4",
    heading: "My Teaching Philosophy",
    title: "What Parents & Students Say",
    desc: "Dr. Verma makes math understandable and fun.",
    stage: "— Parent of a Stage 8 Student",
    teach: "Credentials & Experience",
    credentials: [
      "10+ years of teaching Mathematics",
      "Author of 2 research papers",
      "Guest lecturer at IIT Bombay",
      "Mentor to 400+ students worldwide",
    ],
  },
  {
    id: 4,
    name: "Ms. Nivedita P Hadimani",
    qualification: "PhD, Biology",
    intro: "Exploring the wonders of life sciences with students.",
    photo: "/assets/img/nivedita.png",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    heading: "My Teaching Philosophy",
    title: "What Parents & Students Say",
    desc: "Dr. Verma makes math understandable and fun.",
    stage: "— Parent of a Stage 8 Student",
    teach: "Credentials & Experience",
    credentials: [
      "10+ years of teaching Mathematics",
      "Author of 2 research papers",
      "Guest lecturer at IIT Bombay",
      "Mentor to 400+ students worldwide",
    ],
  },
  {
    id: 5,
    name: "Ms. Shruthi Bharath",
    qualification: "Maths & Science",
    intro: "Exploring the wonders of life sciences with students.",
    photo: "/assets/img/shruthi.png",
    video: "/assets/video/shruthi.mp4",
    heading: "My Teaching Philosophy",
    title: "What Parents & Students Say",
    desc: "Dr. Verma makes math understandable and fun.",
    stage: "— Parent of a Stage 8 Student",
    teach: "Credentials & Experience",
    credentials: [
      "10+ years of teaching Mathematics",
      "Author of 2 research papers",
      "Guest lecturer at IIT Bombay",
      "Mentor to 400+ students worldwide",
    ],
  },
  {
    id: 6,
    name: "Ms. Thejaswini S",
    qualification: "Maths",
    intro: "Exploring the wonders of life sciences with students.",
    photo: "/assets/img/thejaswini.png",
    video: "/assets/video/thejaswini.mp4",
    heading: "My Teaching Philosophy",
    title: "What Parents & Students Say",
    desc: "Dr. Verma makes math understandable and fun.",
    stage: "— Parent of a Stage 8 Student",
    teach: "Credentials & Experience",
    credentials: [
      "10+ years of teaching Mathematics",
      "Author of 2 research papers",
      "Guest lecturer at IIT Bombay",
      "Mentor to 400+ students worldwide",
    ],
  },
  // add the rest of your teachers here
];

export default function TeacherList() {
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(teachers[0]);
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="mb-[30px] md:mb-[50px]">
      <div className="max-w-7xl container mx-auto px-4">
        <div className="bg-[#001D36] px-6 py-8 rounded-2xl">
          <h2 className="text-[36px] font-bold mb-8 text-center text-[#fff]">Find the Right Guide for Your Child</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {teachers.map((teacher) => (
              <div
                key={teacher.id}
                className={`p-4 rounded-lg shadow-md transition cursor-pointer 
    ${selectedTeacher?.id === teacher.id
                    ? "bg-[#B2BF4D] text-white"   // active box
                    : "bg-transparent border border-white text-white" // inactive box
                  }`}
                onClick={() => {
                  setSelectedTeacher(teacher);
                  setShowModal(true);
                }}
              >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                  <div className="flex-shrink-0 bg-white p-4 rounded-xl">
                    <Image
                      src={teacher.photo}
                      alt={teacher.name}
                      width={250}
                      height={150}
                      className="rounded-md"
                    />
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold">{teacher.name}</h5>
                    <p className="text-white-600">{teacher.qualification}</p>
                    <p className="mt-2 text-white-700">{teacher.intro}</p>
                    <button
                      className="mt-4 px-3 py-2 text-[12px] font-bold text-center bg-[#003C79] w-18 h-18 text-white rounded-full border-white border-1 cursor-pointer"
                      onClick={() => {
                        setSelectedTeacher(teacher);
                        setShowModal(true);
                      }}
                    >
                      View <br /> Profile
                    </button>
                  </div>
                </div>
              </div>

            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && selectedTeacher && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-lg max-w-5xl w-full overflow-hidden relative">
            <button
              className="absolute w-8 h-8 rounded-full bg-[#00000031] top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold cursor-pointer"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            <div className="grid md:grid-cols-3 gap-4 p-6">
              <div className="bg-gray-100 p-4 rounded-md">
                <Image
                  src={selectedTeacher.photo}
                  alt={selectedTeacher.name}
                  width={300}
                  height={200}
                  className="rounded-md mb-4"
                />
                <h4 className="font-semibold mb-2">{selectedTeacher.teach}</h4>
                <ul className="list-disc list-inside text-gray-700">
                  {selectedTeacher.credentials.map((cred, idx) => (
                    <li key={idx}>{cred}</li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-xl text-[#01356C] font-bold">{selectedTeacher.name}</h3>
                <h5 className="text-gray-600 mb-4">{selectedTeacher.qualification}</h5>

                <div className="mb-4">
                  
                  <video controls width="100%" className="rounded-md">
                    <source src={selectedTeacher.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold">{selectedTeacher.heading}</h4>
                  <p>{selectedTeacher.intro}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold">{selectedTeacher.title}</h4>
                  <p>{selectedTeacher.desc}</p>
                  <p className="font-bold text-sm">{selectedTeacher.stage}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
