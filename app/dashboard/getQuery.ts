import firebase_app from '../firebase'
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  WhereFilterOp,
  FieldPath,
} from 'firebase/firestore'

const db = getFirestore(firebase_app)

export default async function getDataWithQuery(
  collectionName: string,
  fieldpath: string | FieldPath,
  op: WhereFilterOp,
  value: unknown
) {
  const collectionRef = collection(db, collectionName)
  const q = query(collectionRef, where(fieldpath, op, value))
  let result = null
  let error = null

  try {
    result = await getDocs(q)
  } catch (e) {
    error = e
  }

  return { result, error }
}
