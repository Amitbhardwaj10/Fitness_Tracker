import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { HiMiniMoon, HiMiniSun } from "react-icons/hi2";

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  //useEffect for chnaging the mode
  useEffect(() => {
    const root = window.document.documentElement;
    const initialTheme = localStorage.getItem("theme");

    if (initialTheme === "dark") {
      setIsDarkMode(true);
      root.classList.add("dark");
    } else {
      setIsDarkMode(false);
      root.classList.remove("dark");
    }
  }, []);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    const root = window.document.documentElement;
    const newTheme = isDarkMode ? "light" : "dark";

    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  };

  // function for setting the navlinks to active
  const activeState = ({ isActive }) => {
    return isActive
      ? "dark:text-white text-black before:w-0 before:h-[2px] before:bg-black before:absolute before:-bottom-1 before:opacity-100 before:w-full before:transition-[width] before:duration-1000 before:delay-75  ease-in-out"
      : "";
  };

  return (
    <header className="z-999 sticky top-0 mb-5 w-full border-b-2 border-b-zinc-200 px-16 py-4 dark:border-b-gray-900">
      <nav className="flex w-full items-center justify-between">
        <div className="logo text-2xl text-teal-500">
          <Link to="/"> Fitness Tracker</Link>
        </div>
        <ul className="nav_links flex items-center gap-8 text-neutral-700 dark:text-neutral-500">
          <div className="dark_mode">
            <button
              className="rounded-full bg-teal-600 p-2 text-lg text-white"
              onClick={toggleDarkMode}
            >
              {isDarkMode ? <HiMiniMoon /> : <HiMiniSun />}
            </button>
          </div>

          <li className="relative">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `delay-75 ease-in-out before:absolute before:-bottom-1 before:h-[2px] before:w-0 before:bg-black before:opacity-0 before:transition-[width] before:duration-700 hover:before:w-full hover:before:opacity-100 dark:before:bg-white ${activeState({ isActive })}`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="relative">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `delay-75 ease-in-out before:absolute before:-bottom-1 before:h-[2px] before:w-0 before:bg-black before:opacity-0 before:transition-[width] before:duration-700 hover:before:w-full hover:before:opacity-100 dark:before:bg-white ${activeState({ isActive })}`
              }
            >
              Contact
            </NavLink>
          </li>
          <li className="relative">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `delay-75 ease-in-out before:absolute before:-bottom-1 before:h-[2px] before:w-0 before:bg-black before:opacity-0 before:transition-[width] before:duration-700 hover:before:w-full hover:before:opacity-100 dark:before:bg-white ${activeState({ isActive })}`
              }
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
