
const Step = ({stepNumber, name, descripiton, stepStatus, stepActive, buttonText}: any) => {
  return (
    <div className={`   flex justify-between items-center flex-col text-center py-8 px-3 gap-5  rounded-[10px] ${stepNumber ===2 ? "mt-16" : stepNumber === 3 ? "mt-10 py-10": ""}  ${stepActive ? "border-dashed border-primaryCol border-2": "border-solid border-2 border-[#EEEEEE]"}`}>
      {stepStatus ?<img src="/Rectangle.svg" />:<p className="bg-[#EBFFF0] text-primaryCol text-sm p-2 rounded-md">
        Step 00{stepNumber}
      </p>}
      <div className="">
        <h1 className="text-lg font-bold mb-2">{name}</h1>
        <p className="text-base leading-5">{descripiton}</p>
      </div>

      {stepActive && <button className="bg-custom-gradient w-9/12 rounded-md text-white  justify-center p-2 text-sm font-bold flex gap-2 items-center shadow-custom-light">
          {buttonText}
          <img src='/ArrowRight.svg' />
      </button>}
    </div>
  );
};

export default Step;
