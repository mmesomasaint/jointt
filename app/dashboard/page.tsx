'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthContext } from '../auth/authcontext'

export default function Dashboard() {
  const { user } = useAuthContext()
  const router = useRouter()

  useEffect(() => {
    if (user == null) router.push('/auth/signin')
  }, [user])
  return (
    <div className='p-5'>
      <h1 className='text-4xl font-extrabold leading-none'>Dashboard</h1>
    </div>
  )
}
