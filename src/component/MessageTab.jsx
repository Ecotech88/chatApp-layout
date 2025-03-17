import SideBar from './SideBar.jsx'
import Chats from './Chats.jsx'

const MessageTab = () => {
  return (
    <div className='lg:flex max-w-full h-screen overflow-hidden gap-2 '>
        <SideBar/>
        <Chats/>
    </div>
  )
}

export default MessageTab
