import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../images/weather-logo.png";
import { useDarkMode } from "../dark mode context/DarkModeContext";
import Search from "../search bar/Search";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";

const Navigation = ({ search, suggestion }) => {
  const [theme, setTheme] = useState(true);

  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const toogleTheme = () => {
    setTheme((prev) => !prev);
    toggleDarkMode();
  };

  return (
    <nav
      className={`w-full h-10 flex items-center justify-between sticky top-0 px-3 z-10 bg-white ${
        isDarkMode ? "dark:bg-black" : ""
      }`}
    >
      <Link to="/">
        <img
          src={logo}
          className="w-10 h-10"
          alt="weather-logo"
          title="Globe Weather Logo"
        ></img>
      </Link>

      <Search search={search} suggestion={suggestion} />

      <button
        className={`w-8 h-8 flex items-center justify-center rounded-full text-xl hover:bg-gray-200 ${
          isDarkMode ? "text-white dark:hover:bg-gray-800" : ""
        }`}
        onClick={toogleTheme}
        title="Theme toggle button"
      >
        {isDarkMode ? <MdOutlineNightlight /> : <MdOutlineLightMode />}
      </button>
    </nav>
  );
};

export default Navigation;
