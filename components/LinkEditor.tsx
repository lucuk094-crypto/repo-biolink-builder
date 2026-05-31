'use client'

import { LinkItem } from '@/types'
import { FaTrash, FaEye, FaEyeSlash, FaChevronUp, FaChevronDown, FaImage } from 'react-icons/fa'
import { useState } from 'react'

interface LinkEditorProps {
  link: LinkItem
  index: number
  totalLinks: number
  onUpdate: (id: string, updates: Partial<LinkItem>) => void
  onDelete: (id: string) => void
  onMove: (id: string, direction: 'up' | 'down') => void
}

export default function LinkEditor({ link, index, totalLinks, onUpdate, onDelete, onMove }: LinkEditorProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleIconUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        onUpdate(link.id, { customIcon: reader.result as string })
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="border-4 border-black bg-white">
      <div className="flex items-center gap-2 p-3 bg-gray-50">
        <div className="flex flex-col gap-1">
          <button
            onClick={() => onMove(link.id, 'up')}
            disabled={index === 0}
            className={`p-1 border-2 border-black ${
              index === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-yellow-400'
            }`}
          >
            <FaChevronUp />
          </button>
          <button
            onClick={() => onMove(link.id, 'down')}
            disabled={index === totalLinks - 1}
            className={`p-1 border-2 border-black ${
              index === totalLinks - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-yellow-400'
            }`}
          >
            <FaChevronDown />
          </button>
        </div>

        <div className="flex-1">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full text-left font-bold text-lg"
          >
            {link.icon} {link.title}
          </button>
        </div>

        <button
          onClick={() => onUpdate(link.id, { visible: !link.visible })}
          className={`p-2 border-2 border-black ${
            link.visible ? 'bg-green-400' : 'bg-gray-300'
          }`}
          title={link.visible ? 'Hide' : 'Show'}
        >
          {link.visible ? <FaEye /> : <FaEyeSlash />}
        </button>

        <button
          onClick={() => onDelete(link.id)}
          className="p-2 border-2 border-black bg-red-500 text-white hover:bg-red-600"
          title="Delete"
        >
          <FaTrash />
        </button>
      </div>

      {isExpanded && (
        <div className="p-4 space-y-4 border-t-4 border-black">
          <div>
            <label className="block font-bold mb-2">Title</label>
            <input
              type="text"
              value={link.title}
              onChange={(e) => onUpdate(link.id, { title: e.target.value })}
              className="w-full px-3 py-2 border-4 border-black font-medium focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Link Title"
            />
          </div>

          <div>
            <label className="block font-bold mb-2">URL</label>
            <input
              type="url"
              value={link.url}
              onChange={(e) => onUpdate(link.id, { url: e.target.value })}
              className="w-full px-3 py-2 border-4 border-black font-medium focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="https://example.com"
            />
          </div>

          <div>
            <label className="block font-bold mb-2">Icon (Emoji or Text)</label>
            <input
              type="text"
              value={link.icon}
              onChange={(e) => onUpdate(link.id, { icon: e.target.value })}
              className="w-full px-3 py-2 border-4 border-black font-medium text-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="🔗"
              maxLength={4}
            />
          </div>

          <div>
            <label className="block font-bold mb-2">Custom Icon Image (Optional)</label>
            <div className="flex items-center gap-3">
              {link.customIcon && (
                <img src={link.customIcon} alt="Icon" className="w-12 h-12 object-cover border-2 border-black" />
              )}
              <label className="cursor-pointer bg-purple-600 text-white px-4 py-2 font-bold border-2 border-black hover:bg-purple-700 transition-all">
                <FaImage className="inline mr-2" />
                Upload Icon
                <input type="file" accept="image/*" onChange={handleIconUpload} className="hidden" />
              </label>
              {link.customIcon && (
                <button
                  onClick={() => onUpdate(link.id, { customIcon: undefined })}
                  className="px-3 py-2 bg-red-500 text-white font-bold border-2 border-black hover:bg-red-600"
                >
                  Remove
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
