"use client"
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu =()=>{
    setIsMenuOpen((prevVal) => !prevVal)
  }
  return (
    <div className="bg-[gray]">
      <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div>
          <h2 className="text-2xl">
            <Link href="/">Dashboard</Link>
          </h2>
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-12 rtl:space-x-reverse md:mt-0">
            <li className="hover:text-green-900">
              <Link href="/sale">Sale</Link>
            </li>
            <li className="hover:text-green-900">
              <Link href="/rent">Rent</Link>
            </li>
            <li className="hover:text-green-900">
              <Link href="/lease">Lease</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
