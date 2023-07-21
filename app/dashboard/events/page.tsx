'use client'
import Text from '@/app/components/text'
import Tab from '../components/tab'
import NoContent from '../components/nocontent'
import Card from './components/card'
import Button from '@/app/components/button'
import Link from 'next/link'

export default function Events() {
  const handleTabs = (filter: string) => {}

  return (
    <div className='flex flex-col justify-start gap-0 overflow-hidden h-full'>
      <div className='p-3 pb-1 pt-12'>
        <div className='flex justify-between gap-10 items-center'>
          <Text size='BOLD'>Events</Text>
          <Button type='button'>
            <Link href='events/host'>Host Event</Link>
          </Button>
        </div>
        <div className='mt-16 flex justify-start items-center gap-16'>
          <Tab onClick={() => handleTabs('active')}>Active</Tab>
          <Tab onClick={() => handleTabs('active')}>Pending</Tab>
          <Tab onClick={() => handleTabs('active')}>Records</Tab>
        </div>
      </div>
      <hr className='bg-black/50' />
      <div className='flex-grow p-3 flex flex-col justify-start items-center gap-3 overflow-scroll'>
        {events.length === 0 ? (
          <NoContent />
        ) : (
          events.map(({ name, type, cost, date }) => (
            <Card key={`${name}=>${date.toLocaleDateString()}`} name={name} type={type} cost={cost} date={date} />
          ))
        )}
      </div>
    </div>
  )
}

type EventType = { name: string; type: string; cost: number; date: Date }

const events: EventType[] = [
  { name: 'Birthday Party', type: 'Party', cost: 20000, date: new Date() },
  { name: 'Child Dedication', type: 'Party', cost: 8000, date: new Date() },
  { name: 'Convocation', type: 'Party', cost: 2000, date: new Date() },
  { name: 'Burn Fire', type: 'Party', cost: 3000, date: new Date() },
  { name: 'Burial', type: 'Memorial', cost: 30000, date: new Date() },
]
