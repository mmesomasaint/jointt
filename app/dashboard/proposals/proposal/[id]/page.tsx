import type {
  InferGetServerSidePropsType,
  GetStaticProps,
  GetStaticPaths,
} from 'next'
import { useRouter } from 'next/navigation'
import Text from '@/app/components/text'
import Button from '@/app/components/button'

type ProposalType = {
  jobTitle: string
  from: string
  text: string
  created: number
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch all the proposals sent to this user,
  // both the inbox and outbox.

  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<{
  proposal: ProposalType
}> = async ({ params }) => {
  // Fetch proposal based on id passed to params...

  const proposal = {
    jobTitle: 'Birthday For My 3yo Daughter',
    from: 'Mazi Kozacnikoff',
    text: 'I am going to be your cook throughout the process of this ceremony. I have specialty in various menu and I can do alot of heavy lifting...',
    created: Date.now(),
  }
  return { props: { proposal } }
}

export default function ProposalPage({
  proposal,
}: InferGetServerSidePropsType<typeof getStaticProps>) {
  const router = useRouter()

  return (
    <div className='p-3 bg-gray-900/5 overflow-y-auto'>
      <div className='flex flex-col gap-3'>
        <Text size='SMALL'>Application For:</Text>
        <Text size='SEMIBOLD'>{proposal.jobTitle}</Text>
      </div>
      <div className='p-3 bg-gray-900/10 h-fit'>
        <Text size='SMALL'>{proposal.text}</Text>
      </div>
      <div className='flex justify-between items-center gap-10'>
        <div className='flex flex-col gap-3'>
          <Text size='SMALL'>By:</Text>
          <Text size='SEMIBOLD'>{proposal.from}</Text>
        </div>
        <div className='flex flex-col gap-3'>
          <Text size='SMALL'>date:</Text>
          <Text size='SEMIBOLD'>
            {new Date(proposal.created).toLocaleDateString()}
          </Text>
        </div>
      </div>
      <div className='flex justify-center items-center gap-10'>
        <Button
          type='button'
          className='bg-gray-600 border-gray-600'
          onClick={() => router.back()}
        >
          Close
        </Button>
        <Button type='button'>Accept</Button>
      </div>
    </div>
  )
}
