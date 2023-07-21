import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Joint - Events',
  description: 'Your Events',
}

export default function EventsLayout(props: {
  children: React.ReactNode
}) {
  return (
    <>
      <div>{props.children}</div>
    </>
  )
}
