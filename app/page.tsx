"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const LINKS = {
  buy: "https://dexscreener.com/ethereum/0x8cfdea60183543831d0fd90ecda05e32f9c7548d",
  chart: "https://dexscreener.com/ethereum/0x8cfdea60183543831d0fd90ecda05e32f9c7548d",
  x: "https://x.com/PIEKcto",
  telegram: "https://t.me/PIEK_CTO",
};

const CONTRACT = "0x93553e5eb4538B5311EfBdB2227a31026306aFA6";

// Your EXACT current filenames (including .JPG and the one with a space).
// The one with a space is URL-encoded as %20 so it loads correctly.
const GALLERY = [
  { src: "/IMG_0005.jpg", label: "IMG_0005.jpg" },
  { src: "/IMG_0013.jpg", label: "IMG_0013.jpg" },
  { src: "/IMG_0018.jpg", label: "IMG_0018.jpg" },
  { src: "/IMG_9847%202.jpg", label: "IMG_9847 2.jpg" }, // space encoded
  { src: "/IMG_9921.jpg", label: "IMG_9921.jpg" },
  { src: "/IMG_9930.JPG", label: "IMG_9930.JPG" }, // keep case
];

// optional spare you might want later
const SPARE = "/IMG_9943.jpg";

function shortCA(addr: string) {
  if (!addr) return "";
  return `${addr.slice(0, 6)}…${addr.slice(-4)}`;
}

export default function Page() {
  const [copied, setCopied] = useState(false);

  const dexscreenerEmbed = useMemo(() => {
    // Dexscreener supports embed=1 and theme=dark on most pairs.
    return "https://dexscreener.com/ethereum/0x8cfdea60183543831d0fd90ecda05e32f9c7548d?embed=1&theme=dark";
  }, []);

  async function copy(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      // fallback: no-op
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* ===== BACKDROP (designer) ===== */}
      <div className="pointer-events-none absolute inset-0">
        {/* star texture */}
        <div className="absolute inset-0 opacity-45 bg-[url('/stars.jpg')] bg-cover bg-center" />
        {/* aurora gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(34,211,238,0.18),transparent_45%),radial-gradient(circle_at_90%_20%,rgba(16,185,129,0.16),transparent_50%),radial-gradient(circle_at_45%_95%,rgba(168,85,247,0.16),transparent_55%)]" />
        {/* vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/55 to-black" />
        {/* subtle grain */}
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle,white_1px,transparent_1px)] [background-size:18px_18px]" />
      </div>

      {/* ===== NAV ===== */}
      <header className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-6">
          <div className="flex items-center justify-between rounded-[28px] bg-white/5 px-5 py-4 ring-1 ring-white/10 backdrop-blur">
            <a href="#top" className="flex items-center gap-4">
              {/* HUGE logo left corner */}
              <img
                src="/piek-logo.png"
                alt="PIEK"
                className="h-16 w-auto sm:h-20 md:h-24 lg:h-28 drop-shadow-[0_0_35px_rgba(255,255,255,0.25)]"
              />
              <span className="hidden rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-widest text-white/80 ring-1 ring-white/10 lg:inline">
                ETHEREUM • YEE BETA • CANON
              </span>
            </a>

            <nav className="hidden items-center gap-10 lg:flex">
              {[
                ["About", "#about"],
                ["Gallery", "#gallery"],
                ["Tokenomics", "#tokenomics"],
                ["Roadmap", "#roadmap"],
                ["Chart", "#chart"],
                ["Community", "#community"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="text-lg font-semibold tracking-wide text-white/75 transition hover:text-white"
                >
                  <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                    {label}
                  </span>
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={LINKS.chart}
                target="_blank"
                rel="noreferrer"
                className="hidden rounded-full bg-white/8 px-5 py-2 text-sm font-semibold text-white/80 ring-1 ring-white/10 backdrop-blur transition hover:bg-white/12 hover:text-white md:inline-flex"
              >
                Chart
              </a>

              <a
                href={LINKS.buy}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-gradient-to-r from-emerald-300 via-cyan-300 to-violet-300 px-6 py-2.5 text-sm font-extrabold text-black shadow-[0_0_28px_rgba(34,211,238,0.25)] transition hover:opacity-95"
              >
                Buy PIEK →
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section id="top" className="relative z-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-16 pt-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-2xl bg-black/35 px-4 py-2 ring-1 ring-white/10 backdrop-blur">
              <span className="text-[11px] font-semibold tracking-[0.3em] text-white/80">
                THE SAGE COMPANION OF YEE
              </span>
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <span className="text-[11px] font-semibold tracking-[0.25em] text-white/60">
                ATTENTION ROTATION META
              </span>
            </div>

            <h1 className="mt-6 text-5xl font-extrabold leading-[1.02] tracking-tight md:text-6xl">
              <span className="bg-gradient-to-r from-white via-white to-emerald-100 bg-clip-text text-transparent">
                PIEK is the beta you can’t unsee.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/72">
              DOGE was the original internet meme coin. PEPE proved culture + timing can go nuclear.
              Now <span className="text-white/90 font-semibold">YEE</span> is the next chapter — and when YEE runs,
              people hunt the cheaper play.
              <span className="text-white/90 font-semibold"> That’s PIEK.</span>
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={LINKS.buy}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-gradient-to-r from-emerald-300 via-cyan-300 to-violet-300 px-6 py-3 text-sm font-extrabold text-black shadow-[0_0_30px_rgba(16,185,129,0.20)] transition hover:opacity-95"
              >
                Buy PIEK
              </a>

              <a
                href="#chart"
                className="rounded-2xl bg-white/8 px-6 py-3 text-sm font-semibold text-white/85 ring-1 ring-white/12 backdrop-blur transition hover:bg-white/12 hover:text-white"
              >
                Live chart embed
              </a>

              <a
                href="#gallery"
                className="rounded-2xl bg-black/30 px-6 py-3 text-sm font-semibold text-white/75 ring-1 ring-white/10 backdrop-blur transition hover:bg-black/40 hover:text-white"
              >
                Explore Gallery
              </a>
            </div>

            {/* Token / CA card */}
            <div className="mt-10 grid gap-3 rounded-[26px] bg-white/6 p-5 ring-1 ring-white/12 backdrop-blur">
              <div className="flex items-center justify-between">
                <div className="text-sm text-white/60">Network</div>
                <div className="text-sm font-semibold text-white/90">Ethereum</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm text-white/60">DEX</div>
                <div className="text-sm font-semibold text-white/90">Uniswap</div>
              </div>

              <div className="mt-1 rounded-2xl bg-black/35 p-4 ring-1 ring-white/10">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-xs font-semibold tracking-widest text-white/55">CONTRACT</div>
                    <div className="mt-1 font-mono text-sm text-white/90">{CONTRACT}</div>
                    <div className="mt-1 text-xs text-white/55">({shortCA(CONTRACT)})</div>
                  </div>

                  <button
                    onClick={() => copy(CONTRACT)}
                    className="rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white/85 ring-1 ring-white/12 backdrop-blur transition hover:bg-white/14"
                  >
                    {copied ? "Copied ✓" : "Copy"}
                  </button>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-5 text-sm font-semibold text-white/70">
                <a href={LINKS.x} target="_blank" rel="noreferrer" className="hover:text-white">
                  X
                </a>
                <a href={LINKS.telegram} target="_blank" rel="noreferrer" className="hover:text-white">
                  Telegram
                </a>
                <a href={LINKS.chart} target="_blank" rel="noreferrer" className="hover:text-white">
                  Dexscreener
                </a>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative">
            <div className="absolute -inset-10 rounded-[44px] bg-[radial-gradient(circle_at_25%_25%,rgba(34,211,238,.22),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,.18),transparent_55%),radial-gradient(circle_at_65%_90%,rgba(168,85,247,.18),transparent_55%)] blur-2xl" />
            <div className="relative overflow-hidden rounded-[34px] bg-white/5 ring-1 ring-white/12">
              <Image
                src="/piek-hero.jpg"
                alt="PIEK hero"
                width={1600}
                height={1200}
                className="h-auto w-full"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT / STORY ===== */}
      <section id="about" className="relative z-10 mx-auto max-w-7xl px-6 pb-14">
        <div className="rounded-[36px] bg-white/6 p-8 ring-1 ring-white/12 backdrop-blur">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                  PIEK — The Sage Companion of YEE
                </span>
              </h2>
              <p className="mt-3 max-w-2xl text-white/72">
                PIEK is not new. He’s been here before. Beloved by all. The “Pa” noise is the loveliest sound.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Pill text="Canon character" />
              <Pill text="Rhymes" />
              <Pill text="“Pa” sound" />
              <Pill text="Ankylosaurus accurate" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="space-y-5 text-white/75">
              <p className="text-lg text-white/88">
                Peek is a loveable character who has an endearing habit of rhyming. He is beloved by all,
                and seen in the Yee meme of old.
              </p>

              <p className="leading-relaxed">
                He is a very accurate Ankylosaurus — as you can see by his ears, giant mouth, and lion tail.
              </p>

              <div className="rounded-2xl bg-black/35 p-5 ring-1 ring-white/10">
                <div className="text-xs font-semibold tracking-widest text-white/55">
                  THE MEMECOIN TRILOGY
                </div>
                <div className="mt-2 text-2xl font-extrabold tracking-tight">
                  <span className="bg-gradient-to-r from-emerald-200 via-cyan-200 to-violet-200 bg-clip-text text-transparent">
                    $DOGE → $PEPE → $YEE
                  </span>
                </div>
                <div className="mt-3 space-y-2 text-sm leading-relaxed text-white/70">
                  <div>• DOGE was the original internet meme coin.</div>
                  <div>• PEPE took it further and proved culture + timing can go nuclear.</div>
                  <div>
                    • Now YEE is the next chapter — same internet DNA, same meme roots, same cult potential.
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-black/35 p-5 ring-1 ring-white/10">
                <div className="text-xs font-semibold tracking-widest text-white/55">
                  WHY PIEK
                </div>
                <div className="mt-3 space-y-2 text-sm leading-relaxed text-white/70">
                  <div>Every time this happens, it plays out the same way.</div>
                  <div className="font-semibold text-white/85">The main coin runs. Then the betas absolutely rip.</div>
                  <div>PEPE betas doing 50×–100×+. Random side characters outperform once attention shifts.</div>
                  <div className="text-white/85 font-semibold">
                    That’s why I’m focused on PIEK.
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-gradient-to-r from-emerald-300/10 via-cyan-300/10 to-violet-300/10 p-5 ring-1 ring-white/10">
                <div className="text-sm leading-relaxed text-white/78">
                  ''PIEK is my favorite beta to YEE. And the best part? PIEK is still around ~100K market cap.
                </div>
                <div className="mt-3 text-sm leading-relaxed text-white/78">
                  You don’t need a miracle for a 10×. You don’t need mass adoption for a 50×.
                  You just need <span className="text-white/90 font-semibold">attention rotation</span>.
                </div>
                <div className="mt-3 text-sm font-semibold text-white">
                  Once YEE gets louder, people will look for: <span className="text-emerald-200">“what’s the cheaper YEE play?”</span>
                  <br />
                  <span className="text-emerald-200">That’s where PIEK comes in.'' - CRYPTO BLANEY</span>
                </div>
              </div>
            </div>

            {/* Story image (your file) */}
            <div className="relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
              <Image
                src="/piek-story.png"
                alt="PIEK story"
                width={1600}
                height={1200}
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              <div className="absolute left-4 top-4 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-white/80 ring-1 ring-white/10 backdrop-blur">
                PIEK story
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GALLERY (your exact filenames) ===== */}
      <section id="gallery" className="relative z-10 mx-auto max-w-7xl px-6 pb-14">
        <div className="rounded-[36px] bg-white/6 p-8 ring-1 ring-white/12 backdrop-blur">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h3 className="text-4xl font-extrabold tracking-tight">
                <span className="bg-gradient-to-r from-emerald-200 via-cyan-200 to-violet-200 bg-clip-text text-transparent">
                  Gallery
                </span>
              </h3>
              <p className="mt-2 text-white/70">
        
              </p>
            </div>

            <a
              href={LINKS.x}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-white/70 hover:text-white"
            >
              Post art on X →
            </a>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-4 md:grid-cols-3">
            {GALLERY.map((img) => (
              <a
                key={img.src}
                href={img.src}
                target="_blank"
                rel="noreferrer"
                className="group relative aspect-square overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 transition hover:ring-white/25"
              >
                <div className="pointer-events-none absolute -inset-10 opacity-0 blur-2xl transition group-hover:opacity-100 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,.22),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,.18),transparent_55%),radial-gradient(circle_at_60%_85%,rgba(168,85,247,.18),transparent_55%)]" />
                <Image
                  src={img.src}
                  alt={img.label}
                  width={1200}
                  height={1200}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent p-4">
                  <div className="text-sm font-extrabold text-white/90">PIEK</div>
                  <div className="text-xs text-white/65">{img.label}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-5 text-xs text-white/55">
          
        </div>
      </section>

      {/* ===== TOKENOMICS ===== */}
      <section id="tokenomics" className="relative z-10 mx-auto max-w-7xl px-6 pb-14">
        <div className="rounded-[36px] bg-white/6 p-8 ring-1 ring-white/12 backdrop-blur">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h3 className="text-4xl font-extrabold tracking-tight">
                <span className="bg-gradient-to-r from-white via-white to-white/65 bg-clip-text text-transparent">
                  Tokenomics
                </span>
              </h3>
              <p className="mt-2 text-white/70">Simple, clean, readable — no fluff.</p>
            </div>

            <a
              href={LINKS.buy}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-white/10 px-5 py-2.5 text-sm font-semibold text-white/85 ring-1 ring-white/12 backdrop-blur transition hover:bg-white/14"
            >
              Buy on Dexscreener →
            </a>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            <StatCard title="Total Supply" value="1,000,000,000" sub="Fixed supply" />
            <StatCard title="Tax" value="0%" sub="No buy/sell tax" />
            <StatCard title="DEX" value="Uniswap" sub="Ethereum mainnet" />
          </div>

          <div className="mt-6 rounded-2xl bg-black/35 p-5 ring-1 ring-white/10">
            <div className="text-xs font-semibold tracking-widest text-white/55">CONTRACT</div>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="font-mono text-sm text-white/90">{CONTRACT}</div>
              <button
                onClick={() => copy(CONTRACT)}
                className="rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white/85 ring-1 ring-white/12 backdrop-blur transition hover:bg-white/14"
              >
                {copied ? "Copied ✓" : "Copy"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ROADMAP ===== */}
      <section id="roadmap" className="relative z-10 mx-auto max-w-7xl px-6 pb-14">
        <div className="rounded-[36px] bg-white/6 p-8 ring-1 ring-white/12 backdrop-blur">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h3 className="text-4xl font-extrabold tracking-tight">
                <span className="bg-gradient-to-r from-white via-white to-white/65 bg-clip-text text-transparent">
                  Roadmap
                </span>
              </h3>
              <p className="mt-2 text-white/70">Focus on moments. Build the legend.</p>
            </div>

            <a
              href="#chart"
              className="rounded-2xl bg-black/35 px-5 py-2.5 text-sm font-semibold text-white/80 ring-1 ring-white/10 backdrop-blur transition hover:bg-black/45 hover:text-white"
            >
              Jump to chart ↓
            </a>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            <StepCard
              step="Phase 1"
              title="Identity & canon"
              items={["Brand polish", "Website v1 → v2", "Community rails (X/TG)", "Gallery seeded"]}
            />
            <StepCard
              step="Phase 2"
              title="Attention rotation"
              items={["YEE momentum monitoring", "Meme waves + story arcs", "Creators + collabs", "More art drops"]}
            />
            <StepCard
              step="Phase 3"
              title="PIEK era"
              items={["Bigger moments", "More distribution", "Cultural cement", "Long-run community growth"]}
            />
          </div>
        </div>
      </section>

      {/* ===== DEXSCREENER EMBED ===== */}
      <section id="chart" className="relative z-10 mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-[36px] bg-white/6 p-8 ring-1 ring-white/12 backdrop-blur">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h3 className="text-4xl font-extrabold tracking-tight">
                <span className="bg-gradient-to-r from-emerald-200 via-cyan-200 to-violet-200 bg-clip-text text-transparent">
                  Live Chart
                </span>
              </h3>
              <p className="mt-2 text-white/70">Embedded Dexscreener. Real-time vibes.</p>
            </div>

            <a
              href={LINKS.chart}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-white/10 px-5 py-2.5 text-sm font-semibold text-white/85 ring-1 ring-white/12 backdrop-blur transition hover:bg-white/14"
            >
              Open Dexscreener →
            </a>
          </div>

          <div className="mt-7 overflow-hidden rounded-2xl bg-black/45 ring-1 ring-white/10">
            <iframe
              title="Dexscreener PIEK chart"
              src={dexscreenerEmbed}
              className="h-[720px] w-full"
              allow="clipboard-write; encrypted-media; fullscreen"
            />
          </div>

          <div className="mt-4 text-xs text-white/55">
            If the embed ever renders blank due to browser restrictions, open it directly via “Open Dexscreener”.
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer id="community" className="relative z-10 border-t border-white/10 bg-black/30">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <img
                src="/piek-logo.png"
                alt="PIEK"
                className="h-14 w-auto drop-shadow-[0_0_28px_rgba(255,255,255,0.18)]"
              />
              <div className="text-sm text-white/60">
                The Sage Companion of YEE <span className="text-white/35">•</span> Built for attention rotation
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm font-semibold text-white/70">
              <a className="hover:text-white" href={LINKS.x} target="_blank" rel="noreferrer">
                X
              </a>
              <a className="hover:text-white" href={LINKS.telegram} target="_blank" rel="noreferrer">
                Telegram
              </a>
              <a className="hover:text-white" href={LINKS.chart} target="_blank" rel="noreferrer">
                Chart
              </a>
              <a className="hover:text-white" href={LINKS.buy} target="_blank" rel="noreferrer">
                Buy
              </a>
            </div>
          </div>

          <div className="mt-10 text-xs text-white/50">
            Not financial advice. Meme token. DYOR.
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ===== UI bits ===== */

function Pill({ text }: { text: string }) {
  return (
    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80 ring-1 ring-white/10">
      {text}
    </span>
  );
}

function StatCard({ title, value, sub }: { title: string; value: string; sub: string }) {
  return (
    <div className="rounded-2xl bg-black/35 p-5 ring-1 ring-white/10">
      <div className="text-sm text-white/70">{title}</div>
      <div className="mt-2 text-3xl font-extrabold tracking-tight">
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
    <div className="rounded-2xl bg-black/35 p-5 ring-1 ring-white/10">
      <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80 ring-1 ring-white/10">
        {step}
      </div>
      <div className="mt-3 text-xl font-extrabold tracking-tight">
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
