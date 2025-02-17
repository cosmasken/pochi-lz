import { useState } from "react";
import { useContractRead, useAccount, useNetwork } from "wagmi";
import connect from "../constants/connect";
import NewPiggy from "./NewPiggy";
import UpdatePiggy from "./UpdatePiggy";

const HandleSavings = () => {
  const { address } = useAccount();
  const { chain } = useNetwork();

  const { data: isActive } = useContractRead({
    //@ts-ignore
    address: connect?.pochi?.address,
    //@ts-ignore
    abi: connect?.pochi?.abi,
    functionName: "isActive",
    args: [address],
    watch: true,
  });

  return <div>{isActive ? <UpdatePiggy /> : <NewPiggy />}</div>;
};

export default HandleSavings;
