import React from 'react'

const ModalForm = () => {
  const inputClass =
    "text-darkText  w-full outline-none text-base border border-borderCol rounded-md p-2 font-bold placeholder:text-[#AFAFAF]";

  return (
   
    <form>
    <label>
      <span className='font-semibold text-sm block mt-6 mb-2'>Name</span>
      <input type="text" className={inputClass} placeholder='Enter Name'/>
    </label>
    <label>
      <span className='font-semibold text-sm block mt-6 mb-2'>URL</span>
      <input type="text" className={inputClass} placeholder='https:///www.'/>
    </label>
    <label>
      <span className='font-semibold text-sm block mt-6 mb-2'>Authentication Header</span>
      <input type="text" className={inputClass} placeholder='e.g Bearer abcdef1234567890ghijklmnopqrstuv'/>
    </label>
    <p className='mt-2 text-[#1A1A1A] text-sm'>It has to be at least 16 characters. This token can be changed later</p>
    <button className='bg-custom-gradient shadow-custom-combined text-white w-full mt-10 py-4 rounded-lg font-bold'>
Configure Endpoint
    </button>
  </form>
  )
}

export default ModalForm