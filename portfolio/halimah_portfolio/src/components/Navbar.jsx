import { useState } from "react";
import { Transition } from "@headlessui/react"; // optional for smooth mobile menu transition
import { FaBars, FaTimes } from "react-icons/fa"; // hamburger icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 flex justify-between items-center h-16">
        {/* Logo / Name */}
        <div className="text-xl font-bold tracking-tight text-black">
          Halimah
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium text-slate-700">
          <a href="#about" className="hover:text-black hover:underline transition duration-200">
            About
          </a>
          <a href="#skills" className="hover:text-black hover:underline transition duration-200">
            Skills
          </a>
          <a href="#projects" className="hover:text-black hover:underline transition duration-200">
            Projects
          </a>
          <a href="#blog" className="hover:text-black hover:underline transition duration-200">
            Blog
          </a>
          <a href="#contact" className="hover:text-black hover:underline transition duration-200">
            Contact
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-700 hover:text-black focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200 transform"
        enterFrom="-translate-y-2 opacity-0"
        enterTo="translate-y-0 opacity-100"
        leave="transition ease-in duration-150 transform"
        leaveFrom="translate-y-0 opacity-100"
        leaveTo="-translate-y-2 opacity-0"
      >
        {(ref) => (
          <div className="md:hidden bg-white/90 backdrop-blur-md">
            <div ref={ref} className="px-6 pt-4 pb-6 space-y-4 flex flex-col">
              <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-black text-slate-700 transition">About</a>
              <a href="#skills" onClick={() => setIsOpen(false)} className="hover:text-black text-slate-700 transition">Skills</a>
              <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-black text-slate-700 transition">Projects</a>
              <a href="#blog" onClick={() => setIsOpen(false)} className="hover:text-black text-slate-700 transition">Blog</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-black text-slate-700 transition">Contact</a>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}
