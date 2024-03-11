import { Routes as Router, Route } from "react-router-dom";
import DashboardLayout from "../pages/@DashboardPages/DashboardLayout";

function DashboardRoutes() {
  return (
    <Router>
      <Route path="/" element={<DashboardLayout />} />
    </Router>
  );
}

export default DashboardRoutes;
