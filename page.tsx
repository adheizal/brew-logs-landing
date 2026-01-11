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
