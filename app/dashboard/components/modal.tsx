export default function Modal({ children }: { children: React.ReactNode }) {
  return (
    <div className='absolute inset-0 bg-gray-900/30 flex justify-center items-center'>
      {children}
    </div>
  )
}
