import { Routes as Router, Route } from "react-router-dom";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Confirmation from "../pages/Confirmation/Confirmation";
import Home from "../pages/Home/Home";

function Routes() {
  return (
    <Router>
      <Route path="/cadastro" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/confirmacao" element={<Confirmation />} />
      <Route path="/home" element={<Home />} />
    </Router>
  );
}

export default Routes;
