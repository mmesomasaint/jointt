'use client'

import { useState } from 'react'
import Text from '@/app/components/text'
import Button from '@/app/components/button'
import Link from 'next/link'
import Tab from '../components/tab'
import NoContent from '../components/nocontent'

export default function Career() {
  const [activeTab, setActiveTab] = useState<string>('Profile')

  return (
    <div className='flex flex-col justify-start gap-0 overflow-hidden h-full'>
      <div className='p-3 pb-1 pt-12'>
        <div className='flex justify-between gap-10 items-center'>
          <Text size='BOLD'>Career</Text>
          <Button type='button'>
            <Link href='events/host'>Activate Career</Link>
          </Button>
        </div>
          <div className='mt-16 flex justify-center items-center gap-16'>
            <Tab onClick={() => setActiveTab('Jobs')}>Jobs</Tab>
            <Tab onClick={() => setActiveTab('Recent')}>Recent</Tab>
          <Tab onClick={() => setActiveTab('Profile')}>Profile</Tab>
          </div>
      </div>
      <hr className='bg-black/50' />
      <div className='flex-grow p-3 flex flex-col justify-start items-center gap-3 overflow-scroll'>
        <NoContent />
      </div>
    </div>
  )
}
