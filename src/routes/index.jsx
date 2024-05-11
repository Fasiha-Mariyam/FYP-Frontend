import React from "react";

import { Route, Routes } from "react-router-dom";

import ProtectedRoutes from "./ProtectedRoutes";
import UnProtectedRoutes from "./UnProtectedRoutes";
import Login from "../pages/AuthFlow/Login/Login";
import Signup from "../pages/AuthFlow/Signup/Signup"
import BackToTop from "../components/Navbar/Navbar"
import Layout from "../layout/Layout";
import StudentRoutes from "./StudentRoutes";
import AdminRoutes from "./AdminRoutes";


const RoutesIndex = () => {
 


  return (
    <Layout>
      <Routes>
        <Route path="/" element={<UnProtectedRoutes Component={BackToTop} />} />
        <Route path="/login" element={<UnProtectedRoutes Component={Login} />} />
        <Route path="/signup" element={<UnProtectedRoutes Component={Signup} />} />
        <Route path="/student/*" element={<UnProtectedRoutes Component={StudentRoutes} />} />
        <Route path="/admin/*" element={<UnProtectedRoutes Component={AdminRoutes} />} />
      </Routes>

    </Layout>
  );
};

export default RoutesIndex;
