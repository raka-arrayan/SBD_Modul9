import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wide">RakaShop</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <Link to="/" className="hover:text-blue-300 transition">Home</Link>
          <Link to="/profile" className="hover:text-blue-300 transition">Profile</Link>
          <Link to="/faq" className="hover:text-blue-300 transition">FAQ</Link>
          <Link to="/about" className="hover:text-blue-300 transition">About</Link>
          <Link
            to="/login"
            className="bg-blue-500 hover:bg-blue-600 px-4 py-1 rounded text-white transition"
          >
            Login/Register
          </Link>
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 transition-transform transform"
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
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden px-4 pb-4 transition-all duration-300 ease-in-out ${menuOpen ? "block" : "hidden"}`}>
        <div className="flex flex-col space-y-3 text-sm font-medium">
          <Link to="/" className="hover:text-blue-300">Home</Link>
          <Link to="/profile" className="hover:text-blue-300">Profile</Link>
          <Link to="/faq" className="hover:text-blue-300">FAQ</Link>
          <Link to="/about" className="hover:text-blue-300">About</Link>
          <Link
            to="/login"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-max"
          >
            Login/Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
