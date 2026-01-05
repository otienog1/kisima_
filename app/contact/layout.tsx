import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Plan Your Safari',
  description: 'Ready to explore Africa? Contact Kisima Safaris to plan your custom safari experience. Expert travel consultants ready to bring your African adventure to life.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
