export type Event = {
  id: string
  hostId: string
  title: string
  type: string
  startDate: timestamp
  endDate: timestamp
  jobIds: string[]
  edited: timestamp
  created: timestamp
}


/** Create mock data for the events type */
export const events: Event[] = []