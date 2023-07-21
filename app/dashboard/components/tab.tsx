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
      className='text-black text-base font-medium'
      onClick={() => onClick()}
    >
      {children}
    </button>
  )
}
