import React from 'react'
import './globals.css'
import { IBM_Plex_Sans } from 'next/font/google'
import { ThemeProvider } from '../src/context/ThemeContext'

const ibm = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
  title: 'Weekly JS challenge',
  description: 'Nerdbord`s weekly challenge',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="en">
      <body className={ibm.className}>
        <ThemeProvider>
          <div className="container">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
