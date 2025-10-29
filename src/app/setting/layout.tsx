import type { Metadata } from "next";



export const metadata: Metadata = {
    title: 'Setting',
    description: 'My learning',
  }


export default function LiveLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
            <>
                <div className="bg-[#F0F3FF]">
                    
    
                    {children}
                </div>
            </>
        )
}