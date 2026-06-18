import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Siddhartha Mukherjee | Senior Full Stack & AI Engineer',
  description: 'I build AI products, SaaS platforms, mobile applications, cloud systems, and enterprise solutions from idea to production. 9+ years of experience. IIT Roorkee AI/ML certified.',
  keywords: ['Full Stack Developer', 'AI Engineer', 'Flutter Developer', 'React Developer', 'Node.js', 'AWS', 'IIT Roorkee', 'AI ML'],
  authors: [{ name: 'Siddhartha Mukherjee' }],
  openGraph: {
    title: 'Siddhartha Mukherjee | Senior Full Stack & AI Engineer',
    description: 'Building AI products, SaaS platforms, and enterprise solutions. 9+ years experience. IIT Roorkee AI/ML certified.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Siddhartha Mukherjee',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Siddhartha Mukherjee | Senior Full Stack & AI Engineer',
    description: 'Building AI products, SaaS platforms, and enterprise solutions. 9+ years experience.',
    creator: '@siddhartham94',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-brand-bg text-brand-text antialiased">
        {children}
      </body>
    </html>
  )
}
