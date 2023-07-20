'use client'
import { useState, FormEvent } from 'react'
import signUp from './signup'
import { useRouter } from 'next/navigation'

function Page() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { result, error } = await signUp(email, password)

    if (error) {
      return console.log(error)
    }

    // else successful
    console.log(result)
    return router.push('/admin')
  }
  return (
    <>
      <h1 className='mt-44 mb-12 text-4xl font-bold text-black/70 ml-5'>
        Sign up
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
        <button
          type='submit'
          className='rounded-xl px-5 py-3 leading-none border border-blue-600/50 bg-blue-600 text-white'
        >
          Sign up
        </button>
      </form>
    </>
  )
}

export default Page
