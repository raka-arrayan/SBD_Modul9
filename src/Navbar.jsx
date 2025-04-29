import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4">
      <div className="flex justify-between items-center">
        <div className="text-lg font-bold">Raka Arrayan</div>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
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
  );
}
