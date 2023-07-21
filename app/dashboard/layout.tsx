import type { Metadata } from 'next'
import { AuthContextProvider } from '../auth/authcontext'
import SideBar from './components/sidebar'

export const metadata: Metadata = {
  title: 'Joint - Dashboard',
  description: 'Your Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthContextProvider>
      <div className='flex gap-0 justify-start overflow-hidden h-screen'>
        <SideBar />
        <div className='flex-grow'>{children}</div>
      </div>
    </AuthContextProvider>
  )
}
