'use client'

import Text from '@/app/components/text'
import TabHandler from '../components/tab'
import NoContent from '../components/nocontent'
import type { Tab } from '../components/tab'
import getDataWithQuery from '../getQuery'

const tabs: Tab[] = [
  {
    title: 'Inbox',
    query: {
      fieldpath: 'hostId',
      op: '==',
      value: 'myId',
    },
  },
  {
    title: 'Outbox',
    query: {
      fieldpath: 'recipientId',
      op: '==',
      value: 'myId',
    },
  },
]

export default function Proposals() {
  const onTabSwitch = async (active: string) => {
    const activeTab = tabs.find((tab) => tab.title === active)

    if (activeTab) {
      const query = activeTab.query
      const { result, error } = await getDataWithQuery(
        'proposals',
        query.fieldpath,
        query.op,
        query.value
      )
      if (error) {
        console.log('Error Fetching Proposals: ', error)
        return
      }

      console.log('Fetching Proposals Successfull', result)
    }
  }

  return (
    <>
      <div className='flex flex-col justify-start gap-0 overflow-hidden h-full'>
        <div className='p-3 pb-1 pt-12'>
          <div className='flex justify-between gap-10 items-center'>
            <Text size='BOLD'>Proposals</Text>
          </div>
          <div className='mt-16 flex justify-center items-center gap-16'>
            <TabHandler
              titles={tabs.map((tab) => tab.title)}
              onSwitch={(active) => onTabSwitch(active)}
            />
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
