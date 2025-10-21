"use client";

import { useState } from "react";
import Image from "next/image";

type Teacher = {
  id: number;
  name: string;
  qualification: string;
  short: string;
  intro: string;
  photo: string;
  video: string;
  heading: string;
  title: string;
  desc: string;
  stage: string;
  teach: string;
  credentials: string;
};

const teachers: Teacher[] = [
  {
    id: 1,
    name: "Ms. Nidhi Malik",
    qualification: "B.Ed. Science",
    short: "Developing critical thinking, creativity, and higher-order skills to help students succeed.",
    intro: "“I believe in making learning engaging and meaningful. By blending diverse teaching methods with technology, I encourage critical thinking, creativity, and higher-order skills—helping students succeed not just academically, but in life beyond the classroom.”",
    photo: "/assets/img/nidhi.png",
    video: "/assets/video/nidhi.mp4",
    heading: "My Teaching Philosophy",
    title: "What Parents & Students Say",
    desc: "Ms. Nidhi is very systematic and structured in her teaching. Under her guidance, Vaani has grown remarkably confident. She has helped Vaani develop a genuine interest in Mathematics —Vaani now enjoys the subject and puts in effort to understand and apply concepts with ease.”.",
    stage: "– Ms. Rajini Chaudhary, Parent of Vaani Chaudhary, Stage 5",
    teach: "Credentials & Experience",
    credentials: 
      "A certified Cambridge Math and Science facilitator, Ms. Nidhi has over 5 years of experience teaching international curricula and more than a decade of experience with Indian schools. She is dedicated to creating engaging and supportive learning environments where children thrive."
    ,
  },
  // {
  //   id: 2,
  //   name: "Ms. Kamalpreet",
  //   qualification: "PhD, Mathematics",
  //   intro: "Making numbers fun and easy for students with real-world applications.",
  //   photo: "/assets/img/kamalpreet.png",
  //   video: "https://www.w3schools.com/html/mov_bbb.mp4",
  //   heading: "My Teaching Philosophy",
  //   title: "What Parents & Students Say",
  //   desc: "Dr. Verma makes math understandable and fun.",
  //   stage: "— Parent of a Stage 8 Student",
  //   teach: "Credentials & Experience",
  //   credentials: [
  //     "10+ years of teaching Mathematics",
  //     "Author of 2 research papers",
  //     "Guest lecturer at IIT Bombay",
  //     "Mentor to 400+ students worldwide",
  //   ],
  // },
  {
    id: 3,
    name: "Ms. Sujatha S",
    qualification: "B.Ed. Mathematics, B.Sc. in Electronics",
     short: "Guiding students through a transformative journey in education.",
    intro: "“My philosophy is that education is a transformative journey—one that empowers students to unlock their potential, grow in confidence, and develop the skills they need for lifelong success.”",
    photo: "/assets/img/sujatha.png",
    video: "/assets/video/sujatha.mp4",
    heading: "My Teaching Philosophy",
    title: "What Parents & Students Say",
    desc: "“Karthikeya’s mentor is an amazing teacher who brings passion and dedication to her students’ success. My child is not only excelling academically but also growing into a more confident and responsible person. His love for Science has flourished under Sujatha Ma’am’s guidance.”",
    stage: "– Ms. Madhuri D, Parent of Karthikeya D, Stage 6",
    teach: "Credentials & Experience",
    credentials: 
      "With 17 years of experience in both teaching and leadership roles, Ms. Sujatha brings a strong academic foundation and a wealth of expertise to her classroom. She holds a Bachelor’s degree in Education with a focus on Mathematics and Science and has also served as the Head of Department for Science."
    ,
  },
  {
    id: 4,
    name: "Ms. Nivedita P Hadimani",
    qualification: "B.A., M.A. in English",
     short: "Fostering fun, joyful, and creative learning that lasts a lifetime.",
    intro: "“I believe learning should be fun, joyful, and creative. When students enjoy the process, they stop fearing mistakes and begin to embrace the language with confidence and enthusiasm.”",
    photo: "/assets/img/nivedita.png",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    heading: "My Teaching Philosophy",
    title: "What Parents & Students Say",
    desc: "“I really appreciate the teaching skills of Ms. Nivedita Maa’m. Thank you for your great support, guidance, making complex topics easy to understand and your approach in understanding my son’s pros n cons and changing your teaching methods which had a great impact on him. I wish and let this continue in the long run for his successful future.”",
    stage: "- Parent of Sriyansh Kalva, Stage 8",
    teach: "Credentials & Experience",
   credentials: 
      "Ms. Nivedita brings 17 years of teaching experience and is a specialist in English language education. She has extensive experience in teaching English and is committed to helping students build strong communication skills in a positive and supportive environment."
    ,
  },
  {
    id: 5,
    name: "Ms. Shruthi Bharath",
    qualification: "B.E. Electronics and Communication",
     short: "Unlocking true learning that goes far beyond simple memorization.",
    intro: "“I believe true learning goes beyond memorization. My goal is to nurture problem-solving skills and critical thinking, unlocking each student’s true potential for excellence.”",
    photo: "/assets/img/shruthi.png",
    video: "/assets/video/shruthi.mp4",
    heading: "My Teaching Philosophy",
    title: "What Parents & Students Say",
    desc: "“Shruthi Ma’am’s Science classes are engaging and inspiring. Her deep knowledge, combined with her patient and clear teaching style, makes even the most complex topics easy to understand. Under her guidance, students not only learn thoroughly but also develop a genuine interest in Science”",
    stage: "– Ms. Poonam Garg, Parent of Pranav Garg, Stage 6",
    teach: "Credentials & Experience",
    credentials: 
      "Ms. Shruthi has over 2 years of experience teaching Mathematics and Science at the Primary and Lower Secondary levels. She is well-versed in the Cambridge curriculum, its standards, and teaching methodologies. With her ability to simplify complex concepts, she helps students develop a clear understanding while maintaining high academic standards and excellence."
    ,
  },
  {
    id: 6,
    name: "Ms. Thejaswini S",
    qualification: "B.Sc. Mathematics, B.Ed. Mathematics",
     short: "Turning math fear into confidence: understanding and enjoyment guaranteed.",
    intro: "“My goal is to make Mathematics a subject that is understood and enjoyed, not feared. I focus on building strong foundations, nurturing problem-solving skills, and fostering confidence in every student.”",
    photo: "/assets/img/thejaswini.png",
    video: "/assets/video/thejaswini.mp4",
    heading: "My Teaching Philosophy",
    title: "What Parents & Students Say",
    desc: "“Thank you for creating such a positive and supportive environment where my child feels confident to ask questions without hesitation. This has greatly boosted their curiosity and willingness to learn, making the classroom a place they truly enjoy.”",
    stage: "- Ms. Manasa Kalva, Parent of Ved Kalva, Stage 8",
    teach: "Credentials & Experience",
    credentials: 
      "With 7 years of teaching experience, Ms. Thejaswini brings both expertise and passion to her classroom. She holds a Bachelor of Science in Mathematics, Statistics, and Computer Science, along with a Bachelor of Education specializing in Mathematics."
    ,
  },
  // add the rest of your teachers here
];

export default function TeacherList() {
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(teachers[0]);
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="mb-[30px] md:mb-[50px] relaive -mt-35">
      <div className="max-w-7xl container mx-auto px-4">
        <div className="bg-[#001D36] px-6 py-8 rounded-2xl">
          <h2 className="text-[36px] font-bold mb-8 text-center text-[#fff]">The Minds Behind the Method</h2>
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
                <div className="flex  flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="flex-shrink-0 md:w-[40%] bg-white p-4 rounded-xl">
                    <Image
                      src={teacher.photo}
                      alt={teacher.name}
                      width={250}
                      height={150}
                      className="rounded-md"
                    />
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold t-nam mb-2">{teacher.name}</h5>
                    <p className="text-white-600 text-sm">{teacher.qualification}</p>
                    <p className="mt-2 text-white-700 text-sm">{teacher.short}</p>
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
              className="absolute w-12 h-12 rounded-full bg-[#d9d9d9] top-4 right-4 text-gray-400 hover:text-gray-800 md:text-4xl text-2xl font-extralight cursor-pointer"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            <div className="grid md:grid-cols-3 gap-4 p-6">
              <div className="bg-[#D9D9D9] p-4 rounded-md ">
                <Image
                  src={selectedTeacher.photo}
                  alt={selectedTeacher.name}
                  width={300}
                  height={200}
                  className="rounded-md mb-4"
                />
                <h4 className="font-semibold mb-2 text-[#01356C] text-xl">{selectedTeacher.teach}</h4>
                <p className="text-sm text-[#484848]">
                 {selectedTeacher.credentials}
                </p>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-xl text-[#01356C] font-bold">{selectedTeacher.name}</h3>
                <h5 className="text-gray-600 mb-4">{selectedTeacher.qualification}</h5>

                <div className="mb-4">
                  
                  <video controls width="100%" className="">
                    <source src={selectedTeacher.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-[#01356C] text-xl">{selectedTeacher.heading}</h4>
                  <p className="text-sm text-[#484848]">{selectedTeacher.intro}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-[#01356C] text-xl">{selectedTeacher.title}</h4>
                  <p className="text-sm text-[#484848] mb-1">{selectedTeacher.desc}</p>
                  <p className="font-bold text-sm text-[#484848]">{selectedTeacher.stage}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
