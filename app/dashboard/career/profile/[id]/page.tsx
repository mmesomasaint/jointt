import type {
  InferGetServerSidePropsType,
  GetStaticProps,
  GetStaticPaths,
} from 'next'

type Profile = {
  name: string
  role: string
  pay: string
  status: boolean
  userId: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch all the proposals sent to this user,
  // both the inbox and outbox.

  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<{
  profile: Profile
}> = async ({ params }) => {
  // Fetch profile based on id passed to params...

  const profile = {
    name: "Amadi David",
    role: "Dancer",
    pay: "50",
    status: true,
    userId: "dafasdfa"
  }
  return { props: { profile } }
}

export default function Profile({
  profile,
}: InferGetServerSidePropsType<typeof getStaticProps>) {
  return(
    <div>This is the profile page and it belongs to {profile.userId}</div>
  )
}