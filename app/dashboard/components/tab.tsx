'use client'

import {useState} from 'react'

export default function TabHandler({titles}: {titles: string[]}) {
  const [activeTab, setActiveTab] = useState<string>('')

  return (
    <>
      {titles.map(title => (
          <Tab
          key={title}
            onClick={() => setActiveTab(title)}
            active={activeTab === title}
          >
            {title}
          </Tab>
      ))}
    </>
  )
}

function Tab({
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
