import { useEffect, useRef, useState } from 'react'
import testimonials from '../data/testimonials'
import useReveal from '../hooks/useReveal'

export default function Testimonials() {
  const sectionRef = useReveal()
  const trackRef = useRef(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(true)

  const updateEdges = () => {
    const el = trackRef.current
    if (!el) return
    const maxScroll = el.scrollWidth - el.clientWidth
    setAtStart(el.scrollLeft <= 4)
    setAtEnd(el.scrollLeft >= maxScroll - 4)
  }

  useEffect(() => {
    updateEdges()
    const el = trackRef.current
    if (!el) return
    el.addEventListener('scroll', updateEdges, { passive: true })
    window.addEventListener('resize', updateEdges)
    return () => {
      el.removeEventListener('scroll', updateEdges)
      window.removeEventListener('resize', updateEdges)
    }
  }, [])

  const scrollByPage = (direction) => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: direction * el.clientWidth, behavior: 'smooth' })
  }

  return (
    <section id="testimonials" className="py-16 sm:py-24 px-5 sm:px-8 bg-sand">
      <div ref={sectionRef} className="reveal max-w-content mx-auto">
        <h2 className="font-display font-medium text-4xl sm:text-5xl text-ink mb-3">
          Testimonials
        </h2>

        {testimonials.length === 0 ? (
          <p className="text-lg text-ink/60 max-w-md">
            Client testimonials will appear here — add real quotes to{' '}
            <code className="text-sm bg-white px-1.5 py-0.5 rounded border border-line">
              src/data/testimonials.js
            </code>{' '}
            once available.
          </p>
        ) : (
          <div className="relative mt-8">
            {!atStart && (
              <button
                type="button"
                aria-label="Previous testimonials"
                onClick={() => scrollByPage(-1)}
                className="flex absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-full bg-white/90 backdrop-blur-sm shadow-[0_2px_10px_rgba(36,30,27,0.12)] items-center justify-center text-ink/70 hover:text-ink transition-colors"
              >
                ‹
              </button>
            )}

            <div
              ref={trackRef}
              className="no-scrollbar flex gap-5 overflow-x-auto snap-x-mandatory scroll-smooth"
            >
              {testimonials.map((t) => (
              <figure
                  key={t.id}
                  className="snap-start shrink-0 w-full sm:w-[calc((100%-2.5rem)/3)] bg-sand rounded-2xl p-7 text-center"
               >
                  <div className="h-24 w-24 rounded-full overflow-hidden bg-white shrink-0 mx-auto mb-4">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <figcaption className="font-semibold text-ink mb-2">{t.name}</figcaption>
                  <blockquote className="text-base text-ink/70 leading-relaxed text-justify">
                    {t.text}
                  </blockquote>
                </figure>
              ))}
            </div>

            {!atEnd && (
              <button
                type="button"
                aria-label="More testimonials"
                onClick={() => scrollByPage(1)}
                className="flex absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-full bg-white/90 backdrop-blur-sm shadow-[0_2px_10px_rgba(36,30,27,0.12)] items-center justify-center text-ink/70 hover:text-ink transition-colors"
              >
                ›
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  )
}