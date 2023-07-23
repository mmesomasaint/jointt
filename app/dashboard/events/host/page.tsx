'use client'
import { useState } from 'react'
import Text from '@/app/components/text'
import Button from '@/app/components/button'

export default function Host() {
  const STAGES = [1, 2, 3, 4]
  const [activeStage, setActiveStage] = useState(STAGES[0]) 
  const { eventname, eventtype, ChooseEventType } = useEventType()
  const {contractorTypes, ChooseContractorTypes} = useContractorType()

  return (
    <div className='p-3'>
      <Text size='SMALL'>Host An Event</Text>
      {activeStage === 1 && <ChooseEventType />}
      {activeStage === 2 && <ChooseContractorTypes />}
    </div>
  )
}

function useEventType() {
  const [eventname, setEventName] = useState('')
  const [eventtype, setEventType] = useState('')

  const ChooseEventType = () => (
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
          value={eventname}
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
          value={eventtype}
          placeholder='Party'
          className='border border-zinc-600/50 rounded-xl p-3 focus:outline-blue-500/50 w-full'
        />
      </label>
      <Button type='button' disabled={!(eventname && eventtype)} className='disabled:bg-gray-600/50 disabled:border-gray-600/50'>
        Next
      </Button>
    </div>
  )

  return { eventname, eventtype, ChooseEventType }
}

function useContractorType() {
  const [contractorTypes, setContractorTypes] = useState<string[]>([
    'Cook',
    'MC',
    'Singer',
    'Dancers',
    'Clowns',
  ])
  const handleRemove = (id: number) =>
    setContractorTypes((prevTypes) => prevTypes.filter((_, _id) => _id !== id))

  const ChooseContractorTypes = () => (
    <>
      {contractorTypes.map((type, id) => (
        <div className='flex justify-start items-center gap-7'>
          <div>{type}</div>
          <Button type='button' onClick={() => handleRemove(id)}>
            Remove
          </Button>
        </div>
      ))}
      <Button type='button' disabled={contractorTypes.length === 0} className='disabled:bg-gray-600/50 disabled:border-gray-600/50'>
        Next
      </Button>
    </>
  )

  return { contractorTypes, ChooseContractorTypes }
}
