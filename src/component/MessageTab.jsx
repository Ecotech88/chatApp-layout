import SideBar from './SideBar.jsx'
import Chats from './Chats.jsx'

const MessageTab = () => {
  return (
    <div className='lg:flex max-w-full max-h-screen  gap-1 '>
        <SideBar/>
        <Chats/>
    </div>
  )
}

export default MessageTab
