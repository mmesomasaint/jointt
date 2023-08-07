export type Job = {
  id: string
  eventId: string
  roles: string[]
  proposalsId: string[]
  invitesId: string[]
  isPublic: boolean
  edited: number
  created: number
}