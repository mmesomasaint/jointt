'use client'

import { useState, useEffect } from 'react'
import Text from '@/app/components/text'
import Button from '@/app/components/button'
import { Tab } from '../components/tab'
import NoContent from '../components/nocontent'
import { useAuthContext } from '@/app/auth/authcontext'
import getDataWithQuery from '../getQuery'
import addData from '../addData'
import ActivationForm from './components/activationform'
import ActivatePrompt from './components/activateprompt'
import JobCard from './components/jobCard'
import CreateJobForm from './components/createJobForm'

type CareerProfile = {
  name: string
  role: string
  pay: number
  status: boolean
  userId?: string
}

type Job = {
  title: string
  description: string
  budget: number
  roles: string[]
  hostId?: string
  expiryDate: number
  created: number
}

const Jobs: Job[] = [
  {
    title: 'A cook for birthday party',
    description: 'I need a cook for a birthday party of daughter',
    budget: 400,
    roles: ['Cook', 'Caterer', 'Chef'],
    hostId: '',
    expiryDate: new Date(Date.parse('1/07/2025')).getTime(),
    created: new Date(Date.parse('12/06/2023')).getTime(),
  },
  {
    title: 'A dancer for birthday party',
    description: 'I need a dancer for a birthday party of daughter',
    budget: 400,
    roles: ['Break Dancer', 'Mime', 'Dancer'],
    hostId: '',
    expiryDate: new Date(Date.parse('12/16/2023')).getTime(),
    created: new Date(Date.parse('1/07/2023')).getTime(),
  },
  {
    title: 'A DJ for Night party',
    description: 'I need a dj for a secret surprise night party',
    budget: 400,
    roles: ['DJ', 'Sound Engineer'],
    hostId: '',
    expiryDate: new Date(Date.parse('10/21/2023')).getTime(),
    created: new Date(Date.parse('17/02/2023')).getTime(),
  },
]

export default function Career() {
  const { user } = useAuthContext()
  const [activeTab, setActiveTab] = useState<string>('Jobs')
  const [isActivated, setIsActivated] = useState<boolean>(false)
  const [showActivatePrompt, setShowActivatePrompt] = useState<boolean>(false)
  const [careerProfile, setCareerProfile] = useState<CareerProfile>({
    name: '',
    role: '',
    pay: 0,
    status: false,
    userId: user?.uid,
  })

  const getUserCareerData = async () => {
    const { result, error } = await getDataWithQuery(
      'career_profiles',
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

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { result, error } = await addData('career_profiles', careerProfile)
    if (error) {
      console.log('Profile Activation Error: ', error)
      return
    }
  }

  useEffect(() => {
    const isCareerActive = async () => {
      const userData = await getUserCareerData()
      if (userData?.docs?.length) {
        setIsActivated(true)
        setShowActivatePrompt(false)
        setActiveTab('Listing')
      } else {
        setIsActivated(false)
        setShowActivatePrompt(true)
      }
    }

    isCareerActive()
  }, [])

  return (
    <>
      {showActivatePrompt && (
        <ActivatePrompt
          handleClose={() => {
            setShowActivatePrompt(false)
            setActiveTab('Listing')
          }}
          handleActivate={() => {
            setShowActivatePrompt(false)
            setActiveTab('Activate')
          }}
        />
      )}
      {activeTab === 'Activate' && (
        <ActivationForm
          exitFn={() => {
            setIsActivated(true)
            setActiveTab('Jobs')
          }}
        />
      )}
      {activeTab === 'Create Job' && (
        <CreateJobForm exitFn={() => setActiveTab('Created')} />
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
            <Tab
              onClick={() => setActiveTab('Listing')}
              active={activeTab === 'Listing'}
            >
              Listing
            </Tab>
            <Tab
              onClick={() => setActiveTab('Invites')}
              active={activeTab === 'Invites'}
            >
              Invites
            </Tab>
            <Tab
              onClick={() => setActiveTab('Created')}
              active={activeTab === 'Created'}
            >
              Created
            </Tab>
          </div>
        </div>
        <hr className='bg-black/50' />
        <div className='flex-grow p-3 flex flex-col justify-start items-center gap-3 overflow-auto'>
          {!isActivated && <NoContent />}
          {activeTab === 'Created' && (
            <Button type='button' onClick={() => setActiveTab('Create Job')}>
              Create Job
            </Button>
          )}
          {activeTab === 'Listing' &&
            (Jobs.length > 0 ? (
              Jobs.map((job) => (
                <JobCard
                  title={job.title}
                  desc={job.description}
                  roles={job.roles}
                  budget={job.budget}
                  expireDate={job.expiryDate}
                />
              ))
            ) : (
              <NoContent />
            ))}
          {activeTab === 'Invites' &&
            (Jobs.length > 0 ? (
              Jobs.map((job) => (
                <JobCard
                  title={job.title}
                  desc={job.description}
                  roles={job.roles}
                  budget={job.budget}
                  expireDate={job.expiryDate}
                />
              ))
            ) : (
              <NoContent />
            ))}
        </div>
      </div>
    </>
  )
}
