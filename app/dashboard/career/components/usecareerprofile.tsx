import { useState, useEffect } from 'react'
import { DocumentData } from 'firebase/firestore'
import getDataWithQuery from '../../getQuery'

export default function useCareerProfile(userId) {
  const [careerProfile, setCareerProfile] = useState<DocumentData>()

  const getUserCareerData = async () => {
    const { result, error } = await getDataWithQuery(
      'career_profiles',
      'userId',
      '==',
      userId
    )
    if (error) {
      console.log('User Career Error: \n', error)
      return null
    }

    return result?.docs[0]
  }

  useEffect(() => {
    const isCareerActive = async () => {
      const userData = await getUserCareerData()
      if (userData) {
        setCareerProfile(userData)
      }
    }

    isCareerActive()
  }, [user])

  return { careerProfile }
}
