export interface BioLinkData {
  theme: string
  profileImage: string
  profileName: string
  profileBio: string
  profileFrame: 'circle' | 'square' | 'hexagon'
  profileBorder: 'none' | 'neon' | 'gradient' | 'animated'
  background: {
    type: 'solid' | 'gradient' | 'image' | 'pattern'
    value: string
    pattern?: 'dots' | 'lines' | 'waves'
  }
  animation: 'none' | 'rain' | 'snow' | 'clouds' | 'stars' | 'bubbles' | 'particles' | 'shapes'
  font: string
  buttonStyle: {
    shape: 'rounded' | 'square' | 'circle'
    effect: 'none' | 'glow' | '3d'
    hoverAnimation: 'slide' | 'bounce' | 'scale'
    iconPosition: 'left' | 'right' | 'none'
  }
  links: LinkItem[]
}

export interface LinkItem {
  id: string
  title: string
  url: string
  icon: string
  visible: boolean
  customIcon?: string
}

export const THEMES = [
  { id: 'brutalism', name: 'Brutalism', colors: { bg: '#F3E5AB', primary: '#000', secondary: '#FFFF00', accent: '#9D00FF' } },
  { id: 'neon-cyber', name: 'Neon Cyber', colors: { bg: '#0a0a0a', primary: '#00ff41', secondary: '#ff006e', accent: '#00d9ff' } },
  { id: 'greek', name: 'Greek Style', colors: { bg: '#f5f5dc', primary: '#1e3a8a', secondary: '#fbbf24', accent: '#dc2626' } },
  { id: 'minimalist', name: 'Minimalist', colors: { bg: '#ffffff', primary: '#000000', secondary: '#666666', accent: '#999999' } },
  { id: 'glassmorphism', name: 'Glassmorphism', colors: { bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', primary: '#ffffff', secondary: '#f0f0f0', accent: '#e0e0e0' } },
  { id: 'gradient-modern', name: 'Gradient Modern', colors: { bg: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', primary: '#ffffff', secondary: '#ffe5e5', accent: '#ffd5d5' } },
  { id: 'dark-mode', name: 'Dark Mode', colors: { bg: '#1a1a1a', primary: '#ffffff', secondary: '#a0a0a0', accent: '#4a4a4a' } },
  { id: 'pastel', name: 'Pastel', colors: { bg: '#fce4ec', primary: '#880e4f', secondary: '#f8bbd0', accent: '#c2185b' } },
  { id: 'retro-80s', name: 'Retro 80s', colors: { bg: '#2d1b69', primary: '#ff6ec7', secondary: '#00ffff', accent: '#ffff00' } },
  { id: 'nature', name: 'Nature', colors: { bg: '#e8f5e9', primary: '#1b5e20', secondary: '#4caf50', accent: '#81c784' } },
]

export const GRADIENTS = [
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
  'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
  'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
  'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
  'linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%)',
  'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
  'linear-gradient(135deg, #f77062 0%, #fe5196 100%)',
  'linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)',
  'linear-gradient(135deg, #e8198b 0%, #c7eafd 100%)',
  'linear-gradient(135deg, #96fbc4 0%, #f9f586 100%)',
  'linear-gradient(135deg, #fddb92 0%, #d1fdff 100%)',
  'linear-gradient(135deg, #9890e3 0%, #b1f4cf 100%)',
  'linear-gradient(135deg, #ebc0fd 0%, #d9ded8 100%)',
  'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
  'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)',
]

export const FONTS = [
  'Space Grotesk',
  'Inter',
  'Poppins',
  'Roboto',
  'Montserrat',
  'Playfair Display',
  'Bebas Neue',
  'Righteous',
  'Press Start 2P',
  'Orbitron',
  'Lato',
  'Raleway',
  'Oswald',
  'Merriweather',
  'Nunito',
  'Pacifico',
  'Lobster',
  'Dancing Script',
  'Caveat',
  'Permanent Marker',
]
