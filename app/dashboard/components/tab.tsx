'use client'

import { useState } from 'react'
import {
  WhereFilterOp,
  FieldPath,
} from 'firebase/firestore'

export default function TabHandler({
  titles,
  onSwitch,
  initialTitle,
}: {
  titles: string[]
  onSwitch?: (value: string) => void
  initialTitle?: string
}) {
  const [activeTab, setActiveTab] = useState<string>(initialTitle || titles[0])

  return (
    <>
      {titles.map((title) => (
        <Tab
          key={title}
          onClick={() => {
            setActiveTab(title)
            onSwitch && onSwitch(title)
          }}
          active={activeTab === title}
        >
          {title}
        </Tab>
      ))}
    </>
  )
}

export function Tab({
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
      className={`${
        active ? 'bg-blue-600 text-white' : 'bg-white text-black'
      } text-black/70 text-xl font-medium leading-none`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export type Tab = {
  title: string
  query: {
    fieldpath: string | FieldPath
    op: WhereFilterOp
    value: unknown
  }
}
