import Checkbox from '@mui/material/Checkbox'
import Text from '@/app/components/text'
import Modal from '../../components/modal'
import Button from '@/app/components/button'

export default function ActivationForm({
  name,
  role,
  pay,
  status,
  setName,
  setRole,
  setPay,
  setStatus,
  onSubmitForm,
}: {
  name: string
  role: string
  pay: number
  status: boolean
  setName: (newName: string) => void
  setRole: (newRole: string) => void
  setPay: (newPay: number) => void
  setStatus: (newStatus: boolean) => void
  onSubmitForm: (e: React.FormEvent<HTMLFormElement>) => void
}) {
  return (
    <Modal>
      <form
        className='p-5 flex flex-col gap-3 rounded-xl bg-white text-black'
        onSubmit={onSubmitForm}
      >
        <label htmlFor='name' className='w-full'>
          <Text size='SMALL'>Name</Text>
          <input
            onChange={(e) => setName(e.target.value)}
            required
            type='text'
            name='name'
            id='name'
            value={name}
            placeholder='Party'
            className='border border-zinc-600/50 rounded-xl p-3 focus:outline-blue-500/50 w-full'
          />
        </label>
        <div className='flex justify-evenly items-center gap-5'>
          <label htmlFor='role' className='w-full'>
            <Text size='SMALL'>Role</Text>
            <input
              onChange={(e) => setRole(e.target.value)}
              required
              type='text'
              name='role'
              id='role'
              value={role}
              placeholder='Dancer'
              className='border border-zinc-600/50 rounded-xl p-3 focus:outline-blue-500/50 w-full'
            />
          </label>
          <label htmlFor='pay' className='w-full'>
            <Text size='SMALL'>Pay</Text>
            <div className='flex justify-start items-center gap-1'>
              <Text size='SMALL'>$</Text>
              <input
                onChange={(e) => setPay(parseInt(e.target.value))}
                required
                type='number'
                name='pay'
                id='pay'
                value={pay}
                placeholder='50'
                className='border border-zinc-600/50 rounded-xl p-3 focus:outline-blue-500/50 w-full'
              />
              <Text size='SMALL'>/hr</Text>
            </div>
          </label>
          <label htmlFor='pay' className='w-full'>
            <Text size='SMALL'>Available</Text>
            <Checkbox
              value={status}
              onChange={(_, newStatus) => setStatus(newStatus)}
            />
          </label>
        </div>
        <Button
          type='submit'
          className='disabled:bg-gray-600/50 disabled:border-gray-600/50 mt-5'
        >
          Activate
        </Button>
      </form>
    </Modal>
  )
}
