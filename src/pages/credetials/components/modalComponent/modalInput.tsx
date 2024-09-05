import React from 'react';
import Button from '../../../../components/button';

interface ModalInputProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalInput: React.FC<ModalInputProps> = ({ setOpenModal }) => {
  const inputClass =
    "text-darkText mt-1 w-full outline-none border border-borderCol rounded-md p-2";

  return (
    <form>
      <label>
        <span className='font-semibold text-sm block mt-5'>Name</span>
        <input type="text" className={inputClass} />
      </label>
     <select className={`${inputClass} mt-5`}>
      <option >Select</option>
      <option >Sandbox</option>
     </select>
      <div className="flex items-center gap-3 mt-7">
        <div className="w-full" onClick={() => setOpenModal(false)}>
          <Button
            name="Cancel"
            borderCol="border-borderCol"
            borderWidth="border-2"
            textColor="text-lightText"
            rounded="rounded-md"
          />
        </div>
        <Button
          name="Create Access Key"
          backgroundColor="bg-custom-gradient"
          textColor="text-white"
          rounded="rounded-md"
        />
      </div>
    </form>
  );
};

export default ModalInput;
