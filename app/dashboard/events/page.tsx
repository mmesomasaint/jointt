import Text from '@/app/components/text'
import Tab from '../components/tab'

export default function Events() {
  const handleTabs = () => {}

  return (
    <div className='flex flex-col justify-start gap-0'>
      <div className='p-3'>
        <Text size='BOLD'>Events</Text>
        <div className='mt-24 flex justify-evenly items-center gap-5'>
          <Tab onClick={handleTabs}>Active</Tab>
          <Tab onClick={handleTabs}>Pending</Tab>
          <Tab onClick={handleTabs}>Records</Tab>
        </div>
        <hr />
      </div>
      <div className='flex-grow'>This is the display...</div>
    </div>
  )
}
