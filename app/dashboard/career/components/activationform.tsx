import { useState } from 'react'
import Checkbox from '@mui/material/Checkbox'
import { MdClose } from 'react-icons/md'
import Text from '@/app/components/text'
import Modal from '../../components/modal'
import Button from '@/app/components/button'
import addData from '../../addData'

export default function ActivationForm({ exitFn }: { exitFn: () => void }) {
  const [profile, setProfile] = useState({
    name: '',
    role: '',
    pay: Number(),
    status: false,
  })
  const setName = (name: string) => setProfile((prev) => ({ ...prev, name }))
  const setRole = (role: string) => setProfile((prev) => ({ ...prev, role }))
  const setPay = (pay: number) => setProfile((prev) => ({ ...prev, pay }))
  const setStatus = (status: boolean) =>
    setProfile((prev) => ({ ...prev, status }))

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { result, error } = await addData('career_profiles', profile)
    if (error) {
      console.log('Profile Activation Error: ', error)
      return
    }

    exitFn()
  }

  return (
    <Modal>
      <form
        className='relative p-5 flex flex-col gap-3 rounded-xl bg-white text-black'
        onSubmit={onSubmitForm}
      >
        <div className='absolute top-2 right-2 w-fit' onClick={exitFn}>
          <MdClose className='text-blue-600 text-xl' />
        </div>
        <Text size='SEMIBOLD'>Activation Form</Text>
        <label htmlFor='name' className='w-full'>
          <Text size='SMALL'>Name</Text>
          <input
            onChange={(e) => setName(e.target.value)}
            required
            type='text'
            name='name'
            id='name'
            value={profile.name}
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
              value={profile.role}
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
                value={profile.pay}
                placeholder='50'
                className='border border-zinc-600/50 rounded-xl p-3 focus:outline-blue-500/50 w-full'
              />
              <Text size='SMALL'>/hr</Text>
            </div>
          </label>
          <label htmlFor='pay' className='w-full'>
            <Text size='SMALL'>Available</Text>
            <Checkbox
              value={profile.status}
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
