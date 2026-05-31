'use client'

import { useState } from 'react'
import Builder from '@/components/Builder'
import Preview from '@/components/Preview'
import { BioLinkData } from '@/types'

export default function Home() {
  const [bioLinkData, setBioLinkData] = useState<BioLinkData>({
    theme: 'brutalism',
    profileImage: '',
    profileName: 'Your Name',
    profileBio: 'Your bio description',
    profileFrame: 'circle',
    profileBorder: 'none',
    background: {
      type: 'solid',
      value: '#F3E5AB',
    },
    animation: 'none',
    font: 'Space Grotesk',
    buttonStyle: {
      shape: 'rounded',
      effect: 'none',
      hoverAnimation: 'scale',
      iconPosition: 'left',
    },
    links: [],
  })

  return (
    <main className="min-h-screen bg-vanilla">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 font-space-grotesk" style={{
            color: '#000',
            textShadow: '4px 4px 0 #FFFF00, 8px 8px 0 #9D00FF'
          }}>
            BIO LINK BUILDER
          </h1>
          <p className="text-xl text-gray-700 font-medium">
            Create your perfect link in bio with Brutalism style 🎨
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Builder bioLinkData={bioLinkData} setBioLinkData={setBioLinkData} />
          <Preview bioLinkData={bioLinkData} />
        </div>
      </div>
    </main>
  )
}
