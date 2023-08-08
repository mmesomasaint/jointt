export type Job = {
  id: string
  eventId: string
  roles: string[]
  budget: number
  proposalsId: string[]
  invitesId: string[]
  isPublic: boolean
  edited: number
  created: number
}

export type CareerProfile = {
  id: string
  userId: string
  roles: string[]
  payType: 'FIXED' | 'HOURLY'
  pay: number
  ratings: number[]
  vetted: boolean
  created: number
}

/** Create mock data for career profile */
export const profiles: CareerProfile[] = []
