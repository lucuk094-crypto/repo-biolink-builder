'use client'

import { BioLinkData, THEMES, GRADIENTS, FONTS } from '@/types'
import { FaImage, FaPlus, FaTrash, FaEye, FaEyeSlash, FaGripVertical } from 'react-icons/fa'
import { useState } from 'react'
import LinkEditor from './LinkEditor'

interface BuilderProps {
  bioLinkData: BioLinkData
  setBioLinkData: (data: BioLinkData) => void
}

export default function Builder({ bioLinkData, setBioLinkData }: BuilderProps) {
  const [activeTab, setActiveTab] = useState<'profile' | 'theme' | 'background' | 'animation' | 'buttons' | 'links'>('profile')

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'profile' | 'background') => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        if (type === 'profile') {
          setBioLinkData({ ...bioLinkData, profileImage: reader.result as string })
        } else {
          setBioLinkData({
            ...bioLinkData,
            background: { ...bioLinkData.background, type: 'image', value: reader.result as string }
          })
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const addLink = () => {
    const newLink = {
      id: Date.now().toString(),
      title: 'New Link',
      url: 'https://',
      icon: '🔗',
      visible: true,
    }
    setBioLinkData({ ...bioLinkData, links: [...bioLinkData.links, newLink] })
  }

  const updateLink = (id: string, updates: Partial<typeof bioLinkData.links[0]>) => {
    setBioLinkData({
      ...bioLinkData,
      links: bioLinkData.links.map(link => link.id === id ? { ...link, ...updates } : link)
    })
  }

  const deleteLink = (id: string) => {
    setBioLinkData({
      ...bioLinkData,
      links: bioLinkData.links.filter(link => link.id !== id)
    })
  }

  const moveLink = (id: string, direction: 'up' | 'down') => {
    const index = bioLinkData.links.findIndex(link => link.id === id)
    if (index === -1) return
    
    const newLinks = [...bioLinkData.links]
    const newIndex = direction === 'up' ? index - 1 : index + 1
    
    if (newIndex < 0 || newIndex >= newLinks.length) return
    
    [newLinks[index], newLinks[newIndex]] = [newLinks[newIndex], newLinks[index]]
    setBioLinkData({ ...bioLinkData, links: newLinks })
  }

  const tabs = [
    { id: 'profile', label: '👤 Profile', icon: '👤' },
    { id: 'theme', label: '🎨 Theme', icon: '🎨' },
    { id: 'background', label: '🖼️ Background', icon: '🖼️' },
    { id: 'animation', label: '✨ Animation', icon: '✨' },
    { id: 'buttons', label: '🔘 Buttons', icon: '🔘' },
    { id: 'links', label: '🔗 Links', icon: '🔗' },
  ]

  return (
    <div className="bg-white border-4 border-black shadow-[8px_8px_0_0_#000]">
      {/* Tabs */}
      <div className="flex border-b-4 border-black overflow-x-auto">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-3 font-bold text-sm whitespace-nowrap transition-all ${
              activeTab === tab.id
                ? 'bg-yellow-400 border-r-4 border-black'
                : 'bg-white border-r-4 border-black hover:bg-gray-100'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-6 max-h-[calc(100vh-200px)] overflow-y-auto">
        {/* PROFILE TAB */}
        {activeTab === 'profile' && (
          <div className="space-y-6">
            <div>
              <label className="block font-bold mb-2 text-lg">Profile Image</label>
              <div className="flex items-center gap-4">
                {bioLinkData.profileImage && (
                  <img src={bioLinkData.profileImage} alt="Profile" className="w-20 h-20 object-cover rounded-full border-4 border-black" />
                )}
                <label className="cursor-pointer bg-purple-600 text-white px-4 py-2 font-bold border-4 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                  <FaImage className="inline mr-2" />
                  Upload Image
                  <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'profile')} className="hidden" />
                </label>
              </div>
            </div>

            <div>
              <label className="block font-bold mb-2 text-lg">Profile Name</label>
              <input
                type="text"
                value={bioLinkData.profileName}
                onChange={(e) => setBioLinkData({ ...bioLinkData, profileName: e.target.value })}
                className="w-full px-4 py-3 border-4 border-black font-bold text-lg focus:outline-none focus:ring-4 focus:ring-yellow-400"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block font-bold mb-2 text-lg">Profile Bio</label>
              <textarea
                value={bioLinkData.profileBio}
                onChange={(e) => setBioLinkData({ ...bioLinkData, profileBio: e.target.value })}
                className="w-full px-4 py-3 border-4 border-black font-medium resize-none focus:outline-none focus:ring-4 focus:ring-yellow-400"
                rows={3}
                placeholder="Your bio description"
              />
            </div>

            <div>
              <label className="block font-bold mb-2 text-lg">Profile Frame</label>
              <div className="grid grid-cols-3 gap-3">
                {(['circle', 'square', 'hexagon'] as const).map(frame => (
                  <button
                    key={frame}
                    onClick={() => setBioLinkData({ ...bioLinkData, profileFrame: frame })}
                    className={`px-4 py-3 font-bold border-4 border-black capitalize transition-all ${
                      bioLinkData.profileFrame === frame
                        ? 'bg-yellow-400 shadow-[4px_4px_0_0_#000]'
                        : 'bg-white shadow-[2px_2px_0_0_#000] hover:shadow-[4px_4px_0_0_#000]'
                    }`}
                  >
                    {frame}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-bold mb-2 text-lg">Profile Border</label>
              <div className="grid grid-cols-2 gap-3">
                {(['none', 'neon', 'gradient', 'animated'] as const).map(border => (
                  <button
                    key={border}
                    onClick={() => setBioLinkData({ ...bioLinkData, profileBorder: border })}
                    className={`px-4 py-3 font-bold border-4 border-black capitalize transition-all ${
                      bioLinkData.profileBorder === border
                        ? 'bg-yellow-400 shadow-[4px_4px_0_0_#000]'
                        : 'bg-white shadow-[2px_2px_0_0_#000] hover:shadow-[4px_4px_0_0_#000]'
                    }`}
                  >
                    {border}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-bold mb-2 text-lg">Font Family</label>
              <select
                value={bioLinkData.font}
                onChange={(e) => setBioLinkData({ ...bioLinkData, font: e.target.value })}
                className="w-full px-4 py-3 border-4 border-black font-bold text-lg focus:outline-none focus:ring-4 focus:ring-yellow-400"
              >
                {FONTS.map(font => (
                  <option key={font} value={font} style={{ fontFamily: font }}>
                    {font}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* THEME TAB */}
        {activeTab === 'theme' && (
          <div className="space-y-4">
            <label className="block font-bold mb-4 text-xl">Choose Theme</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {THEMES.map(theme => (
                <button
                  key={theme.id}
                  onClick={() => {
                    setBioLinkData({
                      ...bioLinkData,
                      theme: theme.id,
                      background: {
                        type: theme.colors.bg.includes('gradient') ? 'gradient' : 'solid',
                        value: theme.colors.bg
                      }
                    })
                  }}
                  className={`p-4 border-4 border-black text-left transition-all ${
                    bioLinkData.theme === theme.id
                      ? 'bg-yellow-400 shadow-[6px_6px_0_0_#000]'
                      : 'bg-white shadow-[3px_3px_0_0_#000] hover:shadow-[6px_6px_0_0_#000]'
                  }`}
                >
                  <div className="font-bold text-lg mb-2">{theme.name}</div>
                  <div className="flex gap-2">
                    {Object.values(theme.colors).slice(0, 4).map((color, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 border-2 border-black"
                        style={{ background: color }}
                      />
                    ))}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* BACKGROUND TAB */}
        {activeTab === 'background' && (
          <div className="space-y-6">
            <div>
              <label className="block font-bold mb-3 text-lg">Background Type</label>
              <div className="grid grid-cols-4 gap-3">
                {(['solid', 'gradient', 'image', 'pattern'] as const).map(type => (
                  <button
                    key={type}
                    onClick={() => setBioLinkData({
                      ...bioLinkData,
                      background: { ...bioLinkData.background, type }
                    })}
                    className={`px-4 py-3 font-bold border-4 border-black capitalize transition-all ${
                      bioLinkData.background.type === type
                        ? 'bg-yellow-400 shadow-[4px_4px_0_0_#000]'
                        : 'bg-white shadow-[2px_2px_0_0_#000] hover:shadow-[4px_4px_0_0_#000]'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {bioLinkData.background.type === 'solid' && (
              <div>
                <label className="block font-bold mb-3 text-lg">Solid Color</label>
                <input
                  type="color"
                  value={bioLinkData.background.value}
                  onChange={(e) => setBioLinkData({
                    ...bioLinkData,
                    background: { ...bioLinkData.background, value: e.target.value }
                  })}
                  className="w-full h-16 border-4 border-black cursor-pointer"
                />
              </div>
            )}

            {bioLinkData.background.type === 'gradient' && (
              <div>
                <label className="block font-bold mb-3 text-lg">Gradient Presets</label>
                <div className="grid grid-cols-3 gap-3 max-h-96 overflow-y-auto">
                  {GRADIENTS.map((gradient, i) => (
                    <button
                      key={i}
                      onClick={() => setBioLinkData({
                        ...bioLinkData,
                        background: { ...bioLinkData.background, value: gradient }
                      })}
                      className={`h-16 border-4 border-black transition-all ${
                        bioLinkData.background.value === gradient
                          ? 'shadow-[4px_4px_0_0_#000] scale-105'
                          : 'shadow-[2px_2px_0_0_#000] hover:shadow-[4px_4px_0_0_#000]'
                      }`}
                      style={{ background: gradient }}
                    />
                  ))}
                </div>
              </div>
            )}

            {bioLinkData.background.type === 'image' && (
              <div>
                <label className="block font-bold mb-3 text-lg">Upload Background Image</label>
                <label className="cursor-pointer bg-purple-600 text-white px-6 py-3 font-bold border-4 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all inline-block">
                  <FaImage className="inline mr-2" />
                  Choose Image
                  <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'background')} className="hidden" />
                </label>
              </div>
            )}

            {bioLinkData.background.type === 'pattern' && (
              <div>
                <label className="block font-bold mb-3 text-lg">Pattern Style</label>
                <div className="grid grid-cols-3 gap-3">
                  {(['dots', 'lines', 'waves'] as const).map(pattern => (
                    <button
                      key={pattern}
                      onClick={() => setBioLinkData({
                        ...bioLinkData,
                        background: { ...bioLinkData.background, pattern }
                      })}
                      className={`px-4 py-3 font-bold border-4 border-black capitalize transition-all ${
                        bioLinkData.background.pattern === pattern
                          ? 'bg-yellow-400 shadow-[4px_4px_0_0_#000]'
                          : 'bg-white shadow-[2px_2px_0_0_#000] hover:shadow-[4px_4px_0_0_#000]'
                      }`}
                    >
                      {pattern}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ANIMATION TAB */}
        {activeTab === 'animation' && (
          <div className="space-y-4">
            <label className="block font-bold mb-4 text-xl">Animation Effects</label>
            <div className="grid grid-cols-2 gap-4">
              {(['none', 'rain', 'snow', 'clouds', 'stars', 'bubbles', 'particles', 'shapes'] as const).map(animation => (
                <button
                  key={animation}
                  onClick={() => setBioLinkData({ ...bioLinkData, animation })}
                  className={`px-6 py-4 font-bold border-4 border-black capitalize transition-all ${
                    bioLinkData.animation === animation
                      ? 'bg-yellow-400 shadow-[6px_6px_0_0_#000]'
                      : 'bg-white shadow-[3px_3px_0_0_#000] hover:shadow-[6px_6px_0_0_#000]'
                  }`}
                >
                  {animation === 'none' ? '❌ None' : `✨ ${animation}`}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* BUTTONS TAB */}
        {activeTab === 'buttons' && (
          <div className="space-y-6">
            <div>
              <label className="block font-bold mb-3 text-lg">Button Shape</label>
              <div className="grid grid-cols-3 gap-3">
                {(['rounded', 'square', 'circle'] as const).map(shape => (
                  <button
                    key={shape}
                    onClick={() => setBioLinkData({
                      ...bioLinkData,
                      buttonStyle: { ...bioLinkData.buttonStyle, shape }
                    })}
                    className={`px-4 py-3 font-bold border-4 border-black capitalize transition-all ${
                      bioLinkData.buttonStyle.shape === shape
                        ? 'bg-yellow-400 shadow-[4px_4px_0_0_#000]'
                        : 'bg-white shadow-[2px_2px_0_0_#000] hover:shadow-[4px_4px_0_0_#000]'
                    }`}
                  >
                    {shape}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-bold mb-3 text-lg">Button Effect</label>
              <div className="grid grid-cols-3 gap-3">
                {(['none', 'glow', '3d'] as const).map(effect => (
                  <button
                    key={effect}
                    onClick={() => setBioLinkData({
                      ...bioLinkData,
                      buttonStyle: { ...bioLinkData.buttonStyle, effect }
                    })}
                    className={`px-4 py-3 font-bold border-4 border-black capitalize transition-all ${
                      bioLinkData.buttonStyle.effect === effect
                        ? 'bg-yellow-400 shadow-[4px_4px_0_0_#000]'
                        : 'bg-white shadow-[2px_2px_0_0_#000] hover:shadow-[4px_4px_0_0_#000]'
                    }`}
                  >
                    {effect}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-bold mb-3 text-lg">Hover Animation</label>
              <div className="grid grid-cols-3 gap-3">
                {(['slide', 'bounce', 'scale'] as const).map(animation => (
                  <button
                    key={animation}
                    onClick={() => setBioLinkData({
                      ...bioLinkData,
                      buttonStyle: { ...bioLinkData.buttonStyle, hoverAnimation: animation }
                    })}
                    className={`px-4 py-3 font-bold border-4 border-black capitalize transition-all ${
                      bioLinkData.buttonStyle.hoverAnimation === animation
                        ? 'bg-yellow-400 shadow-[4px_4px_0_0_#000]'
                        : 'bg-white shadow-[2px_2px_0_0_#000] hover:shadow-[4px_4px_0_0_#000]'
                    }`}
                  >
                    {animation}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-bold mb-3 text-lg">Icon Position</label>
              <div className="grid grid-cols-3 gap-3">
                {(['left', 'right', 'none'] as const).map(position => (
                  <button
                    key={position}
                    onClick={() => setBioLinkData({
                      ...bioLinkData,
                      buttonStyle: { ...bioLinkData.buttonStyle, iconPosition: position }
                    })}
                    className={`px-4 py-3 font-bold border-4 border-black capitalize transition-all ${
                      bioLinkData.buttonStyle.iconPosition === position
                        ? 'bg-yellow-400 shadow-[4px_4px_0_0_#000]'
                        : 'bg-white shadow-[2px_2px_0_0_#000] hover:shadow-[4px_4px_0_0_#000]'
                    }`}
                  >
                    {position}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* LINKS TAB */}
        {activeTab === 'links' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center mb-4">
              <label className="font-bold text-xl">Your Links</label>
              <button
                onClick={addLink}
                className="bg-purple-600 text-white px-4 py-2 font-bold border-4 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                <FaPlus className="inline mr-2" />
                Add Link
              </button>
            </div>

            {bioLinkData.links.length === 0 ? (
              <div className="text-center py-12 border-4 border-dashed border-gray-300">
                <p className="text-gray-500 font-medium text-lg">No links yet. Click "Add Link" to get started!</p>
              </div>
            ) : (
              <div className="space-y-3">
                {bioLinkData.links.map((link, index) => (
                  <LinkEditor
                    key={link.id}
                    link={link}
                    index={index}
                    totalLinks={bioLinkData.links.length}
                    onUpdate={updateLink}
                    onDelete={deleteLink}
                    onMove={moveLink}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
