import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import type { AppProps } from "next/app";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { InjectedConnector } from 'wagmi/connectors/injected'
import { sepolia } from "wagmi/chains";
import { bletestnet } from "./api/chains";
import { publicProvider } from "wagmi/providers/public";
import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import Layout from "../components/Layout";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [bletestnet],
  [publicProvider()]
);

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--inter",
});

const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID as string;

const { connectors } = getDefaultWallets({
  appName: "ethena",
  projectId: projectId,
  chains,
});

const wagmiConfig = createConfig({
  //autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className={`${inter.variable} overflow-hidden`}>
      {isLoaded && (
        <WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider chains={chains} modalSize="compact">
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </RainbowKitProvider>
        </WagmiConfig>
      )}
    </main>
  );
}

export default MyApp;
