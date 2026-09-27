import useReveal from '../hooks/useReveal'
import FeaturedWork from './FeaturedWork'
import MakeupGallery from './MakeupGallery'

export default function Portfolio() {
  const ref = useReveal()

  return (
    <section id="portfolio" className="py-16 sm:py-24 px-5 sm:px-8">
      <div ref={ref} className="reveal max-w-content mx-auto">
        <h2 className="font-display font-medium text-4xl sm:text-5xl text-ink mb-3">
          <span className="gradient-text">Portfolio</span>
        </h2>
        <p className="text-lg text-ink/60 max-w-md mb-12">
          A glimpse of my artistry, where every look tells a story. Explore my latest work through videos and photographs.
        </p>

        <div className="space-y-16">
          <FeaturedWork />
          <MakeupGallery />
        </div>
      </div>
    </section>
  )
}
