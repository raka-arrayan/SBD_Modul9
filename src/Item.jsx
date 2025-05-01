import React from "react";
import sepatu from "./assets/sepatu.jpg";
import jeans from "./assets/jeans.webp";
import baju from "./assets/baju.jpg";
import jam from "./assets/watch.jpg";
import batik from "./assets/batik.jpg";
import tas from "./assets/ransel.webp";
import topi from "./assets/topi.webp";
import sarung from "./assets/sarung.jpg";

export default function Item() {
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
    {
      id: "item-7",
      name: "Topi",
      price: 120000,
      stock: 30,
      image: topi,
    },
    {
      id: "item-8",
      name: "Tas Ransel",
      price: 150000,
      stock: 40,
      image: sarung,
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto font-sans px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-blue-700 text-center">
        🧾Product List
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="border p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out bg-white"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {item.name}
            </h3>
            <p className="text-gray-600 text-sm">
              Harga: <strong>Rp {item.price.toLocaleString("id-ID")}</strong>
            </p>
            <p className="text-gray-600 text-sm">Stok: {item.stock}</p>
            <div className="mt-4">
              <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
