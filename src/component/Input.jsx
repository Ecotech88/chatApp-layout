import React from 'react';
import sendMsg from '../assets/sendMsg.png';
import imgIcon from '../assets/image.png';

const Input = () => {
  return (
    <div className='rounded-md border-2 p-5 flex flex-col gap-3'>
      <div className='flex justify-between items-center'>
        <div className='flex flex-col items-center w-3/4'>
          <textarea
            className='w-full h-20 overflow-hidden bg-transparent outline-none md:text-2xl font-semibold p-2'
            placeholder='start typing...'
          />
        </div>
        <div className='flex justify-end gap-3'>
          <div className="flex flex-col gap-3 items-end">
            <div className='flex flex-col items-center gap-3'>
              <input type="file" id='file' hidden />
              <label htmlFor="file">
                <img className='w-8 cursor-pointer' src={imgIcon} alt="" />
              </label>
            </div>
            <button className='flex flex-row items-center gap-2 bg-gray-400 hover:bg-gray-300 border-1 text-white p-2 rounded-xl text-lg max-w-24 font-bold'>
              <img className='w-4' src={sendMsg} alt="" />
              SEND
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Input;