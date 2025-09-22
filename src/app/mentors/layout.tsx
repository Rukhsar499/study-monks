import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Mentors',
    description: 'Mentors',
  }


export default function MentorsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
          {children}
          
        </>
    )
}