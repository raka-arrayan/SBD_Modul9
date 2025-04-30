import React from "react";

export default function Profile() {
  const user = {
    name: "Raka Arrayan",
    email: "raka@example.com",
    phone: "+62 812-3456-7890",
    address: "Jl. Contoh No. 123, Jakarta",
  };

  const orders = [
    { id: "#ORD001", date: "2025-04-01", total: "Rp250.000" },
    { id: "#ORD002", date: "2025-03-21", total: "Rp100.000" },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-3xl p-8 text-white mb-8 shadow-lg">
        <div className="flex items-center space-x-6">
          <img
            src="https://i.pravatar.cc/100"
            alt="User Avatar"
            className="rounded-full w-20 h-20 border-4 border-white shadow-md"
          />
          <div>
            <h1 className="text-3xl font-bold">{user.name}</h1>
            <p className="text-sm">{user.email}</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* User Info */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">User Information</h2>
            <button className="text-indigo-600 hover:underline">Edit</button>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Email:</strong> {user.email}</li>
            <li><strong>Phone:</strong> {user.phone}</li>
            <li><strong>Address:</strong> {user.address}</li>
          </ul>
        </div>

        {/* Order History */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Order History</h2>
          {orders.length > 0 ? (
            <div className="space-y-3">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="border rounded-lg p-4 flex justify-between items-center hover:bg-gray-50 transition"
                >
                  <div>
                    <p className="font-semibold">{order.id}</p>
                    <p className="text-sm text-gray-500">{order.date}</p>
                  </div>
                  <p className="text-indigo-600 font-bold">{order.total}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">You have no orders yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
