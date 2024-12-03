import { useState } from "react";
import { useNetwork, useContractWrite, usePrepareContractWrite, useWaitForTransaction, useAccount } from "wagmi";
import { ethers } from "ethers";
import connect from "../constants/connect";
import Loader from "./icons/Loader";
import { useDebounce } from "../hooks/useDebounce";

function Send() {
  const [currency, setCurrency] = useState<string>("Eth");
  const [amount, setAmount] = useState<string>("");
  const [sendAddress, setSendAddress] = useState<string>("");
  const {address} =useAccount();

  const { chain } = useNetwork();

  // Debounced input handling
  const debouncedAmount = useDebounce<string>(amount, 500);
  const debouncedRecipient = useDebounce<string>(sendAddress, 500);

  // Prepare contracts for each token
  const { config: usdeConfig } = usePrepareContractWrite({
    abi: connect?.usde?.abi,
    functionName: "approve",
    args: [address, ethers.parseEther(debouncedAmount || "0")],
  });

  const { config: pochiConfig } = usePrepareContractWrite({
    abi: connect?.pochitoken?.abi,
    functionName: "approve",
    args: [address, ethers.parseEther(debouncedAmount || "0")],
  });

  // const { config: ethConfig } = usePrepareContractWrite({
  //   abi: [],
  //   functionName: "transferFrom",
  //   args: [],
  // });

  // Handle contract write for USDe
  const { write: approveUsde, data: approveDataUsde, isLoading: isApprovingUsde } = useContractWrite(usdeConfig);

  // Handle contract write for Pochi
  const { write: approvePochi, data: approveDataPochi, isLoading: isApprovingPochi } = useContractWrite(pochiConfig);

  // Handle contract write for Eth
  //const { write: sendEth, data: approveDataEth, isLoading: isSendingEth } = useContractWrite(ethConfig);

  const { isLoading: isWaitingApproveTx } = useWaitForTransaction({
    hash: approveDataUsde?.hash || approveDataPochi?.hash
  });

  // Handle send action
  const handleSend = () => {
    if (!amount || parseFloat(amount) <= 0) {
      alert("Please enter a valid amount.");
      return;
    }
    if (!sendAddress) {
      alert("Please enter a valid address.");
      return;
    }

    // Handle different send logic depending on the selected currency
    if (currency === "Eth") {
      //sendEth?.();
      approveUsde?.();
    } else if (currency === "USDe") {
      approveUsde?.();
    } else if (currency === "Pochi") {
      approvePochi?.();
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-8 bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold text-blue-900 mb-6 text-center">Send Crypto</h2>
      <div className="space-y-4">
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="w-full border border-blue-300 rounded-lg p-3 text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>Eth</option>
          <option>USDe</option>
          <option>Pochi</option>
        </select>
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border border-blue-300 rounded-lg p-3 text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Recipient Address"
          value={sendAddress}
          onChange={(e) => setSendAddress(e.target.value)}
          className="w-full border border-blue-300 rounded-lg p-3 text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSend}
          className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition-all"
        >
          {isApprovingUsde || isApprovingPochi || isWaitingApproveTx ? (
            <Loader alt />
          ) : (
            "Send Now"
          )}
        </button>
      </div>
    </div>
  );
}

export default Send;
