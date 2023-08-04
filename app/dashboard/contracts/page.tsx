import Text from '@/app/components/text'
import TabHandler from '../components/tab'
import NoContent from '../components/nocontent'
import ContractCard from './component/contractCard'
import type { Tab } from '../components/tab'

type Contract = {
  title: string
  role: string
  host: string
  recipient: string
  startDate: number
  endDate: number
}

const tabs: Tab[] = [
  {
    title: 'Host',
    query: {
      fieldpath: 'hostId',
      op: '==',
      value: 'myId',
    },
  },
  {
    title: 'Pending',
    query: {
      fieldpath: 'hostId',
      op: '==',
      value: 'myId',
    },
  },
]

const contracts: Contract[] = [
  {
    title: 'Birthday Party For MY 3yo Daughter.',
    role: 'Dancer',
    host: 'Dr Mahatma Gaundi',
    recipient: 'James Gunn',
    startDate: new Date(Date.parse('07/09/2023')).getTime(),
    endDate: new Date(Date.parse('08/09/2023')).getTime(),
  },
  {
    title: 'Birthday Party For MY 3yo Daughter.',
    role: 'Dancer',
    host: 'Dr Mahatma Gaundi',
    recipient: 'James Gunn',
    startDate: new Date(Date.parse('07/09/2023')).getTime(),
    endDate: new Date(Date.parse('08/09/2023')).getTime(),
  },
  {
    title: 'Birthday Party For MY 3yo Daughter.',
    role: 'Dancer',
    host: 'Dr Mahatma Gaundi',
    recipient: 'James Gunn',
    startDate: new Date(Date.parse('07/09/2023')).getTime(),
    endDate: new Date(Date.parse('08/09/2023')).getTime(),
  },
  {
    title: 'Birthday Party For MY 3yo Daughter.',
    role: 'Dancer',
    host: 'Dr Mahatma Gaundi',
    recipient: 'James Gunn',
    startDate: new Date(Date.parse('07/09/2023')).getTime(),
    endDate: new Date(Date.parse('08/09/2023')).getTime(),
  },
]

export default function Contracts() {
  return (
    <>
      <div className='flex flex-col justify-start gap-0 overflow-hidden h-full'>
        <div className='p-3 pb-1 pt-12'>
          <div className='flex justify-between gap-10 items-center'>
            <Text size='BOLD'>Contracts</Text>
          </div>
          <div className='mt-16 flex justify-center items-center gap-16'>
            <TabHandler titles={['Host', 'Recipient']} />
          </div>
        </div>
        <hr className='bg-black/50' />
        <div className='flex-grow p-3 flex flex-col justify-start items-center gap-5 overflow-auto'>
          {contracts.length > 0 ? (
            contracts.map((contract) => (
              <ContractCard
                title={contract.title}
                role={contract.role}
                host={contract.host}
                recipient={contract.recipient}
                startDate={contract.startDate}
                endDate={contract.endDate}
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
