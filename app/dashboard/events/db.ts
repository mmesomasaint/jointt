export type Event = {
  id: string
  hostId: string
  title: string
  type: string
  startDate: number
  endDate: number
  jobIds: string[]
  edited: number
  created: number
}


/** Create mock data for the events type */
export const events: Event[] = []