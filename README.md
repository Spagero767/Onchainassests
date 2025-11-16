# OnChainAssist

OnChainAssist is a powerful on-chain assistant designed to simplify your interactions with the blockchain. It offers tools for smart contract interactions, transaction monitoring, and AI-powered task automation.

## Features

- **Dashboard**: Get a comprehensive overview of your on-chain activity, including transaction history and current gas prices.
- **AI-Powered Automation**: Describe tasks in natural language, and let our AI generate the necessary code to automate your on-chain actions.
- **Smart Contract Interaction**: (Coming Soon) Seamlessly interact with any deployed smart contract directly from the app.
- **Gas Station**: (Coming Soon) Get detailed gas fee estimations to optimize your transaction costs.
- **Wallet Integration**: Connect your wallet to manage your assets and transactions securely.

## Tech Stack

This project is built with a modern, robust tech stack:

- **Framework**: [Next.js](https://nextjs.org/)
- **UI Library**: [React](https://reactjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [ShadCN UI](https://ui.shadcn.com/)
- **Generative AI**: [Genkit](https://firebase.google.com/docs/genkit)
- **Blockchain Interaction**: Ethers.js (via MetaMask)

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

Make sure you have Node.js and npm (or yarn/pnpm) installed.

### Installation

1.  Clone the repository:
    ```bash
    git clone <your-repo-url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd onchain-assist
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Development Server

To start the development server, run:

```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) in your browser to see the application.

## Building for Production

To create a production build, run:

```bash
npm run build
```

This will generate an optimized version of the application in the `.next` directory. You can then start the production server with:

```bash
npm run start
```
