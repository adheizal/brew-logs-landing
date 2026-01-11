This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
public/
  images/
    beans.avif
    brew-details.avif
    filters.avif
    hero.avif
    live-brew.avif
    new-brew.avif
    recipes.avif
  file.svg
  globe.svg
  next.svg
  vercel.svg
  window.svg
src/
  app/
    favicon.ico
    globals.css
    layout.tsx
    page.tsx
.gitignore
eslint.config.mjs
next.config.ts
package.json
page.tsx
postcss.config.mjs
README.md
tsconfig.json
```

# Files

## File: page.tsx
````typescript
import Image from "next/image";
import type { ReactNode } from "react";

const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Screens", href: "#screens" },
  { label: "FAQ", href: "#faq" },
];

const features = [
  {
    title: "Brew list",
    desc: "Your full brew history. View details or duplicate to brew again.",
  },
  {
    title: "Quick stats",
    desc: "Total brews, average rating, best cup, and most-used method.",
  },
  {
    title: "Filter & search",
    desc: "Find brews by method, beans, rating, or date — fast.",
  },
  {
    title: "New brew",
    desc: "A clean, focused form for logging a new brew.",
  },
  {
    title: "Live brew",
    desc: "Real-time mode to follow your timer while brewing.",
  },
  {
    title: "Tabs: Brew / New / Beans / Recipes",
    desc: "Simple navigation that feels great on mobile.",
  },
];

const faqs = [
  {
    q: "Who is this for?",
    a: "Anyone who brews regularly and wants more consistent cups.",
  },
  {
    q: "Can I use it on my phone?",
    a: "Yes. It's mobile-first and works great on desktop too.",
  },
  {
    q: "What do you track?",
    a: "Ratio, grind size, water temp, brew time, rating, and notes the stuff you actually care about.",
  },
  {
    q: "Why Duplicate?",
    a: "So you can tweak a previous brew instead of starting from scratch.",
  },
];

function Container({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}

function Button({
  href,
  children,
  variant = "primary",
  target,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  target?: "_blank";
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
  const styles =
    variant === "primary"
      ? "bg-zinc-900 text-white hover:bg-zinc-800 focus-visible:outline-zinc-900"
      : "bg-white text-zinc-900 border border-zinc-200 hover:bg-zinc-50 focus-visible:outline-zinc-300";

  const rel = target ? "noopener noreferrer" : undefined;

  return (
    <a href={href} target={target} rel={rel} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700">
      {children}
    </span>
  );
}

export default function Page() {
  return (
    <div className="bg-white text-zinc-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur">
        <Container>
          <div className="flex h-14 items-center justify-between">
            <a href="#" className="flex items-center gap-2">
              <span className="text-sm font-semibold">Brew Logs</span>
              <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-[11px] text-zinc-700">
                Beta
              </span>
            </a>

            <nav
              className="hidden items-center gap-6 md:flex"
              aria-label="Primary"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-zinc-700 hover:text-zinc-900"
                >
                  {item.label}
                </a>
              ))}
              <Button href="https://brewlog.app/brew" variant="primary">
                Open Brew Logs
              </Button>
            </nav>

            {/* Mobile */}
            <div className="flex items-center gap-2 md:hidden">
              <Button href="#cta" variant="primary">
                Open
              </Button>
            </div>
          </div>
        </Container>
      </header>

      <main>
        {/* Hero */}
        <section className="py-12 sm:py-16">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                  Log brew. Repeat.
                </h1>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-700 sm:text-lg">
                  Brew Logs helps you dial in your brews and repeat the cups that actually taste good.
                  Log ratios, grind size, temp, and notes — then brew again without guessing.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href="https://brewlog.app/brew" variant="primary">
                    Open Brew Logs
                  </Button>
                  <Button href="#screens" variant="secondary">
                    See the screens
                  </Button>
                </div>

                <p className="mt-3 text-xs text-zinc-500">
                  Built for daily brews • Mobile-first
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <Badge>Total brews</Badge>
                  <Badge>Avg rating</Badge>
                  <Badge>Filter</Badge>
                  <Badge>Duplicate</Badge>
                  <Badge>Live brew</Badge>
                </div>
              </div>

              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 shadow-sm">
                  <Image
                    src="/images/hero.avif"
                    alt="Brew Logs UI"
                    width={1600}
                    height={1200}
                    className="h-auto w-full"
                    priority
                  />
                </div>
                <div className="mt-3 text-xs text-zinc-500" />
              </div>
            </div>
          </Container>
        </section>

        {/* Overview / Quick proof */}
        <section id="overview" className="pb-12">
          <Container>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { k: "Total brews", v: "Track how often you brew" },
                { k: "Avg rating", v: "See how your cups average out" },
                { k: "Best brew", v: "Your highest-rated cup" },
                { k: "Most used", v: "Your go-to brew method" },
              ].map((item) => (
                <div
                  key={item.k}
                  className="rounded-2xl border border-zinc-200 bg-white p-4"
                >
                  <div className="text-sm text-zinc-600">{item.k}</div>
                  <div className="mt-1 text-sm font-medium">{item.v}</div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Problem -> Solution (minimal) */}
        <section className="py-12 sm:py-16">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Consistency is hard when you rely on memory.
                </h2>
                <p className="mt-3 text-zinc-700">
                  Brew Logs saves the details that matter, so you can repeat great brews
                  without trying to remember what you did last time.
                </p>

                <ul className="mt-5 space-y-2 text-sm text-zinc-700">
                  <li className="flex gap-2">
                    <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-zinc-900" />
                    Duplicate a previous brew and tweak it slightly.
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-zinc-900" />
                    Filter by method, beans, rating, or date.
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-zinc-900" />
                    Quick search to find that one brew you liked.
                  </li>
                </ul>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 shadow-sm">
                <Image
                  src="/images/filters.avif"
                  alt="Filters & search"
                  width={1400}
                  height={1000}
                  className="h-auto w-full"
                />
              </div>
            </div>
          </Container>
        </section>

        {/* Features */}
        <section className="py-12 sm:py-16">
          <Container>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              What's inside
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl border border-zinc-200 bg-white p-6"
                >
                  <div className="text-sm font-medium">{f.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-700">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Screens */}
        <section id="screens" className="py-12 sm:py-16">
          <Container>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Screens
            </h2>

            <p className="mt-3 max-w-2xl text-sm text-zinc-700">
              Designed for daily brewing — log fast, compare brews,
              and repeat what works.
            </p>

            <div className="mt-8 grid gap-4">
              {/* Big: Brew Details */}
              <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 shadow-sm">
                <Image
                  src="/images/brew-details.avif"
                  alt="Brew details screen"
                  width={2000}
                  height={1400}
                  sizes="100vw"
                  className="h-auto w-full"
                />
              </div>

              {/* Two small */}
              <div className="grid gap-4 md:grid-cols-2">
                <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 shadow-sm">
                  <Image
                    src="/images/new-brew.avif"
                    alt="New brew form"
                    width={1200}
                    height={900}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="h-auto w-full"
                  />
                </div>

                <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 shadow-sm">
                  <Image
                    src="/images/live-brew.avif"
                    alt="Live brew timer"
                    width={1200}
                    height={900}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section id="cta" className="py-12 sm:py-16">
          <Container>
            <div className="rounded-2xl border border-zinc-200 bg-white p-8 sm:p-10">
              <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    Ready for your next brew?
                  </h2>
                  <p className="mt-3 text-zinc-700">
                    Open the app and start logging your brews.
                    Dial it in once, repeat it anytime.
                  </p>
                  <p className="mt-2 text-xs text-zinc-500">
                    Feedback is welcome.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <Button href="https://brewlog.app/brew" variant="primary">
                    Open Brew Logs
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-12 sm:py-16">
          <Container>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              FAQ
            </h2>

            <div className="mt-6 grid gap-4">
              {faqs.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-2xl border border-zinc-200 bg-white p-5"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium">
                    {item.q}
                    <span className="text-zinc-500 transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </Container>
        </section>

        {/* Footer */}
        <footer className="border-t border-zinc-200 py-10">
          <Container>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-sm text-zinc-600">
                © {new Date().getFullYear()} Brew Logs
              </div>
              <div className="flex gap-4 text-sm">
                <a href="#" className="text-zinc-600 hover:text-zinc-900">
                  Contact
                </a>
              </div>
            </div>
          </Container>
        </footer>
      </main>
    </div>
  );
}
````

## File: public/file.svg
````xml
<svg fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 13.5V5.41a1 1 0 0 0-.3-.7L9.8.29A1 1 0 0 0 9.08 0H1.5v13.5A2.5 2.5 0 0 0 4 16h8a2.5 2.5 0 0 0 2.5-2.5m-1.5 0v-7H8v-5H3v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1M9.5 5V2.12L12.38 5zM5.13 5h-.62v1.25h2.12V5zm-.62 3h7.12v1.25H4.5zm.62 3h-.62v1.25h7.12V11z" clip-rule="evenodd" fill="#666" fill-rule="evenodd"/></svg>
````

## File: public/globe.svg
````xml
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g clip-path="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.27 14.1a6.5 6.5 0 0 0 3.67-3.45q-1.24.21-2.7.34-.31 1.83-.97 3.1M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.48-1.52a7 7 0 0 1-.96 0H7.5a4 4 0 0 1-.84-1.32q-.38-.89-.63-2.08a40 40 0 0 0 3.92 0q-.25 1.2-.63 2.08a4 4 0 0 1-.84 1.31zm2.94-4.76q1.66-.15 2.95-.43a7 7 0 0 0 0-2.58q-1.3-.27-2.95-.43a18 18 0 0 1 0 3.44m-1.27-3.54a17 17 0 0 1 0 3.64 39 39 0 0 1-4.3 0 17 17 0 0 1 0-3.64 39 39 0 0 1 4.3 0m1.1-1.17q1.45.13 2.69.34a6.5 6.5 0 0 0-3.67-3.44q.65 1.26.98 3.1M8.48 1.5l.01.02q.41.37.84 1.31.38.89.63 2.08a40 40 0 0 0-3.92 0q.25-1.2.63-2.08a4 4 0 0 1 .85-1.32 7 7 0 0 1 .96 0m-2.75.4a6.5 6.5 0 0 0-3.67 3.44 29 29 0 0 1 2.7-.34q.31-1.83.97-3.1M4.58 6.28q-1.66.16-2.95.43a7 7 0 0 0 0 2.58q1.3.27 2.95.43a18 18 0 0 1 0-3.44m.17 4.71q-1.45-.12-2.69-.34a6.5 6.5 0 0 0 3.67 3.44q-.65-1.27-.98-3.1" fill="#666"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>
````

## File: public/next.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 394 80"><path fill="#000" d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z"/><path fill="#000" d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z"/></svg>
````

## File: public/vercel.svg
````xml
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1155 1000"><path d="m577.3 0 577.4 1000H0z" fill="#fff"/></svg>
````

## File: public/window.svg
````xml
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 2.5h13v10a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1zM0 1h16v11.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5zm3.75 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M7 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" fill="#666"/></svg>
````

## File: src/app/globals.css
````css
/* app/globals.css */

/* -----------------------------
   Design tokens (Light, calm)
------------------------------ */
:root {
  --bg: #fafafa;
  --surface: #ffffff;
  --surface2: #f6f6f7;
  --surface3: #f2f3f5;

  --text: #111827;
  --muted: #6b7280;
  --muted2: #9ca3af;

  --border: rgba(17, 24, 39, 0.10); /* subtle, neutral */
  --border2: rgba(17, 24, 39, 0.06);

  --accent: #f59e0b; /* warm coffee */
  --accent2: #92400e; /* deeper warm */

  --radius: 18px;
  --radius2: 14px;
  --radius3: 12px;

  --max: 1120px;

  /* Rhythm */
  --space-1: 6px;
  --space-2: 10px;
  --space-3: 14px;
  --space-4: 18px;
  --space-5: 22px;
  --space-6: 28px;
  --space-7: 36px;
  --space-8: 48px;
  --space-9: 64px;
  --space-10: 88px;

  /* Shadows (soft + modern) */
  --shadow-xs: 0 1px 0 rgba(0, 0, 0, 0.03);
  --shadow-sm: 0 6px 18px rgba(0, 0, 0, 0.06);
  --shadow-md: 0 14px 40px rgba(0, 0, 0, 0.08);

  /* Typography */
  --h1: 44px;
  --h2: 18px;
  --h3: 20px;
  --body: 15px;
  --small: 13px;

  --lh-tight: 1.08;
  --lh-body: 1.65;
  --lh-small: 1.55;

  --tracking-tight: -0.6px;
  --tracking: -0.2px;
}

/* -----------------------------
   Base
------------------------------ */
* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  background: linear-gradient(180deg, #fcfcfd 0%, var(--bg) 28%, var(--bg) 100%);
  color: var(--text);
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji",
    "Segoe UI Emoji";
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  color: inherit;
  text-decoration: none;
}

a:hover {
  opacity: 0.92;
}

::selection {
  background: rgba(245, 158, 11, 0.22);
}

/* -----------------------------
   Layout helpers
------------------------------ */
.container {
  width: 100%;
  max-width: var(--max);
  margin: 0 auto;
  padding: 0 22px;
}

/* -----------------------------
   Top bar
------------------------------ */
.nav {
  position: sticky;
  top: 0;
  z-index: 30;
  background: rgba(250, 250, 250, 0.85);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border2);
}

.navInner {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
}

.brand {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-weight: 650;
  letter-spacing: -0.2px;
}

.navLinks {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  color: var(--muted);
  font-size: 14px;
}

/* -----------------------------
   Buttons / badges
------------------------------ */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: 10px 14px;
  border-radius: 999px;
  border: 1px solid var(--border2);
  background: var(--surface);
  color: var(--text);

  font-size: 14px;
  cursor: pointer;
  transition: transform 120ms ease, background 120ms ease, border-color 120ms ease, box-shadow 120ms ease;
  box-shadow: var(--shadow-xs);
}

.btn:hover {
  transform: translateY(-1px);
  border-color: var(--border);
  box-shadow: var(--shadow-sm);
}

.btn:active {
  transform: translateY(0px);
}

.btnPrimary {
  background: var(--text);
  border-color: rgba(17, 24, 39, 0.9);
  color: #fff;
  box-shadow: 0 10px 22px rgba(17, 24, 39, 0.14);
}

.btnPrimary:hover {
  box-shadow: 0 14px 36px rgba(17, 24, 39, 0.18);
}

.badge {
  font-size: 12px;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid #fed7aa;
  background: #fff7ed;
  color: var(--accent2);
}

/* -----------------------------
   Sections + rhythm
------------------------------ */
.section {
  padding: var(--space-9) 0;
}

.sectionTitle {
  font-size: var(--h2);
  letter-spacing: var(--tracking);
  margin: 0 0 var(--space-2) 0;
}

.sectionDesc {
  margin: 0 0 var(--space-6) 0;
  color: var(--muted);
  font-size: var(--body);
  line-height: var(--lh-body);
  max-width: 62ch;
}

/* -----------------------------
   Hero
------------------------------ */
.heroGrid {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: var(--space-7);
  align-items: center;
  padding: var(--space-9) 0 var(--space-6);
}

.kickerRow {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin-bottom: var(--space-3);
  color: var(--muted);
  font-size: 13px;
}

.h1 {
  margin: 0 0 var(--space-3) 0;
  font-size: var(--h1);
  line-height: var(--lh-tight);
  letter-spacing: var(--tracking-tight);
}

.sub {
  margin: 0 0 var(--space-4) 0;
  color: var(--muted);
  font-size: var(--body);
  line-height: var(--lh-body);
  max-width: 52ch;
}

.actions {
  display: flex;
  gap: var(--space-2);
  flex-wrap: wrap;
  margin-top: var(--space-2);
}

/* -----------------------------
   Cards / surfaces
------------------------------ */
.card {
  border: 1px solid var(--border2);
  background: var(--surface);
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
}

.cardPad {
  padding: var(--space-5);
}

.card + .card {
  margin-top: var(--space-4);
}

/* Adds gentle separation between stacked blocks */
.stack {
  display: grid;
  gap: var(--space-4);
}

/* -----------------------------
   Image framing (Apple-ish)
------------------------------ */
.imageWrap {
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid var(--border2);
  background: var(--surface2);
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.06);
  padding: 10px; 
}

/* Keep screenshots from feeling "too tall" on desktop */
.imageWrap img {
  display: block;
  width: 100%;
  height: auto;
  max-height: 660px;
  object-fit: contain;
}

/* If you prefer "no crop" screenshots, switch this:
   object-fit: contain; and add padding to .imageWrap */
.imageWrapContain img {
  object-fit: contain;
}

/* -----------------------------
   Zig-zag feature sections
------------------------------ */
.gridZigZag {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-6);
  align-items: center;
}

.blockTitle {
  margin: 0 0 var(--space-2) 0;
  font-size: var(--h3);
  letter-spacing: var(--tracking);
}

.blockText {
  margin: 0;
  color: var(--muted);
  font-size: var(--body);
  line-height: var(--lh-body);
}

.bullets {
  margin: var(--space-3) 0 0;
  padding-left: 18px;
  color: var(--muted);
  font-size: var(--body);
  line-height: 1.7;
}

/* -----------------------------
   Supporting cards (2-up)
------------------------------ */
.twoCards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4);
}

.thumbRow {
  display: flex;
  gap: var(--space-4);
  align-items: center;
}

.thumbText h3 {
  margin: 0;
  font-size: 16px;
  letter-spacing: var(--tracking);
}

.thumbText p {
  margin: var(--space-2) 0 0;
  color: var(--muted);
  font-size: var(--small);
  line-height: var(--lh-small);
}

/* -----------------------------
   Roadmap
------------------------------ */
.roadmapGrid {
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: var(--space-6);
  align-items: start;
}

.smallLink {
  color: var(--muted);
  font-size: 14px;
  border-bottom: 1px solid rgba(17, 24, 39, 0.18);
  padding-bottom: 2px;
}

.smallLink:hover {
  color: var(--accent2);
  border-bottom-color: rgba(146, 64, 14, 0.45);
}

/* -----------------------------
   Closing CTA bar
------------------------------ */
.ctaBar {
  border: 1px solid var(--border2);
  background: linear-gradient(180deg, var(--surface), var(--surface2));
  border-radius: var(--radius);
  padding: var(--space-5);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  box-shadow: var(--shadow-sm);
}

/* -----------------------------
   Footer
------------------------------ */
.footer {
  padding: var(--space-7) 0 var(--space-9);
  color: var(--muted);
  font-size: var(--small);
  border-top: 1px solid var(--border2);
  margin-top: var(--space-6);
}

.footerLinks {
  display: flex;
  gap: var(--space-4);
  flex-wrap: wrap;
  margin-top: var(--space-3);
}

/* -----------------------------
   Responsive
------------------------------ */
@media (max-width: 920px) {
  :root {
    --h1: 38px;
  }

  .heroGrid {
    grid-template-columns: 1fr;
    gap: var(--space-6);
    padding-top: var(--space-7);
  }

  .gridZigZag {
    grid-template-columns: 1fr;
  }

  .roadmapGrid {
    grid-template-columns: 1fr;
  }

  .twoCards {
    grid-template-columns: 1fr;
  }

  .imageWrap img {
    max-height: 720px;
  }
}

@media (max-width: 520px) {
  .container {
    padding: 0 16px;
  }

  .navLinks {
    display: none;
  }

  .section {
    padding: var(--space-8) 0;
  }

  .cardPad {
    padding: var(--space-4);
  }

  .ctaBar {
    flex-direction: column;
    align-items: stretch;
  }

  .actions {
    gap: 10px;
  }
}
````

## File: src/app/layout.tsx
````typescript
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brew Logs",
  description: "Track your brews. Keep it consistent.",
  metadataBase: new URL("https://brewlog.app"),
  openGraph: {
    title: "Brew Logs",
    description: "Track your brews. Keep it consistent.",
    url: "https://brewlog.app",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
````

## File: src/app/page.tsx
````typescript
// app/page.tsx
import Image from "next/image";

const LINKS = {
  app: "https://brewlog.app/brew",
  roadmap: "https://brewlog.app/roadmap",
  feedback: "https://brewlog.app/roadmap"
};

function ArrowUpRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 7H17V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Divider({ tight }: { tight?: boolean }) {
  return (
    <div
      aria-hidden="true"
      style={{
        height: 1,
        background: "rgba(17, 24, 39, 0.06)",
        margin: tight ? "34px 0" : "54px 0"
      }}
    />
  );
}

function Chip({ text }: { text: string }) {
  return (
    <div
      style={{
        padding: "10px 12px",
        borderRadius: 14,
        border: "1px solid rgba(17,24,39,0.08)",
        background: "rgba(255,255,255,0.8)",
        boxShadow: "0 8px 18px rgba(0,0,0,0.04)",
        fontSize: 13,
        color: "var(--text)",
        display: "flex",
        gap: 10,
        alignItems: "center",
        minHeight: 40
      }}
    >
      <span style={{ width: 6, height: 6, borderRadius: 999, background: "rgba(17,24,39,0.25)" }} />
      <span>{text}</span>
    </div>
  );
}

function ScreenFrame({
  src,
  alt,
  priority
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="imageWrap" style={{ padding: 10 }}>
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={900}
        priority={priority}
        sizes="(max-width: 920px) 100vw, 520px"
        style={{
          width: "100%",
          height: "auto",
          objectFit: "contain",
          maxHeight: 560
        }}
      />
    </div>
  );
}

export default function Page() {
  return (
    <>
      {/* Top bar */}
      <header className="nav">
        <div className="container navInner">
          <div className="brand">
            <span>Brew Logs</span>
            <span className="badge">Beta</span>
          </div>

          <nav className="navLinks">
            <a href="#features">Features</a>
            <a href="#screens">Screens</a>
            <a href="#roadmap">Roadmap</a>
          </nav>

          <a className="btn btnPrimary" href={LINKS.app} target="_blank" rel="noreferrer">
            Open <ArrowUpRight />
          </a>
        </div>
      </header>

      <main className="container">
        {/* Hero */}
        <section className="heroGrid" style={{ paddingBottom: 0 }}>
          <div>
            <div className="kickerRow">
              <span className="badge">Brew Log</span>
              <span style={{ color: "var(--muted)" }}>Track your brews</span>
            </div>

            <h1 className="h1" style={{ maxWidth: 16 * 22 }}>
              Log brew. Repeat.
            </h1>

            <p className="sub" style={{ maxWidth: 62 * 8 }}>
              Brew Logs helps you track ratio, time, and notes — so you can repeat the good ones.
            </p>

            <div className="actions">
              <a className="btn btnPrimary" href={LINKS.app} target="_blank" rel="noreferrer">
                Open App <ArrowUpRight />
              </a>
              <a className="btn" href="#features">
                View Features
              </a>
            </div>

            {/* Value chips row (ganti mini stats yang dulu, biar lebih “designed”) */}
            <div style={{ marginTop: 18, display: "grid", gap: 10, gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
              <Chip text="Fast log" />
              <Chip text="Quick repeat" />
              <Chip text="Live timer" />
              <Chip text="Clean details" />
            </div>
          </div>

          {/* Hero screenshot: contain + max height biar nggak kebablasan */}
          <ScreenFrame src="/images/hero.avif" alt="Brew Logs overview screen" priority />
        </section>

        <Divider />

        {/* Features */}
        <section id="features" className="section" style={{ paddingTop: 0 }}>
          <h2 className="sectionTitle">Features</h2>
          <p className="sectionDesc">Simple flows, clear details, quick repeat.</p>

          {/* Spotlight 1 */}
          <div className="gridZigZag" style={{ alignItems: "center" }}>
            <div style={{ maxWidth: 520 }}>
              <h3 className="blockTitle">New Brew</h3>
              <p className="blockText">Log a brew in seconds.</p>
              <ul className="bullets">
                <li>Method, beans, dose, water</li>
                <li>Notes and rating</li>
                <li>Advanced details when needed</li>
              </ul>
            </div>
            <ScreenFrame src="/images/new-brew.avif" alt="New Brew screen" />
          </div>

          <div style={{ height: 46 }} />

          {/* Spotlight 2 */}
          <div className="gridZigZag" style={{ alignItems: "center" }}>
            <ScreenFrame src="/images/live-brew.avif" alt="Live Brew screen" />
            <div style={{ maxWidth: 520 }}>
              <h3 className="blockTitle">Live Brew</h3>
              <p className="blockText">Timer + steps while you brew.</p>
              <ul className="bullets">
                <li>Hot Brew / Ice Brew</li>
                <li>Steps during pour</li>
                <li>Ratio (Water:Dose)</li>
              </ul>
            </div>
          </div>

          <div style={{ height: 46 }} />

          {/* Spotlight 3 */}
          <div className="gridZigZag" style={{ alignItems: "center" }}>
            <div style={{ maxWidth: 520 }}>
              <h3 className="blockTitle">Brew Details</h3>
              <p className="blockText">Everything in one view.</p>
              <ul className="bullets">
                <li>Dose, water, temp, time, ratio</li>
                <li>Notes and rating</li>
                <li>Duplicate to repeat</li>
              </ul>
            </div>
            <ScreenFrame src="/images/brew-details.avif" alt="Brew Details screen" />
          </div>

          <div style={{ height: 56 }} />

          {/* Supporting 2-up (bikin thumb lebih “jadi”) */}
          <div className="twoCards">
            <div className="card">
              <div className="cardPad" style={{ padding: 18 }}>
                <div className="thumbRow" style={{ alignItems: "center" }}>
                  <div className="imageWrap" style={{ width: 190, flex: "0 0 auto", borderRadius: 14, padding: 8 }}>
                    <Image
                      src="/images/filters.avif"
                      alt="Filters screen"
                      width={700}
                      height={700}
                      sizes="190px"
                      style={{ width: "100%", height: "auto", objectFit: "contain", maxHeight: 160 }}
                    />
                  </div>
                  <div className="thumbText">
                    <h3>Filters</h3>
                    <p>Find brews faster.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="cardPad" style={{ padding: 18 }}>
                <div className="thumbRow" style={{ alignItems: "center" }}>
                  <div className="imageWrap" style={{ width: 190, flex: "0 0 auto", borderRadius: 14, padding: 8 }}>
                    <Image
                      src="/images/beans.avif"
                      alt="Beans screen"
                      width={700}
                      height={700}
                      sizes="190px"
                      style={{ width: "100%", height: "auto", objectFit: "contain", maxHeight: 160 }}
                    />
                  </div>
                  <div className="thumbText">
                    <h3>Beans</h3>
                    <p>Keep your beans list.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* Screens (Gallery) — jangan giant, bikin ringkas 2x2 */}
        <section id="screens" className="section" style={{ paddingTop: 0 }}>
          <h2 className="sectionTitle">Screens</h2>
          <p className="sectionDesc">A quick look at the core flow.</p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 14
            }}
          >
            <ScreenFrame src="/images/brew-details.avif" alt="Brew Details preview" />
            <ScreenFrame src="/images/new-brew.avif" alt="New Brew preview" />
            <ScreenFrame src="/images/live-brew.avif" alt="Live Brew preview" />
            <ScreenFrame src="/images/hero.avif" alt="Brew list preview" />
          </div>
        </section>

        <Divider />

        {/* Roadmap */}
        <section id="roadmap" className="section" style={{ paddingTop: 0 }}>
          <h2 className="sectionTitle">Roadmap</h2>
          <p className="sectionDesc">Recently, in progress, and what’s next.</p>

          <div className="roadmapGrid" style={{ alignItems: "start" }}>
            <ScreenFrame src="/images/recipes.avif" alt="Recipes preview" />

            <div style={{ maxWidth: 560 }}>
              <h3 className="blockTitle">Next</h3>
              <p className="blockText">Recipes and improvements based on feedback.</p>

              <ul className="bullets">
                <li>Recently: history + profile improvements</li>
                <li>In progress: better brew details + quick repeat</li>
                <li>Next: recipes (save and reuse)</li>
              </ul>

              <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a className="btn" href={LINKS.roadmap} target="_blank" rel="noreferrer">
                  View full roadmap <ArrowUpRight />
                </a>
                <a className="btn" href={LINKS.feedback} target="_blank" rel="noreferrer">
                  Send feedback <ArrowUpRight />
                </a>
              </div>
            </div>
          </div>
        </section>

        <Divider tight />

        {/* Closing CTA */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="ctaBar">
            <div>
              <div style={{ fontWeight: 650, marginBottom: 4 }}>Ready to use.</div>
              <div style={{ color: "var(--muted)", fontSize: 14 }}>Open the app and start logging.</div>
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "flex-end" }}>
              <a className="btn btnPrimary" href={LINKS.app} target="_blank" rel="noreferrer">
                Open App <ArrowUpRight />
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div>© {new Date().getFullYear()} Brew Logs ☕</div>
          <div className="footerLinks">
            <a className="smallLink" href={LINKS.roadmap} target="_blank" rel="noreferrer">
              Roadmap
            </a>
            <a className="smallLink" href={LINKS.feedback} target="_blank" rel="noreferrer">
              Feedback
            </a>
          </div>
        </footer>
      </main>

      {/* Small responsive fix for the gallery grid */}
      <style>{`
        @media (max-width: 920px) {
          #screens > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
````

## File: .gitignore
````
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
````

## File: eslint.config.mjs
````javascript
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
````

## File: next.config.ts
````typescript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"]
  }
};

module.exports = nextConfig;
````

## File: package.json
````json
{
  "name": "brew-logs-landing",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "next": "16.1.1",
    "react": "19.2.3",
    "react-dom": "19.2.3"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.1.1",
    "sharp": "^0.34.5",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
````

## File: postcss.config.mjs
````javascript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
````

## File: README.md
````markdown
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
````

## File: tsconfig.json
````json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": [
    "node_modules"
  ]
}
````
