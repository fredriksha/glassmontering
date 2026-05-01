'use client'

import { useEffect, useRef } from 'react'

/**
 * The brand mark — two railing posts meeting under a horizontal line,
 * with the green accent post in the middle. Sized via className.
 */
function BrandMark({ className = '', accent = '#1FAE5C', stroke = '#223243' }: { className?: string; accent?: string; stroke?: string }) {
  return (
    <svg viewBox="0 0 720 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden>
      <path
        d="M 20 140 L 338 140 Q 348 140 348 130 L 348 50"
        stroke={stroke}
        strokeWidth={3.5}
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 700 140 L 382 140 Q 372 140 372 130 L 372 50"
        stroke={stroke}
        strokeWidth={3.5}
        strokeLinecap="round"
        fill="none"
      />
      <rect x="357" y="20" width="6" height="170" fill={accent} />
    </svg>
  )
}

/** App-icon style block used in the header / footer */
function AppIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 208 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden>
      <path
        d="M168 0H40C20.1177 0 4 16.1177 4 36V164C4 183.882 20.1177 200 40 200H168C187.882 200 204 183.882 204 164V36C204 16.1177 187.882 0 168 0Z"
        fill="#223243"
      />
      <path d="M24 150H83.7073C89.2358 150 92 146.667 92 140V50" stroke="white" strokeWidth="10" strokeLinecap="round" />
      <path d="M184 150H124.293C118.764 150 116 146.667 116 140V50" stroke="white" strokeWidth="10" strokeLinecap="round" />
      <path d="M108 20H100V180H108V20Z" fill="#1FAE5C" />
    </svg>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="relative inline-block text-[13px] tracking-wide text-navy/70 hover:text-navy transition-colors px-3 py-1.5 group"
    >
      {children}
      <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-glass scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
    </a>
  )
}

function CornerCross({ className = '' }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute w-3 h-3 ${className}`}
    >
      <span className="absolute left-1/2 top-0 bottom-0 w-px bg-navy/30 -translate-x-1/2" />
      <span className="absolute top-1/2 left-0 right-0 h-px bg-navy/30 -translate-y-1/2" />
    </span>
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] ${
        light ? 'text-paper/60' : 'text-navy/55'
      }`}
    >
      <span className="inline-block w-5 h-px bg-glass" />
      {children}
    </span>
  )
}

export default function Home() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const heroRef = useRef<HTMLElement | null>(null)
  const rafRef = useRef<number | null>(null)

  const handleHeroMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = heroRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => {
      el.style.setProperty('--mx', `${x}px`)
      el.style.setProperty('--my', `${y}px`)
      el.querySelectorAll<HTMLElement>('.hero-grid, .hero-glow').forEach((layer) => {
        layer.style.setProperty('--mx', `${x}px`)
        layer.style.setProperty('--my', `${y}px`)
      })
    })
  }

  const handleHeroLeave = () => {
    const el = heroRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = rect.width / 2
    const y = rect.height * 0.3
    el.querySelectorAll<HTMLElement>('.hero-grid, .hero-glow').forEach((layer) => {
      layer.style.setProperty('--mx', `${x}px`)
      layer.style.setProperty('--my', `${y}px`)
    })
  }

  useEffect(() => {
    const loadEmbeds = () => {
      if (typeof (window as any).Tally !== 'undefined') {
        ;(window as any).Tally.loadEmbeds()
      } else {
        const iframes = document.querySelectorAll('iframe[data-tally-src]:not([src])')
        iframes.forEach((iframe: any) => {
          if (iframe.dataset.tallySrc) {
            iframe.src = iframe.dataset.tallySrc
          }
        })
      }
    }

    loadEmbeds()
    const retry = setTimeout(loadEmbeds, 800)
    const checkTally = setInterval(() => {
      if (typeof (window as any).Tally !== 'undefined') {
        ;(window as any).Tally.loadEmbeds()
        clearInterval(checkTally)
      }
    }, 200)

    return () => {
      clearTimeout(retry)
      clearInterval(checkTally)
    }
  }, [])

  return (
    <main className="min-h-screen bg-paper text-ink">
      {/* ─────────────────────────  HEADER  ───────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-paper/85 backdrop-blur-md px-5 sm:px-10">
        <div className="hairline absolute bottom-0 left-0 right-0" />
        <nav className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between h-[72px]">
            {/* Wordmark */}
            <a href="#top" className="group flex items-center gap-3" aria-label="Til toppen">
              <AppIcon className="w-8 h-8 rounded-[7px]" />
              <span className="flex flex-col leading-none">
                <span className="font-serif text-[20px] sm:text-[22px] text-navy tracking-[-0.01em] group-hover:text-glass transition-colors">
                  Adelie
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-[0.22em] uppercase text-navy/45 mt-1">
                  Rekkverksmontering
                </span>
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              <NavLink href="#tjenester">Tjenester</NavLink>
              <NavLink href="#arbeid">Arbeid</NavLink>
              <NavLink href="#om-oss">Om oss</NavLink>
              <a
                href="#kontakt"
                className="ml-3 inline-flex items-center gap-2 bg-navy text-paper text-[13px] tracking-wide px-4 py-2.5 hover:bg-ink transition-colors"
              >
                Kontakt
                <span aria-hidden className="inline-block w-1 h-1 rounded-full bg-glass" />
              </a>
            </div>

            {/* Mobile: just a kontakt CTA */}
            <a
              href="#kontakt"
              className="md:hidden inline-flex items-center gap-2 bg-navy text-paper text-[12px] tracking-wide px-3.5 py-2 hover:bg-ink transition-colors"
            >
              Kontakt
              <span aria-hidden className="inline-block w-1 h-1 rounded-full bg-glass" />
            </a>
          </div>
        </nav>
      </header>

      <div id="top" className="h-[72px]" />

      {/* ─────────────────────────  HERO  ───────────────────────── */}
      <section
        ref={heroRef}
        onMouseMove={handleHeroMove}
        onMouseLeave={handleHeroLeave}
        className="relative px-5 sm:px-10 pt-14 sm:pt-20 pb-20 sm:pb-28 overflow-hidden"
      >
        {/* Grid layer — visible, fades downward, brightens around the cursor */}
        <div className="hero-grid" />
        {/* Soft green glow that follows the cursor */}
        <div className="hero-glow" />

        <div className="relative max-w-6xl mx-auto">
          {/* Top meta-row */}
          <div className="flex items-baseline justify-between mb-12 sm:mb-16">
            <Eyebrow>Adelie Group AS</Eyebrow>
            <span className="hidden sm:inline text-[11px] font-mono tracking-[0.18em] text-navy/40 uppercase">
              Østlandet · Norge
            </span>
          </div>

          {/* Centered headline — clean, no right-side logo box */}
          <div className="max-w-4xl">
            <h1 className="font-serif text-navy tracking-[-0.025em] leading-[0.95]">
              <span className="block text-[48px] sm:text-7xl md:text-[104px]">
                Solide rekkverk,
              </span>
              <span className="block text-[48px] sm:text-7xl md:text-[104px] italic text-navy/90">
                fagmessig montert.
              </span>
            </h1>

            <div className="mt-9 sm:mt-12 flex items-start gap-5 max-w-2xl">
              <span className="block w-px bg-glass self-stretch min-h-[4rem] mt-1.5" />
              <p className="text-base sm:text-lg text-ink/75 leading-relaxed">
                Adelie er et lite, dedikert firma som monterer rekkverk for private og bedrifter
                på Østlandet — med erfaring, ryddige leveranser og særlig god kjennskap til T-Railing.
              </p>
            </div>

            <div className="mt-10 sm:mt-12 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href="#kontakt"
                className="group inline-flex items-center gap-3 bg-navy text-paper px-7 py-3.5 text-sm font-medium tracking-wide hover:bg-ink transition-colors"
              >
                Be om tilbud
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-glass group-hover:scale-125 transition-transform" />
              </a>
              <a
                href="tel:+4748440431"
                className="text-sm font-medium tracking-wide text-navy/80 hover:text-navy underline-offset-4 hover:underline decoration-glass decoration-2"
              >
                Ring 484 40 431
              </a>
            </div>
          </div>

          {/* Specimen-style strip beneath hero */}
          <div className="mt-20 sm:mt-28 grid grid-cols-2 sm:grid-cols-4 gap-px bg-navy/10 border border-navy/10">
            {[
              ['01', 'Glassrekkverk', 'Spesialitet'],
              ['02', 'T-Railing', 'Sertifisert'],
              ['03', 'Privat & bedrift', 'Begge segmenter'],
              ['04', 'Østlandet', 'Dekningsområde'],
            ].map(([num, label, sub]) => (
              <div key={num} className="bg-paper p-5 sm:p-6 group hover:bg-stone/60 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono tracking-[0.2em] text-glass">{num}</span>
                  <span className="block w-4 h-px bg-navy/15 group-hover:w-8 group-hover:bg-glass/60 transition-all" />
                </div>
                <div className="text-sm font-semibold text-navy">{label}</div>
                <div className="text-[11px] text-navy/50 tracking-wide mt-1">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────  TJENESTER  ───────────────────────── */}
      <section id="tjenester" className="px-6 sm:px-10 py-20 sm:py-28 bg-stone scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-y-10 md:gap-x-12 mb-14 sm:mb-16">
            <div className="md:col-span-4">
              <Eyebrow>Tjenester</Eyebrow>
              <h2 className="font-serif text-3xl sm:text-4xl text-navy mt-5 leading-[1.1] tracking-[-0.01em]">
                Det vi <span className="italic">monterer.</span>
              </h2>
            </div>
            <p className="md:col-span-7 md:col-start-6 text-ink/70 leading-relaxed text-base sm:text-lg">
              Vi tar både små og større oppdrag — fra et enkelt trapperekkverk på en privatbolig til
              komplette glassrekkverk på terrasser og næringsbygg. Hver jobb utføres med samme fokus
              på presisjon, funksjon og et pent sluttresultat.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-navy/10 border border-navy/10">
            {[
              {
                num: '01',
                title: 'Glassrekkverk',
                body:
                  'Vår spesialitet. Klare linjer, stødig montering og riktig innfesting tilpasset underlag og bruk.',
              },
              {
                num: '02',
                title: 'T-Railing',
                body:
                  'Særlig god kjennskap til T-Railing-systemer. Vi monterer etter produsentens spesifikasjoner.',
              },
              {
                num: '03',
                title: 'Andre rekkverk',
                body:
                  'Stål, aluminium og kombinasjonsløsninger — tilpasset kundens behov og prosjektets rammer.',
              },
            ].map((item) => (
              <article key={item.num} className="bg-paper p-7 sm:p-9 flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-[0.22em] text-glass">{item.num}</span>
                  <span className="inline-block w-8 h-px bg-navy/20" />
                </div>
                <h3 className="font-serif text-2xl text-navy leading-tight">{item.title}</h3>
                <p className="text-ink/70 text-[15px] leading-relaxed">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────  ARBEID / GALLERI  ───────────────────────── */}
      <section id="arbeid" className="px-6 sm:px-10 py-20 sm:py-28 scroll-mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12 sm:mb-16">
            <div>
              <Eyebrow>Utvalgt arbeid</Eyebrow>
              <h2 className="font-serif text-3xl sm:text-4xl text-navy mt-5 leading-[1.1] tracking-[-0.01em]">
                Fra <span className="italic">prosjekter.</span>
              </h2>
            </div>
            <span className="hidden sm:block text-[11px] font-mono tracking-[0.18em] text-navy/40 uppercase">
              2024 — 2026
            </span>
          </div>

          {/* Gallery — large featured + two smaller. Intentional even without photos. */}
          <div className="grid grid-cols-6 gap-3 sm:gap-4">
            <ProjectFrame
              span="col-span-6 md:col-span-4 aspect-[4/3] md:aspect-[5/4]"
              tone="navy"
              caption="Glassrekkverk · Terrasse"
            />
            <div className="col-span-6 md:col-span-2 grid grid-cols-2 md:grid-cols-1 gap-3 sm:gap-4">
              <ProjectFrame
                span="aspect-square md:aspect-[5/4]"
                tone="stone"
                caption="T-Railing · Trapp"
              />
              <ProjectFrame
                span="aspect-square md:aspect-[5/4]"
                tone="glass"
                caption="Detalj · Innfesting"
              />
            </div>
          </div>

          <p className="mt-8 text-[12px] text-navy/45 tracking-wide">
            Bilder fra utførte prosjekter — flere kommer.
          </p>
        </div>
      </section>

      {/* ─────────────────────────  OM OSS  ───────────────────────── */}
      <section id="om-oss" className="px-6 sm:px-10 py-20 sm:py-28 bg-navy text-paper scroll-mt-16 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 opacity-[0.06]">
          <BrandMark className="w-[600px] h-auto" stroke="#FBFBF9" accent="#1FAE5C" />
        </div>
        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-y-12 md:gap-x-12">
            <div className="md:col-span-5">
              <Eyebrow light>Om oss</Eyebrow>
              <h2 className="font-serif text-3xl sm:text-4xl mt-5 leading-[1.1] tracking-[-0.01em]">
                Erfaring og <span className="italic text-glass">solid håndverk.</span>
              </h2>
            </div>

            <div className="md:col-span-6 md:col-start-7 space-y-6 text-paper/80 leading-relaxed">
              <p className="text-paper text-lg">
                Adelie Rekkverksmontering er et mindre firma som tilbyr montering av rekkverk
                for private og bedrifter på Østlandet. Vi har lang praktisk erfaring,
                spesielt med glassrekkverk, og legger vekt på solid håndverk og ryddige leveranser.
              </p>
              <p>
                Vi har særlig god kjennskap til rekkverk fra T-Railing, men monterer også
                andre typer rekkverk tilpasset kundens behov og prosjektets rammer. Hver jobb
                utføres med fokus på presisjon, funksjon og et pent sluttresultat.
              </p>
              <p>
                For oss handler det om å levere trygge og varige løsninger — gjennom erfaring,
                nøye arbeid og god dialog med kunden.
              </p>

              <a
                href="https://www.t-railing.no"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm tracking-wide text-glass hover:text-glass-light underline-offset-4 hover:underline pt-3"
              >
                Mer om T-Railing
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────  KONTAKT  ───────────────────────── */}
      <section id="kontakt" className="px-5 sm:px-10 py-20 sm:py-28 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-y-10 md:gap-x-10 lg:gap-x-12">
            {/* Left: heading + contact info */}
            <div className="md:col-span-4">
              <Eyebrow>Kontakt</Eyebrow>
              <h2 className="font-serif text-3xl sm:text-4xl text-navy mt-5 leading-[1.05] tracking-[-0.015em]">
                Snakk med oss om <span className="italic">prosjektet ditt.</span>
              </h2>
              <p className="mt-6 text-ink/70 leading-relaxed max-w-md">
                Fyll ut skjemaet så tar vi kontakt med deg. Foretrekker du å ringe eller sende e-post,
                er det også fint.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href="tel:+4748440431"
                  className="group flex items-center gap-3 text-navy hover:text-glass transition-colors"
                >
                  <span className="w-9 h-9 border border-navy/15 flex items-center justify-center group-hover:border-glass/40 transition-colors">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 19 3 12.284 3 4V3z" />
                    </svg>
                  </span>
                  <div className="leading-tight">
                    <div className="text-[10px] tracking-[0.2em] uppercase text-navy/45">Telefon</div>
                    <div className="text-sm font-medium">+47 484 40 431</div>
                  </div>
                </a>

                <a
                  href="mailto:post@rekkverksmontering.no"
                  className="group flex items-center gap-3 text-navy hover:text-glass transition-colors"
                >
                  <span className="w-9 h-9 border border-navy/15 flex items-center justify-center group-hover:border-glass/40 transition-colors">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <div className="leading-tight">
                    <div className="text-[10px] tracking-[0.2em] uppercase text-navy/45">E-post</div>
                    <div className="text-sm font-medium">post@rekkverksmontering.no</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right: form (8/12 — wider than before so two-column fields fit) */}
            <div className="md:col-span-8">
              <div className="bg-stone border border-navy/10 p-5 sm:p-8 md:p-10">
                <iframe
                  data-tally-src="https://tally.so/embed/NpXb1B?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                  loading="lazy"
                  width="100%"
                  height="700"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="Ta kontakt"
                  className="w-full border-0 block"
                  allow="clipboard-write"
                  id="tally-embed"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────  FOOTER  ───────────────────────── */}
      <footer className="relative bg-ink text-paper/70 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.05]" />

        <div className="relative px-5 sm:px-10 pt-14 sm:pt-16 pb-8">
          <div className="max-w-6xl mx-auto">
            {/* Info grid — compact 3-up */}
            <div className="grid sm:grid-cols-12 gap-y-8 sm:gap-x-10 mb-10">
              <div className="sm:col-span-5">
                <div className="flex items-center gap-3 mb-4">
                  <AppIcon className="w-7 h-7 rounded-[6px]" />
                  <span className="font-serif text-[18px] text-paper">Adelie</span>
                </div>
                <p className="text-sm leading-relaxed max-w-xs text-paper/60">
                  Profesjonell montering av rekkverk for privat- og bedriftskunder på Østlandet.
                </p>
              </div>

              <div className="sm:col-span-4">
                <h4 className="text-paper text-[10px] font-semibold tracking-[0.22em] uppercase mb-4">
                  Kontakt
                </h4>
                <div className="space-y-2.5 text-sm">
                  <a
                    href="mailto:post@rekkverksmontering.no"
                    className="block hover:text-glass transition-colors"
                  >
                    post@rekkverksmontering.no
                  </a>
                  <a
                    href="tel:+4748440431"
                    className="block hover:text-glass transition-colors"
                  >
                    +47 484 40 431
                  </a>
                </div>
              </div>

              <div className="sm:col-span-3">
                <h4 className="text-paper text-[10px] font-semibold tracking-[0.22em] uppercase mb-4">
                  Snarveier
                </h4>
                <div className="space-y-2.5 text-sm">
                  <a href="#tjenester" className="block hover:text-glass transition-colors">
                    Tjenester
                  </a>
                  <a href="#arbeid" className="block hover:text-glass transition-colors">
                    Arbeid
                  </a>
                  <a href="#om-oss" className="block hover:text-glass transition-colors">
                    Om oss
                  </a>
                  <a
                    href="https://www.t-railing.no"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-glass transition-colors"
                  >
                    T-Railing ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom rule */}
            <div className="border-t border-paper/10 pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] tracking-wide text-paper/40">
              <span className="font-mono uppercase tracking-[0.18em]">
                © {new Date().getFullYear()} Adelie Group AS
              </span>
              <span className="font-mono uppercase tracking-[0.18em]">Østlandet · Norge</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

/** Decorative project frame used in the gallery — looks intentional with or without an image. */
function ProjectFrame({
  span,
  tone,
  caption,
}: {
  span: string
  tone: 'navy' | 'stone' | 'glass'
  caption: string
}) {
  const toneClass =
    tone === 'navy'
      ? 'bg-navy text-paper/60'
      : tone === 'glass'
      ? 'bg-glass/15 text-navy/60'
      : 'bg-stone text-navy/55'

  const markStroke = tone === 'navy' ? '#FBFBF9' : '#223243'
  const markAccent = tone === 'navy' ? '#1FAE5C' : tone === 'glass' ? '#1FAE5C' : '#1FAE5C'

  return (
    <figure
      className={`group relative overflow-hidden ${span} ${toneClass} bg-grid-frame transition-all`}
    >
      <div className="absolute inset-0 flex items-center justify-center opacity-25 group-hover:opacity-40 transition-opacity">
        <BrandMark className="w-1/2 max-w-[180px] h-auto" stroke={markStroke} accent={markAccent} />
      </div>
      <figcaption className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[10px] font-mono tracking-[0.18em] uppercase">
        <span>{caption}</span>
        <span className="opacity-60">Bilde kommer</span>
      </figcaption>
    </figure>
  )
}
