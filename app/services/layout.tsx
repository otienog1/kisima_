import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Safari Services & Travel Solutions',
  description: 'Comprehensive safari and travel services: wildlife safaris, MICE solutions, adventure travel, holiday getaways, and transport. Tailored experiences for every traveler.',
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
