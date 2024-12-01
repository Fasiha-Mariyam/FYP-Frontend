// StudentRoutes.js
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/MainFlow/StudentFlow/Dashboard";
import CardForm from "../pages/MainFlow/StudentFlow/CardForm";
import PointInformation from "../pages/MainFlow/StudentFlow/PointInformation";
import FeedbackForm from "../pages/MainFlow/StudentFlow/FeedbackForm";
import PointTracking from "../pages/MainFlow/StudentFlow/PointTracking";

export default function StudentRoutes() {
  return (
    <Routes>
      <>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/request" element={<CardForm/>} />
        <Route path="/pointInformation" element={<PointInformation />} />
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="/pointTracking" element={<PointTracking />} />
      </>
    </Routes>
  );
}
