import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        <div className="text-lg font-bold">RakaShop</div>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/profile" className="hover:underline">Profile</Link>
          <Link to="/Faq" className="hover:underline">FAQ</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link
            to="/login"
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
          >
            Login/Register
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            {/* Icon */}
          </button>
        </div>
      </div>

      <div className={`md:hidden flex flex-col space-y-2 mt-4 ${menuOpen ? 'block' : 'hidden'}`}>
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/Profile" className="hover:underline">Profile</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <Link to="/about" className="hover:underline">About me</Link>
        <Link
          to="/login"
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded w-max"
        >
          Login/Register
        </Link>
      </div>
    </nav>
  );
}
