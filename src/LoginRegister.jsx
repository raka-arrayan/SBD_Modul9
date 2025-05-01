import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginRegister() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // Only for registration
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const BASE_URL = "https://backend-raka.vercel.app";

  // Handle registration
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${BASE_URL}/user/register?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}&name=${encodeURIComponent(name)}`,
        {
          method: "POST",
        }
      );
      const data = await response.json();
      if (data.success) {
        alert("User registered successfully!");
        setIsLogin(true); // Switch to login tab after successful registration
      } else {
        setError(data.message || "Registration failed.");
      }
    } catch (error) {
      setError("An error occurred while registering.");
    }
  };

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${BASE_URL}/user/login?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`,
        {
          method: "POST",
        }
      );
      const data = await response.json();
      if (data.success) {
        alert("Login successful!");
        // Optionally store token or user info
        localStorage.setItem("user", JSON.stringify(data.user || {}));
        navigate("/"); // Redirect to home
      } else {
        setError(data.message || "Login failed.");
      }
    } catch (error) {
      setError("An error occurred while logging in.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 px-4">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8">
        {/* Tab Header */}
        <div className="flex justify-between mb-6">
          <button
            className={`w-1/2 py-2 font-semibold rounded-full transition ${
              isLogin ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => {
              setIsLogin(true);
              setError("");
            }}
          >
            Login
          </button>
          <button
            className={`w-1/2 py-2 font-semibold rounded-full transition ${
              !isLogin ? "bg-green-500 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => {
              setIsLogin(false);
              setError("");
            }}
          >
            Register
          </button>
        </div>

        {/* Form Section */}
        {isLogin ? (
          <form className="flex flex-col space-y-4" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-300 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-full transition"
            >
              Login
            </button>
            {error && <div className="text-red-500 text-sm text-center">{error}</div>}
          </form>
        ) : (
          <form className="flex flex-col space-y-4" onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Username"
              className="border border-gray-300 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-300"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-300 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-full transition"
            >
              Register
            </button>
            {error && <div className="text-red-500 text-sm text-center">{error}</div>}
          </form>
        )}
      </div>
    </div>
  );
}
