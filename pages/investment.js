import React, { useState } from "react";
import investmentContract from "../utils/contract";
import Web3 from "https://cdnjs.cloudflare.com/ajax/libs/web3/1.10.0/web3.min.js";

export default function InvestmentPage() {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleInvest = async () => {
    setMessage("Processing investment...");
    try {
      const accounts = await Web3.eth.getAccounts();
      await investmentContract.methods.invest().send({
        from: accounts[0],
        value: Web3.utils.toWei(amount, "ether"),
      });
      setMessage("Investment successful!");
    } catch (error) {
      setMessage("Investment failed. Please try again.");
      console.error("Investment error:", error);
    }
  };

  return (
    <div>
      <h1>Invest in DeFi 🚀</h1>
      <input
        type="number"
        placeholder="Amount in ETH"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleInvest}>Invest</button>
      {message && <p>{message}</p>}
    </div>
  );
}
