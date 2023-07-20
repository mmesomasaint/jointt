import Image from 'next/image'
import avatar from '../avatar.svg'

export default function Avatar({ src }: { src: string | null }) {
  return (
    <Image
      src={src === null ? avatar : src}
      width={350}
      height={350}
      alt='Profile Image'
      className='w-[250px] h-[250px] rounded-full border border-black/50'
    />
  )
}
