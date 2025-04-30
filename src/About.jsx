import React from "react";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded-3xl p-8 shadow-lg text-center mb-6">
        <h1 className="text-3xl font-bold mb-2">About Rakashop</h1>
        <p className="text-sm opacity-90">
          A modern marketplace built with passion and technology.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-2xl p-6 text-gray-700 leading-relaxed">
        <p>
          <strong>Rakashop</strong> is your go-to online destination for stylish, affordable, and reliable shopping. 
          Founded by Raka Arrayan, Rakashop combines a love for e-commerce with clean, intuitive design to bring you 
          an effortless shopping experience.
        </p>

        <p className="mt-4">
          From fashion to tech gadgets, Rakashop continues to grow with a mission to deliver high-quality products, 
          fast shipping, and customer-first service all while supporting local businesses and innovation in Indonesia.
        </p>

        <p className="mt-4 font-semibold text-indigo-600">
          Thank you for choosing Rakashop where shopping meets satisfaction.
        </p>
      </div>
    </div>
  );
}
