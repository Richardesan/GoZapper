import React from "react";
import ModalForm from "./modalForm";
import ModalContents from "./modalContents";

interface ModalProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: boolean;
}

const Modal: React.FC<ModalProps> = ({ setOpenModal, openModal }) => {
  const handleClose = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    event.stopPropagation(); // Prevents the event from bubbling up to parent elements
    setOpenModal(false);
  };

  return (
    <div
      className={`fixed bg-black top-0 left-0 cursor-default w-full h-screen flex justify-center items-center text-darkText transition-opacity duration-200 ${
        openModal ? "bg-opacity-50 opacity-100" : "bg-opacity-0 opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`bg-white transform transition-transform duration-200 ease-in-out ${
          openModal ? "scale-100 opacity-100" : "scale-90 opacity-0"
        } w-[37%] py-10 px-7 rounded-xl shadow-lg relative`}
      >
        <img
          src="/X.svg"
          className="absolute right-6 top-4 cursor-pointer"
          onClick={handleClose}
          alt="Close"
        />
        <ModalContents />
<ModalForm />
      </div>
    </div>
  );
};

export default Modal;
