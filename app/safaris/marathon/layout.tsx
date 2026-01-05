import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marathon Safari Tours - Run & Explore Africa',
  description: 'Combine your passion for running with African adventure. Marathon tours featuring iconic races like Maasai Mara and Kilimanjaro marathons.',
}

export default function MarathonSafarisLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
