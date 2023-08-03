import { useState } from 'react'
import dayjs from 'dayjs'
import { DatePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Select } from '@mui/material'
import Modal from '../../components/modal'
import Text from '@/app/components/text'
import Button from '@/app/components/button'
import addData from '../../addData'

const eventIds: string[] = [
  'eedadfaer',
  'afdsfaweifajpd',
  'adfiapewfi',
  'kdfjapeoifpa',
  'aidfjpaeifj',
]
const events: { id: string; name: string }[] = [
  {
    id: 'eedadfaer',
    name: 'Birthday Party For Deby',
  },
  {
    id: 'afdsfaweifajpd',
    name: 'Child Dedication Ceremony',
  },
  {
    id: 'adfiapewfi',
    name: 'Traditional Marriage For Kate',
  },
  {
    id: 'kdfjapeoifpa',
    name: 'August Meeting in Umuahia',
  },
  {
    id: 'aidfjpaeifj',
    name: 'Matriculation After Party of Kachi',
  },
]

type JobType = {
  title: string
  description: string
  budget: number
  roles: string[]
  eventId: string
  expiryDate: number
}

export default function CreateJobForm({exitFn}: {exitFn: () => void}) {
  const [job, setJob] = useState<JobType>({
    title: '',
    description: '',
    budget: Number(),
    roles: [],
    eventId: '',
    expiryDate: Date.now(),
  })
  const setTitle = (title: string) => setJob((prev) => ({ ...prev, title }))
  const setDescription = (description: string) =>
    setJob((prev) => ({ ...prev, description }))
  const setBudget = (budget: number) => setJob((prev) => ({ ...prev, budget }))
  const setRoles = (roles: string[]) => setJob((prev) => ({ ...prev, roles }))
  const setEventId = (eventId: string) =>
    setJob((prev) => ({ ...prev, eventId }))
  const setExpiryDate = (expiryDate: number) =>
    setJob((prev) => ({ ...prev, expiryDate }))
  const getName = (id: string) => events.find((event) => event.id === id)?.name

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Send request and log errors/successes.
    const {result, error} = await addData('jobs', job)
    if (error) {
      console.log("Job Creation Failed: ", error)
      return
    }

    exitFn()
  }

  return (
    <Modal>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <form
          className='p-10 flex flex-col gap-3 rounded-xl bg-white text-black'
          onSubmit={onSubmitForm}
        >
          <label htmlFor='title' className='w-full'>
            <Text size='SMALL'>Title</Text>
            <input
              onChange={(e) => setTitle(e.target.value)}
              required
              type='text'
              name='title'
              id='title'
              value={job.title}
              placeholder='A Dancer For a Party'
              className='border border-zinc-600/50 rounded-xl p-3 focus:outline-blue-500/50 w-full'
            />
          </label>
          <label htmlFor='description' className='w-full'>
            <Text size='SMALL'>Description</Text>
            <input
              onChange={(e) => setDescription(e.target.value)}
              required
              type='text'
              name='description'
              id='description'
              value={job.description}
              placeholder='...some dancers for a kids party...'
              className='border border-zinc-600/50 rounded-xl p-3 focus:outline-blue-500/50 w-full'
            />
          </label>
          <label htmlFor='budget' className='w-full'>
            <Text size='SMALL'>Budget</Text>
            <input
              onChange={(e) => setBudget(parseInt(e.target.value))}
              required
              type='number'
              name='budget'
              id='budget'
              value={job.budget}
              placeholder='Party'
              className='border border-zinc-600/50 rounded-xl p-3 focus:outline-blue-500/50 w-full'
            />
          </label>
          <div className='flex justify-between items-center gap-10'>
            <Select
              multiple
              value={job.roles}
              defaultValue={['Dancer']}
              onChange={(e) =>
                setRoles(
                  typeof e.target.value === 'string'
                    ? [e.target.value]
                    : e.target.value
                )
              }
            >
              <option value='Dancer'>Dancer</option>
              <option value='MC'>MC</option>
              <option value='Carterer'>Carterer</option>
              <option value='Mimer'>Mimer</option>
            </Select>
            <label htmlFor='expiryDate' className='w-full'>
              <Text size='SMALL'>Expiry Date</Text>
              <DatePicker
                onChange={(newDate) =>
                  setExpiryDate(newDate?.toDate().getTime() || Date.now())
                }
                value={dayjs(job.expiryDate)}
                className='grow border border-zinc-600/50 rounded-xl p-3 focus:outline-blue-500/50'
              />
            </label>
          </div>
          <Select
            value={job.eventId}
            defaultValue={eventIds[0]}
            onChange={(e) => setEventId(e.target.value)}
          >
            {eventIds.map((eventId) => (
              <option value={eventId}>{getName(eventId)}</option>
            ))}
          </Select>
          <Button
            type='submit'
            className='disabled:bg-gray-600/50 disabled:border-gray-600/50 mt-5'
          >
            Create Job
          </Button>
        </form>
      </LocalizationProvider>
    </Modal>
  )
}
