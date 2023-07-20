export default function Button({type, children}: {type: "submit" | "button" | "reset" | undefined, children: React.ReactNode}) {
  return (
    <button
      type={type}
      className='rounded-xl px-5 py-3 leading-none border border-blue-600/50 bg-blue-600 text-white'
    >
      {children}
    </button>
  )
}