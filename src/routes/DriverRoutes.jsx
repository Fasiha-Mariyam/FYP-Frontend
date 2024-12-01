import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/MainFlow/DriverFlow/Dashboard";
import ShareLocation from "../pages/MainFlow/DriverFlow/ShareLocation";

export default function DriverRoutes() {
  return (
    <Routes>
      <>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/share-location" element={<ShareLocation />} />

      </>
    </Routes>
  );
}
