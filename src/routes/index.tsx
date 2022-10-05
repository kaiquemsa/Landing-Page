import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../organisms/Menu";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export { Router };
