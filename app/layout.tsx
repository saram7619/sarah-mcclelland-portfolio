import "./globals.css"
import { Space_Grotesk } from "next/font/google"

const space_grotesk = Space_Grotesk({
  weight: ["500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  title: "Sara McClelland Software Engineer Portfolio",
  description: "Created by Sarah McClelland",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={space_grotesk.className}>
      <link rel='icon' href='/favicon.png' />
      <body className='dark:bg-black text-white'>{children}</body>
    </html>
  )
}
