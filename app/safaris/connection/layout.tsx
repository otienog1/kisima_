import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cultural Connection Safaris - Authentic Experiences',
  description: 'Immerse yourself in African culture. Connect with local communities, learn traditions, and experience authentic cultural exchanges.',
}

export default function ConnectionSafarisLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
