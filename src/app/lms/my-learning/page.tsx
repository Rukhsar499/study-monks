// /pages/index.tsx
import Head from "next/head";
import { subjects } from "@/app/data/subjects";
import SubjectCard from "../dashboard/components/SubjectCard";

export default function Home() {
  return (
    <>
      <Head>
        <title>Subjects</title>
      </Head>

      <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-10 text-center">
        My Learning – Subjects
      </h1>

      {/* ✅ Loop through all subjects */}
      {subjects.map((subject) => (
        <section key={subject.id} className="mb-12">
          {/* Subject Heading */}
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            {subject.title}
          </h2>

          {/* Grid of Topics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subject.topics.map((topic) => (
              <SubjectCard
                key={topic.id}
                title={topic.title}
                image={subject.image} // use subject image for all its topics
                slug={`${subject.id}/${topic.id}`} // for example: /lms/mathematics/algebra
                subtitle={`Explore ${topic.title}`}
              />
            ))}
          </div>
        </section>
      ))}
    </main>
    </>
  );
}
