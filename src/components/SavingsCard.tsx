import { ethers } from "ethers";
import useGetBalance from "../hooks/useGetBalance";
import useGetRecord from "../hooks/useGetRecord";
import { useCountdown } from "../hooks/useCountdown";
import { useState } from "react";
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
  useAccount,
  useNetwork,
} from "wagmi";
import connect from "../constants/connect";
import Loader from "./icons/Loader";
import Lock from "./icons/Lock";
import Balance from "./icons/Balance";

const SavingsCard = () => {
  const balance = useGetBalance("usde");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const { address } = useAccount();
  const record = useGetRecord();
  const { chain } = useNetwork();
  const [isOpen, setIsOpen] = useState(false);

  const { days, hours, minutes, seconds, isCountdownCompleted } = useCountdown(
    //@ts-ignore
    parseInt(record?.expiresAt)
  );

  // Prepare contract write for withdrawal
const { config: withdrawalConfig, refetch: refetchWithdraw } = usePrepareContractWrite({
  //@ts-ignore
  address: connect?.pochi?.address,
  //@ts-ignore
  abi: connect?.pochi?.abi,
  functionName: "withdraw",
  args: [ethers.parseEther(withdrawAmount || "0")],
  enabled: withdrawAmount !== "",
});

const { write: withdraw, data: withdrawalData, isLoading: isWithdrawing } = useContractWrite(
  withdrawalConfig
);

const { isLoading: isWaitingWithdrawTx } = useWaitForTransaction({
  hash: withdrawalData?.hash,
  onSuccess(tx) {
    setWithdrawAmount(""); // Reset input after success
  },
});

const handleWithdraw = async () => {
  await refetchWithdraw();
  withdraw?.();
};

  const { config, refetch } = usePrepareContractWrite({
    //@ts-ignore
    address: connect?.pochi?.address,
    //@ts-ignore
    abi: connect?.pochi?.abi,
    functionName: "breakPiggy",
    enabled: false,
  });

  const {
    write: breakPiggy,
    data,
    isLoading: isBreaking,
  } = useContractWrite(config);

  const { isLoading: isWaitingTx } = useWaitForTransaction({
    hash: data?.hash,
    onSuccess(tx) {
      //disable modal
      setIsOpen(false);
    },
  });

  const handleBreak = async () => {
    await refetch();
    breakPiggy?.();
  };

  return (
    <div className="relative bg-gray/5 rounded-lg p-8 w-full overflow-hidden">
      {
        //@ts-ignore
        record?.status > 0 && (
          <div
            className={`${
              isOpen ? "flex" : "hidden"
            } absolute text-center top-0 right-0 w-full h-full bg-base-100 text-white p-4  flex-col justify-between`}
          >
            <h3 className="font-semibold text-xl">
              {isCountdownCompleted
                ? "Great Job Saving! 🌦️"
                : "You can do better! 🎳"}
            </h3>
            <p className="">
              {isCountdownCompleted
                ? "Earn POCHI tokens when you break your piggy!"
                : "You will be charged 5% penalty if you break before duration"}
            </p>

            <div className="flex gap-x-2 items-center justify-between mt-2">
              <button
                onClick={() => handleBreak()}
                className="bg-yellow text-black px-3.5 py-2.5 rounded-sm w-full inline-flex justify-center items-center"
              >
                {isBreaking ? (
                  <Loader alt />
                ) : isWaitingTx ? (
                  <Loader alt />
                ) : (
                  "proceed"
                )}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="border-white  text-white px-3.5 py-2.5rounded-sm w-full inline-flex justify-center items-center"
              >
                cancel
              </button>
            </div>
          </div>
        )
      }
      <div className="flex flex-col gap-y-5">
        <div className="flex items-center justify-between">
          <div className="text-left">
            <p className="text-xl font-semibold flex flex-col ">
              <span>
                {
                  //@ts-ignore
                  ethers.formatEther(record?.balance || 0)
                }
                USDe
              </span>
              <small className="text-xs text-gray/40">
                ~{" "}
                {
                  //@ts-ignore
                  ethers.formatEther(record?.balance || 0) * 1000
                }{" "}
                KSH
              </small>
            </p>
            <span className="flex items-center justify-start mt-2">
              {" "}
              <Lock /> Locked
            </span>
          </div>

          <div className="text-right">
            <p className="text-xl font-semibold flex flex-col ">
              <span>
                {
                  //@ts-ignore
                  ethers.formatEther(balance || 0)
                }
                USDe
              </span>
              <small className="text-xs text-gray/40">
                ~{" "}
                {
                  //@ts-ignore
                  ethers.formatEther(balance || 0) * 1000
                }{" "}
                KSH
              </small>
            </p>
            <span className="flex items-center justify-end mt-2">
              <Balance /> Bal
            </span>
          </div>
        </div>
        {
          //@ts-ignore
          record?.status > 0 && (
            <>
              <div className="font-mono text-xl text-center">
                {isCountdownCompleted ? (
                  <p>Savings goal achieved!</p>
                ) : (
                  <>
                    <p className="text-xs">Locked until</p>
                    <p>
                      {days}:{hours}:{minutes}:{seconds}
                    </p>
                  </>
                )}
              </div>

              <button
                onClick={() => setIsOpen(true)}
                className={`${
                  isCountdownCompleted
                    ? "bg-green-700 hover:bg-green-700/90 active:bg-green-700"
                    : "bg-red-400 hover:bg-red-500"
                }  text-white inline-flex w-full items-center justify-center rounded-md px-3.5 py-2.5 font-semibold leading-7`}
              >
                Break Piggy
              </button>
            </>
          )
        }
      </div>
      <div className="mt-4">
  <h4 className="text-lg font-semibold">Withdraw Funds</h4>
  <div className="flex items-center gap-x-2 mt-2">
    <input
      type="number"
      step="0.01"
      placeholder="Enter amount (USDe)"
      value={withdrawAmount}
      onChange={(e) => setWithdrawAmount(e.target.value)}
      className="w-full border-gray-300 rounded-md p-2 text-black"
    />
    <button
      onClick={handleWithdraw}
      disabled={!withdrawAmount || isWithdrawing || isWaitingWithdrawTx}
      className={`${
        isWithdrawing || isWaitingWithdrawTx ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
      } text-white px-4 py-2 rounded-md`}
    >
      {isWithdrawing || isWaitingWithdrawTx ? <Loader alt /> : "Withdraw"}
    </button>
  </div>
</div>

    </div>
  );
};
export default SavingsCard;
