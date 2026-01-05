import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MICE Solutions Africa - Meetings, Incentives & Events',
  description: 'Professional MICE services across East & Southern Africa. Corporate retreats, conferences, team building, and incentive travel solutions.',
}

export default function MICESolutionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
