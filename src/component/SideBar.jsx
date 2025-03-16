import backIcon from '../assets/arrow.png';
import { Users } from '../constant/Data';

const SideBar = () => {
  return (
    <div className='flex flex-col justify-between lg:max-w-[500px] border-yellow-50 max-h-screen border-r-2 shadow-2xl
     md:w-full   '>
<div className="p-4 flex justify-between items-center">
        <img className='shadow-lg shadow-gray-600 w-8 bg-white border-none rounded-full p-1 cursor-pointer' src={backIcon} alt="" />
      </div>

    
      <div className='flex-1 mt-3 overflow-y-auto  border-b-2 md:w-full lg:w-auto hide-scrollbar'>
        {Users.map((users, id) => (
          <div key={id} className="border-b-2 py-6 px-4 hover:bg-gray-100 cursor-pointer transition duration-10
           flex items-start justify-between gap-4">
            <div className='flex items-center gap-5'>
              <img className='size-14 object-cover rounded-full' src={users.images} alt="" />
              <div className='flex-col justify-center'>
                <h2 className='font-bold text-base md:text-2xl'>{users.name}</h2>
                <p className='text-base md:text-xl'>{users.greeting}</p>
              </div>
            </div>
            <span className="bg-purple-500 rounded-full px-3 text-white  text-sm md:text-xl text-center my-2 font-semibold">
              LOOKING
            </span>
          </div>
        ))}
      </div>
    
     

         <div className='
          w-full md:mx-auto mx-auto
         sm:w-full  bg-white   border-red-700 border-2 m-4
          rounded-lg shadow-sm  shadow-red-400 p-4 bg-red-200/20'>
       
        <span className='text-white bg-red-500 px-2 rounded-sm'>SAFETY TIPS: </span>
    
    <div className='text-red-600 font-medium '>
    <p className='sm:w-full text-sm'>-Roomi support Will NOT reach out via email </p>
    <p className='sm:w-full text-sm'>-DO NOT send money before meeting in person</p>
    <p className='sm:w-full text-sm'>-Please flag suspicious behavior</p>
    
    </div>            
    </div>
       </div>
    
  );
}

export default SideBar;