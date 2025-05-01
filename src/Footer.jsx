export default function Footer() {
    return (
      <footer className="bg-gray-800 w-full py-6 px-6 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="text-white text-sm">
              © 2025 <span className="font-semibold text-blue-400">Raka Shop</span>. All Rights Reserved.
            </p>
            <p className="text-gray-400 text-xs">Made with using React & Tailwind CSS</p>
          </div>
  
          <div className="flex space-x-4">
            <a
              href="https://github.com/raka-arrayan"
              className="text-gray-300 hover:text-white transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    );
  }
  