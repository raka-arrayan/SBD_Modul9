import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count !== 0 && count % 10 === 0) {
      alert(`${count} is divisible by 10`);
    }
  }, [count]);

  return (
    <div className="flex flex-col items-center my-10">
      <h1 className="text-3xl font-bold mb-4">Counter Demo</h1>
      <div className="text-5xl mb-6">{count}</div>
      <div className="flex space-x-4">
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-blue-300 rounded hover:bg-blue-400"
        >
          -
        </button>
        <button
          onClick={() => setCount(0)}
          className="px-4 py-2 bg-blue-300 rounded hover:bg-blue-400"
        >
          Reset
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-300 rounded hover:bg-blue-400"
        >
          +
        </button>
      </div>
    </div>
  );
}
