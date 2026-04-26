# Accredian Enterprise Page — Partial Clone

A partial clone of [enterprise.accredian.com](https://enterprise.accredian.com) built with Next.js, TypeScript, and TailwindCSS as part of the Accredian Full Stack Developer Intern assignment.

**Live Demo:** [https://accredian-enterprise-flax.vercel.app/](https://accredian-enterprise-flax.vercel.app/)  
**GitHub:** [https://github.com/anasalam-xyz/accredian-enterprise](https://github.com/anasalam-xyz/accredian-enterprise/)

---

## Setup Instructions

```bash
# Clone the repository
git clone https://github.com/anasalam-xyz/accredian-enterprise
cd accredian-enterprise

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Create a `.env.local` file in the root directory:

```
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

For production, set `NEXT_PUBLIC_BASE_URL` to your deployed Vercel URL in the Vercel dashboard under Project Settings → Environment Variables.

---

## Sections Built

- Navbar with smooth scroll navigation
- Hero with lead capture CTA
- Stats
- Clients (animated marquee)
- Accredian Edge
- CAT (Course Segmentation)
- How It Works
- FAQs (topic selector + accordion)
- Testimonials (draggable carousel)
- Footer

---

## Approach

### Component Architecture
Each section of the page is broken into its own component under `components/`. Smaller reusable pieces (cards, items, buttons) live in `components/ui/` to keep section components clean and focused.

### Server / Client Component Pattern
Next.js App Router allows components to be server-rendered by default. I kept as many components as possible as server components for performance. Client components (`"use client"`) are only used where interactivity is required — the testimonials carousel, FAQ accordion, and lead modal.

For the testimonials section specifically, data is fetched server-side via a Next.js API route (`/api/testimonials`) in a server component wrapper (`TestimonialsWrapper.tsx`), which then passes the data as props to the client carousel component. This follows the recommended Next.js pattern of fetching at the server boundary and passing data down.

### Modal State with Context
Rather than lifting modal state up through every component (which would force unnecessary client component conversions), I implemented a `ModalContext` that provides `openModal` and `closeModal` globally. Any section can trigger the lead modal via a lightweight `EnquireButton` client component without converting the parent section to a client component.

### API Integration
Two API routes are implemented:
- `GET /api/testimonials` — returns testimonial data as JSON, fetched server-side
- `POST /api/lead` — receives lead form submissions and logs them to the console (ready to be connected to a database)

---

## AI Usage

I used Claude (claude.ai) throughout development to accelerate building and improve quality. Here's specifically where and how:

| Area | How AI Helped | What I Modified |
|------|--------------|-----------------|
| Testimonials carousel | Generated initial drag logic with mouse + touch events | Rewrote to accept props instead of hardcoded data, fixed card width calculation for my specific data |
| FAQ component | Generated base accordion with useState | Added topic selector, rewired state so switching topics resets open question |
| Lead modal | Generated form structure and field layout | Adjusted styling to match Accredian's design language, integrated with ModalContext |
| Marquee animation | Suggested CSS keyframe approach | Moved to globals.css after Tailwind purge issue, tuned animation speed |
| Server/client pattern | Suggested TestimonialsWrapper pattern | Applied it myself across the codebase, understood and explained the boundary |

In all cases I reviewed, understood, and modified the generated code rather than copying it directly. The overall architecture, component breakdown, and integration decisions were made by me.

---

## Improvements I Would Make With More Time

1. **Database integration** — replace the console.log in `/api/lead` with actual persistence using a service like Supabase or MongoDB Atlas
2. **Form validation** — add proper client-side validation with error messages before submission
3. **Replace `<marquee>` tag** — reimplement the client logo animation using CSS keyframes for better browser compatibility and control
4. **Skeleton loaders** — add loading states for the testimonials section while data fetches
5. **Mobile navigation** — add a hamburger menu for the navbar on smaller screens
6. **Accessibility** — improve keyboard navigation for the carousel and modal (focus trapping, ARIA labels)
