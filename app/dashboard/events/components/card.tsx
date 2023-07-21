import Text from '@/app/components/text'

export default function Card({
  name,
  type,
  cost,
  date,
}: {
  name: string
  type: string
  cost: number
  date: Date
}) {
  return (
    <div className='w-full h-fit p-5 rounded-xl shadow-sm border border-gray-900/30'>
      <div className='w-full flex justify-between items-center gap-10 mb-5'>
        <Text size='MEDIUM'>{name}</Text>
        <Text size='MEDIUM'>N{cost}</Text>
      </div>
      <div className='w-full flex justify-between items-center gap-10'>
        <Text size='MEDIUM'>{type}</Text>
        <Text size='SMALL'>{date.toLocaleDateString()}</Text>
      </div>
    </div>
  )
}
