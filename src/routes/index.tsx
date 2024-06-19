import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contato } from "../pages/Contato";

import { Home } from "../pages/Home";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { DashboardPredict } from "../pages/dashboard/Dashboard_Predicts";

import '../scss/style.scss'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Dashboard />} path="/Dashboard" />
        <Route element={<DashboardPredict />} path="/Dashboard-Predict" />
        <Route element={<Contato />} path="/Contato" />
      </Routes>
    </BrowserRouter>
  );
};

export { Router };
