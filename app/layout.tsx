import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ulas Glassmontering - Profesjonell montering av glassrekkverk',
  description: 'Ulas Glassmontering leverer høy kvalitet og trygg montering av glassrekkverk for privat- og bedriftskunder.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="no">
      <body>{children}</body>
    </html>
  )
}

