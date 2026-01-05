import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wildlife Safari Tours - Big Five & Conservation',
  description: 'Experience Africa\'s iconic wildlife with expert-guided safaris. See the Big Five, witness the Great Migration, and support conservation efforts.',
}

export default function WildlifeSafarisLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
