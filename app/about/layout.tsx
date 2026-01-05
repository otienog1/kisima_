import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Story & Mission',
  description: 'Discover Kisima Safaris - 18+ years of creating purpose-driven safari experiences across Africa. Learn about our commitment to conservation, community, and authentic travel.',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
