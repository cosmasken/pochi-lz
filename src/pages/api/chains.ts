import { defineChain } from "viem";
const bletestnet = defineChain({
    id: 52085143, // Chain ID for your custom network
    name: 'BLE Testnet',
    network: 'ble-testnet',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: {
    public: { http: ['https://testnet.rpc.ethena.fi'] },
    default: { http: ['https://testnet.rpc.ethena.fi'] },
    },
    blockExplorers: {
      default: { name: 'BlockExplorer', url: 'https://testnet.explorer.ethena.fi/' },
    },
  });

  export { bletestnet };