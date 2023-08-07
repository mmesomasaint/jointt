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
