import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Women-Only Safari Experiences - Empowered Travel',
  description: 'Join our exclusive women-only safari adventures. Safe, empowering, and culturally enriching experiences designed for solo women travelers and groups.',
}

export default function WomenOnlySafarisLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
