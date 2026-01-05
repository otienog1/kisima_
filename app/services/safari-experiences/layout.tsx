import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Custom Safari Experiences - Tailored Wildlife Adventures',
  description: 'Bespoke African safari experiences designed around your interests. From luxury lodges to conservation safaris and cultural encounters.',
}

export default function SafariExperiencesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
