import React from "react";
import Skeleton from "../../components/skeleton";
import ApiKey from "./components/ApiKey";

const Credentials = () => {
  return (
      <Skeleton>
        <h1 className="font-black text-3xl text-darkText">Credentials</h1>
        <p className="text-lightText text-base font-medium my-3">Manage your API credentials for this instance</p>
        <ApiKey />
      </Skeleton>
    
  );
};

export default Credentials;
