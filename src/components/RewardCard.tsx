import { ethers } from "ethers";
import useGetBalance from "../hooks/useGetBalance";
import Fire from "./icons/Fire";
import { useBalance , useAccount } from 'wagmi';

const RewardCard = () => {

  const { address } = useAccount();
  const pochiTokenBalance = useGetBalance("pochitoken");
  const usdeBalance = useGetBalance("usde");

  const { data, isError, isLoading } = useBalance({
    address: address as `0x${string}`, // Type-safe Ethereum address
  });

  if (isLoading) return <div>Loading balance...</div>;
  if (isError) return <div>Error fetching balance</div>;

  return (
    <div className=" bg-gray/5 rounded-lg p-8 w-full text-right">
      <div className="flex flex-col">
        <div>
        <span className="flex justify-end mt-2">
        <Fire />
        Balance
      </span>
        <p className="text-xl font-semibold">
        {
          //@ts-ignore
          Math.floor(ethers?.formatEther(pochiTokenBalance || "0") * 100) / 100
        }{" "}
        POCHI
      </p>
      
        </div>
        <div>
        <p className="text-xl font-semibold">
        {
          //@ts-ignore
          Math.floor(ethers?.formatEther(usdeBalance || "0") * 100) / 100
        }{" "}
        USDe
      </p>
      <span className="flex justify-end mt-2">
      </span>
          </div>
          <div>
          <p className="text-xl font-semibold">
          {data?.formatted} {data?.symbol}
      </p>
      <span className="flex justify-end mt-2">
      </span>
          </div>

      </div>
      
    </div>
  );
};
export default RewardCard;
