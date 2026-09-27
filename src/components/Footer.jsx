
import { SITE, getWhatsAppLink, INSTAGRAM_URL } from '../data/site'

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Our Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const scrollTo = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="px-5 sm:px-8 pt-16 pb-10 border-t border-line">
      <div className="max-w-content mx-auto grid sm:grid-cols-3 gap-10">
        <div>
          <p className="font-display text-xl font-medium text-ink mb-2">
            {SITE.brand}
          </p>
          <p className="text-base text-ink/60 max-w-xs">
            {SITE.heroDescription}
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="space-y-2 text-base text-ink/70">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className="hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-base text-ink/70 space-y-2">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-ink"
          >
            <svg width="18" height="18" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1"
                fill="currentColor" stroke="none" />
            </svg>
            Instagram
          </a>
          <br></br>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-ink"
          >
            <svg width="18" height="18" viewBox="0 0 24 24"
              fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.09-1.33A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2Zm5.2 14.2c-.22.62-1.27 1.18-1.76 1.24-.45.06-1.02.08-1.65-.1-.38-.12-.87-.28-1.5-.55-2.64-1.14-4.36-3.8-4.5-3.98-.13-.18-1.08-1.44-1.08-2.74s.68-1.94.93-2.2c.24-.26.53-.33.7-.33.18 0 .35.002.5.01.16.008.37-.06.58.44.22.5.74 1.75.8 1.87.07.13.11.28.02.46-.1.18-.14.28-.28.44-.14.16-.29.35-.42.47-.14.13-.28.28-.13.55.16.28.71 1.17 1.52 1.9 1.05.94 1.93 1.23 2.2 1.37.28.14.44.12.6-.07.16-.19.68-.8.86-1.07.18-.28.36-.23.6-.14.24.09 1.54.73 1.8.86.27.13.44.19.51.3.07.11.07.62-.15 1.24Z" />
            </svg>
            Book on WhatsApp
          </a>

          {SITE.email && <p>{SITE.email}</p>}
        </div>
      </div>

      {/* Copyright */}
      <p className="max-w-content mx-auto mt-12 text-xs text-ink/40">
        © {new Date().getFullYear()} {SITE.brand}. All rights reserved.
      </p>
    </footer>
  )
}