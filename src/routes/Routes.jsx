import { Routes as Router, Route } from "react-router-dom";

//Rotas
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Confirmation from "../pages/Confirmation/Confirmation";
import Home from "../pages/Home/Home";
import ProtectRoute from "./ProtectRoute";
import NewSystem from "../pages/NewSystem/NewSystem";

function Routes() {
  return (
    <Router>
      <Route path="/cadastro" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/confirmacao"
        element={
          <ProtectRoute>
            <Confirmation />
          </ProtectRoute>
        }
      />
      <Route
        path="/home"
        element={
          <ProtectRoute>
            <Home />
          </ProtectRoute>
        }
      />
      <Route
        path="/newSystem"
        element={
          <ProtectRoute>
            <NewSystem />
          </ProtectRoute>
        }
      />
    </Router>
  );
}

export default Routes;
