'use client'

import { useEffect, useState } from 'react'

interface AnimationLayerProps {
  animation: 'none' | 'rain' | 'snow' | 'clouds' | 'stars' | 'bubbles' | 'particles' | 'shapes'
}

export default function AnimationLayer({ animation }: AnimationLayerProps) {
  const [elements, setElements] = useState<JSX.Element[]>([])

  useEffect(() => {
    if (animation === 'none') {
      setElements([])
      return
    }

    const count = animation === 'clouds' || animation === 'shapes' ? 10 : 30
    const newElements: JSX.Element[] = []

    for (let i = 0; i < count; i++) {
      const left = Math.random() * 100
      const delay = Math.random() * 5
      const duration = 1 + Math.random() * 2

      switch (animation) {
        case 'rain':
          newElements.push(
            <div
              key={i}
              className="absolute w-0.5 h-5 bg-gradient-to-b from-transparent to-blue-400"
              style={{
                left: `${left}%`,
                animation: `rain ${duration}s linear infinite`,
                animationDelay: `${delay}s`,
              }}
            />
          )
          break

        case 'snow':
          newElements.push(
            <div
              key={i}
              className="absolute w-2.5 h-2.5 bg-white rounded-full"
              style={{
                left: `${left}%`,
                animation: `snow ${duration + 2}s linear infinite`,
                animationDelay: `${delay}s`,
              }}
            />
          )
          break

        case 'clouds':
          if (i < 5) {
            const top = Math.random() * 50
            newElements.push(
              <div
                key={i}
                className="absolute w-24 h-10 bg-white/70 rounded-full"
                style={{
                  top: `${top}%`,
                  animation: `cloud ${15 + Math.random() * 10}s linear infinite`,
                  animationDelay: `${delay}s`,
                }}
              />
            )
          }
          break

        case 'stars':
          const top = Math.random() * 50
          newElements.push(
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-white shadow-[0_0_10px_white]"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                animation: `shooting-star 2s linear infinite`,
                animationDelay: `${delay}s`,
              }}
            />
          )
          break

        case 'bubbles':
          const size = 20 + Math.random() * 40
          newElements.push(
            <div
              key={i}
              className="absolute rounded-full bg-white/30"
              style={{
                left: `${left}%`,
                width: `${size}px`,
                height: `${size}px`,
                animation: `bubble ${duration + 3}s ease-in infinite`,
                animationDelay: `${delay}s`,
              }}
            />
          )
          break

        case 'particles':
          const tx = (Math.random() - 0.5) * 200
          const ty = (Math.random() - 0.5) * 200
          newElements.push(
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-600/60 rounded-full"
              style={{
                left: `${left}%`,
                top: '50%',
                animation: `particle 3s ease-out infinite`,
                animationDelay: `${delay}s`,
                // @ts-ignore
                '--tx': `${tx}px`,
                '--ty': `${ty}px`,
              }}
            />
          )
          break

        case 'shapes':
          if (i < 10) {
            const size = 30 + Math.random() * 50
            const top = Math.random() * 100
            const shapeType = i % 3
            const borderRadius = shapeType === 0 ? '50%' : shapeType === 1 ? '0' : '0'
            
            newElements.push(
              <div
                key={i}
                className="absolute border-2 border-black/20"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  borderRadius,
                  animation: `float-shape 6s ease-in-out infinite`,
                  animationDelay: `${delay}s`,
                }}
              />
            )
          }
          break
      }
    }

    setElements(newElements)
  }, [animation])

  if (animation === 'none') return null

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {elements}
    </div>
  )
}
