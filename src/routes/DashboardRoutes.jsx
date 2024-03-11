import { Routes as Router, Route } from "react-router-dom";
import DashboardLayout from "../pages/@DashboardPages/DashboardLayout";
import Agendamento from "../pages/@DashboardPages/Pages/Agendamento/Agendamento";

function DashboardRoutes() {
  return (
    <Router>
      <Route
        path="/"
        element={
          <DashboardLayout>
            <Agendamento />
          </DashboardLayout>
        }
      />
    </Router>
  );
}

export default DashboardRoutes;
