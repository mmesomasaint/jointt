'use client'
import { useState } from 'react'
import { BsCheckLg } from 'react-icons/bs'
import { useRouter } from 'next/navigation'
import dayjs from 'dayjs'
import { DatePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import addData from '../../addData'
import Text from '@/app/components/text'
import Button from '@/app/components/button'
import Avatar from '../../components/avatar'
import { useAuthContext } from '@/app/auth/authcontext'
import Modal from '../../components/modal'

type Event = {
  name: string
  type: string
  contractors?: string[]
  totalCost?: number
  startDate: number
  endDate: number
  hostId?: string
  created: number
}

export default function Host() {
  const { user } = useAuthContext()
  const STAGES = [1, 2, 3, 4]
  const [activeStage, setActiveStage] = useState(STAGES[0])
  const [event, setEvent] = useState<Event>({
    name: '',
    type: '',
    startDate: new Date().getTime(),
    endDate: new Date().getTime(),
    hostId: user?.uid,
    created: new Date().getTime(),
  })

  const handleActiveStages = (stage: number) => setActiveStage(++stage)
  const handleRecruitment = async () => {
    const { result, error } = await addData('events', event)
    if (error) {
      console.log('An error occured:\n', error)
      return
    }
    handleActiveStages(3)
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className='p-3 h-full overflow-auto'>
        <Text size='SMALL'>Host An Event</Text>
        <div className='flex flex-col gap-4 justify-start items-start w-[70%] mx-auto mt-16'>
          {activeStage === 1 && (
            <DefineEvent
              eventName={event.name}
              eventType={event.type}
              eventStartDate={event.startDate}
              eventEndDate={event.endDate}
              setEventName={(name: string) =>
                setEvent((prev) => ({ ...prev, name }))
              }
              setEventType={(type: string) =>
                setEvent((prev) => ({ ...prev, type }))
              }
              setEventStartDate={(startDate: number | undefined) =>
                setEvent((prev) => ({
                  ...prev,
                  ['startDate']: startDate || 0,
                }))
              }
              setEventEndDate={(endDate: number | undefined) =>
                setEvent((prev) => ({ ...prev, ['endDate']: endDate || 0 }))
              }
              validated={event.name.length > 0 && event.type.length > 0}
              onNext={() => handleActiveStages(1)}
            />
          )}
          {activeStage === 2 && (
            <ContractorSelection
              addedContractors={event.contractors || []}
              setAddedContractors={(contractors: string[]) =>
                setEvent({
                  ...event,
                  contractors,
                })
              }
              validated={
                event.contractors !== undefined && event.contractors.length > 0
              }
              onNext={() => handleActiveStages(2)}
              onBack={() => handleActiveStages(0)}
            />
          )}
          {activeStage === 3 && (
            <ContractorRecruitment
              selectedContractorIDs={event.contractors || []}
              onRecruit={handleRecruitment}
              onBack={() => handleActiveStages(1)}
            />
          )}
          {activeStage === 4 && <SuccessCard />}
        </div>
      </div>
    </LocalizationProvider>
  )
}

function DefineEvent({
  eventName,
  eventType,
  eventStartDate,
  eventEndDate,
  setEventName,
  setEventType,
  setEventStartDate,
  setEventEndDate,
  validated,
  onNext,
}: {
  eventName: string
  eventType: string
  eventStartDate: number
  eventEndDate: number
  setEventName: (name: string) => void
  setEventType: (type: string) => void
  setEventStartDate: (startDate: number | undefined) => void
  setEventEndDate: (endDate: number | undefined) => void
  validated: boolean
  onNext: () => void
}) {
  const now = new Date().toLocaleDateString()

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
          value={eventName}
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
          value={eventType}
          placeholder='Party'
          className='border border-zinc-600/50 rounded-xl p-3 focus:outline-blue-500/50 w-full'
        />
      </label>
      <div className='flex justify-evenly items-center gap-10 w-full'>
        <label htmlFor='eventstartdate' className='w-full'>
          <Text size='SMALL'>Start Date</Text>
          <DatePicker
            onChange={(newDate) =>
              setEventStartDate(newDate?.toDate().getTime())
            }
            value={dayjs(eventStartDate)}
            className='grow border border-zinc-600/50 rounded-xl p-3 focus:outline-blue-500/50'
          />
        </label>
        <label htmlFor='eventenddate' className='w-full'>
          <Text size='SMALL'>End Date</Text>
          <DatePicker
            onChange={(newDate) => setEventEndDate(newDate?.toDate().getTime())}
            value={dayjs(eventEndDate)}
            className='grow border border-zinc-600/50 rounded-xl p-3 focus:outline-blue-500/50'
          />
        </label>
      </div>
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
  onBack,
}: {
  addedContractors: string[]
  setAddedContractors: (value: string[]) => void
  validated: boolean
  onNext: () => void
  onBack: () => void
}) {
  const [searchText, setSearchText] = useState<string>('')
  const [filter, setFilter] = useState<string>('name')

  const handleAdd = (newId: string) => {
    const loc = addedContractors.findIndex((id) => id === newId)
    if (loc === -1) {
      setAddedContractors([...addedContractors, newId])
    } else {
      const startSub = addedContractors.slice(0, loc)
      const endSub = addedContractors.slice(loc + 1)
      setAddedContractors([...startSub, ...endSub])
    }
  }

  return (
    <>
      <form className='w-full'>
        <div className='flex justify-center items-center w-full'>
          <input
            onChange={(e) => setSearchText(e.target.value)}
            required
            type='text'
            name='searchText'
            id='searchText'
            placeholder='Emeka or Dancer or $50/hr'
            className='grow border-2 border-r-0 border-blue-600/50 rounded-xl rounded-r-none p-3 focus:outline-blue-500/50 w-full'
          />
          <select
            name='filter'
            defaultValue={filter}
            onChange={(e) => setFilter(e.target.value)}
            className='border-2 border-r-0 border-blue-600/50 p-[0.76rem] font-semibold text-lg focus:outline-blue-600/50 text-black/70'
          >
            <option value='category'>category</option>
            <option value='role'>role</option>
            <option value='name'>name</option>
            <option value='pay'>pay</option>
          </select>
          <Button
            type='submit'
            className='disabled:bg-gray-600/50 disabled:border-gray-600/50 px-6 py-[1.04rem] rounded-l-none'
          >
            Search
          </Button>
        </div>
      </form>
      <div className='my-5 grid grid-cols-2 gap-7 place-items-stretch w-full'>
        {contractors.map((contractor) => (
          <ContractorCard
            key={contractor.id}
            contractor={contractor}
            onClick={() => handleAdd(contractor.id)}
            isAdded={addedContractors.includes(contractor.id)}
          />
        ))}
      </div>
      <div className='flex justify-start items-center gap-10'>
        <Button
          type='button'
          className='disabled:bg-gray-600/50 disabled:border-gray-600/50 mt-5'
          onClick={onBack}
        >
          Back
        </Button>
        <Button
          type='button'
          disabled={!validated}
          className='disabled:bg-gray-600/50 disabled:border-gray-600/50 mt-5'
          onClick={onNext}
        >
          Next
        </Button>
      </div>
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
      } relative rounded-xl shadow-md flex flex-col justify-start items-stretch gap-5 p-4`}
      onClick={onClick}
    >
      {isAdded && (
        <div className='absolute top-2 right-2 w-fit'>
          <BsCheckLg className='text-blue-600 text-xl' />
        </div>
      )}
      <div className='grid grid-cols-2 place-items-stretch items-center'>
        <Avatar.Small src={null} />
        <div className='flex flex-col justify-start items-start'>
          <div className='flex justify-start items-center'>
            <span className='text-base font-medium text-black/70'>name:</span>
            &nbsp;
            <span className='text-base font-medium text-blue-600'>
              {contractor.name}
            </span>
          </div>
          <div className='flex justify-start items-center'>
            <span className='text-base font-medium text-black/70'>role:</span>
            &nbsp;
            <span className='text-base font-medium text-blue-600'>
              {contractor.role}
            </span>
          </div>
          <div className='flex justify-start items-center'>
            <span className='text-base font-medium text-black/70'>
              ratings:
            </span>
            &nbsp;
            <span className='text-base font-medium text-blue-600'>
              {contractor.ratings}/5
            </span>
          </div>
          <div className='flex justify-start items-center'>
            <span className='text-base font-medium text-black/70'>status:</span>
            &nbsp;
            <span className='text-base font-medium text-blue-600'>
              {contractor.status ? 'available' : 'unavailable'}
            </span>
          </div>
          <div className='flex justify-start items-center'>
            <span className='text-base font-medium text-black/70'>pay:</span>
            &nbsp;
            <span className='text-base font-medium text-blue-600'>
              ${contractor.pay}/hr
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

function ContractorRecruitment({
  selectedContractorIDs,
  onRecruit,
  onBack,
}: {
  selectedContractorIDs: string[]
  onRecruit: () => void
  onBack: () => void
}) {
  const getContractor = (id: string) =>
    contractors.find((contractor) => contractor.id === id)

  return (
    <>
      <div className='flex flex-col items-start justify-start gap-0 w-full'>
        <div className='p-3 w-full'>
          <div className='grid grid-cols-4 place-items-stretch items-center gap-3 w-full'>
            <Text size='MEDIUM' className='text-center'>
              Name
            </Text>
            <Text size='MEDIUM' className='text-center'>
              Role
            </Text>
            <Text size='MEDIUM' className='text-center'>
              Ratings
            </Text>
            <Text size='MEDIUM' className='text-center'>
              Pay
            </Text>
          </div>
        </div>
        {selectedContractorIDs.map((id) => {
          const contractor = getContractor(id)

          return (
            <div key={id} className='even:bg-blue-600/10 p-3 w-full'>
              <div className='grid grid-cols-4 place-items-stretch items-center gap-3 w-full'>
                <Text size='SMALL' className='text-center'>
                  {contractor?.name}
                </Text>
                <Text size='SMALL' className='text-center'>
                  {contractor?.role}
                </Text>
                <Text size='SMALL' className='text-center'>
                  {contractor?.ratings}
                </Text>
                <Text size='SMALL' className='text-center'>
                  {contractor?.pay}
                </Text>
              </div>
            </div>
          )
        })}
        <div className='flex justify-start items-center gap-10'>
          <Button
            type='button'
            className='disabled:bg-gray-600/50 disabled:border-gray-600/50 mt-5'
            onClick={onBack}
          >
            Back
          </Button>
          <Button
            type='button'
            className='disabled:bg-gray-600/50 disabled:border-gray-600/50 mt-5'
            onClick={onRecruit}
          >
            Send Recruitment Request
          </Button>
        </div>
      </div>
    </>
  )
}

function SuccessCard() {
  const router = useRouter()

  return (
    <Modal>
      <div className='rounded-xl p-7 bg-white relative w-[50%] text-black flex flex-col gap-2 items-center justify-start'>
        <Text size='BOLD'>SUCCESSFULL</Text>
        <Text size='SMALL'>Your Event Was Created Successfully</Text>
        <Button
          type='button'
          className='disabled:bg-gray-600/50 disabled:border-gray-600/50 mt-5'
          onClick={() => router.back()}
        >
          Close
        </Button>
      </div>
    </Modal>
  )
}
