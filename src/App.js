import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Navigation from "./components/navigation/Navigation";
import Search from "./components/search bar/Search";
import { useEffect, useState } from "react";
import SuggestionContainer from "./components/suggestion container/SuggestionContainer";
import { useDarkMode } from "./components/dark mode context/DarkModeContext";

function App() {
  const { isDarkMode } = useDarkMode();

  const [latitude, setLatitude] = useState(localStorage.getItem("latitude"));
  const [longitude, setLongitude] = useState(localStorage.getItem("longitude"));
  const [searchValue, setSearchValue] = useState(`${latitude},${longitude}`);

  const [showSuggestion, setShowSuggestion] = useState(false);

  useEffect(() => {
    const success = (pos) => {
      localStorage.setItem("latitude", `${pos.coords.latitude}`);
      localStorage.setItem("longitude", `${pos.coords.longitude}`);
    };

    const failed = () => {
      alert("Location Access Denied !");
    };

    const getLocation = () => {
      navigator.geolocation.getCurrentPosition(success, failed);
    };

    getLocation();
  }, [latitude, longitude]);

  return (
    <div className={`h-screen ${isDarkMode ? "dark:bg-black" : "bg-white"}`}>
      <Router>
        <Navigation search={setSearchValue} suggestion={setShowSuggestion} />
        {showSuggestion && searchValue !== "" && (
          <SuggestionContainer
            search={searchValue}
            value={setSearchValue}
            suggestion={setShowSuggestion}
          />
        )}

        <Routes>
          <Route
            path="/"
            element={<Home search={searchValue} showSuggestion={showSuggestion} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
