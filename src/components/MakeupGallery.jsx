import galleryImages from '../data/galleryImages'

export default function MakeupGallery() {
  return (
    <div>
      <h3 className="font-display font-medium text-3xl sm:text-4xl text-ink mb-6">
        Makeup Portfolio
      </h3>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {galleryImages.map((img) => (
          <div key={img.id} className="aspect-[4/5] rounded-2xl overflow-hidden">
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}