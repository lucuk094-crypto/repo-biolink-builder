import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bio Link Builder - Create Your Perfect Link in Bio',
  description: 'Create beautiful, customizable bio link pages with 10+ themes, animations, and unlimited links. Export and deploy instantly!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&family=Bebas+Neue&family=Righteous&family=Press+Start+2P&family=Orbitron:wght@400;500;600;700;800&family=Lato:wght@300;400;700&family=Raleway:wght@300;400;500;600;700&family=Oswald:wght@300;400;500;600;700&family=Merriweather:wght@300;400;700&family=Nunito:wght@300;400;600;700&family=Pacifico&family=Lobster&family=Dancing+Script:wght@400;500;600;700&family=Caveat:wght@400;500;600;700&family=Permanent+Marker&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
