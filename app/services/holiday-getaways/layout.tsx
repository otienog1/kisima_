import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'African Holiday Getaways - Beach & Safari Escapes',
  description: 'Relaxing African getaways combining pristine beaches, luxury lodges, and wildlife. Perfect honeymoons and romantic escapes.',
}

export default function HolidayGetawaysLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
