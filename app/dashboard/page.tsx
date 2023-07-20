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
  return <h1>Welcome to the dashboard</h1>
}
