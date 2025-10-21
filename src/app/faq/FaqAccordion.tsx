"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

interface FAQ {
  question: string;
  answer: string;
}

interface TabData {
  key: string;
  title: string;
  subtitle: string;
  desc: string;
  faqs: FAQ[];
}

export default function LearningExperience() {
  const [activeTab, setActiveTab] = useState("philosophy");
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const handleAccordionToggle = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const tabs: TabData[] = [
    {
      key: "philosophy",
      title: "Our Philosophy",
      subtitle: "The Study Monks Philosophy: Our Approach to Education",
      desc: "This section delves into the core principles that define Study Monks. It explains our educational philosophy, our specialized focus, and what truly sets us apart from other learning platforms.",
      faqs: [
        {
          question:
            'What is "Mindful Mastery" and how does it benefit my child more than traditional online tutoring?',
          answer: `
          <p class="mb-5">""Mindful Mastery" is the core of our educational philosophy, representing a fundamental shift away from the high-pressure "race for grades" that often causes student anxiety and burnout. Traditional tutoring frequently focuses on rote memorization and short-term exam preparation. In contrast, Mindful Mastery is the art of building deep, lasting conceptual understanding in a calm, focused, and supportive environment.</p>
          <p class="mb-5">For your child, this approach has several profound benefits:</p>
          <ul class="list-disc list-outside px-4">
          <li class="mb-2"><b>Reduces Anxiety, Builds Confidence: </b>By focusing on why concepts work rather than just how to answer a test question, we eliminate the anxiety that comes from a fragile, surface-level knowledge. This deep understanding is the greatest antidote to exam fear. It cultivates a genuine, unshakable confidence that extends beyond the classroom. In fact, 94% of our students report a significant increase in subject confidence.</li>
          <li class="mb-2"><b>Fosters Lifelong Learning: </b> Mindful Mastery encourages "Guided Curiosity," one of our four key pillars. We teach students to ask "Why?" and "How?", transforming them from passive recipients of information into active, engaged learners. This inquisitiveness is a critical skill for success in the 21st century.</li>
          <li><b>Ensures True Retention: </b>Rote learning is fleeting. When a child truly understands a concept, it becomes a permanent part of their intellectual toolkit. Our methods ensure that knowledge is not just memorized for a test but is mastered for life.</li>
          </ul>
          <p class="mt-5">Ultimately, while improved grades are a natural outcome of our approach, they are not the primary goal. The true goal is to build a resilient, confident, and curious mind, equipped to thrive in any future academic or professional endeavour.</p>
          `,
        },
        {
          question:
            'Why does Study Monks only teach the Cambridge Primary and Lower Secondary curriculum?',
          answer: `
          <p class="mb-5">Our exclusive focus on Cambridge Primary (Stages 4-6, ages 8-11) and Cambridge Lower Secondary (Stages 7-9, ages 11-14) is a deliberate and strategic choice, not a limitation. While many platforms offer a wide array of subjects and levels, from primary to university prep, this often leads to a diluted, "one-size-fits-all" approach. We believe in specialized expertise.</p>
          <p class="mb-5">These foundational years are the most critical in a child's entire educational journey. It is during this period that their core attitudes towards learning are formed. They can either develop a passion for inquiry and discovery or learn to view education as a chore. Our specialization allows us to:</p>
          <ul class="list-disc list-outside px-4">
          <li class="mb-2"><b>Master the Curriculum:</b> Our mentors possess an unparalleled depth of knowledge in the Cambridge curriculum for these specific stages. They understand the pedagogical nuances, the common challenges students face, and the precise building blocks needed for future success in IGCSE and A-Level studies.</li>
          <li class="mb-2"><b>Tailor Our Pedagogy: </b> The teaching methods required for a 9-year-old are vastly different from those for a 16-year-old. Our specialization enables us to perfect our "Mindful Mastery" approach for this specific age group, creating engaging, interactive, and age-appropriate learning experiences that spark curiosity in younger learners and develop critical thinking in early adolescents.</li>
          <li><b>Maximize Impact: </b>By concentrating our efforts on these foundational stages, we can have the greatest possible impact on a student's long-term academic trajectory. We build the strong, solid foundation of conceptual understanding and confidence that makes future learning easier and more enjoyable.</li>
          </ul>
          <p class="mt-5">Our commitment is to be the absolute best in this crucial niche, providing a level of focused expertise that broader platforms cannot match.</p>
          `,
        },
        {
          question:
            'What is your educational mission beyond improving grades in the Cambridge curriculum?',
          answer: `
          <p class="mb-5">Our core mission is to prepare your child for life, not just for exams. While academic excellence within the Cambridge Pathway is a key objective, we see it as a byproduct of a much deeper educational process. Our mission is encapsulated in our "Beyond the Textbook" approach, which is designed to equip students with the essential, future-ready skills they will need to navigate an increasingly complex world.</p>
          <p class="mb-5">This means we actively cultivate:</p>
          <ul class="list-disc list-outside px-4">
          <li class="mb-2"><b>Critical Thinking and Problem-Solving:</b> We move beyond simple right-or-wrong answers. Our mentors challenge students to analyze information, evaluate evidence, and approach problems from multiple angles. This is the essence of our "Guided Curiosity" pillar.</li>
          <li class="mb-2"><b>Effective Communication: </b> In our interactive "Micro Classes," students are encouraged to articulate their thoughts, ask insightful questions, and engage in respectful dialogue with their peers and mentor. This develops the "Expressive Confidence" needed to share ideas clearly and persuasively.</li>
          <li><b>Resilience and a Growth Mindset: </b>The "Mindful Mastery" philosophy teaches students to view challenges not as threats, but as opportunities for growth. By building understanding step-by-step in a supportive environment, we help them develop the resilience to persevere through difficult problems without fear of failure.</li>
          </ul>
          <p class="mt-5">In essence, our mission is to nurture well-rounded individuals who are not only academically proficient but are also confident communicators, creative problem-solvers, and curious lifelong learners. These are the skills that will truly define their success long after their school years are over.</p>
          `,
        },
        {
          question:
            'Is Study Monks affiliated with other "Study Monk" services for coding or CPA prep?',
          answer: `
          <p class="mb-5">No, we are not. Study Monks is an independent organization with a singular and exclusive focus: providing expert, specialized mentoring for students in the Cambridge Assessment International Education (CAIE) curriculum.</p>
          <p class="mb-5">We are aware that there are other unaffiliated services that use a similar name for entirely different fields, such as coding bootcamps or CPA exam preparation. These organizations have no connection to our company, our mentors, or our educational philosophy.</p>
          <p class="">Our specialization is our strength. By dedicating 100% of our resources, curriculum development, and mentor training to the Cambridge Pathway for Primary and Lower Secondary students, we ensure a level of expertise and quality that is undiluted and unparalleled in our field. When you choose Study Monks, you are choosing a true specialist committed to your child's success within this specific, globally recognized curriculum.</p>
          `,
        },
        {
          question:
            'Where is Study Monks based and how do you support international students online?',
          answer: `
          <p class="mb-5">Our main administrative office is located at Kanakapura Road, Bengaluru, India. However, our services are delivered through a state-of-the-art online platform, making our programs accessible to students all around the world.</p>
          <p class="mb-5">For international students and their parents, our global model means:</p>
          <ul class="list-disc list-outside px-4">
          <li class="mb-2"><b>Geographic Independence: </b> Your child can access our expert Cambridge curriculum mentoring from the comfort and safety of your home, no matter where you live. This is a significant advantage for families who may move internationally or live in areas where high-quality Cambridge-specific support is not locally available.</li>
          <li class="mb-2"><b>Flexible Scheduling: </b> We understand the complexities of different time zones. Our academic counselors work closely with families to find class schedules that are convenient and fit into your child's routine.</li>
         
          </ul>
          <p class="mt-5">Our base in Bengaluru is an operational hub, but our classroom is global. We are fully equipped and experienced in providing a seamless, high-quality educational experience to families across different continents and time zones.</p>
          `,
        },
      ],
    },
    {
      key: "experience",
      title: "The Learning Experience",
      subtitle: "The Learning Experience: How It Works Day-to-Day",
      desc: "This section provides a transparent, detailed look at your child's journey with Study Monks, from the initial assessment to daily classroom interactions and progress tracking.",
      faqs: [
        {
          question: 'What is the structure of a typical 40-minute online "Micro Class"?',
          answer: `
          <p class="mb-4">Each 40-minute "Micro Class" is a dynamic and interactive session designed for deep learning, not passive listening. Our classes follow a natural, engaging rhythm that moves students through a cycle of understanding and application.</p>
          <p class="mb-4">The session begins with a warm, personal check-in to create a supportive and focused learning environment. From there, the mentor introduces the core concept of the day using engaging tools and curated resources, sparking curiosity and encouraging active discussion.</p>
          <p class="mb-4">Once the foundation is laid, students apply their new knowledge, often working together in small groups to solve problems and learn from one another. The class concludes with a period of individual practice, which allows the mentor to provide real-time, personalized feedback to reinforce concepts and build each student's confidence and mastery. This proven structure ensures every class is a productive and empowering learning experience.</p>
          <p class="mb-4">This structure ensures that every minute is productive, moving students through a powerful cycle of learning, applying, collaborating, and mastering.</p>
          `,
        },
        {
          question:
            "How much individual attention does a child get in an 8-student online class?",
          answer: `
          <p class="mb-4">This is a critical question, and the answer lies at the heart of our educational model. In our "Micro Classes," the 1:8 mentor-to-student ratio is intentionally designed to provide the optimal balance of personalized attention and collaborative learning.</p>
          <p class="mb-4">Your child will receive a significant amount of individual attention, far more than is possible in a traditional school classroom of 25-30 students. Here’s how:</p>
            <ul class="list-disc list-outside px-4">
          <li class="mb-2"><b>High Visibility:</b> In a group of eight, there is nowhere for a student to hide or get lost. The mentor can easily observe every child's engagement, see their work on the interactive whiteboard, and notice subtle cues like a look of confusion or a moment of insight.</li>
          <li class="mb-2"><b>Frequent Interaction:</b> The mentor is not just lecturing; they are facilitating a conversation. They are trained to actively call on each student, ask targeted questions to check for understanding, and provide immediate, specific feedback multiple times throughout the 40-minute session.</li>
          <li class="mb-2"><b>Increased Participation:</b> The small, psychologically safe environment of a Micro Class makes students feel more comfortable speaking up, asking questions, and sharing their ideas. It is our experience that students in this setting are three times more likely to actively participate in discussions compared to larger group settings.</li>
          </ul>
          <p class="mb-4">While 1-on-1 tutoring offers complete individual focus, it lacks the vital element of peer learning. Our Micro Class model is pedagogically superior because it combines deep personalization with the development of social and communication skills that come from guided interaction. It is the sweet spot where your child gets the individual support they need while also learning how to collaborate and communicate effectively with others.</p>
          <table class="table-auto">
 <table class="min-w-full border border-gray-200 rounded-lg shadow-sm">
    <thead class="bg-blue-50 text-[#000]  text-sm font-light">
      <tr>
        <th class="py-3 px-6 text-left">Feature</th>
        <th class="py-3 px-6 text-left">Study Monks Micro Classes</th>
        <th class="py-3 px-6 text-left">Traditional Large Group Tutoring</th>
        <th class="py-3 px-6 text-left">1-on-1 Private Tutoring</th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      <tr class="hover:bg-blue-50 transition">
        <td class="py-4 px-6 border-r border-[#00000034]"><b>Class Size</b></td>
        <td class="py-4 px-6 border-r border-[#00000034]">Max 8 Students (Optimal Balance)</td>
        <td class="py-4 px-6 border-r border-[#00000034]">10-30+ Students</td>
        <td class="py-4 px-6 border-r border-[#00000034]">1 Student</td>
      </tr>
      <tr class="hover:bg-blue-50 transition">
        <td class="py-4 px-6 border-r border-[#00000034]"><b>Personalization</b></td>
        <td class="py-4 px-6 border-r border-[#00000034]">High (Personalized plan, adaptive in-class pacing)</td>
        <td class="py-4 px-6 border-r border-[#00000034]">Low (Standardized, one-size-fits-all curriculum)</td>
        <td class="py-4 px-6 border-r border-[#00000034]">Very High (Fully customized to one child)</td>
      </tr>
      <tr class="hover:bg-blue-50 transition">
        <td class="py-4 px-6 border-r border-[#00000034]"><b>Peer Interaction</b></td>
        <td class="py-4 px-6 border-r border-[#00000034]"><b>Key Feature:</b> Guided & supportive</td>
        <td class="py-4 px-6 border-r border-[#00000034]">Limited, often competitive or passive</td>
        <td class="py-4 px-6 border-r border-[#00000034]">None</td>
      </tr>
      <tr class="hover:bg-blue-50 transition">
        <td class="py-4 px-6 border-r border-[#00000034]"><b>Cost-Effectiveness</b></td>
        <td class="py-4 px-6 border-r border-[#00000034]">Excellent balance of cost and personalization</td>
        <td class="py-4 px-6 border-r border-[#00000034]">High (Lower cost, but lower effectiveness)</td>
        <td class="py-4 px-6 border-r border-[#00000034]">Low (Highest cost per hour)</td>
      </tr>
       <tr class="hover:bg-blue-50 transition">
        <td class="py-4 px-6 border-r border-[#00000034]"><b>Skill Development</b></td>
        <td class="py-4 px-6 border-r border-[#00000034]">Academic Mastery, Communication, and Collaboration</td>
        <td class="py-4 px-6 border-r border-[#00000034]">Primarily Academic Rote Learning</td>
        <td class="py-4 px-6 border-r border-[#00000034]">Primarily Academic Mastery</td>
      </tr>
    </tbody>
  </table>
          `,
        },
        {
          question: 'What is the "Assess & Strategize" phase and what will the diagnostic report tell me?',
          answer: `
          <p class="mb-4">The "Assess & Strategize" phase is the crucial first step in your child's journey with Study Monks and the foundation of their personalized learning plan. It is far more than a simple placement test. This phase involves a comprehensive "Diagnostic Assessment & Strategic Blueprint" designed to give us—and you—a deep and nuanced understanding of your child's academic standing.</p>
          <p class="mb-4">The assessment itself is designed to evaluate:</p>
           <ul class="list-disc list-outside px-4">
          <li class="mb-2"><b>Geographic Independence: </b> Your child can access our expert Cambridge curriculum mentoring from the comfort and safety of your home, no matter where you live. This is a significant advantage for families who may move internationally or live in areas where high-quality Cambridge-specific support is not locally available.</li>
          <li class="mb-2"><b>Flexible Scheduling: </b> We understand the complexities of different time zones. Our academic counselors work closely with families to find class schedules that are convenient and fit into your child's routine.</li>
         
          </ul>
          <p class="mb-4">Once the foundation is laid, students apply their new knowledge, often working together in small groups to solve problems and learn from one another. The class concludes with a period of individual practice, which allows the mentor to provide real-time, personalized feedback to reinforce concepts and build each student's confidence and mastery. This proven structure ensures every class is a productive and empowering learning experience.</p>
          <p class="mb-4">This structure ensures that every minute is productive, moving students through a powerful cycle of learning, applying, collaborating, and mastering.</p>
          `,
        },
      ],
    },
    {
      key: "mentor",
      title: "Our Mentors",
      subtitle: "How It Works Day-to-Day",
      desc: "A transparent look at your child's learning journey from start to finish.",
      faqs: [
        {
          question: "What is the structure of a typical 40-minute class?",
          answer: `
          <p>Each 40-minute "Micro Class" follows a rhythm of learning, applying, and reviewing to ensure deep understanding.</p>
          `,
        },
        {
          question:
            "How much individual attention does a child get in an 8-student class?",
          answer: `
          <p>Each student gets personalized attention in our 1:8 Micro Class format, ensuring both engagement and collaboration.</p>
          `,
        },
      ],
    },
    {
      key: "growth",
      title: "Growth & Well-being",
      subtitle: "How It Works Day-to-Day",
      desc: "A transparent look at your child's learning journey from start to finish.",
      faqs: [
        {
          question: "What is the structure of a typical 40-minute class?",
          answer: `
          <p>Each 40-minute "Micro Class" follows a rhythm of learning, applying, and reviewing to ensure deep understanding.</p>
          `,
        },
        {
          question:
            "How much individual attention does a child get in an 8-student class?",
          answer: `
          <p>Each student gets personalized attention in our 1:8 Micro Class format, ensuring both engagement and collaboration.</p>
          `,
        },
      ],
    },
    {
      key: "practicalities",
      title: "Practicalities",
      subtitle: "How It Works Day-to-Day",
      desc: "A transparent look at your child's learning journey from start to finish.",
      faqs: [
        {
          question: "What is the structure of a typical 40-minute class?",
          answer: `
          <p>Each 40-minute "Micro Class" follows a rhythm of learning, applying, and reviewing to ensure deep understanding.</p>
          `,
        },
        {
          question:
            "How much individual attention does a child get in an 8-student class?",
          answer: `
          <p>Each student gets personalized attention in our 1:8 Micro Class format, ensuring both engagement and collaboration.</p>
          `,
        },
      ],
    },
  ];

  return (
    <section className="py-5 px-6 lg:px-20 -mt-[220px]">
      <div className="container max-w-7xl mx-auto bg-[#F9F9F9] px-10 py-10 rounded-4xl">
        {/* 🔹 Mobile Dropdown Tabs */}
        <div className="md:hidden mb-4 ">
          <div className="relative">
            <select
              value={activeTab}
              onChange={(e) => {
                setActiveTab(e.target.value);
                setOpenAccordion(0);
              }}
              className="w-full border  rounded-lg p-3 bg-white font-medium text-gray-700 text-sm appearance-none"
            >
              {tabs.map((tab) => (
                <option key={tab.key} value={tab.key}>
                  {tab.title}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-3 text-gray-500 pointer-events-none" />
          </div>
        </div>

        {/* 🔹 Desktop Tabs */}
        <div className="hidden md:flex mb-6 space-x-10">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`pb-3 text-[15px] font-light transition-all duration-200 ${activeTab === tab.key
                  ? "text-[#fff] bg-[#243353] px-5 pt-3 rounded-xl"
                  : "text-[#000] px-5 pt-3"
                }`}
              onClick={() => {
                setActiveTab(tab.key);
                setOpenAccordion(0);
              }}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* 🔹 Tab Content */}
        {tabs.map(
          (tab) =>
            tab.key === activeTab && (
              <div key={tab.key} className="space-y-5">
                <h3 className="text-2xl font-bold text-gray-800 font-poppins">
                  {tab.subtitle}
                </h3>
                <p className="text-gray-600">{tab.desc}</p>

                {/* 🔹 Accordion */}
                <div className="space-y-4">
                  {tab.faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => handleAccordionToggle(index)}
                        className={`w-full flex justify-between items-center p-4 text-left font-medium transition-all duration-300 ${openAccordion === index
                            ? "bg-[#001F3F] text-white"
                            : "bg-[#001F3F] text-white"
                          }`}
                      >
                        <span>{faq.question}</span>
                        {openAccordion === index ? (
                          <FaArrowUp className=" transition-transform" />
                        ) : (
                          <FaArrowDown className="transition-transform" />
                        )}
                      </button>

                      {openAccordion === index && (
                        <div
                          className="p-4 bg-gray-100 text-gray-700 text-sm"
                          dangerouslySetInnerHTML={{ __html: faq.answer }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )
        )}
      </div>
    </section>
  );
}
