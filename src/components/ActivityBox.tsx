import SavingsCard from "./SavingsCard";

import SavingsGraph from "./SavingsGraph";
import RewardCard from "./RewardCard";
import Send from "./Send";
import Receive from "./Receive";
import BridgeComponent from "./Bridge";

const ActivityBox = () => {
  return (
    <main className="w-[70%] ">
     
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
    <SavingsCard />
    <RewardCard />
    <Send/>
    <Receive/>
    <SavingsGraph />
    </div>
      {/* <div className="flex gap-x-8 items-center">
        <SavingsCard />

        <RewardCard />
      </div>
      <div className="flex gap-x-8 items-center">
        <Send/>
        <Receive/>
      </div>

      <SavingsGraph /> */}
    </main>
  );
};
export default ActivityBox;
