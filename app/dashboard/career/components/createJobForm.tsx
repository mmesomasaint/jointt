import SelectInput from "@mui/material/Select/SelectInput"
import dayjs from 'dayjs'
import { DatePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Select } from "@mui/material"
import Modal from "../../components/modal"
import Text from "@/app/components/text"
import Button from "@/app/components/button"

const eventIds: string[] = ['eedadfaer', 'afdsfaweifajpd', 'adfiapewfi', 'kdfjapeoifpa', 'aidfjpaeifj']
const events: {id:string, name:string}[] = [
  {
    id: 'eedadfaer',
    name: 'Birthday Party For Deby'
  },
  {
    id: 'afdsfaweifajpd',
    name: 'Child Dedication Ceremony'
  },
  {
    id: 'adfiapewfi',
    name: 'Traditional Marriage For Kate'
  },
  {
    id: 'kdfjapeoifpa',
    name: 'August Meeting in Umuahia'
  },
  {
    id: 'aidfjpaeifj',
    name: 'Matriculation After Party of Kachi'
  }
]

type CreateJobFormType = {title: string, description:string, budget:number, roles: string[], eventId: string, expiryDate: number, setTitle: (newTitle: string) => void, setDescription: (newDescription: string) => void, setBudget: (newBudget: number) => void, setRoles: (newRoles: string[]) => void, setEventId: (newEventId: string) => void, setExpiryDate: (newExpiryDate: number) => void, onSubmitForm: (e: React.FormEvent<HTMLFormElement>) => void}

export default function CreateJobForm({title, description, budget, roles, eventId, expiryDate, setTitle, setDescription, setBudget, setRoles, setEventId, setExpiryDate, onSubmitForm}: CreateJobFormType) {
  const getName = (id: string) => events.find(event => event.id === id)?.name

  return (
    <Modal>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <form
        className='p-5 flex flex-col gap-3 rounded-xl bg-white text-black'
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
            value={title}
            placeholder='Party'
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
            value={description}
            placeholder='Party'
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
            value={budget}
            placeholder='Party'
            className='border border-zinc-600/50 rounded-xl p-3 focus:outline-blue-500/50 w-full'
          />
        </label>
        <div className="flex justify-between items-center gap-10">
          <Select multiple value={roles} defaultValue={['Dancer']} onChange={e => setRoles(typeof(e.target.value) === 'string' ? [e.target.value] : e.target.value)}>
            <option value="Dancer">Dancer</option>
            <option value="MC">Dancer</option>
            <option value="Carterer">Dancer</option>
            <option value="Mimer">Dancer</option>
          </Select>
        <label htmlFor='eventenddate' className='w-full'>
          <Text size='SMALL'>End Date</Text>
          <DatePicker
            onChange={(newDate) => setExpiryDate(newDate?.toDate().getTime())}
            value={dayjs(expiryDate)}
            className='grow border border-zinc-600/50 rounded-xl p-3 focus:outline-blue-500/50'
          />
        </label>
        </div>
          <Select multiple value={eventId} defaultValue={eventIds[0]} onChange={e => setEventId(e.target.value)}>
            {eventIds.map(eventId => <option value={eventId}>{getName(eventId)}</option>)}
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