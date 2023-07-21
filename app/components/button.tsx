export default function Button({
  type,
  disabled,
  children,
}: {
  type: 'submit' | 'button' | 'reset' | undefined
  disabled: boolean
  children: React.ReactNode
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className='rounded-xl px-5 py-3 leading-none border border-blue-600/50 bg-blue-600 text-white'
    >
      {children}
    </button>
  )
}
