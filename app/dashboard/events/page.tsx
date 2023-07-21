'use client'
import Text from '@/app/components/text'
import Tab from '../components/tab'
import NoContent from '../components/nocontent'
import Card from './components/card'

export default function Events() {
  const handleTabs = () => {}

  return (
    <div className='flex flex-col justify-start gap-0 overflow-hidden h-full'>
      <div className='p-3 pb-1 pt-12'>
        <Text size='BOLD'>Events</Text>
        <div className='mt-16 flex justify-start items-center gap-16'>
          <Tab onClick={handleTabs}>Active</Tab>
          <Tab onClick={handleTabs}>Pending</Tab>
          <Tab onClick={handleTabs}>Records</Tab>
        </div>
      </div>
      <hr className='bg-black/50' />
      <div className='flex-grow p-3 flex flex-col justify-start items-center gap-3 overflow-scroll'>
        {events.length === 0 ? (
          <NoContent />
        ) : (
          events.map(({ name, type, cost, date }) => (
            <Card name={name} type={type} cost={cost} date={date} />
          ))
        )}
      </div>
    </div>
  )
}

type EventType = { name: string; type: string; cost: number; date: Date }

const events: EventType[] = [
  { name: 'Birthday Party', type: 'Party', cost: 20000, date: new Date() },
]
