import SideBar from './SideBar.jsx'
import Chats from './Chats.jsx'

const MessageTab = () => {
  return (
    <div className=' max-h-screen  gap-1 '>
        <SideBar/>
        <Chats/>
    </div>
  )
}

export default MessageTab
