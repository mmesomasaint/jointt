'use client'

import { useState, useEffect } from 'react'
import Text from '@/app/components/text'
import Button from '@/app/components/button'
import { Tab } from '../components/tab'
import NoContent from '../components/nocontent'
import ActivationForm from './components/activationform'
import ActivatePrompt from './components/activateprompt'
import JobCard from './components/jobCard'
import CreateJobForm from './components/createJobForm'
import useCareerProfile from './components/usecareerprofile'

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
  const { careerProfile } = useCareerProfile()
  const [activeTab, setActiveTab] = useState<string>('Listing')
  const [isActivated, setIsActivated] = useState<boolean>(
    Boolean(careerProfile)
  )
  const [showActivationForm, setShowActivationForm] = useState<boolean>(false)

  useEffect(() => {
    if (Boolean(careerProfile)) setIsActivated(true)
    else setIsActivated(false)
  }, [careerProfile])

  return (
    <>
      {showActivationForm && (
        <ActivationForm
          closeFn={() => setShowActivationForm(false)}
          exitFn={() => {
            setIsActivated(true)
            setShowActivationForm(false)
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
            <Button
              type='button'
              onClick={() => setActiveTab('Profile')}
              disabled={!isActivated}
            >
              Profile
            </Button>
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
          {activeTab === 'Created' && (
            <Button type='button' onClick={() => setActiveTab('Create Job')}>
              Create Job
            </Button>
          )}
          {(activeTab === 'Listing' || activeTab === 'Invites') &&
          !isActivated ? (
            <ActivatePrompt
              handleActivate={() => setShowActivationForm(true)}
            />
          ) : Jobs.length > 0 ? (
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
          )}
        </div>
      </div>
    </>
  )
}
