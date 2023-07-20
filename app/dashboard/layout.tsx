import type { Metadata } from 'next'
import { AuthContextProvider } from '../auth/authcontext'
import SideBar from './components/sidebar'

export const metadata: Metadata = {
  title: 'Joint - Dashboard',
  description: 'Authentication of Jointt Account',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthContextProvider>
      <div className='flex gap-0 justify-start items-stretch'>
        <SideBar />
        <div className='flex-grow'>{children}</div>
      </div>
    </AuthContextProvider>
  )
}
