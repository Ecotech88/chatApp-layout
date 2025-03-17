import backIcon from '../assets/arrow.png';
import { Users } from '../constant/Data';

const SideBar = () => {
  return (
    <div className='flex flex-col justify-between lg:max-w-[500px] border-yellow-50 max-h-screen border-r-2 shadow-2xl md:w-full'>
      <div className="p-4 flex justify-between items-center">
        <img className='shadow-lg shadow-gray-600 w-8 bg-white border-none rounded-full p-1 cursor-pointer' src={backIcon} alt="" />
      </div>

      <div className='flex-1 mt-3 overflow-y-auto border-b-2 md:w-full lg:w-auto hide-scrollbar' style={{ maxHeight: 'calc(100vh - 200px)' }}>
        {Users.map((users, id) => (
          <div key={id} className="border-b-2 py-4 px-4 hover:bg-gray-100 cursor-pointer transition duration-100 flex items-start justify-between gap-4">
            <div className='flex items-center gap-5'>
              <img className='w-12 h-12 md:w-14 md:h-14 object-cover rounded-full' src={users.images} alt="" />
              <div className='flex-col justify-center'>
                <h2 className='font-bold text-sm md:text-lg lg:text-xl'>{users.name}</h2>
                <p className='text-xs md:text-sm lg:text-base text-gray-600'>{users.greeting}</p>
              </div>
            </div>
            <span className="bg-purple-500 rounded-full px-3 text-white text-xs md:text-sm text-center my-2 font-semibold">
              LOOKING
            </span>
          </div>
        ))}
      </div>

      <div className='w-full bg-white border-red-700 border-2 rounded-lg shadow-sm shadow-red-400 p-4 bg-red-200/20 mx-2 sm:mx-4'>
        <span className='text-white bg-red-500 px-2 rounded-sm text-sm md:text-base'>SAFETY TIPS: </span>
        <div className='text-red-600 font-medium mt-2 space-y-2'>
          <p className='text-xs md:text-sm leading-normal'>-Roomi support Will NOT reach out via email </p>
          <p className='text-xs md:text-sm leading-normal'>-DO NOT send money before meeting in person</p>
          <p className='text-xs md:text-sm leading-normal'>-Please flag suspicious behavior</p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
