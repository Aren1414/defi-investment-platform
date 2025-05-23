import React from "react";

export default function InvestmentDashboard({ account }) {
  return (
    <div className="mt-6 p-6 bg-gray-800 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4">Investment Dashboard</h2>
      <p><strong>Wallet Address:</strong> {account}</p>
      <p><strong>Investments:</strong> Coming soon...</p>
    </div>
  );
}
