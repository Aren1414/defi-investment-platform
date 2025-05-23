import React, { useState, useEffect } from "react";
import Web3 from "web3";
import InvestmentDashboard from "../components/InvestmentDashboard";

export default function Home() {
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState("0");

  useEffect(() => {
    async function connectWallet() {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
          setAccount(accounts[0]);
          const balance = await web3.eth.getBalance(accounts[0]);
          setBalance(web3.utils.fromWei(balance, "ether"));
        } catch (error) {
          console.error("Wallet connection failed:", error);
        }
      }
    }
    connectWallet();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold">DeFi Investment Platform 🚀</h1>
      <p className="text-lg mt-2">Manage your decentralized investments effortlessly.</p>

      {account ? (
        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-lg">
          <p><strong>Connected Wallet:</strong> {account}</p>
          <p><strong>Balance:</strong> {balance} ETH</p>
          <InvestmentDashboard account={account} />
        </div>
      ) : (
        <button onClick={() => window.ethereum.request({ method: "eth_requestAccounts" })} className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md">
          Connect Wallet
        </button>
      )}
    </div>
  );
}
