import { useState } from 'react'
import galleryImages from '../data/galleryImages'
import Lightbox from './Lightbox'

export default function MakeupGallery() {
  const [openIndex, setOpenIndex] = useState(null)

  const navigate = (delta) => {
    setOpenIndex((prev) => {
      if (prev == null) return prev
      return (prev + delta + galleryImages.length) % galleryImages.length
    })
  }

  return (
    <div>
      <h3 className="font-display font-medium text-3xl sm:text-4xl text-ink mb-6">
        Makeup Portfolio
      </h3>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {galleryImages.map((img, i) => (
          <button
            key={img.id}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="group aspect-[4/5] rounded-2xl overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/60"
            aria-label={`Open ${img.alt}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
          </button>
        ))}
      </div>

      <Lightbox
        images={galleryImages}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onNavigate={navigate}
      />
    </div>
  )
}