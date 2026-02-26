import type { Metadata } from 'next'
import { Montserrat, Lato } from 'next/font/google'
import "./globals.css"
import { Navbar } from "@/components/layout/Navbar"
import Footer from "@/components/shared/Footer"

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800']
})

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['300', '400', '700']
})

export const metadata: Metadata = {
  title: "VD Associates | Luxury Residential Architects",
  description: "4 Decades of Architectural Excellence. EST. 1982.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${lato.variable} font-body antialiased bg-white text-ink-black`}
      >
        <Navbar />
        <div className="bg-drafting-paper min-h-screen relative flex flex-col pt-16">
          <div className="flex-1">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
