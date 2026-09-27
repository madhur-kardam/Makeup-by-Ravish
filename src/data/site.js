// ── Central site configuration ────────────────────────────────────────────
// Replace the placeholder values below with Ravish's real details.
// Everything in the UI reads from this file — change it here once.

// WhatsApp number in international format, no spaces, no "+".
// Example: 91XXXXXXXXXX
export const WHATSAPP_NUMBER = '919926449953' // TODO: replace with Ravish's real WhatsApp number

export const WHATSAPP_DEFAULT_MESSAGE =
  'Hi Ravish, I would like to enquire about your makeup services.'

export function getWhatsAppLink(message = WHATSAPP_DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const INSTAGRAM_URL = 'https://www.instagram.com/makeupbyravish_indore/'

export const SITE = {
  brand: 'Makeup by Ravish',
  shortBrand: 'Ravish',
  avatar: '/images/profile.png', // TODO: add Ravish's profile photo path, e.g. '/images/ravish-profile.jpg'
  city: 'Indore', // TODO: confirm exact service area/city with Ravish
  // TODO: replace with Ravish's real bio/description once supplied — this is a placeholder.
  heroDescription:
    'Bridal and event makeup, styled with a clean, camera-ready finish.',
  aboutParagraph:
    'Placeholder bio — add Ravish\'s real experience, training and specialities here once supplied (years active, notable work, styles he specialises in).',
  email: '', // TODO: add contact email if available
  phone: '9926449953', // TODO: add a displayable phone number if Ravish wants one shown separately from WhatsApp
}
