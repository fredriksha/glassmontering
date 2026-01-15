import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rekkverksmontering - Profesjonell montering av glassrekkverk',
  description: 'Rekkverksmontering leverer høy kvalitet og trygg montering av glassrekkverk for privat- og bedriftskunder.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="no">
      <body>{children}</body>
      <Script 
        src="https://tally.so/widgets/embed.js" 
        strategy="afterInteractive"
      />
    </html>
  )
}

