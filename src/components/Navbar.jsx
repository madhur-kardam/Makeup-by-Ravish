import { useEffect, useState } from 'react'
import { SITE, getWhatsAppLink } from '../data/site'

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Our Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(36,30,27,0.08)]' : 'bg-white/0'
      }`}
    >
      <nav className="max-w-content mx-auto flex items-center justify-between px-5 sm:px-8 h-16 sm:h-20">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="font-display font-semibold text-xl sm:text-2xl tracking-tight text-ink"
        >
          {SITE.brand}
        </a>

        <ul className="hidden md:flex items-center gap-9 text-base font-medium text-ink/80">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center rounded-full bg-ink text-white text-base font-medium px-6 py-3 hover:bg-ink/85 transition-colors"
        >
          Book Now
        </a>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex flex-col justify-center gap-1.5 h-10 w-10 items-center"
        >
          <span
            className={`block h-px w-6 bg-ink transition-transform duration-300 ${
              open ? 'translate-y-[3px] rotate-45' : ''
            }`}
          />
          <span
            className={`block h-px w-6 bg-ink transition-transform duration-300 ${
              open ? '-translate-y-[3px] -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden bg-white transition-[max-height] duration-300 ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 pb-4 text-ink/80">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block py-2.5 text-lg font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-ink text-white text-base font-medium px-6 py-3"
            >
              Book Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
