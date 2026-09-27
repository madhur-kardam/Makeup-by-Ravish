import { useEffect, useRef } from 'react'
import portfolioImages from '../data/portfolioImages'
import useDragScroll from '../hooks/useDragScroll'
import { SITE } from '../data/site'

const AUTO_SCROLL_PX_PER_SEC = 28
const RESUME_DELAY_MS = 2200

export default function ClientCarousel() {
  const resumeTimeout = useRef(null)
  const pausedRef = useRef(false)
  const rafRef = useRef(null)
  const lastTsRef = useRef(null)

  const pause = () => {
    pausedRef.current = true
    clearTimeout(resumeTimeout.current)
    resumeTimeout.current = setTimeout(() => {
      pausedRef.current = false
    }, RESUME_DELAY_MS)
  }

  const { ref, dragHandlers, wasDragged } = useDragScroll(pause)

  // Doubled list gives a seamless-feeling loop without wrapping math on every frame.
  const items = [...portfolioImages, ...portfolioImages]

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const halfWidth = () => el.scrollWidth / 2

    const step = (ts) => {
      if (lastTsRef.current == null) lastTsRef.current = ts
      const dt = (ts - lastTsRef.current) / 1000
      lastTsRef.current = ts

      if (!pausedRef.current) {
        el.scrollLeft += AUTO_SCROLL_PX_PER_SEC * dt
        if (el.scrollLeft >= halfWidth()) {
          el.scrollLeft -= halfWidth()
        }
      }
      rafRef.current = requestAnimationFrame(step)
    }

    rafRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafRef.current)
  }, [ref])

  return (
    <section aria-label="Client work" className="pb-16 sm:pb-24">
      <h2 className="font-display font-medium text-4xl sm:text-5xl text-ink text-center mb-10 px-5">
        About Me
      </h2>

      <div
        ref={ref}
        {...dragHandlers}
        onWheel={pause}
        className="no-scrollbar cursor-grab active:cursor-grabbing flex gap-4 sm:gap-5 overflow-x-auto px-5 sm:px-8"
      >
        {items.map((img, i) => (
          <div
            key={`${img.id}-${i}`}
            className="shrink-0 w-[62vw] sm:w-64 aspect-[4/5] rounded-2xl overflow-hidden select-none"
          >
            <img
              src={img.src}
              alt={img.alt}
              draggable={false}
              loading="lazy"
              onClick={(e) => wasDragged() && e.preventDefault()}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* TODO: placeholder — replace with Ravish's real years of experience,
          notable work and locations once confirmed. Nothing here is a
          fabricated claim; edit the text below directly. */}
      <p className="mt-10 px-5 sm:px-[15%] text-base sm:text-lg text-ink/70 leading-relaxed text-justify">
      I’m <b>Ravish Dixit</b>, a professional makeup artist based in Indore, My work spans and extends to clients across India. with over <b>18 years of experience</b> creating bridal, HD, and event makeup looks. I specialize in creating refined, camera-ready looks tailored to each client’s features, personality, and occasion.
      </p>
    </section>
  )
}