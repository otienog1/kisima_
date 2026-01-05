import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Adventure Travel Africa - Thrilling Experiences',
  description: 'Adrenaline-pumping African adventures: mountain climbing, white-water rafting, gorilla trekking, and extreme safari experiences.',
}

export default function AdventureTravelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
