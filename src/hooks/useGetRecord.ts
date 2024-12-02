import { useAccount, useContractRead, useNetwork } from "wagmi";
import connect from "../constants/connect";

const useGetRecord = () => {
  const { address } = useAccount();
  const { chain } = useNetwork();

  const { data: record } = useContractRead({
    //@ts-ignore
    // address: connect?.[chain?.id]?.address,
    address: connect?.pochi.address,
    //@ts-ignore
    // abi: connect?.[chain?.id]?.abi,
    abi: connect?.pochi.abi,
    functionName: "getRecord",
    args: [address],
    watch: true,
  });

  return record;
};

export default useGetRecord;
