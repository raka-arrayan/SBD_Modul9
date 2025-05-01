import React, { useState } from "react";

export default function Topup() {
  const [email, setEmail] = useState("raka@example.com");
  const [balance, setBalance] = useState(50000);
  const [topupAmount, setTopupAmount] = useState("");

  const handleTopup = () => {
    const amount = parseInt(topupAmount);
    if (!isNaN(amount) && amount > 0) {
      setBalance(balance + amount);
      setTopupAmount("");
    }
  };

  const handleLogout = () => {
    alert("Logged out!");
    // Ganti dengan navigasi logout yang sesuai
  };

  return (
    <div className="bg-gray-50 p-8 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">🛍️ Raka Shop</h1>
      <h2 className="text-2xl font-semibold mb-6 text-center text-blue-600">💳 Top Up Balance</h2>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 max-w-3xl mx-auto">
        <p className="text-lg font-semibold text-gray-700">📧 Email:</p>
        <p className="mb-4 text-gray-800">{email}</p>

        <p className="text-lg font-semibold text-gray-700">💰 Current Balance:</p>
        <p className="mb-4 text-green-600 font-bold text-xl">Rp {balance.toLocaleString()}</p>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <input
            type="number"
            placeholder="Enter amount"
            value={topupAmount}
            onChange={(e) => setTopupAmount(e.target.value)}
            className="border p-3 rounded-lg w-full sm:w-2/3 bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleTopup}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Top Up
          </button>
        </div>
      </div>
    </div>
  );
}
