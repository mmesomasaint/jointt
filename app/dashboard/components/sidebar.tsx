import Avatar from './avatar'
import Nav from './nav'

export default function SideBar() {
  return (
    <div className='flex flex-col gap-24 justify-center items-center p-5'>
      <Avatar src={null} />
      <Nav />
    </div>
  )
}
