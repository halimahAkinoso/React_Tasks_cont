import React, { useState } from 'react';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Products', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Contact', href: '#' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="bg-[#008753] text-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between" aria-label="Main navigation">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">NaijaMarket</div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-green-200 transition-colors">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4">
          <button aria-label="Shopping cart">
            <FaShoppingCart className="text-lg cursor-pointer hover:text-green-200 transition-colors" />
          </button>
          <button className="bg-white text-[#008753] px-3 py-1 rounded font-semibold hover:bg-green-100 transition-colors text-sm">
            Login
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div id="mobile-menu" className="md:hidden bg-[#008753] px-4 py-2 rounded-b shadow-lg">
          <ul className="flex flex-col space-y-2 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-green-200 transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;