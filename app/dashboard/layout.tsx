import type { Metadata } from 'next'
import { AuthContextProvider } from '../auth/authcontext'

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
    <AuthContextProvider>
      {children}
    </AuthContextProvider>
  )
}
