import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Safari Destinations in East & Southern Africa',
  description: 'Explore premium safari destinations across Kenya, Tanzania, Uganda, Rwanda, South Africa, Botswana, Zimbabwe & Namibia. Find your perfect African adventure.',
}

export default function DestinationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
