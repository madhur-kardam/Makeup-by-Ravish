import { SITE, getWhatsAppLink } from '../data/site'
import HeroVideoShowcase from './HeroVideoShowcase'

export default function Hero() {
  const scrollToPortfolio = (e) => {
    e.preventDefault()
    document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="pt-28 sm:pt-32 pb-16 sm:pb-24 px-5 sm:px-8">
      <div className="max-w-content mx-auto grid gap-8 lg:grid-cols-[1.05fr,0.95fr] lg:gap-x-10 lg:gap-y-6 lg:items-center">
        <p className="text-base tracking-wide text-clay lg:col-start-1 lg:row-start-1">
          Ravish Dixit · Makeup Artist
        </p>

        <h1 className="font-display font-medium text-[3rem] leading-[1.05] sm:text-7xl sm:leading-[1.05] text-ink lg:col-start-1 lg:row-start-2">
          <span className="gradient-text">Makeup</span> by Ravish
        </h1>

        <div className="lg:col-start-2 lg:row-start-1 lg:row-span-4 lg:self-center">
          <HeroVideoShowcase />
        </div>

        <p className="text-lg sm:text-xl text-ink/70 max-w-md lg:col-start-1 lg:row-start-3">
          {SITE.heroDescription}
        </p>

        <div className="flex flex-wrap items-center gap-5 lg:col-start-1 lg:row-start-4">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-ink text-white text-base font-medium px-7 py-4 hover:bg-ink/85 transition-colors"
          >
            Book Now
          </a>
          <a
            href="#portfolio"
            onClick={scrollToPortfolio}
            className="inline-flex items-center text-base font-medium text-ink/80 border-b border-ink/30 pb-0.5 hover:border-ink transition-colors"
          >
            View Portfolio
          </a>
        </div>
      </div>
    </section>
  )
}
