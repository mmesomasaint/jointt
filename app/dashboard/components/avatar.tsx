import Image from "next/image";

export default function Avatar({src}: {src: string | null}) {
  return (
    <Image src={src === null ? 'defaultpath' : src} width={350} height={350} alt="Profile Image" className="rouneded-full border border-black/50" />
  )
}