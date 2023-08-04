import Text from '@/app/components/text'
import TabHandler from '../components/tab'
import NoContent from '../components/nocontent'

export default function Proposals() {
  return (
    <>
      <div className='flex flex-col justify-start gap-0 overflow-hidden h-full'>
        <div className='p-3 pb-1 pt-12'>
          <div className='flex justify-between gap-10 items-center'>
            <Text size='BOLD'>Contracts</Text>
          </div>
          <div className='mt-16 flex justify-center items-center gap-16'>
            <TabHandler titles={['Inbox', 'Outbox']} initialTitle='Inbox' />
          </div>
        </div>
        <hr className='bg-black/50' />
        <div className='flex-grow p-3 flex flex-col justify-start items-center gap-5 overflow-auto'>
          <NoContent />
        </div>
      </div>
    </>
  )
}
