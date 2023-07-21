export default function Tab({
  onClick,
  children,
}: {
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type='button'
      className='text-black/50 text-xl font-medium leading-none'
      onClick={() => onClick()}
    >
      {children}
    </button>
  )
}
