'use client'

import { useState, useEffect } from 'react'
import { MdClose } from 'react-icons/md'
import Text from '@/app/components/text'
import Button from '@/app/components/button'
import Tab from '../components/tab'
import NoContent from '../components/nocontent'
import { useAuthContext } from '@/app/auth/authcontext'
import getDataWithQuery from '../getQuery'
import Modal from '../components/modal'

export default function Career() {
  const { user } = useAuthContext()
  const [activeTab, setActiveTab] = useState<string>('Profile')
  const [isActivated, setIsActivated] = useState<boolean>(false)
  const [showActivatePrompt, setShowActivatePrompt] = useState<boolean>(true)
  const getUserCareerData = async () => {
    const { result, error } = await getDataWithQuery(
      'contractors',
      'userId',
      '==',
      user?.uid
    )
    if (error) {
      console.log('User Career Error: \n', error)
      return null
    }
    return result
  }

  useEffect(() => {
    const isCareerActive = async () => {
      const userData = await getUserCareerData()
      if (userData?.docs?.length) setIsActivated(true)
      else setIsActivated(false)
    }

    isCareerActive()
  }, [])

  return (
    <>
      {showActivatePrompt && (
        <ActivatePrompt
          handleClose={() => setShowActivatePrompt(false)}
          handleActivate={() => setActiveTab('Activate')}
        />
      )}
      <div className='flex flex-col justify-start gap-0 overflow-hidden h-full'>
        <div className='p-3 pb-1 pt-12'>
          <div className='flex justify-between gap-10 items-center'>
            <Text size='BOLD'>Career</Text>
            {isActivated ? (
              <Button type='button' onClick={() => setActiveTab('Profile')}>
                Profile
              </Button>
            ) : (
              <Button type='button' onClick={() => setActiveTab('Activate')}>
                Activate Career
              </Button>
            )}
          </div>
          <div className='mt-16 flex justify-center items-center gap-16'>
            <Tab onClick={() => setActiveTab('Jobs')}>Jobs</Tab>
            <Tab onClick={() => setActiveTab('Recent')}>Recent</Tab>
          </div>
        </div>
        <hr className='bg-black/50' />
        <div className='flex-grow p-3 flex flex-col justify-start items-center gap-3 overflow-scroll'>
          <NoContent />
        </div>
      </div>
    </>
  )
}

function ActivatePrompt({
  handleClose,
  handleActivate,
}: {
  handleClose: () => void
  handleActivate: () => void
}) {
  return (
    <Modal>
      <div className='rounded-xl p-7 bg-white relative w-[50%] text-black flex flex-col gap-2 items-center justify-start'>
        <div className='absolute top-2 right-2 w-fit' onClick={handleClose}>
          <MdClose className='text-blue-600 text-xl' />
        </div>
        <Text size='BOLD'>Activate!</Text>
        <Text size='SMALL'>You need to activate your career first.</Text>
        <Button
          type='button'
          className='disabled:bg-gray-600/50 disabled:border-gray-600/50 mt-5'
          onClick={handleActivate}
        >
          Proceed to activate
        </Button>
      </div>
    </Modal>
  )
}
