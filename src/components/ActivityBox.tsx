import SavingsCard from "./SavingsCard";

import SavingsGraph from "./SavingsGraph";
import RewardCard from "./RewardCard";

const ActivityBox = () => {
  return (
    <main className="w-[70%] ">
     

      <div className="flex gap-x-8 items-cente">
        <SavingsCard />

        <RewardCard />
      </div>

      <SavingsGraph />
    </main>
  );
};
export default ActivityBox;
