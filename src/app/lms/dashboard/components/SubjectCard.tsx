// /components/SubjectCard.tsx
import Link from "next/link";
import React from "react";


type Props = {
  title: string;
  image: string;
  subtitle?: string;
  slug: string;
};

export default function SubjectCard({ title, image, subtitle, slug }: Props) {
  return (
    <Link href={`/subjects/${slug}`} className="block group">
      <div className="rounded-lg overflow-hidden shadow-sm bg-white group-hover:shadow-md transition-shadow">
        <div className="h-40 md:h-48 w-full overflow-hidden">
          <img src={image} alt={title} width={200}
                    height={200} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform" />
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
          {subtitle && <p className="text-sm text-slate-500 mt-1">{subtitle}</p>}

          <div className="mt-4 flex items-center justify-between">
            <div className="text-xs text-slate-500">28 Chapters | 480 videos</div>
            <button className="bg-sky-800 text-white px-3 py-1 text-sm rounded-full">Start Studying</button>
          </div>
        </div>
      </div>
    </Link>
  );
}
