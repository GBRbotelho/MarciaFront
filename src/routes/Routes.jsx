import { Routes as Router, Route } from "react-router-dom";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";

function Routes() {
  return (
    <Router>
      <Route path="/cadastro" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Router>
  );
}

export default Routes;
