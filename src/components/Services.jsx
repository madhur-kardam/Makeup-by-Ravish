import services from '../data/services'
import useReveal from '../hooks/useReveal'

export default function Services() {
  const ref = useReveal()

  return (
    <section id="services" className="py-16 sm:py-24 px-5 sm:px-8 bg-sand">
      <div ref={ref} className="reveal max-w-content mx-auto">
        <h2 className="font-display font-medium text-4xl sm:text-5xl text-ink mb-3">
          Our Services
        </h2>
        <p className="text-lg text-ink/60 max-w-md mb-12">
        Explore the makeup services I offer, each tailored to your unique style and occasion.        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl overflow-hidden">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-medium text-ink mb-2">
                  {service.title}
                </h3>
                <p className="text-base text-ink/60 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
