import React from "react";

export default function Transaction({ cart = [], onCheckout }) {
  const total = cart.reduce((sum, item) => {
    const itemTotal = item.price * (item.quantity || 1);
    return typeof itemTotal === "number" ? sum + itemTotal : sum;
  }, 0);

  return (
    <div className="max-w-screen-sm mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-blue-700 text-center">🧾 Transaction Summary</h2>

      <div className="border p-6 rounded-lg shadow-md bg-white">
        {cart.length === 0 ? (
          <p className="text-gray-600 text-center">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b pb-3 last:border-b-0"
              >
                <div className="flex items-center space-x-4">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded object-cover"
                    />
                  )}
                  <div>
                    <p className="font-medium text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      {item.quantity || 1} × Rp {item.price.toLocaleString("id-ID")}
                    </p>
                  </div>
                </div>
                <p className="font-semibold text-gray-700">
                  Rp {(item.price * (item.quantity || 1)).toLocaleString("id-ID")}
                </p>
              </div>
            ))}

            <div className="flex justify-between font-bold text-xl pt-4 border-t mt-4">
              <span>Total</span>
              <span>Rp {total.toLocaleString("id-ID")}</span>
            </div>

            <button
              onClick={onCheckout}
              className="mt-6 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300 ease-in-out"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
