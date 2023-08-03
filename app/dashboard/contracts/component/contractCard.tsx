import Text from '@/app/components/text'

export default function ContractCard({title, role, host, recipient, startDate, endDate}: {title: string, role: string, host: string, recipient: string, startDate: number, endDate: number}) {
  return (
    <div className='bg-gray-600/10 border border-gray-600/50 shadow-xl p-5 rounded-xl'>
      <div className='flex flex-col gap-3'>
        <div className='flex justify-between items-center gap-10'>
          <div className='flex justify-start items-center gap-2'>
            <Text size='SMALL'>Host:</Text>
            <Text size='SMALL'>{host}</Text>
          </div>
          <div className='flex justify-start items-center gap-2'>
            <Text size='SMALL'>Recipient:</Text>
            <Text size='SMALL'>{recipient}</Text>
          </div>
        </div>
        <Text size='MEDIUM'>{title}</Text>
        <div className='flex justify-between items-center gap-10'>
          <div className='flex justify-start items-center gap-2'>
            <Text size='SMALL'>Role:</Text>
            <Text size='SMALL'>{role}</Text>
          </div>
          <div className='flex justify-evenly items-center gap-2'>
            <div className='flex justify-start items-center gap-2'>
              <Text size='SMALL'>From:</Text>
              <Text size='SMALL'>{new Date(startDate).toLocaleDateString()}</Text>
            </div>
            <div className='flex justify-start items-center gap-2'>
              <Text size='SMALL'>To:</Text>
              <Text size='SMALL'>{new Date(endDate).toLocaleDateString()}</Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
