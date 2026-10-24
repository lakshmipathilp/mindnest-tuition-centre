# MindNest — Tuition Centre Website

A premium, responsive website for **MindNest** (Classes 1–10).
Built with **React + Vite + React Router**. Icons from **lucide-react**. Fonts (Outfit, DM Sans) are bundled locally through `@fontsource` packages, so no Google Fonts request is made.

> *Changing the way students learn.* — Learn · Understand · Practise · Grow

---

## 1. Install and run

You need **Node.js 18 or newer** (https://nodejs.org).

```bash
npm install        # one time: installs dependencies
npm run dev        # starts the site at http://localhost:5173
```

Other commands:

```bash
npm run build      # creates the production site in the /dist folder
npm run preview    # serves the /dist folder locally to check it
```

## 2. Pages

| Route | Page |
|---|---|
| `/` | Home (hero, free-trial banner, about, classroom, classes, Class 10, method, study plan, Sunday, gallery preview, contact, location, FAQ) |
| `/about` | About Us — goal, mission, vision, teaching beliefs |
| `/classes` | Classes and subjects (1–5, 6–8, 9–10) |
| `/class-10` | Class 10 preparation |
| `/method` | Our teaching method and study habits |
| `/study-plan` | Monthly study plan (sample framework) |
| `/sunday` | Sunday Activity Day |
| `/gallery` | Photo gallery with filters and lightbox |
| `/fees` | Class-wise fees (Class 1 to Class 10) |
| `/contact` | Enquiry form (WhatsApp), contact details, location, FAQ |

---

## 3. How to update things

All the things you will change live in **`src/data/`** — you never need to touch the page code.

### 3.1 Contact details, WhatsApp number and location → `src/data/site.js`

```js
whatsappNumber: '919876543210',   // digits only, with country code, no + or spaces
phone: '+91 98765 43210',
email: 'hello@yourdomain.com',
instagram: 'mindnest.tuition',    // handle only
address: 'Full postal address',
landmark: 'Opposite City Park',
hours: 'Mon–Sat, 5:00 PM – 8:00 PM',
mapEmbedUrl: '',                  // see 3.4
mapDirectionsUrl: '',             // see 3.4
```

Anything left as `''` shows a clear "to be added" message on the site. **No fake contact details are used.**

### 3.2 Fees → `src/data/fees.js`

Each class has one entry. No prices are entered yet, so every class shows *"Fee details coming soon — contact us for the latest fee structure."*
To publish a fee, fill in that class:

```js
{
  class: 10,
  stage: 'Academic & Exam Preparation',
  monthlyFee: 3000,                  // number → shown as ₹3,000 / month
  admissionFee: 500,                 // or '' if not applicable
  subjects: 'Maths, Science, English',
  classesPerWeek: 5,
  classDuration: '1 hour 30 minutes',
  additionalCharges: '',             // e.g. 'Worksheets: ₹200 per term'
}
```

A class switches from "coming soon" to showing its price as soon as `monthlyFee` is filled in. Empty extra fields show "Please ask" once a price is set.

### 3.3 Photos → `src/data/gallery.js` and `public/images/gallery/`

1. Copy your photo into `public/images/gallery/` (for example `classroom-1.jpg`). Landscape 4:3 photos look best. Resize large phone photos to about 1600 px wide first so the page loads quickly.
2. In `src/data/gallery.js`, set that entry's `src`:

```js
{ id: 1, category: 'classroom', src: 'classroom-1.jpg',
  alt: 'Children sitting on floor mats', caption: 'Floor-mat seating area', size: 'wide' },
```

3. To add more photos, copy any entry, give it a new unique `id`, and choose a `category`:
   `classroom`, `visual`, `materials`, `sunday`, `projects`, `events`.
   `size` can be `'normal'`, `'wide'` or `'tall'`.
4. To remove a photo, delete its entry.

While `src` is `''`, the gallery shows a clearly labelled **"Photo placeholder"** tile. If a listed file is missing, the placeholder is shown instead of a broken image.

> This is a static website, so visitors cannot upload photos and there is no admin dashboard. Photos are updated by editing files as above and redeploying. (An admin upload feature would need a backend with secure storage and login, which is not included.)

### 3.4 Google Maps

1. Open Google Maps and search for your centre.
2. Click **Share → Embed a map → COPY HTML**.
3. From the copied text, take **only the URL inside `src="..."`** and paste it into `mapEmbedUrl` in `src/data/site.js`.
4. For the **Get Directions** button, paste the normal Google Maps share link into `mapDirectionsUrl`. If you leave it empty but add an `address`, the button searches Google Maps for that address.

### 3.5 Text, subjects, FAQ and study plan → `src/data/content.js`

Class descriptions, the Class 10 components, the study-plan weeks, Sunday activities, FAQ answers and menu links are all in this file.

---

## 4. The enquiry form and WhatsApp

- The form checks the name, class, phone number and enquiry type before doing anything.
- When valid, it prepares a message with the visitor's details and opens `https://wa.me/<your number>` so the parent can press send.
- **A WhatsApp redirect does not store submissions.** Nothing is saved on a server; you only receive the enquiry if the parent sends the WhatsApp message. If you want every enquiry saved, you would need a backend or a form service (not included).
- Until `whatsappNumber` is set, the form still validates, then explains the number is missing and offers a **Copy message** button. The "Enquire" buttons on the Fees page take visitors to this form with the class and enquiry type pre-selected.

---

## 5. Deploying

Run `npm run build` and upload the **`dist`** folder to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, or your own server).

Because the site uses clean URLs like `/fees`, the host must send unknown paths back to `index.html`:
- **Netlify:** add a file `public/_redirects` containing `/* /index.html 200`
- **Vercel:** add `vercel.json` with `{ "rewrites": [{ "source": "/(.*)", "destination": "/" }] }`
- **Cloudflare Pages:** this works by default for single-page apps.

Before launching, also set a proper site address and social-preview image if you want rich link previews.

---

## 6. Project structure

```
mindnest/
├── index.html
├── public/
│   ├── favicon.svg
│   └── images/gallery/        ← put real photos here
├── src/
│   ├── data/
│   │   ├── site.js            ← contact, WhatsApp, map
│   │   ├── fees.js            ← class-wise fees
│   │   ├── gallery.js         ← photo list
│   │   └── content.js         ← text content
│   ├── components/            ← Layout, illustrations, sections, form
│   ├── pages/                 ← one file per route
│   ├── hooks/                 ← scroll-reveal, page titles
│   └── styles/global.css      ← design system (colours, type, motion)
```

Design colours are CSS variables at the top of `src/styles/global.css`.

## 7. Notes on content

- All classroom pictures are **original illustrations**, not photographs of the real centre.
- The Monthly Study Plan is labelled as a **sample framework**.
- Subjects, curriculum and board coverage are stated as **to be confirmed by the centre**; no board affiliation, class size, teacher qualification or guaranteed result is claimed anywhere.
- Sunday Activity Day is described as activities only, not a regular teaching day. Its schedule, age groups and fee inclusion are marked to be confirmed.
- There is no testimonials section because no genuine testimonials have been provided. Add one only with real, permitted quotes.

## 8. Accessibility and performance

- Semantic landmarks, skip link, keyboard-operable menu, accordions and gallery lightbox (Esc closes, arrow keys move).
- Form fields have labels and error messages announced to screen readers.
- Animations use CSS and IntersectionObserver, and are switched off when the visitor's device asks for **reduced motion**.
- Pages load on demand (code-splitting), fonts are self-hosted, and gallery images load lazily.

## 9. External dependencies

- npm packages only: `react`, `react-dom`, `react-router-dom`, `lucide-react`, `@fontsource-variable/outfit`, `@fontsource-variable/dm-sans` (plus `vite` and `@vitejs/plugin-react` for building).
- Optional, only when you configure them: Google Maps embed, `wa.me` WhatsApp links, Instagram link.
