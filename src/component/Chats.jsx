import Messages from './Messages.jsx'
import setingIcons from '../assets/cogwheel.png'
import Input from './Input.jsx'

 const Chats = () =>{
   return (

    <div className=' sm:hidden lg:w-3/4 h-screen hidden flex flex-col
    '>
      <div className="flex justify-end p-3">
        <img className='w-8 cursor-pointer' src={setingIcons} alt="" />
      </div>
      <Messages />
      <Input />
    </div>
  )
 }
export default Chats
