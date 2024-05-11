// AdminRoutes.js
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/MainFlow/AdminFLow/Dashboard"

export default function AdminRoutes() {
  return (
    <Routes>
      <>
        <Route path="/dashboard" element={<Dashboard />} />
      </>
    </Routes>
  );
}