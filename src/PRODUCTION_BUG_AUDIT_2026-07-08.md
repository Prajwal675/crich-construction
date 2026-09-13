# Production Bug Audit

Date: 2026-07-08

Scope: fresh audit after the older `REPO_REPORT.md`. This focuses on current production-impact bugs and risks that still exist in the app.

## Verification

Passing:

- `npx tsc --noEmit`
- `npm run build`

Failing:

- `npm run lint`

Build notes:

- Production build succeeds, but still ships very large image assets: `house1` ~2.1 MB, `h2` ~2.0 MB, and several public project/team images between ~0.7 MB and ~2.9 MB.
- Browserslist data is 21 months old.

Asset check:

- Current `/team/...` and `/lovable-uploads/...` references exist. The broken team image issue from the older report appears fixed.

## Highest Priority Bugs

### 1. Hero Lead Form Still Does Not Submit Leads

File: `src/components/Hero.tsx`

The above-the-fold enquiry form validates locally, waits 1.2 seconds, and shows an alert:

```ts
setTimeout(() => {
  setIsSubmitting(false);
  alert("Form submitted from Hero!");
}, 1200);
```

Impact:

- Users can submit the most prominent form and believe the company received the lead.
- No Formspree request is made, so production leads are lost.

Recommended fix:

- Reuse the real submit path from `ContactForm.tsx`.
- Show inline success/error state instead of `alert()`.
- Reset the form only after confirmed success.

### 2. Formspree Endpoint Is Not Guarded

File: `src/components/ContactForm.tsx`

`VITE_FORMSPREE_URL` is read directly and passed to `fetch()`:

```ts
const FORMSPREE_URL = import.meta.env.VITE_FORMSPREE_URL as string;
const response = await fetch(FORMSPREE_URL, ...)
```

Impact:

- If the Vercel environment variable is missing or still uses the placeholder from `.env.example`, users get a generic failure after filling the form.
- This is easy to miss because local build and TypeScript still pass.

Recommended fix:

- Validate the URL before submit.
- Show a clear "contact form is not configured" message in non-production or admin QA.
- Confirm the production Vercel env var before launch.

### 3. Hero Form Has Weaker Validation And Accessibility Than The Main Form

Files:

- `src/components/Hero.tsx`
- `src/components/ContactFormCard.tsx`

Current problems:

- Hero email only checks that a value exists; it does not validate email format.
- `ContactFormCard` inputs do not have `type="email"` or `type="tel"`.
- Labels are not connected to inputs with `htmlFor`/`id`.
- The hero message field can fail validation, but `ContactFormCard` does not render `errors.message`.
- The privacy policy text is an `<a>` with no `href`, so it is not a real link.

Impact:

- Bad lead data can be accepted.
- Users may be blocked without seeing the message-field error.
- Accessibility and browser-native validation are weaker on the highest-conversion form.

Recommended fix:

- Share one validation schema between hero and contact forms.
- Add input types, ids, labels, and all error messages.
- Replace the privacy policy placeholder with a real route or plain text until the page exists.

### 4. Lint Is Still Not A Usable Quality Gate

Files:

- `package.json`
- `eslint.config.js`
- `node_modules` state

`npm run lint` currently fails before reporting real lint issues:

```text
Error: ENOENT: no such file or directory, open '...vite.config.ts.timestamp-...mjs'
```

`npm ls eslint @eslint/js typescript-eslint --depth=0` also reports invalid installed versions:

```text
@eslint/js@9.39.2 invalid: "9.13.0"
eslint@9.39.2 invalid: "9.13.0"
typescript-eslint@8.11.0
```

Impact:

- CI cannot rely on lint before production.
- Real issues such as dead imports, inaccessible anchors, and unused code stay hidden.

Recommended fix:

- Reinstall dependencies from lockfile or regenerate the lockfile intentionally.
- Align ESLint, `@eslint/js`, and `typescript-eslint`.
- Add `node_modules`, `dist`, generated timestamp files, and report files to ignore patterns as needed.

### 5. Footer Navigation Breaks On Non-Home Routes

File: `src/components/Footer.tsx`

Footer links use raw hash anchors:

```tsx
<a href="#services">Services</a>
<a href="#about">About Us</a>
<a href="#projects">Projects</a>
<a href="#testimonials">Testimonials</a>
<a href="#contact">Contact</a>
```

Impact:

- On `/team`, `/boq`, or `/projects`, these links update the hash on the current route instead of navigating to the home page sections.
- Users clicking Contact from a subpage may not reach the contact form.

Recommended fix:

- Use the same route-aware navigation behavior as `Navbar`.
- For home sections from subpages, navigate to `/` first, then scroll to the section.
- Link Projects to `/projects` instead of `#projects` where appropriate.

### 6. Cookie "Decline" Stores Acceptance

File: `src/components/Footer.tsx`

Both Accept and Decline call the same handler:

```tsx
onClick={acceptCookies}
```

Impact:

- Decline records `cookieConsent=true`.
- This is misleading and risky for privacy expectations.

Recommended fix:

- Store explicit states such as `accepted`, `declined`, or `unset`.
- If the site does not use tracking cookies, remove the banner until it has a real policy and behavior.

## Medium Priority Bugs And Production Risks

### 7. Service Component Imports Missing/Nonexistent Asset Paths

File: `src/components/ServicesSection.tsx`

These imports point to files that are not present:

```ts
import interiorImg from '../assets/services/interior.jpg';
import commercialImg from '../assets/services/commercial.jpg';
import infrastructureImg from '../assets/services/infrastructure.jpg';
import renovationImg from '../assets/services/renovation.jpg';
```

They are currently unused, so the production build passes.

Impact:

- Once lint is repaired, unused-import rules should flag this.
- If someone swaps the services array to use these variables, build will break.

Recommended fix:

- Remove the dead imports or add the real assets and use them.

### 8. SEO Metadata Still Has Duplicate Title/Description And Mixed Branding

File: `index.html`

The file has two `<title>` tags and two descriptions. It also mixes `Crich Ventures` and `Crich Constructions`.

Impact:

- Search result snippets and browser titles can be inconsistent.
- Brand trust is weakened before the user even lands on the site.

Recommended fix:

- Keep one title and one meta description.
- Decide whether public branding is `Crich Ventures` or `Crich Constructions`.
- Use a real project image for Open Graph/Twitter instead of Unsplash.

### 9. Production HTML Still Loads GPT Engineer Script

File: `index.html`

The app loads:

```html
<script src="https://cdn.gpteng.co/gptengineer.js" type="module"></script>
```

Impact:

- Adds a third-party script to production.
- Creates avoidable performance, privacy, and availability risk.

Recommended fix:

- Remove from production builds unless the deployment/editor workflow explicitly requires it.

### 10. Image Error Handling Can Leave Permanent Spinners

File: `src/components/OptimizedImage.tsx`

If an image fails and it is not a `.webp`, the component only logs a warning. `isLoaded` stays false, so the skeleton/spinner can remain forever.

Impact:

- Any deleted public image or remote image failure can show a stuck loading state instead of a fallback.

Recommended fix:

- Add an `hasError` state.
- Render a fallback image or a stable placeholder.
- Avoid infinite spinner states.

### 11. Homepage Preloads Images That Are Not Used Above The Fold

File: `src/pages/Index.tsx`

The home page manually preloads an Unsplash URL and several carousel images on mount.

Impact:

- Competes with the hero and form for bandwidth on mobile.
- One preloaded Unsplash image is not the current hero image.
- Project carousel images are also handled by carousel/priority logic, causing unnecessary eager work.

Recommended fix:

- Preload only the actual hero image.
- Let below-the-fold gallery images lazy-load.

### 12. Placeholder Links And Generic External Content Remain

Files:

- `src/components/ContactForm.tsx`
- `src/components/Footer.tsx`
- `src/components/TestimonialsSection.tsx`
- `src/components/SocialFeed.tsx`

Examples:

- Social links in the contact card still use `href="#"`.
- Footer service/legal links use `href="#"`.
- Testimonials still refer to `BuildAcre`.
- Testimonials use randomuser.me profile images.
- Several sections use generic Unsplash images.

Impact:

- Looks unfinished for production.
- Some clicks do nothing or jump the page.
- External images can change, fail, or create privacy/performance concerns.

Recommended fix:

- Remove placeholder links or replace them with real destinations.
- Replace generic testimonials/images with approved real content.
- Standardize brand copy.

## Suggested Fix Order

1. Connect the hero form to the real Formspree submit path.
2. Guard and verify `VITE_FORMSPREE_URL` in production.
3. Repair hero form validation/accessibility and display all errors.
4. Fix footer route-aware navigation and placeholder links.
5. Fix cookie decline behavior.
6. Repair lint dependency state and run lint cleanly.
7. Remove missing service imports.
8. Clean SEO metadata, brand names, and production-only third-party scripts.
9. Add robust image fallbacks.
10. Optimize large images and remove unnecessary preloads.

