'use client'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <main className='bg-white'>
      <header className='bg-white px-4'>
        <div className='py-4 border-b border-b-zinc-700/50 flex justify-end items-center gap-5'>
          <button
            className='rounded-xl px-5 py-3 leading-none bg-white border border-blue-600/50 text-blue-600'
            onClick={() => router.push('/auth/signin')}
          >
            Sign in
          </button>
          <button
            className='rounded-xl px-5 py-3 leading-none border border-blue-600/50 bg-blue-600 text-white'
            onClick={() => router.push('/auth/signup')}
          >
            Sign up
          </button>
        </div>
      </header>
      <section></section>
      <footer></footer>
    </main>
  )
}
