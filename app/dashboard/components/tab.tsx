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
      className='py-2 px-5 text-black text-base font-medium'
      onClick={() => onClick()}
    >
      {children}
    </button>
  )
}
