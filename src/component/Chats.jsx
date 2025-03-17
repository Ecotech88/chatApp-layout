import Messages from './Messages.jsx'
import setingIcons from '../assets/cogwheel.png'
import Input from './Input.jsx'

 const Chats = () =>{
   return (

    <div className=' hidden lg:w-full lg:flex  max-h-full flex-col px-3
    '>
      <div className="flex justify-end p-3 m-2">
        <img className='w-8 cursor-pointer' src={setingIcons} alt="" />
      </div>

      <div className=' p-10 gap-4 lg:flex flex-col basis-[100%]
     '>

        <div className='rounded-full w-10 h-10 bg-green-800 text-white text-center
         flex items-center justify-center font-bold text-3xl p-6'>A</div>

        <div className='flex flex-col'>
          <h2 className='font-bold text-2xl flex gap-2 items-center'>Anu 
            <span className='text-sm text-gray-300'>01/31/24 4 : 56 am</span>
          </h2>
          <p className='text-xl font-light'>Number</p>
        </div>
      </div>

       <Input />
    </div>
  )
 }
export default Chats
