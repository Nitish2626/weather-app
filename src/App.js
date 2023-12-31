import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Navigation from "./components/navigation/Navigation";
import Search from "./components/search bar/Search";
import { useEffect, useState } from "react";
import SuggestionContainer from "./components/suggestion container/SuggestionContainer";
import { useDarkMode } from "./components/dark mode context/DarkModeContext";


function App() {

  const {isDarkMode}=useDarkMode();

  const [searchValue, setSearchValue] = useState(`${localStorage.getItem("latitude")},${localStorage.getItem("longitude")}`);

  const [showSuggestion, setShowSuggestion] = useState(false);

  useEffect(() => {

    const success = (pos) => {
      localStorage.setItem("latitude", `${pos.coords.latitude}`);
      localStorage.setItem("longitude", `${pos.coords.longitude}`);
    };

    const failed = () => {
      alert("location Access Denied");
    };

    const getLocation = () => {
      navigator.geolocation.getCurrentPosition(success, failed);
    };

    getLocation();
  }, [localStorage.getItem("latitude"), localStorage.getItem("longitude")]);

  const search = (s) => {
    setSearchValue(s);
  };

  return (
    <div className={`${isDarkMode ? "dark:bg-black" : "bg-white"}`}>
      <Router>

        <Navigation />
        <Search search={search} suggestion={setShowSuggestion} />
        {showSuggestion && <SuggestionContainer search={searchValue} value={search} suggestion={setShowSuggestion} />}

        <Routes>
          <Route path="/" element={<Home search={searchValue} />}></Route>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
