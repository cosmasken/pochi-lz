import { useState } from "react";

function Send() {
    const [network, setNetwork] = useState<string>("Ethereum");
    const [amount, setAmount] = useState<string>("");
    const [sendAddress, setSendAddress] = useState<string>("");

    const handleSend = () => {
        if (!amount || parseFloat(amount) <= 0) {
            alert("Please enter a valid amount.");
            return;
        }
        if (!sendAddress) {
            alert("Please enter a valid address.");
            return;
        }
        console.log(`Sending ${amount} on ${network} network to ${sendAddress}`);
        // Add send logic here
    };

    return (
        <div className="max-w-sm mx-auto mt-8 bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-blue-900 mb-6 text-center">Send Crypto</h2>
            <div className="space-y-4">
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
                <select
                    value={network}
                    onChange={(e) => setNetwork(e.target.value)}
                    className="w-full border border-blue-300 rounded-lg p-3 text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option>Ethereum</option>
                    <option>Bitcoin</option>
                    <option>Polkadot</option>
                </select>
                <button
                    onClick={handleSend}
                    className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition-all"
                >
                    Send Now
                </button>
            </div>
        </div>
    );
}

export default Send;
