import React from "react";

export default function Transaction({ cart = [], onCheckout }) {
  // Ensure cart is a valid array and each item has a valid price
  const total = cart.reduce(
    (sum, item) => (typeof item.price === "number" ? sum + item.price : sum),
    0
  );

  return (
    <div className="max-w-screen-sm mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-blue-700 text-center">💳 Transaction Summary</h2>
      <div className="border p-6 rounded-lg shadow-lg bg-white">
        {cart.length === 0 ? (
          <p className="text-gray-600 text-center">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item, index) => (
              <div key={index} className="flex justify-between text-gray-700">
                <span>{item.name}</span>
                <span>Rp {item.price.toLocaleString("id-ID")}</span>
              </div>
            ))}
            <div className="flex justify-between font-bold text-xl mt-4">
              <span>Total</span>
              <span>Rp {total.toLocaleString("id-ID")}</span>
            </div>
            <div className="mt-6">
              <button
                onClick={onCheckout}
                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300 ease-in-out"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
