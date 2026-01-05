import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sustainable Tourism & Conservation Impact',
  description: 'Our commitment to responsible travel: wildlife conservation, community empowerment, and cultural preservation. Safari experiences that give back to Africa.',
}

export default function SustainabilityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
