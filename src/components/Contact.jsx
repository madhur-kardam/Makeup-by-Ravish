import { SITE, getWhatsAppLink, INSTAGRAM_URL } from '../data/site'
import useReveal from '../hooks/useReveal'

export default function Contact() {
  const ref = useReveal()

  return (
    <section id="contact" className="py-16 sm:py-24 px-5 sm:px-8">
      <div ref={ref} className="reveal max-w-content mx-auto text-center">
        <h2 className="font-display font-medium text-4xl sm:text-5xl text-ink mb-4">
          Let’s plan your look
        </h2>
        <p className="text-lg text-ink/60 max-w-md mx-auto mb-10">
          For bookings and availability feel free to reach out to me on WhatsApp.
        </p>

        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full bg-ink text-white text-base font-medium px-8 py-4 hover:bg-ink/85 transition-colors"
        >
          Book Now on WhatsApp
        </a>

        <div className="mt-8 flex items-center justify-center gap-6 text-base text-ink/60">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
            Instagram
          </a>
          {SITE.email && (
            <a href={`mailto:${SITE.email}`} className="hover:text-ink">
              {SITE.email}
            </a>
          )}
          {SITE.phone && <span>{SITE.phone}</span>}
        </div>
      </div>
    </section>
  )
}
