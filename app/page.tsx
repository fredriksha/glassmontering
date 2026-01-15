'use client'

import { useEffect } from 'react'

export default function Home() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    // Load Tally embeds - script is loaded via layout.tsx
    const loadEmbeds = () => {
      if (typeof (window as any).Tally !== 'undefined') {
        (window as any).Tally.loadEmbeds()
      } else {
        // Fallback: manually set src for iframes if script hasn't loaded yet
        const iframes = document.querySelectorAll('iframe[data-tally-src]:not([src])')
        iframes.forEach((iframe: any) => {
          if (iframe.dataset.tallySrc) {
            iframe.src = iframe.dataset.tallySrc
          }
        })
      }
    }

    // Try to load immediately if Tally is already available
    loadEmbeds()

    // Retry after delays in case script is still loading
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

    // Listen for when Tally script loads
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
    <main className="min-h-screen bg-gradient-to-b from-stone-50 to-stone-100">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-stone-50/95 backdrop-blur-lg border-b border-emerald-100/50 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="cursor-pointer group"
            >
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-700 to-emerald-600 bg-clip-text text-transparent group-hover:from-emerald-800 group-hover:to-emerald-700 transition-all">
                Rekkverksmontering
              </h1>
            </div>
            <div className="flex items-center space-x-4 sm:space-x-6 md:space-x-8">
              <button
                onClick={() => scrollToSection('om-oss')}
                className="hidden sm:block text-stone-700 hover:text-emerald-700 font-medium transition-colors text-xs md:text-sm relative group"
              >
                Om oss
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => scrollToSection('kontakt')}
                className="bg-emerald-600 text-white px-4 py-2 md:px-6 md:py-2.5 rounded-full font-semibold hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/30 transition-all duration-300 transform hover:-translate-y-0.5 text-xs md:text-sm whitespace-nowrap"
              >
                Kontakt
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-16 md:h-20"></div>

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 px-4 overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-10 right-4 sm:top-20 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-emerald-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-4 sm:bottom-20 sm:left-10 w-64 h-64 sm:w-96 sm:h-96 bg-amber-200/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-6 sm:mb-8 inline-block">
            <div className="bg-gradient-to-r from-emerald-100 to-amber-100 px-4 py-1.5 sm:px-6 sm:py-2 rounded-full mb-4 sm:mb-6 inline-block">
              <span className="text-emerald-800 font-semibold text-xs sm:text-sm">Profesjonell montering</span>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-6 sm:mb-8 tracking-tight px-2">
            <span className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-amber-700 bg-clip-text text-transparent">
              Rekkverksmontering
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-stone-700 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-light px-4">
            Profesjonell montering av rekkverk for private og bedrifter på Østlandet.
            <span className="block mt-2 sm:mt-3 text-emerald-700 font-medium">
              Solid håndverk og ryddige leveranser.
            </span>
          </p>
          <button
            onClick={() => scrollToSection('kontakt')}
            className="bg-emerald-600 text-white px-6 py-3 sm:px-8 sm:py-3.5 md:px-10 md:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-emerald-700 hover:shadow-2xl hover:shadow-emerald-600/40 transition-all duration-300 transform hover:-translate-y-1"
          >
            Ta kontakt
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20">
            {/* Feature Card 1 */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-emerald-50">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3 sm:mb-4">Solid håndverk</h3>
              <p className="text-stone-600 leading-relaxed text-sm sm:text-base">
                Lang praktisk erfaring med presisjon og fokus på funksjon og et pent sluttresultat.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-emerald-50">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3 sm:mb-4">Trygge løsninger</h3>
              <p className="text-stone-600 leading-relaxed text-sm sm:text-base">
                Varige løsninger gjennom erfaring, nøye arbeid og god dialog med kunden.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-emerald-50 sm:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-400 to-amber-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3 sm:mb-4">T-Railing ekspertise</h3>
              <p className="text-stone-600 leading-relaxed text-sm sm:text-base">
                Særlig god kjennskap til T-Railing, men monterer også andre typer tilpasset kundens behov.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section id="om-oss" className="py-12 sm:py-16 md:py-24 px-4 scroll-mt-16 sm:scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-50 via-white to-amber-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl border border-emerald-100">
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-block bg-emerald-600 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6">
                <span className="text-white font-semibold text-xs sm:text-sm">Om oss</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 mb-4 px-2">
                Erfaring og solid håndverk
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-start">
              <div className="space-y-4 sm:space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
                <p className="text-stone-800 font-medium">
                  Rekkverksmontering er et mindre firma som tilbyr montering av rekkverk 
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
              <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-amber-100">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-4 sm:space-x-5 group hover:bg-emerald-50/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 -m-3 sm:-m-4 transition-all duration-200">
                    <div className="relative">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-200">
                        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-emerald-400 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="flex-1 pt-0.5 sm:pt-1">
                      <h4 className="font-bold text-stone-900 mb-1.5 sm:mb-2 text-base sm:text-lg">Østlandet</h4>
                      <p className="text-stone-600 leading-relaxed text-sm sm:text-base">Vi dekker private og bedrifter på Østlandet</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 sm:space-x-5 group hover:bg-amber-50/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 -m-3 sm:-m-4 transition-all duration-200">
                    <div className="relative">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-200">
                        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-amber-400 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="flex-1 pt-0.5 sm:pt-1">
                      <h4 className="font-bold text-stone-900 mb-1.5 sm:mb-2 text-base sm:text-lg">T-Railing spesialist</h4>
                      <p className="text-stone-600 leading-relaxed text-sm sm:text-base">Særlig god kjennskap til T-Railing rekkverk</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 sm:space-x-5 group hover:bg-emerald-50/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 -m-3 sm:-m-4 transition-all duration-200">
                    <div className="relative">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-200">
                        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-emerald-400 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="flex-1 pt-0.5 sm:pt-1">
                      <h4 className="font-bold text-stone-900 mb-1.5 sm:mb-2 text-base sm:text-lg">God dialog</h4>
                      <p className="text-stone-600 leading-relaxed text-sm sm:text-base">Nøye arbeid og god dialog med kunden</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="kontakt" className="py-12 sm:py-16 md:py-24 px-4 scroll-mt-16 sm:scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-block bg-emerald-600 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6">
              <span className="text-white font-semibold text-xs sm:text-sm">Kontakt oss</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 mb-3 sm:mb-4 px-2">
              Ta kontakt
            </h2>
            <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Har du spørsmål eller ønsker et uforpliktende tilbud? Fyll ut skjemaet under, så tar vi kontakt med deg.
            </p>
          </div>
          
          {/* Tally Form in rounded container */}
          <div className="bg-gradient-to-br from-white to-emerald-50/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl border border-emerald-100 overflow-hidden">
            <div className="w-full rounded-xl sm:rounded-2xl overflow-hidden bg-white">
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
      <footer className="bg-gradient-to-br from-stone-800 via-stone-900 to-emerald-900 text-stone-300 py-12 sm:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
            <div className="sm:col-span-2 md:col-span-1">
              <h3 className="text-white font-bold text-xl sm:text-2xl mb-4 sm:mb-6 bg-gradient-to-r from-emerald-400 to-amber-400 bg-clip-text text-transparent">
                Rekkverksmontering
              </h3>
              <p className="text-stone-400 leading-relaxed text-sm sm:text-base">
                Profesjonell montering av glassrekkverk for privat- og bedriftskunder.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg sm:text-xl mb-4 sm:mb-6">Kontakt</h3>
              <div className="space-y-3 sm:space-y-4">
                <a href="mailto:post@rekkverksmontering.no" className="flex items-center space-x-2 sm:space-x-3 text-stone-300 hover:text-emerald-400 transition-colors group text-sm sm:text-base">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-emerald-600/20 rounded-full flex items-center justify-center group-hover:bg-emerald-600/30 transition-colors flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="break-all">post@rekkverksmontering.no</span>
                </a>
                <a href="tel:+4748440431" className="flex items-center space-x-2 sm:space-x-3 text-stone-300 hover:text-emerald-400 transition-colors group text-sm sm:text-base">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-emerald-600/20 rounded-full flex items-center justify-center group-hover:bg-emerald-600/30 transition-colors flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 19 3 12.284 3 4V3z" />
                    </svg>
                  </div>
                  <span>+47 484 40 431</span>
                </a>
              </div>
            </div>
            <div className="sm:col-span-2 md:col-span-1">
              <h3 className="text-white font-bold text-lg sm:text-xl mb-4 sm:mb-6">Rask navigering</h3>
              <div className="space-y-2 sm:space-y-3">
                <button
                  onClick={() => scrollToSection('om-oss')}
                  className="block text-stone-400 hover:text-emerald-400 transition-colors text-left"
                >
                  Om oss
                </button>
                <button
                  onClick={() => scrollToSection('kontakt')}
                  className="block text-stone-400 hover:text-emerald-400 transition-colors text-left"
                >
                  Kontakt
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-stone-700 pt-6 sm:pt-8 text-center">
            <p className="text-stone-500 text-xs sm:text-sm px-2">
              &copy; {new Date().getFullYear()} Rekkverksmontering. Alle rettigheter forbeholdt.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}

