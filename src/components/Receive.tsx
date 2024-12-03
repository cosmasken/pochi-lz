import React, { useState } from "react";

function Receive() {
    const [network, setNetwork] = useState<string>("Ethereum");
    const [amount, setAmount] = useState<string>("");
    const [receiveAmount, setReceiveAmount] = useState<string>("");
    const [qrData, setQrData] = useState<string | null>(null);

    const handleReceive = () => {
        const qrPayload = { amount: receiveAmount, network };
        setQrData(JSON.stringify(qrPayload));
        setReceiveAmount("");
    };

    const populateSendFromQR = (data: string) => {
        const { amount, network } = JSON.parse(data);
        setAmount(amount);
        setNetwork(network);
    };

    return (
        <div className="max-w-sm mx-auto mt-8 bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-purple-900 mb-6 text-center">Receive Crypto</h2>
            <div className="space-y-4">
                <input
                    type="number"
                    placeholder="Enter Amount"
                    value={receiveAmount}
                    onChange={(e) => setReceiveAmount(e.target.value)}
                    className="w-full border border-purple-300 rounded-lg p-3 text-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                    onClick={handleReceive}
                    className="w-full bg-purple-600 text-white font-medium py-3 rounded-lg hover:bg-purple-700 transition-all"
                >
                    Generate QR Code
                </button>
                {qrData && (
                    <div className="text-center bg-white p-4 rounded-md shadow-md">
                        <p className="text-purple-900 text-sm">Your QR Data:</p>
                        <p className="text-xs bg-gray-100 p-2 rounded mt-2 break-all">{qrData}</p>
                        <p
                            className="text-sm text-purple-600 mt-4 cursor-pointer underline"
                            onClick={() => populateSendFromQR(qrData)}
                        >
                            Use QR Data for Send
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Receive;
