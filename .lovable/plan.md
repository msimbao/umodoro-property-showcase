## Goal
Convert the Umodoro Tours site into a single self-contained `index.html` file — no Vite, no bun, no React, no build step. Just open the file in a browser (or drop it on any static host) and it works.

## Approach

**1. New file: `index.html` at project root**
- Single HTML document with inline `<style>` and inline `<script>`.
- Tailwind-free: hand-written CSS using the existing design tokens (black/charcoal background, gold accent `#D4AF37`-ish, Playfair Display + Inter from Google Fonts via `<link>`).
- Same nine sections currently on the React site: Hero, Why Us, Before & After, Stats, Gallery, How It Works, Pricing, Why Now, Final CTA.
- Favicon linked to `favicon.png`.

**2. Demo modal (vanilla JS)**
- All "Book Free Demo" / "Get Started" buttons open a modal.
- Modal contains:
  - Contact form (name, email, property name, message) that opens the user's mail client via a `mailto:umodoro@gmail.com` link with pre-filled subject/body — no backend needed.
  - WhatsApp button → `https://wa.me/260956180824`.
  - Call button → `tel:+260956180824`.

**3. "The Old Way" stack — 3+ cards**
- Replace the current 2 stacked cards with **4 angled, overlapping cards** styled to look like generic social-media property posts (caption bar, like/comment icons drawn in CSS/SVG, rotation transforms).
- New images: generate 4 fresh property photos (exterior, bedroom, lounge, pool) saved next to `index.html` and referenced with relative paths. These read as "just another social post" — generic listing photography, not Umodoro brand assets.

**4. "The Umodoro Way" side**
- Keep the single premium frame with the 360° compass icon (inline SVG) and "Start Tour" label.

**5. Assets kept**
- `favicon.png`, `luxury-guest-house.jpg`, `delux-rental.png` reused for the gallery section.
- New `old-way-1..4.jpg` for the stacked cards.

**6. Cleanup**
- Leave the existing React/Vite project files in place but unused. (If you'd rather I delete `src/`, `package.json`, `vite.config.ts`, `bun.lock`, etc. so the repo is purely the HTML file + images, say the word and I'll wipe them in the same pass.)

## Deliverable
- `index.html` — fully self-contained page
- 4 new generated images for the "old way" stack
- Reused existing images + favicon

## Question before I build
Do you want me to **delete** the old React/Vite project files (`src/`, `package.json`, `vite.config.ts`, `bun.lock`, etc.) so the repo is just `index.html` + images, or **leave them** alongside the new HTML file?
