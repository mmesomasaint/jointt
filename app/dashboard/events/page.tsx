import Text from '@/app/components/text'
import TabHandler from '../components/tab'
import NoContent from '../components/nocontent'
import Card from './components/card'
import Button from '@/app/components/button'
import Link from 'next/link'
import type { Tab } from '../components/tab'
import getDataWithQuery from '../getQuery'

const tabs: Tab[] = [
  {
    title: 'Active',
    query: {
      fieldpath: 'status',
      op: '==',
      value: 'ACTIVE',
    },
  },
  {
    title: 'Pending',
    query: {
      fieldpath: 'status',
      op: '==',
      value: 'PENDING',
    },
  },
  {
    title: 'Completed',
    query: {
      fieldpath: 'status',
      op: '==',
      value: 'COMPLETED',
    },
  },
]

export default function Events() {
  const onTabSwitch = async (active: string) => {
    const activeTab = tabs.find((tab) => tab.title === active)

    if (activeTab) {
      // Run query based on active tab.
      const query = activeTab.query
      const { result, error } = await getDataWithQuery(
        'events',
        query.fieldpath,
        query.op,
        query.value
      )
      if (error) {
        console.log('Error Fetching Events: ', error)
        return
      }

      console.log('Fetching Events Successfull', result)
    }
  }

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
          <TabHandler titles={tabs.map((tab) => tab.title)} onSwitch={(active) => onTabSwitch(active)} />
        </div>
      </div>
      <hr className='bg-black/50' />
      <div className='flex-grow p-3 flex flex-col justify-start items-center gap-3 overflow-y-auto'>
        {events.length === 0 ? (
          <NoContent />
        ) : (
          events.map(({ name, type, cost, date }) => (
            <Card
              key={`${name}=>${date.toLocaleDateString()}`}
              name={name}
              type={type}
              cost={cost}
              date={date}
            />
          ))
        )}
      </div>
    </div>
  )
}

type StatusType = 'PENDING' | 'ONGOING' | 'COMPLETED'
type EventType = {
  name: string
  type: string
  cost: number
  status: StatusType
  date: Date
}

const events: EventType[] = [
  {
    name: 'Birthday Party',
    type: 'Party',
    cost: 20000,
    status: 'COMPLETED',
    date: new Date(),
  },
  {
    name: 'Child Dedication',
    type: 'Party',
    cost: 8000,
    status: 'ONGOING',
    date: new Date(),
  },
  {
    name: 'Convocation',
    type: 'Party',
    cost: 2000,
    status: 'PENDING',
    date: new Date(),
  },
  {
    name: 'Burn Fire',
    type: 'Party',
    cost: 3000,
    status: 'ONGOING',
    date: new Date(),
  },
  {
    name: 'Burial',
    type: 'Memorial',
    cost: 30000,
    status: 'COMPLETED',
    date: new Date(),
  },
]
