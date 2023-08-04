'use client'

import Text from '@/app/components/text'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname()
  const isActive = (endpoint: string) => pathname.endsWith(endpoint)

  return (
    <div className='flex flex-col justify-start items-start gap-0 '>
      <NavLink href='/dashboard/' active={isActive('dashboard')}>Dashboard</NavLink>
      <NavLink href='/dashboard/events' active={isActive('events')}>Events</NavLink>
      <NavLink href='/dashboard/contracts' active={isActive('contracts')}>Contracts</NavLink>
      <NavLink href='/dashboard/career' active={isActive('career')}>Career</NavLink>
      <NavLink href='/dashboard/proposals' active={isActive('proposals')}>Proposals</NavLink>
      <NavLink href='/dashboard/settings' active={isActive('settings')}>Settings</NavLink>
    </div>
  )
}

function NavLink({
  href,
  active,
  children,
}: {
  href: string
  active?: boolean
  children: React.ReactNode
}) {
  return (
    <Text size='MEDIUM' className={`${active ? 'border-l-4 border-white text-white' : 'border-l-2 border-black'} py-2 pl-2`}>
      <Link href={href}>{children}</Link>
    </Text>
  )
}
