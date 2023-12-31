import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../images/weather-logo.png";
import lightTheme from "../../images/light-theme.png";
import darkTheme from "../../images/dark-theme.png";
import { useDarkMode } from "../dark mode context/DarkModeContext";

const Navigation = () => {

    const [theme, setTheme] = useState(true);

    const {isDarkMode,toggleDarkMode}=useDarkMode();

    const toogleTheme = () => {
        setTheme(prev => !prev);
        toggleDarkMode();
    };

    return (
        <nav
            className={`w-full h-10 flex items-center justify-between sticky top-0 bg-white px-3 z-10 ${isDarkMode ? "dark:bg-black" : ""}`}>

            <Link to="/">
                <img
                    src={logo}
                    className="w-10 h-10"
                    alt="weather-logo"
                    title="Globe Weather Logo">
                </img>
            </Link>

            <button
                className={`w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-400 ${isDarkMode ? "dark:bg-gray-200 dark:hover:bg-gray-400" : ""}`}
                onClick={toogleTheme} title="Theme toggle button">
                <img
                    src={theme === true ? darkTheme : lightTheme}
                    className="w-5 h-5"
                    alt={theme === true ? "Dark-Theme" : "Light-Theme"}>
                </img>
            </button>

        </nav>
    );
}

export default Navigation;