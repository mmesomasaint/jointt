'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthContext } from '../auth/authcontext'
import Text from '../components/text'

export default function Dashboard() {
  const { user } = useAuthContext()
  const router = useRouter()

  useEffect(() => {
    if (user == null) router.push('/auth/signin')
  }, [user])
  return (
    <div className='p-3 pt-12'>
      <Text size='BOLD'>Dashboard</Text>
    </div>
  )
}
