import SideBar from './SideBar.jsx'
import Chats from './Chats.jsx'

const MessageTab = () => {
  return (
    <div className='lg:flex w-full h-screen overflow-hidden '>
        <SideBar/>
        <Chats/>
    </div>
  )
}

export default MessageTab
