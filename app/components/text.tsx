export default function Text({
  size,
  className,
  children,
}: {
  size: 'BOLD' | 'SEMIBOLD' | 'MEDIUM' | 'SMALL'
  className?: string
  children: React.ReactNode
}) {
  const BOLD = 'font-bold text-5xl'
  const SEMIBOLD = 'font-semibold text-3xl'
  const MEDIUM = 'font-medium text-xl'
  const SMALL = 'font-base text-lg'

  return (
    <div
      className={`${size === 'BOLD' && BOLD} ${
        size === 'SEMIBOLD' && SEMIBOLD
      } ${size === 'MEDIUM' && MEDIUM} ${size === 'SMALL' && SMALL} ${className}`}
    >
      {children}
    </div>
  )
}
