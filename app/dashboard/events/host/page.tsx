'use client'
import { useState } from 'react'
import Text from '@/app/components/text'
import Button from '@/app/components/button'
import { MdClose } from 'react-icons/md'

export default function Host() {
  const STAGES = [1, 2, 3, 4]
  const DEFAULTCONTRACTORS = ['Cook', 'MC', 'Singer', 'Dancers', 'Clowns']
  const [activeStage, setActiveStage] = useState(STAGES[1])
  const [eventName, setEventName] = useState('')
  const [eventType, setEventType] = useState('')
  const [contractorTypes, setContractorTypes] =
    useState<string[]>(DEFAULTCONTRACTORS)

  const handleActiveStages = (stage: number) => setActiveStage(++stage)

  return (
    <div className='p-3'>
      <Text size='SMALL'>Host An Event</Text>
      <div className='flex flex-col gap-4 justify-start items-start w-fit mx-auto mt-16'>
        {activeStage === 1 && (
          <ChooseEventType
            setEventName={setEventName}
            setEventType={setEventType}
            validated={!(eventName && eventType)}
            onNext={() => handleActiveStages(1)}
          />
        )}
        {activeStage === 2 && (
          <ChooseContractorTypes
            contractorTypes={contractorTypes}
            setContractorTypes={setContractorTypes}
            validated={contractorTypes.length === 0}
            onNext={() => handleActiveStages(2)}
          />
        )}
      </div>
    </div>
  )
}

function ChooseEventType({
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
        disabled={validated}
        className='disabled:bg-gray-600/50 disabled:border-gray-600/50'
        onClick={onNext}
      >
        Next
      </Button>
    </>
  )
}

function ChooseContractorTypes({
  contractorTypes,
  setContractorTypes,
  validated,
  onNext,
}: {
  contractorTypes: string[]
  setContractorTypes: (type: (prevTypes: string[]) => string[]) => void
  validated: boolean
  onNext: () => void
}) {
  const [newContractorType, setNewContractorType] = useState('')

  const handleAdd = () =>
    setContractorTypes((prevTypes) => [...prevTypes, newContractorType])

  const handleRemove = (id: number) => {
    setContractorTypes((prevTypes) => prevTypes.filter((_, _id) => _id !== id))
  }

  return (
    <>
      <Text size='BOLD' className='text-center mb-10'>
        EVENT CONTRACTORS
      </Text>
      <div className='flex justify-start items-start gap-3 w-full mb-5'>
        <input
          onChange={(e) => setNewContractorType(e.target.value)}
          required
          type='text'
          name='contractortype'
          id='contractortype'
          placeholder='Contractor Type'
          className='flex-grow border border-zinc-600/50 rounded-xl p-2 focus:outline-blue-500/50 w-full'
        />
        <Button
          type='button'
          className='disabled:bg-gray-600/50 disabled:border-gray-600/50'
          onClick={handleAdd}
        >
          Add
        </Button>
      </div>
      <div className='flex flex-wrap justify-start items-center gap-3'>
        {contractorTypes.map((type, id) => (
          <div className='flex justify-start items-center gap-7 bg-blue-600/20 p-2 rounded-xl'>
            <Text size='SMALL'>{type}</Text>
            <Button
              type='button'
              className='bg-transparent px-0 py-0 w-6 h-6 flex justify-center items-center rounded-full border-red-600'
              onClick={() => handleRemove(id)}
            >
              <MdClose className='text-base text-red-600' />
            </Button>
          </div>
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

function SelectContractors({contractorTypes}: {contractorTypes: string[]}) {
  const contractors: {name:string, role:string, pay:string}[] = [
    {name: 'Obi CUbana', role: 'Structural', pay: '$30/hr'}, {name: 'Nneoma James', role: 'Cook', pay: '$10/hr'}, {name: 'Amadi Johnson', role: 'Dancer', pay: '$5/hr'}, {name: 'Juliet Ann', role: 'MC', pay: '$7/hr'}
  ]
}
