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
