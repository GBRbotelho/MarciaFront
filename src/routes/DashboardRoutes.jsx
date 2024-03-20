import { Routes as Router, Route } from "react-router-dom";
import DashboardLayout from "../pages/@DashboardPages/DashboardLayout";
import Agendamento from "../pages/@DashboardPages/Pages/Agendamento/Agendamento";
import ProtectRoute from "./ProtectRoute";
import Clientes from "../pages/@DashboardPages/Pages/Clientes/Clientes";
import ViewCliente from "../pages/@DashboardPages/Pages/ViewCliente/ViewCliente";

function DashboardRoutes() {
  return (
    <Router>
      <Route
        path="/"
        element={
          <ProtectRoute>
            <DashboardLayout>
              <Agendamento />
            </DashboardLayout>
          </ProtectRoute>
        }
      />
      <Route
        path="/clientes"
        element={
          <ProtectRoute>
            <DashboardLayout>
              <Clientes />
            </DashboardLayout>
          </ProtectRoute>
        }
      />
      <Route
        path="/clientes/:id"
        element={
          <ProtectRoute>
            <DashboardLayout>
              <ViewCliente />
            </DashboardLayout>
          </ProtectRoute>
        }
      />
    </Router>
  );
}

export default DashboardRoutes;
