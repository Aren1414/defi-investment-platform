import React, { useState } from "react";
import investmentContract from "../utils/contract";
import web3 from "../utils/web3";

export default function InvestmentPage() {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleInvest = async () => {
    setMessage("Processing investment...");
    try {
      const accounts = await web3.eth.getAccounts();
      await investmentContract.methods.invest().send({
        from: accounts[0],
        value: web3.utils.toWei(amount, "ether"),
      });
      setMessage("Investment successful!");
    } catch (error) {
      setMessage("Investment failed. Please try again.");
      console.error("Investment error:", error);
    }
  };

  const handleWithdraw = async () => {
    setMessage("Processing withdrawal...");
    try {
      const accounts = await web3.eth.getAccounts();
      await investmentContract.methods.withdraw(web3.utils.toWei(amount, "ether")).send({
        from: accounts[0],
      });
      setMessage("Withdrawal successful!");
    } catch (error) {
      setMessage("Withdrawal failed. Please try again.");
      console.error("Withdrawal error:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-3xl font-bold">Invest in DeFi 🚀</h1>
      <p className="mt-2">Enter the amount (ETH) to invest or withdraw:</p>

      <input
        type="number"
        placeholder="Amount in ETH"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="mt-4 px-4 py-2 border rounded-md text-black"
      />
      
      <button onClick={handleInvest} className="mt-4 px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md">
        Invest
      </button>
      
      <button onClick={handleWithdraw} className="mt-4 px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md">
        Withdraw
      </button>

      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}
