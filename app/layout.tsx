import NavBar from '@/app/componets/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'
import { BRAND_NAME } from '@/utilty/constants'
import Footer from './componets/Footer'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: BRAND_NAME,
  description: 'Generated by Mayank Pandey',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <div className='min-h-screen'>
          {children}
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
