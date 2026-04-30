import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Adelie Rekkverksmontering | Montering av glassrekkverk på Østlandet',
  description: 'Profesjonell montering av glassrekkverk og rekkverk for private og bedrifter på Østlandet. Spesialist på T-Railing. Solid håndverk og ryddige leveranser.',
  keywords: ['rekkverksmontering', 'glassrekkverk', 'rekkverk montering', 'T-Railing', 'Østlandet', 'glassrekkverk montering', 'rekkverk bedrift', 'rekkverk privat', 'Adelie'],
  authors: [{ name: 'Adelie Group AS' }],
  icons: {
    icon: '/adelie-app-icon.svg',
    apple: '/adelie-app-icon.svg',
  },
  openGraph: {
    title: 'Adelie Rekkverksmontering | Montering av glassrekkverk på Østlandet',
    description: 'Profesjonell montering av glassrekkverk og rekkverk for private og bedrifter på Østlandet. Spesialist på T-Railing.',
    locale: 'nb_NO',
    type: 'website',
    siteName: 'Adelie Rekkverksmontering',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nb">
      <body className="font-sans">{children}</body>
      <Script 
        src="https://tally.so/widgets/embed.js" 
        strategy="afterInteractive"
      />
    </html>
  )
}

