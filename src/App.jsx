import { useState, useEffect } from "react";

export default function App() {
  const response = {
    page: 1,
    results: [
      {
        userId: 1,
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        image: "https://picsum.photos/500",
      },
      {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
        image: "https://picsum.photos/500",
      },
      {
        userId: 1,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
        image: "https://picsum.photos/500",
      },
      {
        userId: 1,
        id: 4,
        title: "eum et est occaecati",
        body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
        image: "https://picsum.photos/500",
      },
      {
        userId: 1,
        id: 5,
        title: "nesciunt quas odio",
        body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
        image: "https://picsum.photos/500",
      },
      {
        userId: 1,
        id: 6,
        title: "nesciunt quas odio",
        body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
        image: "https://picsum.photos/500",
      },
    ],
  };

  // useState untuk counter
  const [count, setCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false); //untuk hamburger

  useEffect(() => {
    if (count !== 0 && count % 10 === 0) {
      alert(`${count} is divisible by 10`);
    }
  }, [count]);

  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="bg-black text-white p-4">
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold">Raka Arrayan</div>

          {/* Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none"
            >
              {/* Icon Hamburger */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Menu Links */}
          <div className={`flex-col md:flex md:flex-row md:items-center md:space-x-4 ${menuOpen ? 'flex' : 'hidden'}`}>
            <a href="#home" className="block py-2 md:py-0 hover:underline">Home</a>
            <a href="#profile" className="block py-2 md:py-0 hover:underline">Profile</a>
            <a href="#contact" className="block py-2 md:py-0 hover:underline">Contact</a>
            <a href="#about" className="block py-2 md:py-0 hover:underline">About me</a>
          </div>
        </div>
      </nav>

      {/* Counter Demo */}
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

      {/* Cards */}
      <div className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {response.results.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 hover:underline">{item.title}</h2>
                <p className="text-gray-600 text-sm">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}