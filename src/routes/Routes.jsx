import { Routes as Router, Route } from "react-router-dom";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Confirmation from "../pages/Confirmation/Confirmation";

function Routes() {
  return (
    <Router>
      <Route path="/cadastro" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/confirmacao" element={<Confirmation />} />
    </Router>
  );
}

export default Routes;
