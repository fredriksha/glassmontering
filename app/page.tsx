'use client'

import { useState } from 'react'

export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  const scrollToContact = () => {
    document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-white py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
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
            onClick={scrollToContact}
            className="bg-blue-600 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            Kontakt oss
          </button>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-20 md:py-24 px-4 bg-white">
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
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Våre referanser
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Reference 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Plassholderbilde - Terrasseprosjekt</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Moderne terrasse i Oslo
                </h3>
                <p className="text-gray-600">
                  Glassrekkverk montert på moderne terrasse med utsikt over byen. 
                  Prosjektet inkluderte 25 meter glass med stålstøtter i rustfritt stål.
                </p>
              </div>
            </div>

            {/* Reference 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Plassholderbilde - Balkongprosjekt</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Balkong i Bergen
                </h3>
                <p className="text-gray-600">
                  Trygt og elegant glassrekkverk for leilighet i høyhus. Montert 
                  med fokus på sikkerhet og minimalistisk design som passer perfekt 
                  til moderne arkitektur.
                </p>
              </div>
            </div>

            {/* Reference 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Plassholderbilde - Trappeprosjekt</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Trapp i kontorbygg
                </h3>
                <p className="text-gray-600">
                  Glassrekkverk for elegant trapp i moderne kontorbygg. Prosjektet 
                  krevde nøyaktig tilpasning og profesjonell montering for å sikre 
                  optimal sikkerhet og estetikk.
                </p>
              </div>
            </div>

            {/* Reference 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Plassholderbilde - Privatbolig</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Privat villa i Trondheim
                </h3>
                <p className="text-gray-600">
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
      <section id="kontakt" className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Kontakt oss
          </h2>
          {formSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
              <p className="text-green-800 text-lg font-semibold mb-2">
                Melding sendt!
              </p>
              <p className="text-green-700">
                Takk for din henvendelse. Vi kommer tilbake til deg så snart som mulig.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="navn" className="block text-sm font-medium text-gray-700 mb-2">
                  Navn
                </label>
                <input
                  type="text"
                  id="navn"
                  name="navn"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="epost" className="block text-sm font-medium text-gray-700 mb-2">
                  E-post
                </label>
                <input
                  type="email"
                  id="epost"
                  name="epost"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="telefon" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="telefon"
                  name="telefon"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="melding" className="block text-sm font-medium text-gray-700 mb-2">
                  Melding
                </label>
                <textarea
                  id="melding"
                  name="melding"
                  rows={5}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Send melding
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Kontakt</h3>
              <p className="mb-2">E-post: post@olasglassmontering.no</p>
              <p className="mb-2">Telefon: +47 123 45 678</p>
              <p>Adresse: Eksempelgate 123, 0123 Oslo</p>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Åpningstider</h3>
              <p className="mb-2">Mandag - Fredag: 08:00 - 16:00</p>
              <p>Lørdag: 10:00 - 14:00</p>
              <p className="mt-2">Søndag: Stengt</p>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Organisasjon</h3>
              <p>Org.nr: 123 456 789</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Olas Glassmontering. Alle rettigheter forbeholdt.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

