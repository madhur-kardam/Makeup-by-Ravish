import { useEffect, useRef } from 'react'

export default function Lightbox({ images, index, onClose, onNavigate }) {
  const touchStartX = useRef(null)

  const isOpen = index != null

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNavigate(1)
      if (e.key === 'ArrowLeft') onNavigate(-1)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose, onNavigate])

  if (!isOpen) return null
  const image = images[index]

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 40) onNavigate(delta < 0 ? 1 : -1)
    touchStartX.current = null
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Portfolio image viewer"
      className="fixed inset-0 z-[60] bg-ink/95 flex items-center justify-center px-4 py-10 animate-[fadeIn_0.25s_ease-out]"
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <button
        type="button"
        aria-label="Close image viewer"
        onClick={onClose}
        className="absolute top-5 right-5 h-11 w-11 rounded-full border border-white/25 text-white flex items-center justify-center hover:border-white/60 transition-colors"
      >
        ✕
      </button>

      <button
        type="button"
        aria-label="Previous image"
        onClick={(e) => {
          e.stopPropagation()
          onNavigate(-1)
        }}
        className="absolute left-3 sm:left-6 h-11 w-11 rounded-full border border-white/25 text-white flex items-center justify-center hover:border-white/60 transition-colors"
      >
        ‹
      </button>

      <img
        src={image.src}
        alt={image.alt}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain"
      />

      <button
        type="button"
        aria-label="Next image"
        onClick={(e) => {
          e.stopPropagation()
          onNavigate(1)
        }}
        className="absolute right-3 sm:right-6 h-11 w-11 rounded-full border border-white/25 text-white flex items-center justify-center hover:border-white/60 transition-colors"
      >
        ›
      </button>
    </div>
  )
}
