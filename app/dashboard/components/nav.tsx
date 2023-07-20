import Text from '@/app/components/text'
import Link from 'next/link'

export default function Nav() {
  return (
    <div className='flex flex-col justify-start items-start gap-5'>
      <NavLink href='/dashboard/'>Dashboard</NavLink>
      <NavLink href='/dashboard/events'>Events</NavLink>
      <NavLink href='/dashboard/contracts'>Contracts</NavLink>
      <NavLink href='/dashboard/career'>Career</NavLink>
      <NavLink href='/dashboard/settings'>Settings</NavLink>
    </div>
  )
}

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Text size='SEMIBOLD'>
      <Link href={href}>{children}</Link>
    </Text>
  )
}
