import Button from '@/app/components/button'
import Text from '@/app/components/text'
import Modal from '../../components/modal'

export default function JobPage({
  title,
  desc,
  roles,
  budget,
  expireDate,
  created,
}: {
  title: string
  desc: string
  roles: string[]
  budget: number
  expireDate: number
  created: number
}) {
  return (
    <div className='rounded-xl bg-gray-600/10 text-black p-5 border border-gray-600/50 w-[70%] focus:bg-blue-600/10'>
      <Text size='SEMIBOLD'>{title}</Text>
      <div className='flex justify-start items-center gap-1'>
        <Text size='SMALL' className='text-gray-900/70'>
          Posted:
        </Text>
        <Text size='SMALL'>{created}</Text>
      </div>
      <div className='flex justify-start items-center gap-1'>
        <Text size='SMALL'>Expire:</Text>
        <Text size='SMALL'>{new Date(expireDate).toLocaleDateString()}</Text>
      </div>
      <hr className='bg-black/50' />
      <div className='flex flex-col gap-2'>
        <Text size='SMALL'>Description:&nbsp;</Text>
        <Text size='SMALL'>{desc}</Text>
      </div>
      <hr className='bg-black/50' />
      <div className='flex flex-col gap-2'>
        <Text size='SMALL'>Roles:&nbsp;</Text>
        <div className='flex justify-start items-center gap-3'>
          {roles.map((role) => (
            <div key={role} className='rounded-xl bg-gray-900/50 p-2 shadow-xl'>
              <Text size='SMALL'>{role}</Text>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-between items-center gap-10'>
        <div className='flex justify-start items-center gap-1'>
          <Text size='SMALL'>Budget:</Text>
          <Text size='SMALL'>{budget}</Text>
        </div>
      </div>
      <Button type='button' className='mt-4'>
        Apply Now
      </Button>
    </div>
  )
}
