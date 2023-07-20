import Avatar from './avatar'
import Nav from './nav'

export default function SideBar() {
  return (
    <div className='flex flex-col gap-16 justify-center items-center p-5 bg-blue-900/50 min-h-screen'>
      <Avatar src={null} />
      <Nav />
    </div>
  )
}
