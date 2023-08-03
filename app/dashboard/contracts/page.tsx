'use client'

import { useState, useEffect } from 'react'
import Text from '@/app/components/text'
import Tab from '../components/tab'
import NoContent from '../components/nocontent'

export default function Contracts() {
  const [activeTab, setActiveTab] = useState<string>('Host')

  return (
    <>
      <div className='flex flex-col justify-start gap-0 overflow-hidden h-full'>
        <div className='p-3 pb-1 pt-12'>
          <div className='flex justify-between gap-10 items-center'>
            <Text size='BOLD'>Contracts</Text>
          </div>
          <div className='mt-16 flex justify-center items-center gap-16'>
            <Tab
              onClick={() => setActiveTab('Host')}
              active={activeTab === 'Host'}
            >
              Host
            </Tab>
            <Tab
              onClick={() => setActiveTab('Recipient')}
              active={activeTab === 'Recipient'}
            >
              Recipient
            </Tab>
          </div>
        </div>
        <hr className='bg-black/50' />
        <div className='flex-grow p-3 flex flex-col justify-start items-center gap-3 overflow-auto'>
          <NoContent />
        </div>
      </div>
    </>
  )
}
