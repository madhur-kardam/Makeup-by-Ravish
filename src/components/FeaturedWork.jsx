import { useEffect, useRef, useState } from 'react'
import featuredVideos from '../data/featuredVideos'
import useDragScroll from '../hooks/useDragScroll'

export default function FeaturedWork() {
  const { ref, dragHandlers } = useDragScroll()
  const cardRefs = useRef([])
  const videoRefs = useRef([])
  const [activeIds, setActiveIds] = useState(() => new Set([featuredVideos[0]?.id]))

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        setActiveIds((prev) => {
          const next = new Set(prev)
          entries.forEach((entry) => {
            const id = entry.target.dataset.id
            if (entry.intersectionRatio > 0.6) {
              next.add(id)
            } else {
              next.delete(id)
            }
          })
          return next
        })
      },
      { root: container, threshold: [0, 0.6, 1] }
    )

    cardRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [ref])

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return
      if (activeIds.has(featuredVideos[i].id)) {
        video.play().catch(() => {})
      } else {
        video.pause()
      }
    })
  }, [activeIds])

  return (
    <div>
      <h3 className="font-display font-medium text-3xl sm:text-4xl text-ink mb-6">
        Featured Work
      </h3>
      <div
        ref={ref}
        {...dragHandlers}
        className="no-scrollbar cursor-grab active:cursor-grabbing flex gap-4 sm:gap-5 overflow-x-auto snap-x-mandatory pb-2"
      >
        {featuredVideos.map((v, i) => (
          <div
            key={v.id}
            data-id={v.id}
            ref={(el) => (cardRefs.current[i] = el)}
            className="snap-center shrink-0 w-[72vw] sm:w-72 aspect-[4/5] rounded-2xl overflow-hidden bg-sand"
          >
            <video
              ref={(el) => (videoRefs.current[i] = el)}
              src={v.src}
              poster={v.poster}
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={v.alt}
              className="h-full w-full object-cover pointer-events-none"
              style={{ objectPosition: v.focus || 'center' }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}