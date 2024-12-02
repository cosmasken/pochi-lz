import {
    useNetwork,
    useContractWrite,
    usePrepareContractWrite,
    useWaitForTransaction,
  } from "wagmi";
  
  import { useState } from "react";
  import { useDebounce } from "../hooks/useDebounce";
  import Loader from "./icons/Loader";
  import connect from "../constants/connect";
  import { ethers } from "ethers";
  
  const StakeUSDe = () => {
    const [amount, setAmount] = useState("");
    const [recipient, setRecipient] = useState("");
    const [isApproved, setIsApproved] = useState(false);
  
    const { chain } = useNetwork();
  
    const debouncedAmount = useDebounce<string>(amount, 500);
    const debouncedRecipient = useDebounce<string>(recipient, 500);
  
    // Approve spending
    const { config: approveConfig } = usePrepareContractWrite({
    //  address: connect?.usde?.address as `0x${string}`,
      abi: connect?.usde?.abi,
      functionName: "approve",
      args: [connect?.susde?.address, ethers.parseEther(debouncedAmount || "0")],
    });
  
    const {
      write: approveSpend,
      data: approveData,
      isLoading: isApproving,
    } = useContractWrite(approveConfig);
  
    const { isLoading: isWaitingApproveTx } = useWaitForTransaction({
      hash: approveData?.hash,
      onSuccess() {
        setIsApproved(true);
      },
    });
  
    // Stake USDe
    const { config: stakeConfig } = usePrepareContractWrite({
    //  address: connect?.pochi?.address ,
      abi: connect?.pochi?.abi,
      functionName: "stakeUSDe",
      args: [ethers.parseEther(debouncedAmount || "0"), debouncedRecipient],
    });
  
    const {
      write: stake,
      data: stakeData,
      isLoading: isStaking,
    } = useContractWrite(stakeConfig);
  
    const { isLoading: isWaitingStakeTx } = useWaitForTransaction({
      hash: stakeData?.hash,
      onSuccess() {
        setAmount("");
        setRecipient("");
        setIsApproved(false);
        console.log("Staking successful!");
      },
    });
  
    return (
      <div className="flex flex-col gap-y-3 py-4">
        <div>
          <label htmlFor="" className="text-base font-medium text-gray-900">
            Amount
          </label>
          <div className="mt-2">
            <input
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              disabled={isApproved || isApproving || isWaitingApproveTx}
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="USDe"
            ></input>
          </div>
        </div>
  
        <div>
          <label htmlFor="" className="text-base font-medium text-gray-900">
            Recipient Address
          </label>
          <div className="mt-2">
            <input
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              disabled={isApproved || isApproving || isWaitingApproveTx}
              className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Recipient Address"
            ></input>
          </div>
        </div>
  
        <div className="flex gap-x-5">
          <button
            onClick={() => approveSpend?.()}
            disabled={isApproved}
            type="button"
            className={`${
              !isApproved
                ? "bg-yellow hover:bg-yellow/90 text-black"
                : "bg-black/10 cursor-not-allowed text-white"
            } inline-flex w-full items-center justify-center rounded-md px-3.5 py-2.5 font-semibold leading-7 `}
          >
            {isApproving ? (
              <Loader alt />
            ) : isWaitingApproveTx ? (
              <Loader alt />
            ) : (
              "Approve"
            )}
          </button>
  
          <button
            onClick={() => stake?.()}
            type="button"
            className={`${
              isApproved
                ? "bg-yellow hover:bg-yellow/90 text-black"
                : "bg-black/10 cursor-not-allowed text-white"
            } inline-flex w-full items-center justify-center rounded-md px-3.5 py-2.5 font-semibold leading-7 `}
          >
            {isStaking ? (
              <Loader alt />
            ) : isWaitingStakeTx ? (
              <Loader alt />
            ) : (
              "Stake"
            )}
          </button>
        </div>
      </div>
    );
  };
  
  export default StakeUSDe;
  