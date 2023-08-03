import Button from '@/app/components/button'
import Text from '@/app/components/text'

export default function ProposalCard() {
  return (
    <div className='w-[70%] bg-gray-600/10 shadow-md p-5 rounded-xl'>
      <div className='flex justify-between items-center gap-10'>
        <div className='flex justify-start items-center gap-2'>
          <Text size='SMALL'>From:</Text>
          <Text size='SMALL'>Dr. R. Didiumini</Text>
        </div>
        <div className='flex justify-start items-center gap-2'>
          <Text size='MEDIUM'>Date:</Text>
          <Text size='MEDIUM'>7/11/2023</Text>
        </div>
      </div>
      <div className='flex justify-start items-center gap-2'>
        <Text size='MEDIUM'>For:</Text>
        <Text size='MEDIUM'>Birthday Party For My 3yo Daughter.</Text>
      </div>
      <div className='flex flex-col gap-3'>
        <Text size='SMALL'>Proposal:</Text>
        <Text size='SMALL'>Lorem ipsum dolor...</Text>
        <Button type='button'>Read More...</Button>
      </div>
    </div>
  )
}
