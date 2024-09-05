import Step from "./stepComponent/step"

const Steps = () => {
  const stepData = [
    {
      step: 1,
      name: "Get Started with the Development",
      descripiton: "Utilize the documentation to  understand the integration process and generate test credentials.",
      stepStatusActive: false,
      stepActive: true,
      
      buttonText: "Generate Access Key"
    },
    {
      step: 2,
      name: "Utilize the Delivery Simulator",
      descripiton: "Begin by using the delivery simulator to test and validate your integration setup",
      stepActive: false,
      stepStatusActive: true,
      buttonText: "Utilize Delivery Simulator"
    },
    {
      step: 3,
      name: "Release to Production",
      descripiton: "Initiate the process to request production access and then generate your production credentials",
      stepActive: false,
      stepStatusActive: false,
      buttonText: "Request Production Access"
    }
  ]
  return (
    <div className="mt-10 flex gap-7">
       {stepData.map((data)=> {
        return (
          <div key={data.step} className="flex-1">
            <Step stepActive={data.stepStatusActive} stepNumber={data.step} name={data.name} descripiton={data.descripiton} stepStatus={data.stepActive} buttonText={data.buttonText}/>
          </div>
        )
       })}
    </div>
  )
}

export default Steps