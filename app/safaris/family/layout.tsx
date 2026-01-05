import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Family Safari Adventures - Kid-Friendly Tours',
  description: 'Create lasting family memories with our child-friendly safari experiences. Safe, educational, and fun adventures designed for all ages.',
}

export default function FamilySafarisLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
