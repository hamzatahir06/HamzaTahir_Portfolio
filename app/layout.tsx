import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Hamza Tahir — Agentic AI Engineer',
  description:
    'I build AI systems that take repetitive work off your team, like sorting email, researching, and routing updates, so your people get their hours back.',
  keywords: [
    'AI Engineer',
    'Agentic AI',
    'LLM',
    'Python',
    'Automation',
    'Portfolio',
  ],
  openGraph: {
    title: 'Hamza Tahir — Agentic AI Engineer',
    description:
      'I build AI systems that take repetitive work off your team and give your people their hours back.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-background font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
