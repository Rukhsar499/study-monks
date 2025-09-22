import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Live Class',
    description: 'Live Class',
  }


export default function LiveLayout({
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