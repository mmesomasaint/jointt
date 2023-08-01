'use client'

import { useState, useEffect } from 'react'
import Text from '@/app/components/text'
import Button from '@/app/components/button'
import Tab from '../components/tab'
import NoContent from '../components/nocontent'
import { useAuthContext } from '@/app/auth/authcontext'
import getDataWithQuery from '../getQuery'
import addData from '../addData'
import ActivationForm from './components/activationform'
import ActivatePrompt from './components/activateprompt'
import JobCard from './components/jobCard'

type CareerProfileType = {
  name: string
  role: string
  pay: number
  status: boolean
  userId?: string
}

type JobType = {
  title: string
  description: string
  budget: number
  roles: string[]
  hostId?: string
  expiryDate: number
  created: number
}

const Jobs: JobType[] = [
  {
    title: 'A cook for birthday party',
    description: 'I need a cook for a birthday party of daughter',
    budget: 400,
    roles: ['Cook', 'Caterer', 'Chef'],
    hostId: '',
    expiryDate: 10003450,
    created: 1245246454,
  },
  {
    title: 'A dancer for birthday party',
    description: 'I need a dancer for a birthday party of daughter',
    budget: 400,
    roles: ['Break Dancer', 'Mime', 'Dancer'],
    hostId: '',
    expiryDate: 1013423450,
    created: 1234246454,
  },
  {
    title: 'A DJ for Night party',
    description: 'I need a dj for a secret surprise night party',
    budget: 400,
    roles: ['DJ', 'Sound Engineer'],
    hostId: '',
    expiryDate: 10003450,
    created: 1245246454,
  },
]

export default function Career() {
  const { user } = useAuthContext()
  const [activeTab, setActiveTab] = useState<string>('Profile')
  const [isActivated, setIsActivated] = useState<boolean>(false)
  const [showActivatePrompt, setShowActivatePrompt] = useState<boolean>(
    isActivated === false
  )
  const [careerProfile, setCareerProfile] = useState<CareerProfileType>({
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

    setIsActivated(true)
    setActiveTab('Jobs')
  }

  useEffect(() => {
    const isCareerActive = async () => {
      const userData = await getUserCareerData()
      if (userData?.docs?.length) {
        setIsActivated(true)
        setShowActivatePrompt(false)
      } else setIsActivated(false)
    }

    isCareerActive()
  }, [])

  return (
    <>
      {showActivatePrompt && (
        <ActivatePrompt
          handleClose={() => setShowActivatePrompt(false)}
          handleActivate={() => {
            setShowActivatePrompt(false)
            setActiveTab('Activate')
          }}
        />
      )}
      {activeTab === 'Activate' && (
        <ActivationForm
          name={careerProfile.name}
          role={careerProfile.role}
          pay={careerProfile.pay}
          status={careerProfile.status}
          setName={(name: string) =>
            setCareerProfile((prev) => ({ ...prev, name }))
          }
          setRole={(role: string) =>
            setCareerProfile((prev) => ({ ...prev, role }))
          }
          setPay={(pay: number) =>
            setCareerProfile((prev) => ({ ...prev, pay }))
          }
          setStatus={(status: boolean) =>
            setCareerProfile((prev) => ({ ...prev, status }))
          }
          onSubmitForm={handleSubmitForm}
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
          {isActivated && <NoContent />}
          {activeTab === 'Jobs' &&
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
          {activeTab === 'Recent' &&
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
