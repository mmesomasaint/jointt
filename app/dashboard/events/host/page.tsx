'use client'
import { useState } from 'react'
import Text from '@/app/components/text'
import Button from '@/app/components/button'

type searchText = {
  name: string
  type: string
  contractors?: string[]
  totalCost?: number
  setDate?: Date
}

export default function Host() {
  const STAGES = [1, 2, 3, 4]
  const [activeStage, setActiveStage] = useState(STAGES[0])
  const [event, setEvent] = useState<searchText>({ name: '', type: '' })

  const handleActiveStages = (stage: number) => setActiveStage(++stage)

  return (
    <div className='p-3'>
      <Text size='SMALL'>Host An Event</Text>
      <div className='flex flex-col gap-4 justify-start items-start w-[70%] mx-auto mt-16'>
        {activeStage === 1 && (
          <DefineEvent
            setEventName={(name: string) =>
              setEvent((prev) => ({ ...prev, name }))
            }
            setsearchText={(type: string) =>
              setEvent((prev) => ({ ...prev, type }))
            }
            validated={!(event.name && event.type)}
            onNext={() => handleActiveStages(1)}
          />
        )}
      </div>
    </div>
  )
}

function DefineEvent({
  setEventName,
  setsearchText,
  validated,
  onNext,
}: {
  setEventName: (name: string) => void
  setsearchText: (type: string) => void
  validated: boolean
  onNext: () => void
}) {
  return (
    <>
      <Text size='BOLD' className='text-center mb-10'>
        CHOOSE EVENT TYPE
      </Text>
      <label htmlFor='eventname' className='w-full'>
        <Text size='SMALL'>Event Name</Text>
        <input
          onChange={(e) => setEventName(e.target.value)}
          required
          type='text'
          name='eventname'
          id='eventname'
          placeholder="Dora's Dedication"
          className='border border-zinc-600/50 rounded-xl p-3 focus:outline-blue-500/50 w-full'
        />
      </label>
      <label htmlFor='searchText' className='w-full'>
        <Text size='SMALL'>Event Type</Text>
        <input
          onChange={(e) => setsearchText(e.target.value)}
          required
          type='text'
          name='searchText'
          id='searchText'
          placeholder='Party'
          className='border border-zinc-600/50 rounded-xl p-3 focus:outline-blue-500/50 w-full'
        />
      </label>
      <Button
        type='button'
        disabled={validated}
        className='disabled:bg-gray-600/50 disabled:border-gray-600/50'
        onClick={onNext}
      >
        Next
      </Button>
    </>
  )
}

type ContractorType = {
  name: string
  role: string
  rate: 1 | 2 | 3 | 4 | 5
  status: boolean
}

function ContractorSelection({
  validated,
  onNext,
}: {
  validated: boolean
  onNext: () => void
}) {
  const [searchText, setSearchText] = useState<string>('')
  const [filter, setFilter] = useState<string>('name')

  return (
    <>
      <div className='flex justify-center items-center gap-3'>
        <input
          onChange={(e) => setSearchText(e.target.value)}
          required
          type='text'
          name='searchText'
          id='searchText'
          placeholder='Emeka or Dancer or $50/hr'
          className='border border-zinc-600/50 rounded-xl p-3 focus:outline-blue-500/50 w-full'
        />
        <select
          name='filter'
          defaultValue={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value='category'>category</option>
          <option value='role'>role</option>
          <option value='name'>name</option>
          <option value='pay'>pay</option>
        </select>
      </div>
      <Button
        type='button'
        disabled={validated}
        className='disabled:bg-gray-600/50 disabled:border-gray-600/50'
        onClick={onNext}
      >
        Next
      </Button>
    </>
  )
}
