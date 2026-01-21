import Image from "next/image";
import Button from "@/components/Button";
import CopyField from "@/components/CopyField";

const LINKS = {
  buy: "https://app.uniswap.org/",
  chart: "#chart",
  x: "#",
  telegram: "#",
  discord: "#",
};

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(120,255,220,.10),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(130,160,255,.12),transparent_50%),radial-gradient(circle_at_50%_85%,rgba(255,255,255,.06),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:url('/stars.jpg')] bg-cover bg-center" />

      {/* Top Nav */}
      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-semibold tracking-tight">piek</span>
          <span className="hidden rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 sm:inline">
            Ethereum • YEE Beta
          </span>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          <a href="#about" className="hover:text-white">
            About
          </a>
          <a href="#tokenomics" className="hover:text-white">
            Tokenomics
          </a>
          <a href="#roadmap" className="hover:text-white">
            Roadmap
          </a>
          <a href="#community" className="hover:text-white">
            Community
          </a>
        </nav>

        <Button href={LINKS.buy} className="px-4 py-2" variant="secondary">
          Buy PIEK →
        </Button>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 pb-14 pt-6 md:grid-cols-2">
        <div>
          <h1 className="text-5xl font-semibold leading-[1.02] tracking-tight md:text-6xl">
            piek
          </h1>
          <p className="mt-3 text-lg text-white/80">The Sage Companion of YEE</p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Button href={LINKS.buy} variant="primary">
              Buy PIEK
            </Button>
            <Button href={LINKS.chart} variant="secondary">
              Chart
            </Button>
          </div>

          {/* Quick Facts */}
          <div className="mt-8 grid gap-3 rounded-2xl bg-white/8 p-4 shadow-glow ring-1 ring-white/15 backdrop-blur">
            <CopyField label="Network" value="Ethereum" />
            <CopyField label="DEX" value="Uniswap" />
            <CopyField label="Contract" value="0xYOUR_CONTRACT_ADDRESS" mono />
          </div>

          <div className="mt-5 flex items-center gap-4 text-white/70">
            <a href={LINKS.x} className="hover:text-white">
              X
            </a>
            <a href={LINKS.telegram} className="hover:text-white">
              Telegram
            </a>
            <a href={LINKS.discord} className="hover:text-white">
              Discord
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[32px] bg-white/5 blur-2xl" />
          <div className="relative overflow-hidden rounded-[28px] bg-white/5 ring-1 ring-white/10">
            <Image
              src="/piek-hero.jpg"
              alt="PIEK"
              width={1400}
              height={1000}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </section>

      {/* Story */}
      <section id="about" className="relative z-10 mx-auto max-w-6xl px-6 pb-14">
        <div className="grid grid-cols-1 gap-10 rounded-[28px] bg-white/6 p-8 shadow-glow ring-1 ring-white/12 backdrop-blur md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              PIEK — The Sage Companion of YEE
            </h2>

            <p className="mt-4 text-white/80">PIEK is not new. He’s been here before.</p>

            <p className="mt-4 text-white/75 leading-relaxed">
              PIEK is the best friend of YEE — a beloved side character from the original Yee meme era.
              He’s lovable, gentle, and impossible not to smile at. Known for his endearing habit of rhyming,
              and his “Pa” noise — the loveliest sound.
            </p>

            <p className="mt-4 text-white/75 leading-relaxed">
              A very accurate Ankylosaurus: soft ears, giant mouth, and a lion tail.
            </p>

            <div className="mt-6 rounded-2xl bg-black/30 p-4 ring-1 ring-white/10">
              <div className="text-sm text-white/70">The memecoin trilogy</div>
              <div className="mt-2 text-2xl font-semibold tracking-tight">
                $DOGE → $PEPE → $YEE
              </div>
              <div className="mt-2 text-sm text-white/70">
                DOGE started it. PEPE went nuclear. YEE is the next chapter — and betas rip after the main coin runs.
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
            <Image
              src="/piek-story.jpg"
              alt="PIEK & friend"
              width={1600}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Tokenomics placeholder */}
      <section id="tokenomics" className="relative z-10 mx-auto max-w-6xl px-6 pb-14">
        <div className="rounded-[28px] bg-white/6 p-8 shadow-glow ring-1 ring-white/12 backdrop-blur">
          <h3 className="text-3xl font-semibold tracking-tight">Tokenomics</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Card title="Total Supply" value="1,000,000,000" />
            <Card title="Tax" value="0%" />
            <Card title="DEX" value="Uniswap" />
          </div>
          <p className="mt-5 text-white/70">
            Replace the numbers above in <span className="font-mono text-white/90">app/page.tsx</span>.
          </p>
        </div>
      </section>

      {/* Attention Rotation */}
      <section id="chart" className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
        <div className="grid grid-cols-1 gap-10 rounded-[28px] bg-white/6 p-8 shadow-glow ring-1 ring-white/12 backdrop-blur md:grid-cols-2">
          <div>
            <h3 className="text-3xl font-semibold tracking-tight">
              The main coin runs. <br /> Then the betas absolutely rip.
            </h3>

            <ul className="mt-5 space-y-3 text-white/75">
              <li>• PEPE betas doing 50× – 100×+</li>
              <li>• Side characters outperform once attention shifts</li>
              <li>• Culture expands outward, not upward</li>
            </ul>

            <p className="mt-6 text-white/80 leading-relaxed">
              PIEK is my favorite beta to YEE. Right now, you don’t need a miracle for a 10× — just attention rotation.
            </p>

            <p className="mt-5 font-semibold text-white">
              Once YEE gets louder, people will ask: <br />
              “what’s the cheaper YEE play?” <br />
              <span className="text-emerald-200">That’s where PIEK comes in.</span>
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
            <Image
              src="/piek-rotation.jpg"
              alt="PIEK on the moon"
              width={1600}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="community" className="relative z-10 border-t border-white/10 bg-black/30">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-white/60">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>© {new Date().getFullYear()} PIEK</div>
            <div className="flex gap-4">
              <a className="hover:text-white" href={LINKS.x}>
                X
              </a>
              <a className="hover:text-white" href={LINKS.telegram}>
                Telegram
              </a>
              <a className="hover:text-white" href={LINKS.discord}>
                Discord
              </a>
            </div>
          </div>
          <p className="mt-4 text-white/50">Not financial advice. Meme token. DYOR.</p>
        </div>
      </footer>
    </main>
  );
}

function Card({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl bg-black/30 p-4 ring-1 ring-white/10">
      <div className="text-sm text-white/70">{title}</div>
      <div className="mt-2 text-2xl font-semibold tracking-tight">{value}</div>
    </div>
  );
}
