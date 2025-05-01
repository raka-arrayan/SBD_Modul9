import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function CartSummary() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  if (!state) return <p className="text-center text-red-600">No item selected.</p>;

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value > state.stock) {
      setQuantity(state.stock); // batasi ke stok maksimum
    } else if (value < 1 || isNaN(value)) {
      setQuantity(1); // minimum 1
    } else {
      setQuantity(value);
    }
  };

  const totalPrice = quantity * state.price;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-blue-700 text-center mb-4">Purchase Summary</h2>
      
      <img src={state.image} alt={state.name} className="w-full h-56 object-cover rounded-lg mb-4" />
      
      <h3 className="text-xl font-semibold">{state.name}</h3>
      <p className="text-gray-700">Harga satuan: <strong>Rp {state.price.toLocaleString("id-ID")}</strong></p>
      <p className="text-gray-700">Stok tersedia: {state.stock}</p>

      <div className="mt-4">
        <label htmlFor="quantity" className="block text-gray-700 mb-1">Jumlah yang dibeli:</label>
        <input
          type="number"
          id="quantity"
          className="w-full border rounded-md px-3 py-2"
          value={quantity}
          onChange={handleQuantityChange}
          min={1}
          max={state.stock}
        />
      </div>

      <p className="mt-3 text-lg font-semibold text-gray-800">
        Total Harga: Rp {totalPrice.toLocaleString("id-ID")}
      </p>

      <button
        className="mt-6 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
        onClick={() => alert(`Pembelian ${quantity} item berhasil!`)}
      >
        Buy Now
      </button>

      <button
        className="mt-3 w-full bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 transition"
        onClick={() => navigate("/")}
      >
        Back to Products
      </button>
    </div>
  );
}
