import React, { useState } from 'react';
import { AiOutlineSwap } from 'react-icons/ai';

const BridgeComponent: React.FC = () => {
  const [source, setSource] = useState('Ethereum');
  const [destination, setDestination] = useState('Sepolia');
  const [amount, setAmount] = useState('');
  const [bridgeAmount, setBridgeAmount] = useState<string>('');
  const [bridgeAddress, setBridgeAddress] = useState<string>('');

  // Swap Source and Destination
  const handleSwap = () => {
    const temp = source;
    setSource(destination);
    setDestination(temp);
  };

  // Confirm Action
  const handleConfirm = () => {
    console.log(`Bridging ${amount} from ${source} to ${destination}`);
    alert(`Bridging ${amount} from ${source} to ${destination}`);
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800 text-center">Bridge Tokens</h1>

      <div className="flex flex-row justify-between space-x-6">
        {/* Source Input */}
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Source Network</label>
          <select
            value={source}
            onChange={(e) => setSource(e.target.value)}
            className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Ethereum</option>
            <option>Sepolia</option>
            <option>Polygon</option>
            <option>Binance Smart Chain</option>
          </select>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center items-center">
          <button
            onClick={handleSwap}
            className="bg-gray-200 hover:bg-gray-300 p-4 rounded-full text-blue-600 transition-all duration-200 focus:outline-none focus:ring focus:ring-blue-500"
          >
            <AiOutlineSwap size={28} />
          </button>
        </div>

        {/* Destination Input */}
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Destination Network</label>
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Ethereum</option>
            <option>Sepolia</option>
            <option>Polygon</option>
            <option>Binance Smart Chain</option>
          </select>
        </div>
      </div>

      {/* Amount Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount to bridge"
          className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Confirm Button */}
      <button
        onClick={handleConfirm}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Confirm
      </button>
    </div>
  );
};

export default BridgeComponent;
