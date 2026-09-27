# Makeup by Ravish — website

React + Vite + Tailwind CSS. One-page portfolio site for makeup artist Ravish.

## Run it

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## What you need to fill in before launch

Everything below is a placeholder — nothing here was invented as fact, it's
scaffolding for you to replace.

1. **`src/data/site.js`**
   - `WHATSAPP_NUMBER` — currently `91XXXXXXXXXX`. Replace with the real
     WhatsApp number (international format, digits only, no `+`).
   - `SITE.heroDescription`, `SITE.aboutParagraph` — placeholder bio copy.
   - `SITE.city`, `SITE.email`, `SITE.phone` — confirm/add.

2. **Hero and Featured Work videos**
   - Drop the downloaded Instagram Reels into:
     - `public/videos/hero/hero-1.mp4`, `hero-2.mp4`, `hero-3.mp4`
     - `public/videos/featured/featured-1.mp4` … `featured-4.mp4`
   - Or edit the `src` paths in `src/data/heroVideos.js` /
     `src/data/featuredVideos.js` to match whatever filenames you use.
   - Both files also set a `poster` image shown before the video loads —
     currently pointing at process shots in `public/images/`, swap for
     real video thumbnails if you like.

3. **`src/data/portfolioImages.js`**
   - Currently the 9 client makeup photos you supplied
     (`public/images/portfolio-01.jpg` … `portfolio-09.jpg`). Add/remove
     entries as the real portfolio grows — every component (Client Work
     carousel + Makeup Portfolio grid + lightbox) reads from this one file.

4. **`src/data/services.js`**
   - Generic placeholder categories (Bridal / HD / Party / Engagement).
     Edit titles and descriptions to match Ravish's real services, or
     remove/add entries.

5. **`src/data/testimonials.js`**
   - Empty — no real testimonials were supplied. Add entries in the shape
     shown in the file's comment once you have real client quotes.

## Structure

```
src/
  components/   Navbar, Hero, HeroVideoShowcase, ClientCarousel, Services,
                Portfolio, FeaturedWork, MakeupGallery, Lightbox,
                Testimonials, Contact, Footer
  data/         site.js, heroVideos.js, featuredVideos.js,
                portfolioImages.js, services.js, testimonials.js
  hooks/        useDragScroll.js (drag/swipe carousels),
                useReveal.js (scroll reveal animation)
```

All videos and images use 4:5 frames with `object-fit: cover`, per spec.
Only the active/visible video plays at any time; others stay paused.
