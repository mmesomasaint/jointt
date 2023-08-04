import type { InferGetServerSidePropsType, GetStaticProps } from 'next'
import Text from '@/app/components/text'

type ProposalType = {
  jobTitle: string
  from: string
  text: string
  created: number
}

export const getStaticProps: GetStaticProps<{
  proposal: ProposalType
}> = async () => {
  // Fetch proposal based on id passed...

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
          <Text size='SEMIBOLD'>{new Date(proposal.created)}</Text>
        </div>
      </div>
    </div>
  )
}
