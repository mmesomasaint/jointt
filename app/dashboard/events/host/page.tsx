'use client'
import { useState } from 'react'
import Text from '@/app/components/text'
import Button from '@/app/components/button'

export default function Host() {
  const STAGES = [1, 2, 3, 4]
  const [activeStage, setActiveStage] = useState(STAGES[0])
  const [eventName, setEventName] = useState('')
  const [eventType, setEventType] = useState('')
  const [contractorTypes, setContractorTypes] = useState<string[]>([
    'Cook',
    'MC',
    'Singer',
    'Dancers',
    'Clowns',
  ])

  return (
    <div className='p-3'>
      <Text size='SMALL'>Host An Event</Text>
      {activeStage === 1 && (
        <ChooseEventType
          setEventName={setEventName}
          setEventType={setEventType}
          validated={!(eventName && eventType)}
        />
      )}
      {activeStage === 2 && (
        <ChooseContractorTypes
          contractorTypes={contractorTypes}
          setContractorTypes={setContractorTypes}
          validated={contractorTypes.length === 0}
        />
      )}
    </div>
  )
}

function ChooseEventType({
  setEventName,
  setEventType,
  validated,
}: {
  setEventName: (name: string) => void
  setEventType: (type: string) => void
  validated: boolean
}) {
  return (
    <div className='flex flex-col gap-4 justify-start items-start w-fit mx-auto mt-16'>
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
        disabled={validated}
        className='disabled:bg-gray-600/50 disabled:border-gray-600/50'
      >
        Next
      </Button>
    </div>
  )
}

function ChooseContractorTypes({
  contractorTypes,
  setContractorTypes,
  validated,
}: {
  contractorTypes: string[]
  setContractorTypes: (type: (prevTypes: string[]) => string[]) => void
  validated: boolean
}) {
  const handleRemove = (id: number) => {
    setContractorTypes((prevTypes: string[]) =>
      prevTypes.filter((_, _id) => _id !== id)
    )
  }

  return (
    <>
      {contractorTypes.map((type, id) => (
        <div className='flex justify-start items-center gap-7'>
          <div>{type}</div>
          <Button type='button' onClick={() => handleRemove(id)}>
            Remove
          </Button>
        </div>
      ))}
      <Button
        type='button'
        disabled={validated}
        className='disabled:bg-gray-600/50 disabled:border-gray-600/50'
      >
        Next
      </Button>
    </>
  )
}
