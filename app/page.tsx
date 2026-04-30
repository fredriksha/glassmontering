'use client'

import { useEffect } from 'react'

function AdelieIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="4 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <clipPath id="adelie-clip">
        <rect width="200" height="200" fill="white" transform="translate(4)" />
      </clipPath>
      <g clipPath="url(#adelie-clip)">
        <path d="M168 0H40C20.1177 0 4 16.1177 4 36V164C4 183.882 20.1177 200 40 200H168C187.882 200 204 183.882 204 164V36C204 16.1177 187.882 0 168 0Z" fill="#223243" />
        <path d="M24 150H83.7073C89.2358 150 92 146.667 92 140V50" stroke="white" strokeWidth="10" strokeLinecap="round" />
        <path d="M184 150H124.293C118.764 150 116 146.667 116 140V50" stroke="white" strokeWidth="10" strokeLinecap="round" />
        <path d="M108 20H100V180H108V20Z" fill="#1FAE5C" />
      </g>
    </svg>
  )
}

export default function Home() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const loadEmbeds = () => {
      if (typeof (window as any).Tally !== 'undefined') {
        (window as any).Tally.loadEmbeds()
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

    const retry1 = setTimeout(() => {
      if (typeof (window as any).Tally !== 'undefined') {
        (window as any).Tally.loadEmbeds()
      } else {
        loadEmbeds()
      }
    }, 500)

    const retry2 = setTimeout(() => {
      if (typeof (window as any).Tally !== 'undefined') {
        (window as any).Tally.loadEmbeds()
      }
    }, 1500)

    const checkTally = setInterval(() => {
      if (typeof (window as any).Tally !== 'undefined') {
        (window as any).Tally.loadEmbeds()
        clearInterval(checkTally)
      }
    }, 100)

    return () => {
      clearTimeout(retry1)
      clearTimeout(retry2)
      clearInterval(checkTally)
    }
  }, [])

  return (
    <main className="min-h-screen bg-white text-[#223243]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/60">
        <nav className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-16">
            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="cursor-pointer group flex items-center gap-2.5"
            >
              <AdelieIcon className="w-8 h-8 rounded-md" />
              <div className="flex flex-col leading-none">
                <span className="text-sm font-bold tracking-wide group-hover:text-[#1fae5c] transition-colors">
                  Adelie
                </span>
                <span className="text-[9px] font-medium text-slate-400 tracking-[0.12em] mt-0.5">
                  Rekkverksmontering
                </span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <button
                onClick={() => scrollToSection('om-oss')}
                className="hidden sm:block text-sm text-slate-600 hover:text-[#223243] transition-colors"
              >
                Om oss
              </button>
              <button
                onClick={() => scrollToSection('kontakt')}
                className="bg-[#1fae5c] text-white text-sm px-5 py-2 rounded-lg font-medium hover:bg-[#189a4e] transition-colors"
              >
                Kontakt
              </button>
            </div>
          </div>
        </nav>
      </header>

      <div className="h-16"></div>

      {/* Hero */}
      <section className="px-5 sm:px-8 pt-20 sm:pt-28 md:pt-36 pb-20 sm:pb-28 md:pb-36">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08] mb-6">
              Adelie<br />
              Rekkverksmontering
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-lg">
              Profesjonell montering av rekkverk for private og bedrifter på Østlandet. Solid håndverk og ryddige leveranser.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollToSection('kontakt')}
                className="bg-[#1fae5c] text-white px-7 py-3 rounded-lg font-semibold text-sm hover:bg-[#189a4e] transition-colors"
              >
                Ta kontakt
              </button>
              <button
                onClick={() => scrollToSection('om-oss')}
                className="text-sm font-medium text-slate-500 hover:text-[#223243] transition-colors"
              >
                Les mer om oss &darr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-5 sm:px-8 pb-20 sm:pb-28">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-5">
          <div className="bg-slate-50 rounded-2xl p-7 border border-slate-100">
            <div className="w-11 h-11 bg-[#223243] rounded-xl flex items-center justify-center mb-5">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">Solid håndverk</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Lang praktisk erfaring med presisjon og fokus på funksjon og et pent sluttresultat.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-7 border border-slate-100">
            <div className="w-11 h-11 bg-[#223243] rounded-xl flex items-center justify-center mb-5">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">Trygge løsninger</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Varige løsninger gjennom erfaring, nøye arbeid og god dialog med kunden.
            </p>
          </div>

          <a
            href="https://www.t-railing.no"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-50 rounded-2xl p-7 border border-slate-100 group hover:border-[#1fae5c]/30 hover:bg-[#1fae5c]/[0.03] transition-colors"
          >
            <div className="w-11 h-11 bg-[#1fae5c] rounded-xl flex items-center justify-center mb-5">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">T-Railing ekspertise</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Særlig god kjennskap til T-Railing, men monterer også andre typer tilpasset kundens behov.
            </p>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-[#1fae5c] mt-3 group-hover:gap-2 transition-all">
              Les mer om T-Railing
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </span>
          </a>
        </div>
      </section>

      {/* Om oss */}
      <section id="om-oss" className="px-5 sm:px-8 py-20 sm:py-28 bg-slate-50 scroll-mt-16">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-12">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-[3px] bg-[#1fae5c] rounded-full"></div>
              <p className="text-sm font-medium text-[#1fae5c] tracking-wide uppercase">Om oss</p>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Erfaring og solid håndverk
            </h2>
          </div>

          <div className="max-w-2xl space-y-5 text-slate-600 leading-relaxed">
            <p className="text-[#223243] font-medium text-lg">
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
              For oss handler det om å levere trygge og varige løsninger, gjennom erfaring,
              nøye arbeid og god dialog med kunden.
            </p>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="px-5 sm:px-8 py-20 sm:py-28 scroll-mt-16">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-10">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-[3px] bg-[#1fae5c] rounded-full"></div>
              <p className="text-sm font-medium text-[#1fae5c] tracking-wide uppercase">Kontakt oss</p>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
              Ta kontakt
            </h2>
            <p className="text-slate-500">
              Har du spørsmål eller ønsker et uforpliktende tilbud? Fyll ut skjemaet under, så tar vi kontakt med deg.
            </p>
          </div>
          
          <div className="max-w-3xl">
            <div className="bg-white rounded-2xl p-5 sm:p-8 md:p-10 shadow-sm border border-slate-200/80">
              <iframe 
                data-tally-src="https://tally.so/embed/NpXb1B?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                loading="lazy" 
                width="100%" 
                height="697" 
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0} 
                title="Ta kontakt"
                className="w-full border-0"
                allow="clipboard-write"
                id="tally-embed"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1b2a38] text-slate-400 px-5 sm:px-8 py-14">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <AdelieIcon className="w-8 h-8 rounded-md" />
                <div className="flex flex-col leading-none">
                  <span className="text-white text-sm font-bold tracking-wide">ADELIE</span>
                  <span className="text-[9px] text-slate-500 tracking-[0.12em] mt-0.5">REKKVERKSMONTERING</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed">
                Profesjonell montering av rekkverk for privat- og bedriftskunder.
              </p>
            </div>

            <div>
              <h4 className="text-white text-sm font-semibold mb-4">Kontakt</h4>
              <div className="space-y-3 text-sm">
                <a href="mailto:post@rekkverksmontering.no" className="flex items-center gap-2 hover:text-[#1fae5c] transition-colors">
                  <svg className="w-4 h-4 text-[#1fae5c] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  post@rekkverksmontering.no
                </a>
                <a href="tel:+4748440431" className="flex items-center gap-2 hover:text-[#1fae5c] transition-colors">
                  <svg className="w-4 h-4 text-[#1fae5c] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 19 3 12.284 3 4V3z" />
                  </svg>
                  +47 484 40 431
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white text-sm font-semibold mb-4">Snarveier</h4>
              <div className="space-y-2 text-sm">
                <button onClick={() => scrollToSection('om-oss')} className="block hover:text-[#1fae5c] transition-colors text-left">
                  Om oss
                </button>
                <button onClick={() => scrollToSection('kontakt')} className="block hover:text-[#1fae5c] transition-colors text-left">
                  Kontakt
                </button>
                <a href="https://www.t-railing.no" target="_blank" rel="noopener noreferrer" className="block hover:text-[#1fae5c] transition-colors">
                  T-Railing
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700/50 pt-6 text-center text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Adelie Group AS. Alle rettigheter forbeholdt.
          </div>
        </div>
      </footer>
    </main>
  )
}
