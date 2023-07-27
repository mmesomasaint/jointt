'use client'
import { useState } from 'react'
import Text from '@/app/components/text'
import Button from '@/app/components/button'
import Avatar from '../../components/avatar'

type Event = {
  name: string
  type: string
  contractors?: string[]
  totalCost?: number
  setDate?: Date
}

export default function Host() {
  const STAGES = [1, 2, 3, 4]
  const [activeStage, setActiveStage] = useState(STAGES[0])
  const [event, setEvent] = useState<Event>({ name: '', type: '' })

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
            setEventType={(type: string) =>
              setEvent((prev) => ({ ...prev, type }))
            }
            validated={event.name.length > 0 && event.type.length > 0}
            onNext={() => handleActiveStages(1)}
          />
        )}
        {activeStage === 2 && (
          <ContractorSelection
            addedContractors={event.contractors || []}
            setAddedContractors={(contractors: string[]) => ({
              ...event,
              contractors,
            })}
            validated={
              event.contractors !== undefined && event.contractors.length > 0
            }
            onNext={() => handleActiveStages(2)}
          />
        )}
      </div>
    </div>
  )
}

function DefineEvent({
  setEventName,
  setEventType,
  validated,
  onNext,
}: {
  setEventName: (name: string) => void
  setEventType: (type: string) => void
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
      <label htmlFor='eventtype' className='w-full'>
        <Text size='SMALL'>Event Type</Text>
        <input
          onChange={(e) => setEventType(e.target.value)}
          required
          type='text'
          name='eventtype'
          id='eventtype'
          placeholder='Party'
          className='border border-zinc-600/50 rounded-xl p-3 focus:outline-blue-500/50 w-full'
        />
      </label>
      <Button
        type='button'
        disabled={!validated}
        className='disabled:bg-gray-600/50 disabled:border-gray-600/50'
        onClick={onNext}
      >
        Next
      </Button>
    </>
  )
}

type ContractorType = {
  id: string
  name: string
  role: string
  ratings: 1 | 2 | 3 | 4 | 5
  status: boolean
  pay: number
}

const contractors: ContractorType[] = [
  {
    id: 'ghi',
    name: 'Emeka Ike',
    role: 'Dancer',
    ratings: 3,
    status: true,
    pay: 10,
  },
  {
    id: 'abc',
    name: 'Sheila Van',
    role: 'Cook',
    ratings: 4,
    status: true,
    pay: 20,
  },
  {
    id: 'def',
    name: 'Mimi Eze',
    role: 'Singer',
    ratings: 3,
    status: true,
    pay: 25,
  },
  {
    id: 'xyz',
    name: 'Sisu Dim',
    role: 'Singer',
    ratings: 2,
    status: false,
    pay: 15,
  },
  {
    id: 'mno',
    name: 'Dami Dre',
    role: 'Cook',
    ratings: 4,
    status: true,
    pay: 30,
  },
  {
    id: 'jkl',
    name: 'Simi Ade',
    role: 'Dancer',
    ratings: 3,
    status: false,
    pay: 15,
  },
  {
    id: 'stu',
    name: 'Dr. Dre',
    role: 'Dancer',
    ratings: 4,
    status: true,
    pay: 10,
  },
]

function ContractorSelection({
  addedContractors,
  setAddedContractors,
  validated,
  onNext,
}: {
  addedContractors: string[]
  setAddedContractors: (value: string[]) => void
  validated: boolean
  onNext: () => void
}) {
  const [searchText, setSearchText] = useState<string>('')
  const [filter, setFilter] = useState<string>('name')

  const handleAdd = (id: string) => {
    const idx = addedContractors.findIndex((_id) => _id === id)
    if (idx !== -1) return
    setAddedContractors([...addedContractors, id])
  }

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
        <Button
          type='button'
          className='disabled:bg-gray-600/50 disabled:border-gray-600/50'
        >
          Add
        </Button>
      </div>
      <div className='my-5 grid grid-cols-3 gap-7 place-item-stretch'>
        {contractors.map((contractor) => (
          <ContractorCard
            contractor={contractor}
            onClick={() => handleAdd(contractor.id)}
            isAdded={addedContractors.includes(contractor.id)}
          />
        ))}
      </div>
      <Button
        type='button'
        disabled={validated}
        className='disabled:bg-gray-600/50 disabled:border-gray-600/50 mt-5'
        onClick={onNext}
      >
        Next
      </Button>
    </>
  )
}

function ContractorCard({
  contractor,
  onClick,
  isAdded,
}: {
  contractor: ContractorType
  onClick: () => void
  isAdded?: boolean
}) {
  return (
    <div
      className={`${
        isAdded ? 'bg-gray-900/30' : 'bg-blue-600/20'
      } rounded-xl shadow-xl flex flex-col justify-start items-stretch gap-5`}
      onClick={onClick}
    >
      <div className='grid grid-cols-2 place-items-stretch gap-5'><Avatar.Small src={null} />
      <div className='flex flex-col gap-2 justify-start items-start'>
        <div className='flex justify-start items-center gap-2'>
          <span className='text-lg font-medium text-black/70'>name:</span>&nbsp;
          <span className='text-lg font-medium text-blue-600'>
            {contractor.name}
          </span>
        </div>
        <div className='flex justify-start items-center gap-2'>
          <span className='text-lg font-medium text-black/70'>role:</span>&nbsp;
          <span className='text-lg font-medium text-blue-600'>
            {contractor.role}
          </span>
        </div>
        <div className='flex justify-start items-center gap-2'>
          <span className='text-lg font-medium text-black/70'>ratings:</span>
          &nbsp;
          <span className='text-lg font-medium text-blue-600'>
            {contractor.ratings}/5
          </span>
        </div>
      </div></div>
      <div className='flex justify-start items-center gap-5'>
        <div className='flex justify-start items-center gap-2'>
          <span className='text-lg font-medium text-black/70'>status:</span>
          &nbsp;
          <span className='text-lg font-medium text-blue-600'>
            {contractor.status ? 'available' : 'unavailable'}
          </span>
        </div>
        <div>
          <span className='text-xl font-medium text-blue-600/70'>$</span>
          <span className='text-2xl font-semibold text-blue-600/70'>50</span>
          <span className='text-lg font-semibold text-blue-600/70'>/hr</span>
        </div>
      </div>
    </div>
  )
}
