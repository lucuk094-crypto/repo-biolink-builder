'use client'

import { BioLinkData, THEMES } from '@/types'
import { FaDownload } from 'react-icons/fa'
import { useRef } from 'react'
import AnimationLayer from './AnimationLayer'

interface PreviewProps {
  bioLinkData: BioLinkData
}

export default function Preview({ bioLinkData }: PreviewProps) {
  const previewRef = useRef<HTMLDivElement>(null)

  const getThemeColors = () => {
    const theme = THEMES.find(t => t.id === bioLinkData.theme)
    return theme?.colors || THEMES[0].colors
  }

  const colors = getThemeColors()

  const getBackgroundStyle = () => {
    const { background } = bioLinkData
    
    if (background.type === 'solid') {
      return { backgroundColor: background.value }
    }
    if (background.type === 'gradient') {
      return { background: background.value }
    }
    if (background.type === 'image') {
      return {
        backgroundImage: `url(${background.value})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    }
    if (background.type === 'pattern') {
      const patternClass = background.pattern === 'dots' ? 'pattern-dots' :
                          background.pattern === 'lines' ? 'pattern-lines' :
                          'pattern-waves'
      return { backgroundColor: background.value }
    }
    return { backgroundColor: '#F3E5AB' }
  }

  const getProfileFrameClass = () => {
    switch (bioLinkData.profileFrame) {
      case 'circle':
        return 'rounded-full'
      case 'square':
        return 'rounded-none'
      case 'hexagon':
        return 'rounded-3xl'
      default:
        return 'rounded-full'
    }
  }

  const getProfileBorderClass = () => {
    switch (bioLinkData.profileBorder) {
      case 'neon':
        return 'neon-border'
      case 'gradient':
        return 'gradient-border p-1'
      case 'animated':
        return 'neon-border gradient-border p-1'
      default:
        return ''
    }
  }

  const getButtonShapeClass = () => {
    switch (bioLinkData.buttonStyle.shape) {
      case 'rounded':
        return 'rounded-xl'
      case 'square':
        return 'rounded-none'
      case 'circle':
        return 'rounded-full'
      default:
        return 'rounded-xl'
    }
  }

  const getButtonEffectClass = () => {
    switch (bioLinkData.buttonStyle.effect) {
      case 'glow':
        return 'glow-effect'
      case '3d':
        return 'effect-3d'
      default:
        return ''
    }
  }

  const getButtonHoverClass = () => {
    switch (bioLinkData.buttonStyle.hoverAnimation) {
      case 'slide':
        return 'btn-hover-slide'
      case 'bounce':
        return 'btn-hover-bounce'
      case 'scale':
        return 'btn-hover-scale'
      default:
        return ''
    }
  }

  const exportHTML = () => {
    const html = generateHTMLExport()
    const blob = new Blob([html], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'biolink.html'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const generateHTMLExport = () => {
    const backgroundStyle = getBackgroundStyle()
    const bgStyleString = Object.entries(backgroundStyle)
      .map(([key, value]) => `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value}`)
      .join('; ')

    const patternClass = bioLinkData.background.type === 'pattern' 
      ? bioLinkData.background.pattern === 'dots' ? 'pattern-dots' :
        bioLinkData.background.pattern === 'lines' ? 'pattern-lines' : 'pattern-waves'
      : ''

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${bioLinkData.profileName} - Bio Link</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=${bioLinkData.font.replace(/ /g, '+')}:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: '${bioLinkData.font}', sans-serif;
      min-height: 100vh;
      ${bgStyleString};
      overflow-x: hidden;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 40px 20px;
      position: relative;
      z-index: 10;
    }
    .profile {
      text-align: center;
      margin-bottom: 40px;
    }
    .profile-image-wrapper {
      display: inline-block;
      ${bioLinkData.profileBorder === 'gradient' ? 'background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000); background-size: 400% 400%; animation: gradient-rotate 3s ease infinite; padding: 4px;' : ''}
      ${bioLinkData.profileBorder === 'neon' ? 'animation: neon-border 2s ease-in-out infinite;' : ''}
      ${bioLinkData.profileBorder === 'animated' ? 'background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000); background-size: 400% 400%; animation: gradient-rotate 3s ease infinite, neon-border 2s ease-in-out infinite; padding: 4px;' : ''}
      border-radius: ${bioLinkData.profileFrame === 'circle' ? '50%' : bioLinkData.profileFrame === 'square' ? '0' : '24px'};
    }
    .profile-image {
      width: 120px;
      height: 120px;
      object-fit: cover;
      border: 4px solid #000;
      border-radius: ${bioLinkData.profileFrame === 'circle' ? '50%' : bioLinkData.profileFrame === 'square' ? '0' : '24px'};
      ${!bioLinkData.profileImage ? 'background: #ddd;' : ''}
    }
    .profile-name {
      font-size: 32px;
      font-weight: bold;
      margin: 20px 0 10px;
      color: ${colors.primary};
    }
    .profile-bio {
      font-size: 16px;
      color: ${colors.secondary};
      margin-bottom: 10px;
    }
    .links {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .link-button {
      display: flex;
      align-items: center;
      ${bioLinkData.buttonStyle.iconPosition === 'right' ? 'flex-direction: row-reverse;' : ''}
      ${bioLinkData.buttonStyle.iconPosition === 'none' ? 'justify-content: center;' : 'justify-content: space-between;'}
      padding: 16px 24px;
      background: ${colors.primary};
      color: ${colors.bg.includes('gradient') ? '#fff' : colors.bg};
      border: 4px solid #000;
      border-radius: ${bioLinkData.buttonStyle.shape === 'circle' ? '50px' : bioLinkData.buttonStyle.shape === 'square' ? '0' : '12px'};
      font-size: 18px;
      font-weight: bold;
      text-decoration: none;
      transition: all 0.3s ease;
      ${bioLinkData.buttonStyle.effect === '3d' ? 'box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.3);' : ''}
      ${bioLinkData.buttonStyle.effect === 'glow' ? `box-shadow: 0 0 10px ${colors.primary}, 0 0 20px ${colors.primary};` : ''}
    }
    .link-button:hover {
      ${bioLinkData.buttonStyle.hoverAnimation === 'scale' ? 'transform: scale(1.05);' : ''}
      ${bioLinkData.buttonStyle.hoverAnimation === 'bounce' ? 'animation: bounce 0.5s ease;' : ''}
      ${bioLinkData.buttonStyle.effect === '3d' ? 'transform: translateY(-2px); box-shadow: 6px 6px 0 rgba(0, 0, 0, 0.3);' : ''}
    }
    .link-icon {
      font-size: 24px;
      ${bioLinkData.buttonStyle.iconPosition === 'none' ? 'display: none;' : ''}
    }
    .link-icon img {
      width: 32px;
      height: 32px;
      object-fit: cover;
      border-radius: 4px;
    }
    ${bioLinkData.background.type === 'pattern' ? `
    body.${patternClass} {
      ${patternClass === 'pattern-dots' ? 'background-image: radial-gradient(circle, rgba(0, 0, 0, 0.1) 1px, transparent 1px); background-size: 20px 20px;' : ''}
      ${patternClass === 'pattern-lines' ? 'background-image: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0, 0, 0, 0.1) 10px, rgba(0, 0, 0, 0.1) 20px);' : ''}
      ${patternClass === 'pattern-waves' ? 'background-image: repeating-radial-gradient(circle at 0 0, transparent 0, rgba(0, 0, 0, 0.05) 10px, transparent 20px);' : ''}
    }
    ` : ''}
    @keyframes gradient-rotate {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    @keyframes neon-border {
      0%, 100% { box-shadow: 0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor; }
      50% { box-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor; }
    }
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    ${generateAnimationCSS()}
  </style>
</head>
<body${bioLinkData.background.type === 'pattern' ? ` class="${patternClass}"` : ''}>
  ${generateAnimationHTML()}
  <div class="container">
    <div class="profile">
      <div class="profile-image-wrapper">
        <img src="${bioLinkData.profileImage || 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Crect fill=%22%23ddd%22 width=%22120%22 height=%22120%22/%3E%3C/svg%3E'}" alt="${bioLinkData.profileName}" class="profile-image">
      </div>
      <h1 class="profile-name">${bioLinkData.profileName}</h1>
      <p class="profile-bio">${bioLinkData.profileBio}</p>
    </div>
    <div class="links">
      ${bioLinkData.links.filter(link => link.visible).map(link => `
      <a href="${link.url}" class="link-button" target="_blank" rel="noopener noreferrer">
        <span class="link-title">${link.title}</span>
        <span class="link-icon">
          ${link.customIcon ? `<img src="${link.customIcon}" alt="icon">` : link.icon}
        </span>
      </a>
      `).join('')}
    </div>
  </div>
</body>
</html>`
  }

  const generateAnimationCSS = () => {
    if (bioLinkData.animation === 'none') return ''
    
    const animations: Record<string, string> = {
      rain: `
        .animation-layer { position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 1; }
        .rain-drop { position: absolute; width: 2px; height: 20px; background: linear-gradient(transparent, #4a9eff); animation: rain 1s linear infinite; }
        @keyframes rain { 0% { transform: translateY(-100vh); } 100% { transform: translateY(100vh); } }
      `,
      snow: `
        .animation-layer { position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 1; }
        .snow-flake { position: absolute; width: 10px; height: 10px; background: white; border-radius: 50%; animation: snow 3s linear infinite; }
        @keyframes snow { 0% { transform: translateY(-100vh) rotate(0deg); } 100% { transform: translateY(100vh) rotate(360deg); } }
      `,
      clouds: `
        .animation-layer { position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 1; }
        .cloud { position: absolute; width: 100px; height: 40px; background: rgba(255, 255, 255, 0.7); border-radius: 50px; animation: cloud 20s linear infinite; }
        @keyframes cloud { 0% { transform: translateX(-100%); } 100% { transform: translateX(100vw); } }
      `,
      stars: `
        .animation-layer { position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 1; }
        .shooting-star { position: absolute; width: 2px; height: 2px; background: white; box-shadow: 0 0 10px white; animation: shooting-star 2s linear infinite; }
        @keyframes shooting-star { 0% { transform: translate(0, 0) rotate(-45deg); opacity: 1; } 100% { transform: translate(-300px, 300px) rotate(-45deg); opacity: 0; } }
      `,
      bubbles: `
        .animation-layer { position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 1; }
        .bubble { position: absolute; border-radius: 50%; background: rgba(255, 255, 255, 0.3); animation: bubble 4s ease-in infinite; }
        @keyframes bubble { 0% { transform: translateY(100vh) scale(0); opacity: 0; } 50% { opacity: 1; } 100% { transform: translateY(-100vh) scale(1); opacity: 0; } }
      `,
      particles: `
        .animation-layer { position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 1; }
        .particle { position: absolute; width: 4px; height: 4px; background: rgba(157, 0, 255, 0.6); border-radius: 50%; animation: particle 3s ease-out infinite; }
        @keyframes particle { 0% { transform: translate(0, 0); opacity: 1; } 100% { transform: translate(var(--tx), var(--ty)); opacity: 0; } }
      `,
      shapes: `
        .animation-layer { position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 1; }
        .floating-shape { position: absolute; border: 3px solid rgba(0, 0, 0, 0.2); animation: float-shape 6s ease-in-out infinite; }
        @keyframes float-shape { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 25% { transform: translate(10px, -10px) rotate(5deg); } 50% { transform: translate(-5px, -20px) rotate(-5deg); } 75% { transform: translate(-10px, -10px) rotate(3deg); } }
      `
    }
    
    return animations[bioLinkData.animation] || ''
  }

  const generateAnimationHTML = () => {
    if (bioLinkData.animation === 'none') return ''
    
    const count = 30
    let html = '<div class="animation-layer">'
    
    for (let i = 0; i < count; i++) {
      const left = Math.random() * 100
      const delay = Math.random() * 5
      const duration = 1 + Math.random() * 2
      
      switch (bioLinkData.animation) {
        case 'rain':
          html += `<div class="rain-drop" style="left: ${left}%; animation-delay: ${delay}s; animation-duration: ${duration}s;"></div>`
          break
        case 'snow':
          html += `<div class="snow-flake" style="left: ${left}%; animation-delay: ${delay}s; animation-duration: ${duration + 2}s;"></div>`
          break
        case 'clouds':
          if (i < 5) {
            const top = Math.random() * 50
            html += `<div class="cloud" style="top: ${top}%; animation-delay: ${delay}s; animation-duration: ${15 + Math.random() * 10}s;"></div>`
          }
          break
        case 'stars':
          const top = Math.random() * 50
          html += `<div class="shooting-star" style="left: ${left}%; top: ${top}%; animation-delay: ${delay}s;"></div>`
          break
        case 'bubbles':
          const size = 20 + Math.random() * 40
          html += `<div class="bubble" style="left: ${left}%; width: ${size}px; height: ${size}px; animation-delay: ${delay}s; animation-duration: ${duration + 3}s;"></div>`
          break
        case 'particles':
          const tx = (Math.random() - 0.5) * 200
          const ty = (Math.random() - 0.5) * 200
          html += `<div class="particle" style="left: ${left}%; top: 50%; --tx: ${tx}px; --ty: ${ty}px; animation-delay: ${delay}s;"></div>`
          break
        case 'shapes':
          if (i < 10) {
            const size = 30 + Math.random() * 50
            const top = Math.random() * 100
            const shape = i % 3 === 0 ? 'circle' : i % 3 === 1 ? 'square' : 'triangle'
            const borderRadius = shape === 'circle' ? '50%' : shape === 'square' ? '0' : '0'
            html += `<div class="floating-shape" style="left: ${left}%; top: ${top}%; width: ${size}px; height: ${size}px; border-radius: ${borderRadius}; animation-delay: ${delay}s;"></div>`
          }
          break
      }
    }
    
    html += '</div>'
    return html
  }

  const patternClass = bioLinkData.background.type === 'pattern' 
    ? bioLinkData.background.pattern === 'dots' ? 'pattern-dots' :
      bioLinkData.background.pattern === 'lines' ? 'pattern-lines' : 'pattern-waves'
    : ''

  return (
    <div className="sticky top-8">
      <div className="bg-white border-4 border-black shadow-[8px_8px_0_0_#000] mb-4">
        <div className="p-4 border-b-4 border-black bg-yellow-400">
          <h2 className="text-2xl font-bold">Preview</h2>
        </div>
        
        <div className="p-4">
          <button
            onClick={exportHTML}
            className="w-full bg-purple-600 text-white px-6 py-3 font-bold text-lg border-4 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            <FaDownload className="inline mr-2" />
            Export HTML
          </button>
        </div>
      </div>

      <div className="bg-white border-4 border-black shadow-[8px_8px_0_0_#000] overflow-hidden">
        <div
          ref={previewRef}
          className={`relative min-h-[600px] overflow-hidden ${patternClass}`}
          style={{
            ...getBackgroundStyle(),
            fontFamily: bioLinkData.font,
          }}
        >
          <AnimationLayer animation={bioLinkData.animation} />
          
          <div className="relative z-10 max-w-md mx-auto p-8">
            {/* Profile Section */}
            <div className="text-center mb-8">
              <div className={`inline-block ${getProfileBorderClass()}`}>
                <div className={`w-32 h-32 ${getProfileFrameClass()} border-4 border-black overflow-hidden ${!bioLinkData.profileImage ? 'bg-gray-300' : ''}`}>
                  {bioLinkData.profileImage && (
                    <img
                      src={bioLinkData.profileImage}
                      alt={bioLinkData.profileName}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
              
              <h1
                className="text-3xl font-bold mt-4 mb-2"
                style={{ color: colors.primary }}
              >
                {bioLinkData.profileName}
              </h1>
              
              <p
                className="text-base"
                style={{ color: colors.secondary }}
              >
                {bioLinkData.profileBio}
              </p>
            </div>

            {/* Links Section */}
            <div className="space-y-4">
              {bioLinkData.links.filter(link => link.visible).map(link => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    flex items-center justify-between px-6 py-4 border-4 border-black font-bold text-lg
                    ${getButtonShapeClass()}
                    ${getButtonEffectClass()}
                    ${getButtonHoverClass()}
                    ${bioLinkData.buttonStyle.iconPosition === 'right' ? 'flex-row-reverse' : ''}
                    ${bioLinkData.buttonStyle.iconPosition === 'none' ? 'justify-center' : ''}
                  `}
                  style={{
                    backgroundColor: colors.primary,
                    color: colors.bg.includes('gradient') ? '#fff' : colors.bg,
                  }}
                >
                  <span>{link.title}</span>
                  {bioLinkData.buttonStyle.iconPosition !== 'none' && (
                    <span className="text-2xl">
                      {link.customIcon ? (
                        <img src={link.customIcon} alt="icon" className="w-8 h-8 object-cover rounded" />
                      ) : (
                        link.icon
                      )}
                    </span>
                  )}
                </a>
              ))}
            </div>

            {bioLinkData.links.filter(link => link.visible).length === 0 && (
              <div className="text-center py-12 text-gray-500 font-medium">
                Add links to see them here
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
