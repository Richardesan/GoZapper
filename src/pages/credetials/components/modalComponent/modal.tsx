import React from "react";
import ModalInput from "./modalInput";
import ModalContent from "./modalContent";

interface ModalProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: boolean;
}

const Modal: React.FC<ModalProps> = ({ setOpenModal, openModal }) => {
  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <div
      className={`fixed bg-black top-0 left-0 w-full h-screen flex justify-center items-center text-darkText transition-opacity duration-200 ${
        openModal ? "bg-opacity-50 opacity-100" : "bg-opacity-0 opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`bg-white transform transition-transform duration-200 ease-in-out ${
          openModal
            ? "scale-100 opacity-100"
            : "scale-90 opacity-0"
        } w-[37%] py-10 px-7 rounded-xl shadow-lg relative`}
      >
        <img
          src="/X.svg"
          className="absolute right-6 top-4 cursor-pointer"
          onClick={handleClose}
        />
        <ModalContent />
        <ModalInput setOpenModal={setOpenModal} />
      </div>
    </div>
  );
};

export default Modal;
