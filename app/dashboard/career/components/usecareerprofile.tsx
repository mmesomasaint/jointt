import { useState, useEffect } from "react";
import { DocumentData } from "firebase/firestore";
import getDataWithQuery from "../../getQuery";
import { useAuthContext } from "@/app/auth/authcontext";

export default function useCareerProfile() {
  const [careerProfile, setCareerProfile] = useState<DocumentData>()
  const {user} = useAuthContext()

  const getUserCareerData = async () => {
    const { result, error } = await getDataWithQuery(
      'career_profiles',
      'userId',
      '==',
      user?.uid
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

  return {careerProfile}
}