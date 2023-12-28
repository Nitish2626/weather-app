import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Navigation from "./components/navigation/Navigation";
import Search from "./components/search bar/Search";
import { useState } from "react";

function App() {

  const [searchValue, setSearchValue] = useState("");
  // let latitude,longitude;

  // const getLocation = async () => {
  //   await navigator.geolocation.getCurrentPosition(success, failed);
  // };

  // const success = (pos) => {
  //   latitude=pos.coords.latitude;
  //   longitude=pos.coords.longitude;
  //   console.log("lat :",latitude);
  //   console.log("long :",longitude);
  // };

  // const failed = () => {
  //   alert("Location Acess denied");
  // };

  // getLocation();

  const search = (s) => {
    setSearchValue(s);
    // || setSearchValue(latitude,longitude);
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
