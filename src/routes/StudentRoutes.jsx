// StudentRoutes.js
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/MainFlow/StudentFlow/Dashboard"

export default function StudentRoutes() {
  return (
    <Routes>
      <>
        <Route path="/dashboard" element={<Dashboard />} />
      </>
    </Routes>
  );
}
