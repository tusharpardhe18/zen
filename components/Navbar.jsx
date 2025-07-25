import React from "react";

const Navbar = () => {
  return (
    <header className="w-full flex items-center px-8 py-2 border-gray-700">
      {/* Left: Navigation */}
      <nav className="flex gap-8 flex-1 ">
        <a href="#shop" className="text-white hover:text-gray-300 font-medium">
          SHOP NOW
        </a>
        <a href="#about" className="text-white hover:text-gray-300 font-medium">
          ABOUT US
        </a>
        <div className="relative group">
          <a
            href="#categories"
            className="text-white hover:text-gray-300 font-medium flex items-center"
          >
            CATEGORIES
            <svg
              className="ml-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
          <div className="absolute left-0 mt-2 w-40 bg-[#222] rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-10">
            <ul className="py-2">
              <li>
                <a
                  href="#electronics"
                  className="block px-4 py-2 text-white hover:bg-[#2E8B57]"
                >
                  Electronics
                </a>
              </li>
              <li>
                <a
                  href="#fashion"
                  className="block px-4 py-2 text-white hover:bg-[#2E8B57]"
                >
                  Fashion
                </a>
              </li>
              <li>
                <a
                  href="#homegoods"
                  className="block px-4 py-2 text-white hover:bg-[#2E8B57]"
                >
                  Home Goods
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Center: Logo */}
      <div className="flex-1 flex justify-center">
        <a href="/">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
        </a>
      </div>

      {/* Right: SignUp */}
      <div className="flex-1 flex justify-end">
        <button className="border border-[#2E8B57] text-white px-4 py-1 rounded bg-transparent hover:bg-[#2E8B57] hover:text-white transition-colors font-medium">
          SIGN UP
        </button>
      </div>
    </header>
  );
};

export default Navbar;
