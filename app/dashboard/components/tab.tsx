export default function Tab({onClick, children}: {onClick: () => void, children: React.ReactNode}) {
  return (
    <button type='button' className="p-3 border border-blue-600/30 text-black text-base font-medium shadow-xl" onClick={() => onClick()}>
      {children}
    </button>
  )
}