import './globals.css'
import type { Metadata } from 'next'
import { Poppins, Nunito_Sans, Roboto, Inter } from "next/font/google";

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-roboto",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});


export const metadata: Metadata = {
  title: 'E-Learning Web App',
  description: 'A platform to help the new generation in their jounery',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${nunito.variable} ${roboto.variable} ${inter.variable} ${poppins.variable}`}
      >
        <div className="mx-auto  max-w-[130rem] font-poppins">
          {children}
        </div>
      </body>
    </html>
  )
}
