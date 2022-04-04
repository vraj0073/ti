import { Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Recycle from "./Components/Recycle";
import RestaurantFood from "./Components/RestaurantFood";
import Ngo from "./Components/Ngo";
import Registration from "./Components/Registration";
import Login from "./Components/Login"
import Home from "./Components/Home";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/recycle" element={<Recycle />} />
      </Routes>
      <Routes>
        <Route path="/restaurantfood" element={<RestaurantFood />} />
        <Route path="/ngo" element={<Ngo />} />
      </Routes>
      <Routes>
        <Route path="/register" element={<Registration />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Routes>
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
