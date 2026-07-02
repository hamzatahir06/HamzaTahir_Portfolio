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
    'I build Autonomous, agentic AI systems that replace manual work and create real business value using Python, LLMs, and APIs.',
  generator: 'v0.app',
  keywords: [
    'AI Engineer',
    'Agentic AI',
    'LLM',
    'Python',
    'Automation',
    'Portfolio',
  ],
  openGraph: {
    title: 'Hamza Tahir — AI Systems Engineer',
    description:
      'I build autonomous, agentic AI systems that replace manual work and create real business value.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0e12',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-background font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
