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
  ratings: number[]
  vetted: boolean
  created: number
}
