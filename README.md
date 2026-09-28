# Gaala E.P. JHS Website

An informational website for Gaala E.P. Junior High School, Tilagbeni, Saboba District,
built for the school's 30th anniversary (1995–2025).

## Stack

- React 18 (function components, hooks, ES modules throughout)
- React Router 6 for page routing
- Vite for development and production builds
- Plain CSS (no framework), organised as a small token-based design system

## Project structure

```
src/
  assets/            Logo and other static images
  components/
    common/          Small reusable pieces (SectionHeading, ScrollToHash)
    layout/           Header, Footer
    home/             One component per homepage section (Hero, About, Timeline, ...)
  data/
    schoolData.js     All real school content in one place: history, staff,
                       admissions policy, BECE results, etc. Edit facts here.
  pages/
    Home.jsx           Assembles the homepage sections
    Admissions.jsx      Standalone admissions page
    StudentPortal.jsx   Placeholder, not yet wired to a backend
    ParentPortal.jsx    Placeholder, not yet wired to a backend
    NotFound.jsx        404 page
  styles/
    index.css          Design tokens, resets, shared utility classes
    layout.css          Header and footer
    home.css            Homepage section styles
    pages.css           Admissions / portal / 404 styles
  App.jsx               Routes and shared layout
  main.jsx              Entry point
```

## Running locally

```bash
npm install
npm run dev
```

This starts a local dev server (Vite will print the URL, typically http://localhost:5173).

## Building for production

```bash
npm run build
```

This outputs a static site to `dist/`. Preview the production build with:

```bash
npm run preview
```

## Deploying

The `dist/` folder is a plain static site and can be deployed to any static host,
for example:

- **Netlify / Vercel**: connect the repository, build command `npm run build`,
  publish directory `dist`.
- **GitHub Pages**: push `dist/` to a `gh-pages` branch, or use an action that
  runs `npm run build` and publishes the output.
- **Any shared hosting**: upload the contents of `dist/` to the web root.

## Deploying to Vercel with a custom domain

`vercel.json` makes every route (for example `/admissions`) load the app, so
refreshing or sharing a deep link does not return a 404. Push the project to
GitHub, import it in Vercel (framework preset Vite, build `npm run build`,
output `dist`), then add the domain under Project Settings, Domains.

## What still needs real content before launch

- **Headteacher's welcome note** in `src/components/home/About.jsx` is a
  placeholder; replace it with an actual quote from the headteacher.
- **Testimonials** in `src/data/schoolData.js` are sample quotes for layout
  purposes only; replace with real, attributed quotes.
- **Gallery** slider uses four real photos registered in `src/data/images.js`.
  Add more by dropping files into `src/assets/images/` and listing them in
  `gallerySlides`. Captions there are plain descriptions; edit as needed.
- **JoyNews screenshot** in the News section is a third party broadcast image.
  Confirm you have permission to use it, or remove the `image` field from that
  item in `src/data/schoolData.js`.
- **Contact form** in `src/components/home/Contact.jsx` does not send
  messages yet; connect it to an email service (e.g. Formspree, EmailJS) or a
  small backend endpoint.
- **Student Portal and Parent Portal** are placeholder pages; connect them to
  a school management system when one is chosen.
- **Phone number and email** in `src/data/schoolData.js` (`schoolInfo`) are
  placeholders; replace with the school's real contact details.
- **Google Map embed** currently searches for "Saboba, Northern Region,
  Ghana"; replace `schoolInfo.mapEmbedSrc` with an embed centred on the
  school's exact location once available.

## Editing content

Almost all real text on the site (history, mission and vision, staff lists,
admission policy, BECE results, timeline) lives in
`src/data/schoolData.js`. Editing facts there updates every page that uses
them, without touching component code.
