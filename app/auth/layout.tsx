import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Joint - Auth',
  description: 'Authentication of Jointt Account',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {children}
    </div>
  )
}
