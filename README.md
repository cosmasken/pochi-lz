# Ethena x Encode Club 

## ✨ Inspiration

Hyperinflation in Africa is on the rise. As of 2024, the overall inflation rate in Sub-Saharan Africa is expected to grow to 12.2 percent. The surge follows a global tendency, as consumer prices soar all over the world, impacting advanced as well as emerging and developing economies

In Kenya, where most youths are tech savvy, they're converting their KES to USD through the banks, to hedge against hyperinflation. This comes with extra overhead of account maintenace costs, service charges and other charges by the bank. This approach tend to create more problem than it solves.

Just like planting a seed that grows into a mighty tree, [Pochi](https://pochi-lz-jdp5-h6a69qg7m-cosmaskens-projects.vercel.app/) empowers you to start small and watch your savings flourish over time. 
 Every savings you make is recorded on the blockchain, ensuring the utmost security and transparency. No more hidden fees or surprises – everything is clear and accessible at your fingertips.

## 🍰 What Givvie does

[Pochi](https://pochi-lz-jdp5-h6a69qg7m-cosmaskens-projects.vercel.app/) is not just an onchain savings app; we're your financial companion, your motivator, and your partner in achieving your financial goals.

Our features which includes :

- Setting savings duration,
- Visualizing your progress
- Early retrieval penalty, which inspire and guide you on your journey to financial well-being.

You also earn POCHI tokens when you meet your savings target which allows you to access future features like utility bills payments, onchain loan services and so much more.

![Givvie Dashboard](/public/img/preview.png)

## 💻 How we built Givvie

We created 2 smart contracts in Solidity, [**Pochi.sol**](https://github.com/cosmasken/Pochi-lz/blob/main/contract/Pochi.sol) and [**PochiToken.sol**](https://github.com/cosmasken/Pochi-lz/blob/main/contract/PochiToken.sol)


- The PochiToken is used for rewarding users who meet their savings goal and also serves as a dApp utility token on Pochi.

For dapp development, We used **`NextJs/Typescript`**, **`Wagmi`**, **`Rainbowkit`**, **`Viem`** **`nodejs`** and **`TailwindCSS`** .

Pochi integrates with **`Flutterwave`** and **`FonBnk`** which allows easy KES onRamp, thereby allowing users greater flexibility to onboard.

## 🚀 Accomplishments that we're proud of

🍥 Implemented an idea that was birthed from our personal pain point.<br />
🍥 Built a  dApp on Ble Testnet which means our users will have the best of speed, security and scalability for our users. <br />
🍥 Had fun, and learnt a whole lot participating in this hackathon. <br />

## 📈 What's next for Pochi

We're excited to have built Pochi to enable more users build better financial habits and hedge against inflation by leveraging on the blockchain technology. We plan to:

- Add support for more African currencies.
- Introduce more personal finance usecases for Pochi token as incentives for users to save more.
- Implement access to services like decentralized loan protocols, utility bills settlement with digital assets and offRamp integration.
- Add a liquidity pool that users can easily exchange Pochi Token for USDe.
- Implement smart wallet accounts for our users to enable easier onboarding.

Thank you!

## 🧑‍💻 Instructions for testing locally

\***\* Smart contract \*\***

Note: Recommend using [Remix](https://remix.ethereum.org) for quick smart contract deployment, or alternatively Hardhat:

1. Deploy  `PochiToken` on Ble.

2. Deploy `Pochi` on Ble Token by passing the deployed `PochiToken` address


\***\* Frontend \*\***

1. Update your deployed contract addresses on the `src/connect.ts file.

2. Update env file with private key and wallet connect keys.

3. Run `npm run dev` to start the DApp on your development environment.

4. Connect your wallet and enjoy a world of limitless possibilities.
