import Image from 'next/image'
import avatar from '../avatar.jpg'

export default function Avatar({ src }: { src: string | null }) {
  return (
    <div className='relative w-[18vw] h-[18vw] rounded-full border border-black/50 shadow-md'>
      
    <Image
      src={src === null ? avatar : src}
      fill
      priority
      sizes='20vw'
      alt='Profile Image'
      className='rounded-full'
    />
    </div>
  )
}
