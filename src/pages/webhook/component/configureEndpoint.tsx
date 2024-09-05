import React, { useState } from 'react'
import Modal from './Modal/modal'

const ConfigureEndpoint = () => {
  const configClass= 'border-dashed border-2 w-1/2 p-2 rounded-xl border-primaryCol flex flex-col gap-4 py-10 mt-10 items-center justify-between text-center cursor-pointer'

  const [openModal, setOpenModal] = useState(false)

  return (

    <div className={configClass} onClick={()=> {setOpenModal(true)}}>
        <img src='/PlusVector.svg'/>
        <div className="mt-2">
        <p className='font-bold mb-2'>Configure an Endpoint</p>
        <p className='w-72 leading-tight'>Set up an endpoint to receive webhook events for delivery updates. </p>
        </div>
      {<Modal openModal={openModal} setOpenModal={setOpenModal} />}
       
    </div>
  
  )
}

export default ConfigureEndpoint