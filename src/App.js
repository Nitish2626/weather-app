import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./components/home/Home";
import Navigation from "./components/navigation/Navigation";
import Search from "./components/search bar/Search";

function App() {

  return(
  <Router>
    <Navigation />
    <Search />
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  </Router>
  );
}

export default App;
