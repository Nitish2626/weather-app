import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Navigation from "./components/navigation/Navigation";
import Search from "./components/search bar/Search";
import { useEffect, useState } from "react";

function App() {

  const [searchValue, setSearchValue] = useState(`${localStorage.getItem("latitude")},${localStorage.getItem("longitude")}` || "london");

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
  },[localStorage.getItem("latitude"),localStorage.getItem("longitude")]);

  const search = (s) => {
    setSearchValue(s);
  };

  return (
    <Router>

      <Navigation />
      <Search search={search} />

      <Routes>
        <Route path="/" element={<Home search={searchValue} />}></Route>
      </Routes>

    </Router>
  );
}

export default App;
