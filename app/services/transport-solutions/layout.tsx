import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Safari Transport & Vehicle Hire - 4x4 Rentals',
  description: 'Reliable safari transport solutions across Africa. 4x4 vehicle hire, airport transfers, and private driver services.',
}

export default function TransportSolutionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
