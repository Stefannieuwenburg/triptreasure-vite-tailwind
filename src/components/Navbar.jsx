import { useState } from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-100/40 shadow">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="src\assets\TripTreasurelogo.png" alt="TripTreasure Logo" className="h-24 w-24" />
            <span className="font-bold text-xl text-orange-500">TripTreasure</span>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li>
                <Link to="/" className="text-orange-500 font-medium hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-orange-500 font-medium hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-orange-500 font-medium hover:underline">
                  Contact
                </Link>
              </li>
               <li>
              <Link to="/about" className="text-orange-500 font-medium hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-orange-500 font-medium hover:underline">
                Services
              </Link>
            </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button
              className="outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className={`mobile-menu ${menuOpen ? "" : "hidden"} md:hidden`}>
          <ul className="mt-4 space-y-4">
            <li>
              <Link to="/" className="block px-4 py-2 text-orange-500 bg-gray-100 rounded font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="block px-4 py-2 text-orange-500 bg-gray-100 rounded font-medium">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="block px-4 py-2 text-orange-500 bg-gray-100 rounded font-medium">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block px-4 py-2 text-orange-500 bg-gray-100 rounded font-medium">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}