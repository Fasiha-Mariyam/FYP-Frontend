// AdminRoutes.js
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/MainFlow/AdminFLow/Dashboard";
import CardRequests from "../pages/MainFlow/AdminFLow/CardRequests";
import RouteInfo from "../pages/MainFlow/AdminFLow/RouteInfo";
import Complain from "../pages/MainFlow/AdminFLow/Complain";
import FormDeadline from "../pages/MainFlow/AdminFLow/FormDeadline";


export default function AdminRoutes() {
  return (
    <Routes>
      <>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cardRequest" element={<CardRequests />} />
        <Route path="/routeInfo" element={<RouteInfo />} />
        <Route path="/complain" element={<Complain />} />
        <Route path="/formDeadline" element={<FormDeadline />} />

      </>
    </Routes>
  );
}
