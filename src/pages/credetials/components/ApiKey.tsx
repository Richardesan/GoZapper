import React, { useState } from "react";
import Button from "../../../components/button";
import Modal from "./modalComponent/modal";

interface ApiKeyData {
  id: number;
  name: string;
  environment: string;
  keyID: string;
  status: boolean;
  dateCreated: string;
}

const ApiKey: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const fakeDataApi: ApiKeyData[] = [
    {
      id: 1,
      name: "Developer Key",
      environment: "Sandbox",
      keyID: "randomsheet",
      status: true,
      dateCreated: "Aug 29, 2024",
    },
    {
      id: 2,
      name: "Gozapper",
      environment: "Sandbox",
      keyID: "randomsheet",
      status: false,
      dateCreated: "Aug 19, 2024",
    },
  ];

  return (
    <div className="w-full border-2 border-borderCol rounded-md pt-6 my-7 text-lightText">
      <section className="flex justify-between items-center px-6 pb-4">
        <div>
          <p className="font-bold text-darkText text-lg">API Keys</p>
          <p className="text-lightText text-sm mt-1">1/2 Active Access keys</p>
        </div>
        <section className="flex gap-10 cursor-pointer items-center">
          <div className="font-bold flex items-center text-sm gap-2">
            <img src="/Trash.svg" alt="Delete" />
            Delete
          </div>
          <div onClick={() => setOpenModal(true)}>
            <Button
              name="Create Access Key"
              backgroundColor="bg-custom-gradient"
              textColor="text-white"
              image="/Plus.svg"
              rounded="rounded-md"
            />
          </div>
        </section>
      </section>
      {<Modal openModal={openModal} setOpenModal={setOpenModal} />}
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-[#EEEEEE] text-left text-lightText tracking-wider text-xs">
            <th className="px-6 py-3 border-b-2 border-borderCol">Name</th>
            <th className="px-6 py-3 border-b-2 border-borderCol">Environment</th>
            <th className="px-6 py-3 border-b-2 border-borderCol">Key ID</th>
            <th className="px-6 py-3 border-b-2 border-borderCol">Status</th>
            <th className="px-6 py-3 border-b-2 border-borderCol">Date Created</th>
          </tr>
        </thead>
        <tbody className="text-sm text-darkText">
          {fakeDataApi.map((key) => (
            <tr key={key.id} className="border-t border-borderCol">
              <td className="px-6 py-4 font-bold">{key.name}</td>
              <td className="px-6 py-4 text-lightText font-semibold">{key.environment}</td>
              <td className="px-6 py-4 flex items-end gap-3">
                {"1**************"} 
                <img src="Copy.svg" alt="Copy" className="cursor-pointer" />
              </td>
              <td className="px-6 py-4">
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full font-semibold ${
                    key.status ? "bg-[#EBFFF0] text-primaryCol" : "bg-[#EEEEEE]"
                  }`}
                >
                  <img
                    src={key.status ? "/dotactive.svg" : "/dotainactive.svg"}
                    alt={key.status ? "Active" : "Inactive"}
                  />
                  {key.status ? "Active" : "Inactive"}
                </div>
              </td>
              <td className="px-6 py-4">{key.dateCreated}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApiKey;
