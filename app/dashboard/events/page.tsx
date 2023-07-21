'use client'
import Text from '@/app/components/text'
import Tab from '../components/tab'
import NoContent from '../components/nocontent'

export default function Events() {
  const handleTabs = () => {}

  return (
    <div className='flex flex-col justify-start gap-0'>
      <div className='p-3 pb-1 pt-12'>
        <Text size='BOLD'>Events</Text>
        <div className='mt-16 flex justify-start items-center gap-16'>
          <Tab onClick={handleTabs}>Active</Tab>
          <Tab onClick={handleTabs}>Pending</Tab>
          <Tab onClick={handleTabs}>Records</Tab>
        </div>
      </div>
      <hr />
      <div className='flex-grow p-3'>
        <NoContent />
      </div>
    </div>
  )
}
