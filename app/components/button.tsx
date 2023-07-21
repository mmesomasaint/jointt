export default function Button({
  type,
  disabled,
  onClick,
  className,
  children,
}: {
  type: 'submit' | 'button' | 'reset' | undefined
  disabled?: boolean
  onClick?: () => void
  className?: string
  children: React.ReactNode
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`rounded-xl px-5 py-3 leading-none border border-blue-600/50 bg-blue-600 text-white ${className}`}
    >
      {children}
    </button>
  )
}
