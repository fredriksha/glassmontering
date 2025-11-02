'use client'

import { useState } from 'react'

export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="cursor-pointer"
            >
              <h1 className="text-2xl font-bold text-gray-900">
                Olas Glassmontering
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('om-oss')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                Om oss
              </button>
              <button
                onClick={() => scrollToSection('referanser')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                Referanser
              </button>
              <button
                onClick={() => scrollToSection('kontakt')}
                className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Kontakt
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-6 pt-2 space-y-4 animate-in slide-in-from-top">
              <button
                onClick={() => scrollToSection('om-oss')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-medium transition-colors"
              >
                Om oss
              </button>
              <button
                onClick={() => scrollToSection('referanser')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-medium transition-colors"
              >
                Referanser
              </button>
              <button
                onClick={() => scrollToSection('kontakt')}
                className="block w-full text-left px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Kontakt
              </button>
            </div>
          )}
        </nav>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-20"></div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-white py-24 md:py-32 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-10">
            <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Olas Glassmontering
            </h1>
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-8 rounded-full"></div>
          </div>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Profesjonell montering av glassrekkverk for privat- og bedriftskunder.
            <span className="block mt-2 text-gray-700 font-normal">
              Kvalitet og trygghet i hver montering.
            </span>
          </p>
          <button
            onClick={() => scrollToSection('kontakt')}
            className="bg-blue-600 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            Kontakt oss
          </button>
        </div>
      </section>

      {/* Information Section */}
      <section id="om-oss" className="py-20 md:py-24 px-4 bg-white scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Om oss
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Høy kvalitet</h3>
              <p className="text-gray-600 text-sm">
                Vi bruker kun beste materialer fra pålitelige leverandører
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Trygg montering</h3>
              <p className="text-gray-600 text-sm">
                Sertifiserte montører som følger strengeste sikkerhetsstandarder
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Estetisk design</h3>
              <p className="text-gray-600 text-sm">
                Funksjonelle løsninger med moderne og elegant design
              </p>
            </div>
          </div>
          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
            <p className="text-gray-800">
              Olas Glassmontering er et erfarent firma som spesialiserer seg på 
              montering av glassrekkverk av høyeste kvalitet. Vi har mange års 
              erfaring med montering av glassrekkverk for både private hjem og 
              bedrifter.
            </p>
            <p className="text-gray-700">
              Vi setter kvalitet og trygghet i første rekke. Alle våre montører 
              er sertifiserte og følger strengest sikkerhetsstandarder. Vi bruker 
              kun kvalitetsmaterialer fra pålitelige leverandører, og hver montering 
              gjennomføres med nøyaktighet og profesjonalitet.
            </p>
            <p className="text-gray-700">
              Uansett om du trenger glassrekkverk til terrasse, balkong, trapp eller 
              annet område, leverer vi en løsning som er både funksjonell og estetisk 
              tiltalende. Vi tilbyr personlig veiledning gjennom hele prosessen og 
              sikrer at resultatet overgår dine forventninger.
            </p>
          </div>
        </div>
      </section>

      {/* References Section */}
      <section id="referanser" className="py-20 md:py-24 px-4 bg-gradient-to-b from-slate-50 to-white scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Våre referanser
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {/* Reference 1 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100">
              <div className="h-72 bg-gradient-to-br from-blue-100 via-blue-50 to-slate-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="text-gray-400 text-sm font-medium">Plassholderbilde - Terrasseprosjekt</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Moderne terrasse i Oslo
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Glassrekkverk montert på moderne terrasse med utsikt over byen. 
                  Prosjektet inkluderte 25 meter glass med stålstøtter i rustfritt stål.
                </p>
              </div>
            </div>

            {/* Reference 2 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100">
              <div className="h-72 bg-gradient-to-br from-slate-100 via-gray-50 to-blue-50 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="text-gray-400 text-sm font-medium">Plassholderbilde - Balkongprosjekt</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Balkong i Bergen
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Trygt og elegant glassrekkverk for leilighet i høyhus. Montert 
                  med fokus på sikkerhet og minimalistisk design som passer perfekt 
                  til moderne arkitektur.
                </p>
              </div>
            </div>

            {/* Reference 3 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100">
              <div className="h-72 bg-gradient-to-br from-blue-100 via-slate-50 to-blue-50 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="text-gray-400 text-sm font-medium">Plassholderbilde - Trappeprosjekt</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Trapp i kontorbygg
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Glassrekkverk for elegant trapp i moderne kontorbygg. Prosjektet 
                  krevde nøyaktig tilpasning og profesjonell montering for å sikre 
                  optimal sikkerhet og estetikk.
                </p>
              </div>
            </div>

            {/* Reference 4 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100">
              <div className="h-72 bg-gradient-to-br from-slate-100 via-blue-50 to-gray-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="text-gray-400 text-sm font-medium">Plassholderbilde - Privatbolig</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Privat villa i Trondheim
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Komplett montering av glassrekkverk rundt hele hovedetasjen i 
                  moderne villa. Kombinerer funksjonalitet med estetisk design som 
                  komplementerer husets arkitektur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="kontakt" className="py-20 md:py-24 px-4 bg-white scroll-mt-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Kontakt oss
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-6 text-lg max-w-xl mx-auto">
              Har du spørsmål eller ønsker et uforpliktende tilbud? Ta kontakt med oss!
            </p>
          </div>
          {formSubmitted ? (
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-12 text-center shadow-lg">
              <div className="text-5xl mb-4">✓</div>
              <p className="text-green-800 text-2xl font-bold mb-3">
                Melding sendt!
              </p>
              <p className="text-green-700 text-lg">
                Takk for din henvendelse. Vi kommer tilbake til deg så snart som mulig.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-slate-50 rounded-2xl p-8 md:p-12 shadow-lg border border-slate-100 space-y-6">
              <div>
                <label htmlFor="navn" className="block text-sm font-semibold text-gray-700 mb-3">
                  Navn
                </label>
                <input
                  type="text"
                  id="navn"
                  name="navn"
                  required
                  className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white text-gray-900 placeholder-gray-400"
                  placeholder="Ditt navn"
                />
              </div>
              <div>
                <label htmlFor="epost" className="block text-sm font-semibold text-gray-700 mb-3">
                  E-post
                </label>
                <input
                  type="email"
                  id="epost"
                  name="epost"
                  required
                  className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white text-gray-900 placeholder-gray-400"
                  placeholder="din@epost.no"
                />
              </div>
              <div>
                <label htmlFor="telefon" className="block text-sm font-semibold text-gray-700 mb-3">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="telefon"
                  name="telefon"
                  required
                  className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white text-gray-900 placeholder-gray-400"
                  placeholder="+47 123 45 678"
                />
              </div>
              <div>
                <label htmlFor="melding" className="block text-sm font-semibold text-gray-700 mb-3">
                  Melding
                </label>
                <textarea
                  id="melding"
                  name="melding"
                  rows={6}
                  required
                  className="w-full px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white text-gray-900 placeholder-gray-400 resize-none"
                  placeholder="Skriv din melding her..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Send melding
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-gray-300 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-white font-bold text-xl mb-6">Kontakt</h3>
              <div className="space-y-3">
                <p className="flex items-start">
                  <span className="text-blue-400 mr-3">📧</span>
                  <span>post@olasglassmontering.no</span>
                </p>
                <p className="flex items-start">
                  <span className="text-blue-400 mr-3">📞</span>
                  <span>+47 123 45 678</span>
                </p>
                <p className="flex items-start">
                  <span className="text-blue-400 mr-3">📍</span>
                  <span>Eksempelgate 123, 0123 Oslo</span>
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold text-xl mb-6">Åpningstider</h3>
              <div className="space-y-2">
                <p className="flex justify-between">
                  <span className="text-gray-400">Mandag - Fredag:</span>
                  <span className="text-white">08:00 - 16:00</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-gray-400">Lørdag:</span>
                  <span className="text-white">10:00 - 14:00</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-gray-400">Søndag:</span>
                  <span className="text-white">Stengt</span>
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold text-xl mb-6">Organisasjon</h3>
              <p className="text-white font-medium">Org.nr: 123 456 789</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Olas Glassmontering. Alle rettigheter forbeholdt.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}

