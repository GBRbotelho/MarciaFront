import { Routes as Router, Route } from "react-router-dom";
import DashboardLayout from "../pages/@DashboardPages/DashboardLayout";
import Agendamento from "../pages/@DashboardPages/Pages/Agendamento/Agendamento";
import ProtectRoute from "./ProtectRoute";

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
    </Router>
  );
}

export default DashboardRoutes;
