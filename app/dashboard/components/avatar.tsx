import Image from 'next/image'
import avatar from '../avatar.jpg'

type AvatarType = {
  src: string | null
}

function Big({src}: AvatarType) {
  return (
    <div className='relative w-[18vw] h-[18vw] rounded-full border border-black/50 shadow-md'>
      <Image
        src={src === null ? avatar : src}
        fill
        priority
        sizes='20vw'
        alt='Big Profile Image'
        className='rounded-full'
      />
    </div>
  )
}

function Small({src}: AvatarType) {
  return (
    <div className='relative w-[12vw] h-[12vw] rounded-full border border-black/50 shadow-md'>
      <Image
        src={src === null ? avatar : src}
        fill
        priority
        sizes='14vw'
        alt='Small Profile Image'
        className='rounded-full'
      />
    </div>
  )
}

const Avatar = {Big, Small}

export default Avatar
