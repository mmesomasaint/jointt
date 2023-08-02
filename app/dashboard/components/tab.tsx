export default function Tab({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type='button'
      className={`${active ? 'bg-blue-600 text-white' : 'bg-white text-black'} text-black/70 text-xl font-medium leading-none`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
