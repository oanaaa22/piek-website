// app/page.tsx
import Image from "next/image";
import Button from "@/components/Button";
import CopyField from "@/components/CopyField";

const LINKS = {
  buy: "https://dexscreener.com/ethereum/0x8cfdea60183543831d0fd90ecda05e32f9c7548d",
  chart: "https://dexscreener.com/ethereum/0x8cfdea60183543831d0fd90ecda05e32f9c7548d",
  x: "https://x.com/PIEKcto",
  telegram: "https://t.me/PIEK_CTO",
  discord: "", // optional
};

const CONTRACT = "0x93553e5eb4538B5311EfBdB2227a31026306aFA6";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        {/* star image */}
        <div className="absolute inset-0 opacity-45 [background-image:url('/stars.jpg')] bg-cover bg-center" />
        {/* soft aurora */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(120,255,220,.14),transparent_45%),radial-gradient(circle_at_82%_20%,rgba(130,160,255,.16),transparent_50%),radial-gradient(circle_at_55%_85%,rgba(255,255,255,.08),transparent_55%)]" />
        {/* vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/55 to-black" />
      </div>

      {/* Top Nav */}
      <header className="relative z-10 border-b border-white/10 bg-black/20 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5">
          <a href="#top" className="flex items-center gap-4">
            {/* MUCH larger logo in corner */}
            <img
              src="/piek-logo.png"
              alt="PIEK"
              className="h-40 w-auto drop-shadow-[0_0_25px_rgba(255,255,255,0.22)] sm:h-16 md:h-20"
            />
          </a>

          <nav className="hidden items-center gap-10 md:flex">
            {[
              ["About", "#about"],
              ["Gallery", "#gallery"],
              ["Tokenomics", "#tokenomics"],
              ["Roadmap", "#roadmap"],
              ["Community", "#community"],
              ["Chart", "#chart"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-lg font-semibold tracking-wide text-white/75 transition hover:text-white"
              >
                <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
                  {label}
                </span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button href={LINKS.chart} className="hidden px-5 py-2 md:inline-flex" variant="secondary">
              Chart
            </Button>
            <Button href={LINKS.buy} className="px-5 py-2" variant="primary">
              Buy PIEK →
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative z-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-16 pt-12 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-2xl bg-white/5 px-4 py-2 ring-1 ring-white/10 backdrop-blur">
              <span className="text-[11px] font-semibold tracking-[0.25em] text-white/80">
                ETHEREUM • YEE BETA • CANON CHARACTER
              </span>
            </div>

            <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-tight md:text-6xl">
              <span className="bg-gradient-to-r from-white via-white to-emerald-100 bg-clip-text text-transparent">
                The Sage Companion of YEE
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/70">
              PIEK is the lovable, rhyming Ankylosaurus from the Yee meme of old. Calm energy, strong lore,
              and positioned perfectly for attention rotation.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href={LINKS.buy} variant="primary">
                Buy PIEK
              </Button>
              <Button href={LINKS.chart} variant="secondary">
                View Chart
              </Button>
              <a
                href="#about"
                className="rounded-xl bg-white/5 px-5 py-3 text-sm font-semibold text-white/80 ring-1 ring-white/10 backdrop-blur transition hover:bg-white/10 hover:text-white"
              >
                Read the story
              </a>
            </div>

            {/* Quick Facts */}
            <div className="mt-9 grid gap-3 rounded-2xl bg-white/6 p-4 ring-1 ring-white/12 backdrop-blur">
              <CopyField label="Network" value="Ethereum" />
              <CopyField label="DEX" value="Uniswap" />
              <CopyField label="Contract" value={CONTRACT} mono />
            </div>

            <div className="mt-6 flex items-center gap-5 text-white/70">
              <a href={LINKS.x} target="_blank" rel="noreferrer" className="hover:text-white">
                X
              </a>
              <a href={LINKS.telegram} target="_blank" rel="noreferrer" className="hover:text-white">
                Telegram
              </a>
              {LINKS.discord ? (
                <a href={LINKS.discord} target="_blank" rel="noreferrer" className="hover:text-white">
                  Discord
                </a>
              ) : null}
            </div>
          </div>

          <div className="relative">
            {/* punchy frame */}
            <div className="absolute -inset-8 rounded-[40px] bg-[radial-gradient(circle_at_20%_20%,rgba(120,255,220,.18),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(130,160,255,.18),transparent_55%)] blur-2xl" />
            <div className="relative overflow-hidden rounded-[30px] bg-white/5 ring-1 ring-white/12">
              <Image
                src="/piek-hero.jpg"
                alt="PIEK hero"
                width={1600}
                height={1200}
                className="h-auto w-full"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative z-10 mx-auto max-w-7xl px-6 pb-14">
        <div className="rounded-[34px] bg-white/6 p-8 ring-1 ring-white/12 backdrop-blur">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                <span className="bg-gradient-to-r from-white via-white to-white/65 bg-clip-text text-transparent">
                  PIEK is the heart of the YEE universe.
                </span>
              </h2>
              <p className="mt-3 max-w-2xl text-white/70">
                Not loud. Not forced. Just canon, lovable, and inevitable.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Tag>Canon</Tag>
              <Tag>Rhymes</Tag>
              <Tag>“Pa” sound</Tag>
              <Tag>Ankylosaurus</Tag>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="space-y-4 text-white/75">
              <p className="text-lg text-white/85">PIEK is not new. He’s been here before.</p>

              <p className="leading-relaxed">
                PIEK is the best friend of YEE — a beloved side character from the original Yee meme era.
                He’s lovable, gentle, and impossible not to smile at. Known for his endearing habit of
                rhyming, and his “Pa” noise — the loveliest sound.
              </p>

              <p className="leading-relaxed">
                A very accurate Ankylosaurus: soft ears, giant mouth, and a lion tail.
              </p>

              <div className="mt-6 rounded-2xl bg-black/30 p-5 ring-1 ring-white/10">
                <div className="text-sm text-white/70">The meme cycle</div>
                <div className="mt-2 text-2xl font-semibold tracking-tight">
                  <span className="bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent">
                    $DOGE → $PEPE → $YEE
                  </span>
                </div>
                <div className="mt-3 text-sm leading-relaxed text-white/70">
                  DOGE started it. PEPE showed culture + timing can go nuclear. Now YEE is the next chapter —
                  and every time the main coin runs, betas rip.{" "}
                  <span className="text-white/85">There would be no YEE without PIEK.</span>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
              <Image
                src="/piek-story.png"
                alt="PIEK story"
                width={1600}
                height={1200}
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery (6 square images) */}
      <section id="gallery" className="relative z-10 mx-auto max-w-7xl px-6 pb-14">
        <div className="rounded-[34px] bg-white/6 p-8 ring-1 ring-white/12 backdrop-blur">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h3 className="text-4xl font-semibold tracking-tight">
                <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
                  Gallery
                </span>
              </h3>
              <p className="mt-2 text-white/70">
                Upload 6 square images to <span className="text-white/85">/public/gallery/</span> named{" "}
                <span className="font-mono text-white/85">img_1.png</span> …{" "}
                <span className="font-mono text-white/85">img_6.png</span>.
              </p>
            </div>

            <a
              href={LINKS.x}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-white/70 hover:text-white"
            >
              Share art on X →
            </a>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-4 md:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <a
                key={n}
                href={`/gallery/img_${n}.png`}
                target="_blank"
                rel="noreferrer"
                className="group relative aspect-square overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 transition hover:ring-white/20"
              >
                <div className="pointer-events-none absolute -inset-10 opacity-0 blur-2xl transition group-hover:opacity-100 bg-[radial-gradient(circle_at_30%_20%,rgba(120,255,220,.18),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(130,160,255,.18),transparent_55%)]" />

                <Image
                  src={`/gallery/img_${n}.png`}
                  alt={`PIEK gallery ${n}`}
                  width={1200}
                  height={1200}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4">
                  <div className="text-sm font-semibold text-white/90">PIEK</div>
                  <div className="text-xs text-white/65">img_{n}.png</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenomics */}
      <section id="tokenomics" className="relative z-10 mx-auto max-w-7xl px-6 pb-14">
        <div className="rounded-[34px] bg-white/6 p-8 ring-1 ring-white/12 backdrop-blur">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h3 className="text-4xl font-semibold tracking-tight">
                <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
                  Tokenomics
                </span>
              </h3>
              <p className="mt-2 text-white/70">Simple. Clean. No nonsense.</p>
            </div>
            <Button href={LINKS.buy} variant="secondary" className="px-5 py-2">
              Buy PIEK
            </Button>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            <StatCard title="Total Supply" value="1,000,000,000" sub="Fixed supply" />
            <StatCard title="Tax" value="0%" sub="No buy/sell tax" />
            <StatCard title="DEX" value="Uniswap" sub="Ethereum mainnet" />
          </div>

          <div className="mt-6 rounded-2xl bg-black/30 p-5 ring-1 ring-white/10">
            <div className="text-sm text-white/70">Contract</div>
            <div className="mt-2">
              <CopyField label="CA" value={CONTRACT} mono />
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="relative z-10 mx-auto max-w-7xl px-6 pb-14">
        <div className="rounded-[34px] bg-white/6 p-8 ring-1 ring-white/12 backdrop-blur">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h3 className="text-4xl font-semibold tracking-tight">
                <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
                  Roadmap
                </span>
              </h3>
              <p className="mt-2 text-white/70">Clean milestones. No filler.</p>
            </div>
            <Button href={LINKS.chart} variant="secondary" className="px-5 py-2">
              Track Momentum
            </Button>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            <StepCard step="Phase 1" title="Launch & canon" items={["Website + brand", "Liquidity live", "Community channels"]} />
            <StepCard step="Phase 2" title="Attention rotation" items={["Memes + story arcs", "Collabs in the YEE ecosystem", "Gallery expansion"]} />
            <StepCard step="Phase 3" title="PIEK era" items={["Bigger media moments", "Creator assets", "Long-run community growth"]} />
          </div>
        </div>
      </section>

      {/* Dexscreener embed */}
      <section id="chart" className="relative z-10 mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-[34px] bg-white/6 p-8 ring-1 ring-white/12 backdrop-blur">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h3 className="text-4xl font-semibold tracking-tight">
                <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
                  Live Chart
                </span>
              </h3>
              <p className="mt-2 text-white/70">Embedded from Dexscreener.</p>
            </div>
            <Button href={LINKS.chart} variant="secondary" className="px-5 py-2">
              Open on Dexscreener →
            </Button>
          </div>

          <div className="mt-7 overflow-hidden rounded-2xl bg-black/40 ring-1 ring-white/10">
            <iframe
              title="Dexscreener PIEK chart"
              src="https://dexscreener.com/ethereum/0x8cfdea60183543831d0fd90ecda05e32f9c7548d?embed=1&theme=dark"
              className="h-[720px] w-full"
              allow="clipboard-write; encrypted-media; fullscreen"
            />
          </div>

          <div className="mt-4 text-xs text-white/55">
            If the embed ever shows a blank area, open the chart directly via the button above.
          </div>
        </div>
      </section>

      {/* Footer / Community */}
      <footer id="community" className="relative z-10 border-t border-white/10 bg-black/30">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <img
                src="/piek-logo.png"
                alt="PIEK"
                className="h-12 w-auto drop-shadow-[0_0_20px_rgba(255,255,255,0.18)]"
              />
              <div className="text-sm text-white/60">The Sage Companion of YEE</div>
            </div>

            <div className="flex flex-wrap items-center gap-5 text-sm font-semibold text-white/70">
              <a className="hover:text-white" href={LINKS.x} target="_blank" rel="noreferrer">
                X
              </a>
              <a className="hover:text-white" href={LINKS.telegram} target="_blank" rel="noreferrer">
                Telegram
              </a>
              {LINKS.discord ? (
                <a className="hover:text-white" href={LINKS.discord} target="_blank" rel="noreferrer">
                  Discord
                </a>
              ) : null}
              <a className="hover:text-white" href={LINKS.chart} target="_blank" rel="noreferrer">
                Chart
              </a>
              <a className="hover:text-white" href={LINKS.buy} target="_blank" rel="noreferrer">
                Buy
              </a>
            </div>
          </div>

          <div className="mt-8 text-xs text-white/50">Not financial advice. Meme token. DYOR.</div>
        </div>
      </footer>
    </main>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80 ring-1 ring-white/10">
      {children}
    </span>
  );
}

function StatCard({ title, value, sub }: { title: string; value: string; sub: string }) {
  return (
    <div className="rounded-2xl bg-black/30 p-5 ring-1 ring-white/10">
      <div className="text-sm text-white/70">{title}</div>
      <div className="mt-2 text-3xl font-semibold tracking-tight">
        <span className="bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent">
          {value}
        </span>
      </div>
      <div className="mt-2 text-sm text-white/60">{sub}</div>
    </div>
  );
}

function StepCard({
  step,
  title,
  items,
}: {
  step: string;
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl bg-black/30 p-5 ring-1 ring-white/10">
      <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80 ring-1 ring-white/10">
        {step}
      </div>
      <div className="mt-3 text-xl font-semibold tracking-tight">
        <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
          {title}
        </span>
      </div>
      <ul className="mt-3 space-y-2 text-sm text-white/70">
        {items.map((t) => (
          <li key={t}>• {t}</li>
        ))}
      </ul>
    </div>
  );
}
