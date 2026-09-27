// Hero right-side video showcase.
// `src` is a placeholder path — drop the downloaded Reel .mp4 files into
// public/videos/hero/ with these exact names, or update the paths here.
// `poster` shows while the video loads / before playback starts.
// `focus` (optional, defaults to 'center') controls which part of the video
// stays visible when it's cropped to the 4:5 frame — same idea as CSS
// object-position. Use it if a face is getting cut off:
//   'top'    — keeps the TOP of the video visible, crops from the bottom
//   'bottom' — keeps the BOTTOM of the video visible, crops from the top
//   'center 30%' — anything from 0% (top) to 100% (bottom) also works
const heroVideos = [
  {
    id: 'hero-1',
    src: '/videos/hero/firstReel.mp4',
    poster: '/images/skeleton.png',
    alt: 'Makeup by Ravish — bridal makeup application',
  },
  {
    id: 'hero-2',
    src: '/videos/hero/fourthReel.mp4',
    poster: '/images/skeleton.png',
    alt: 'Makeup by Ravish — HD makeup finishing',
    focus: 'top'
  },
  {
    id: 'hero-3',
    src: '/videos/hero/sixthReel.mp4',
    poster: '/images/skeleton.png',
    alt: 'Makeup by Ravish — event makeup in progress',
  },
  {
    id: 'hero-4',
    src: '/videos/hero/lalalaReel.mp4',
    poster: '/images/skeleton.png',
    alt: 'Makeup by Ravish — bridal look, silver detailing',
    focus: 'top'
  },
  {
    id: 'hero-5',
    src: '/videos/hero/PocketReel.mp4',
    poster: '/images/skeleton.png',
    alt: 'Makeup by Ravish — traditional saree bridal look',
    focus: 'top'
  },
  {
    id: 'hero-6',
    src: '/videos/hero/thirteenReel.mp4',
    poster: '/images/skeleton.png',
    alt: 'Makeup by Ravish — bold glam look',
    focus: 'top'
  },
]

export default heroVideos
