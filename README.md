# Ulas Glassmontering

En enkel og profesjonell nettside for Ulas Glassmontering bygget med Next.js og Tailwind CSS.

## Funksjoner

- Hero-seksjon med firmalogo og slagord
- Navigasjonsheader med anchors til alle seksjoner
- Informasjonsseksjon om firmaet
- Referanseseksjon med eksempler på tidligere prosjekter
- Kontaktskjema med e-postfunksjonalitet
- Footer med kontaktinfo og organisasjonsnummer

## Komme i gang

1. Installer avhengigheter:
```bash
npm install
```

2. Sett opp e-postfunksjonalitet:
   - Opprett en gratis konto på [Resend](https://resend.com)
   - Hent din API-nøkkel fra Resend dashboard
   - Opprett en `.env.local` fil i prosjektroten med:
   ```
   RESEND_API_KEY=din_api_nøkkel_her
   ```

3. Kjør utviklingsserveren:
```bash
npm run dev
```

4. Åpne [http://localhost:3000](http://localhost:3000) i nettleseren.

## E-postoppsett

Kontaktskjemaet sender e-post til `fredrik.sha@gmail.com` når det fylles ut.

**Viktig:** 
- Du må ha en Resend API-nøkkel i `.env.local` for at e-postfunksjonaliteten skal fungere
- Standard `from`-adresse er `onboarding@resend.dev` (fungerer i utviklingsmiljø)
- For produksjon bør du verifisere ditt eget domene i Resend

## Bygging for produksjon

```bash
npm run build
npm start
```

## Teknologi

- Next.js 14 (App Router)
- React 18
- Tailwind CSS 3
- TypeScript
- Resend (for e-post)

