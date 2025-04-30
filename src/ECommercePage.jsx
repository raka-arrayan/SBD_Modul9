import React from "react";
import sepatu from "./assets/sepatu.jpg";
import jeans from "./assets/jeans.webp";
import baju from "./assets/baju.jpg";
import jam from "./assets/watch.jpg";
import batik from "./assets/batik.jpg";
import tas from "./assets/ransel.webp";

export default function ECommercePage() {
  const items = [
    {
      id: "item-1",
      name: "Kaos Polos",
      price: 50000,
      stock: 100,
      image: baju,
    },
    {
      id: "item-2",
      name: "Celana Jeans",
      price: 120000,
      stock: 50,
      image: jeans,
    },
    {
      id: "item-3",
      name: "Sepatu Sneakers",
      price: 250000,
      stock: 30,
      image: sepatu,
    },
    {
      id: "item-4",
      name: "Jam Tangan",
      price: 175000,
      stock: 20,
      image: jam,
    },
    {
      id: "item-5",
      name: "Kemeja Batik",
      price: 95000,
      stock: 25,
      image: batik,
    },
    {
      id: "item-6",
      name: "Tas Ransel",
      price: 150000,
      stock: 40,
      image: tas,
    },
  ];

  const stores = [
    { id: "store-1", name: "Toko A", address: "Jl. Merdeka No.1" },
    { id: "store-2", name: "Toko B", address: "Jl. Sudirman No.88" },
  ];

  return (
    <div className="p-6 max-w-screen-xl mx-auto font-sans">
      <h1 className="text-4xl font-bold mb-10 text-center text-blue-700">🛍️ Raka Shop</h1>

      <h2 className="text-2xl font-semibold mb-6">🧾 Daftar Produk</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.id} className="border p-4 rounded-xl shadow-md hover:shadow-xl transition duration-300 bg-white">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-lg mb-3"
            />
            <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
            <p className="text-gray-600">Harga: <strong>Rp {item.price.toLocaleString("id-ID")}</strong></p>
            <p className="text-gray-600">Stok: {item.stock}</p>
            <div className="mt-3">
              <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">Beli</button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">🏬 Daftar Toko</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {stores.map((store) => (
            <div key={store.id} className="p-5 border rounded-lg shadow-sm bg-gray-50">
              <p className="text-lg font-bold text-gray-800">{store.name}</p>
              <p className="text-gray-600 text-sm">{store.address}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
