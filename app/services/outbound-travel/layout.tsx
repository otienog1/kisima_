import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Outbound Travel Services - Global Tour Packages',
  description: 'International travel solutions beyond Africa. Visa assistance, flight bookings, and curated global tour packages.',
}

export default function OutboundTravelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
