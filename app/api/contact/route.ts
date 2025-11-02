import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { navn, epost, telefon, melding } = body

    // Validering
    if (!navn || !epost || !telefon || !melding) {
      return NextResponse.json(
        { error: 'Alle felt må fylles ut' },
        { status: 400 }
      )
    }

    // Send e-post via Resend
    const data = await resend.emails.send({
      from: 'Kontaktskjema <onboarding@resend.dev>', // Du må oppdatere denne med din verifiserte domene
      to: ['fredrik.sha@gmail.com'],
      subject: `Ny henvendelse fra ${navn} - Olas Glassmontering`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            Ny henvendelse fra nettsiden
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Navn:</strong> ${navn}</p>
            <p style="margin: 10px 0;"><strong>E-post:</strong> ${epost}</p>
            <p style="margin: 10px 0;"><strong>Telefon:</strong> ${telefon}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #2563eb; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Melding:</h3>
            <p style="color: #475569; line-height: 1.6; white-space: pre-wrap;">${melding}</p>
          </div>
          
          <p style="color: #64748b; font-size: 12px; margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 20px;">
            Dette er en automatisk e-post fra kontaktskjemaet på Olas Glassmontering.
          </p>
        </div>
      `,
      replyTo: epost, // Så svar går til kunden
    })

    return NextResponse.json(
      { message: 'E-post sendt', data },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Kunne ikke sende e-post. Vennligst prøv igjen senere.' },
      { status: 500 }
    )
  }
}

