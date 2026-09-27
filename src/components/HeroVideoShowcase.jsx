import { useEffect, useRef, useState } from 'react'
import heroVideos from '../data/heroVideos'

export default function HeroVideoShowcase() {
  const [index, setIndex] = useState(0)
  const videoRefs = useRef([])
  const touchStartX = useRef(null)

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return
      if (i === index) {
        video.currentTime = 0
        video.play().catch(() => {})
      } else {
        video.pause()
      }
    })
  }, [index])

  const go = (delta) => {
    setIndex((prev) => (prev + delta + heroVideos.length) % heroVideos.length)
  }

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 40) go(delta < 0 ? 1 : -1)
    touchStartX.current = null
  }

  return (
    <div className="relative w-full max-w-[420px] mx-auto lg:mx-0">
      <div
        className="relative aspect-[4/5] rounded-[28px] overflow-hidden bg-sand touch-pan-y"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {heroVideos.map((v, i) => (
          <video
            key={v.id}
            ref={(el) => (videoRefs.current[i] = el)}
            src={v.src}
            poster={v.poster}
            muted
            loop
            playsInline
            preload={i === 0 ? 'auto' : 'none'}
            aria-label={v.alt}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out ${
              i === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            style={{ objectPosition: v.focus || 'center' }}
          />
        ))}

        <button
          type="button"
          aria-label="Previous video"
          onClick={() => go(-1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center text-ink/70 hover:text-ink hover:bg-white/90 transition-colors"
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Next video"
          onClick={() => go(1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center text-ink/70 hover:text-ink hover:bg-white/90 transition-colors"
        >
          ›
        </button>
      </div>

      <div className="mt-4 flex items-center justify-center gap-1.5">
        {heroVideos.map((v, i) => (
          <span
            key={v.id}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === index ? 'w-5 bg-ink' : 'w-1.5 bg-line'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
