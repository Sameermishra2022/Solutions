import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logo, setLogo] = useState(null);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dropdown mount/unmount with animation delay
  useEffect(() => {
    if (isOpen) setShowMenu(true);
    else {
      const timer = setTimeout(() => setShowMenu(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Fetch logo from API
  useEffect(() => {
    fetch("http://codesphereit.in/api/method/solutions.hero.hero")
      .then((res) => res.json())
      .then((data) => {
        if (data.data && data.data.logo) {
          setLogo(data.data.logo);
        }
      })
      .catch((err) => console.error("Logo fetch error:", err));
  }, []);

  // Professional styled logo (3rd digit red)
  const renderStyledLogo = () => {
    if (!logo) return null;

    let digitCount = 0;

    return logo.split("").map((char, index) => {
      if (/[0-9]/.test(char)) {
        digitCount++;

        if (digitCount === 3) {
          return (
            <span
              key={index}
              className="text-red-400 font-extrabold italic"
            >
              {char}
            </span>
          );
        }
      }

      return (
        <span
          key={index}
          className="text-blue-400 font-extrabold italic"
        >
          {char}
        </span>
      );
    });
  };

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300">
      <div
        className={`transition-all duration-300 mx-auto ${
          scrolled
            ? "mt-6 max-w-[92%] bg-white shadow-xl rounded-2xl"
            : "mt-3 max-w-full bg-transparent"
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">

          {/* Logo */}
          <Link to="/" className="text-3xl tracking-wide cursor-pointer">
    {logo ? (
      renderStyledLogo()
    ) : (
      <span className="font-bold text-white">Loading...</span>
    )}
  </Link>

          {/* Desktop Menu */}
          <ul
            className={`hidden lg:flex gap-8 font-medium transition duration-300 ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            <li className="hover:text-green-500 cursor-pointer">Expertise</li>
            <li className="hover:text-green-500 cursor-pointer">Industries</li>
            <li className="hover:text-green-500 cursor-pointer">Insights</li>
            <li className="hover:text-green-500 cursor-pointer"><Link to="/about">About Us</Link></li>
            <li className="hover:text-green-500 cursor-pointer">Careers</li>
          </ul>

<Link to="/contact">
  <button className="hidden lg:block bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition">
            Contact Us
          </button>
</Link>
          

          {/* Mobile Toggle Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`text-3xl transition duration-300 ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {showMenu && (
        <div
          className={`lg:hidden mx-auto mt-4 max-w-[92%]
          transition-all duration-300 ease-out transform ${
            isOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-5 opacity-0"
          }`}
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl py-6">
            <ul className="flex flex-col items-center gap-6 font-medium text-pink-200">
              <li className="hover:text-green-600 cursor-pointer">Expertise</li>
              <li className="hover:text-green-600 cursor-pointer">Industries</li>
              <li className="hover:text-green-600 cursor-pointer">Insights</li>
              <li className="hover:text-green-600 cursor-pointer">About Us</li>
              <li className="hover:text-green-600 cursor-pointer">Careers</li>

<Link to="/contact">
<button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition">
                Contact Us
              </button>
</Link>
              
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;