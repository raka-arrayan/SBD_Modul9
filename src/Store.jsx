import React, { useState } from "react";

export default function Store() {
  const [stores, setStores] = useState([
    { id: 1, name: "Raka Store", address: "123 Main Street" },
    { id: 2, name: "Arrayan Mart", address: "456 Ocean Avenue" },
  ]);
  const [newStore, setNewStore] = useState({ name: "", address: "" });

  const handleAddStore = () => {
    if (!newStore.name || !newStore.address) return;
    setStores([...stores, { id: Date.now(), ...newStore }]);
    setNewStore({ name: "", address: "" });
  };

  return (
    <div className="bg-gray-50 p-8 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">🛍️ Raka Shop</h1>
      <h2 className="text-2xl font-semibold mb-6 text-center text-blue-600">🏬 Store Management</h2>

      <div className="flex flex-col sm:flex-row gap-6 mb-8">
        <input
          type="text"
          placeholder="Store Name"
          value={newStore.name}
          onChange={(e) => setNewStore({ ...newStore, name: e.target.value })}
          className="border p-3 rounded-lg w-full sm:w-1/3 bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Address"
          value={newStore.address}
          onChange={(e) => setNewStore({ ...newStore, address: e.target.value })}
          className="border p-3 rounded-lg w-full sm:w-1/2 bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAddStore}
          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Add Store
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {stores.map((store) => (
          <div key={store.id} className="border p-4 rounded-lg shadow-xl bg-white transition transform hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-white">
                <span className="font-semibold text-xl">🛒</span>
              </div>
              <div>
                <h3 className="font-semibold text-xl text-gray-800">{store.name}</h3>
                <p className="text-gray-600">{store.address}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
