import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../images/weather-logo.png";
import lightTheme from "../../images/light-theme.png";
import darkTheme from "../../images/dark-theme.png";

const Navigation = () => {

    const [theme, setTheme] = useState(true);

    const toogleTheme = () => {
        setTheme(prev => !prev);
    }

    return (
        <nav
            className="w-full h-10 flex items-center justify-between sticky top-0 bg-slate-300 px-3">

            <Link to="/">
                <img
                    src={logo}
                    className="w-10 h-10"
                    alt="weather-logo">
                </img>
            </Link>

            <button
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-400"
                onClick={toogleTheme}>
                <img
                    src={theme === true ? lightTheme : darkTheme}
                    className="w-5 h-5"
                    alt={theme === true ? "Light-Theme" : "Dark-Theme"}>
                </img>
            </button>

        </nav>
    );
}

export default Navigation;