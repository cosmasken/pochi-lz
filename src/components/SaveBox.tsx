import { useState } from "react";
import HandleSavings from "../components/HandleSavings";
import StakeUSDe from "./Stake";

const SaveBox = () => {
  const [selected, setSelected] = useState("deposit");

  return (
    <aside className="lg:w-[30%] p-4">
      <div className="">
        <div className={"w-full text-gray/90  cursor-pointer"}>
            Deposit USDe
          </div>
      <HandleSavings/>
      Stake USDe on Ethena Network
      <StakeUSDe/>
      </div>
    </aside>
  );
};

export default SaveBox;
