'use client'
import { useState, FormEvent } from 'react'
import signIn from './signin'
import { useRouter } from 'next/navigation'
import useErrorHandler from '@/app/components/error'
import Button from '@/app/components/button'

function Page() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const { addError, Errors } = useErrorHandler()

  const handleForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { error } = await signIn(email, password)

    if (error) {
      addError(error.code.replace('auth/', ''))
      return
    }

    // else successful
    return router.push('/dashboard')
  }
  return (
    <>
      <Errors />
      <h1 className='mt-44 mb-12 text-4xl font-bold text-black/70 ml-5'>
        Sign in
      </h1>
      <form
        onSubmit={handleForm}
        className='flex flex-col justify-start items-start gap-5 ml-5'
      >
        <label htmlFor='email'>
          <p>Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            required
            type='email'
            name='email'
            id='email'
            placeholder='example@mail.com'
            className='border border-zinc-600/50 rounded-xl p-3 focus:outline-blue-500/50'
          />
        </label>
        <label htmlFor='password'>
          <p>Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            required
            type='password'
            name='password'
            id='password'
            placeholder='password'
            className='border border-zinc-600/50 rounded-xl p-3 focus:outline-blue-500/50'
          />
        </label>
        <Button type='submit'>Sign in</Button>
      </form>
    </>
  )
}

export default Page
