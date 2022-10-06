import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contato } from "../pages/Contato";

import { Home } from "../pages/Home";
import { Inclusao } from "../pages/Inclusao";
import { Sobre } from "../pages/SobreNos";
import { Solucoes } from "../pages/Solucoes";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Solucoes />} path="/Solucoes" />
        <Route element={<Sobre />} path="/Sobrenos" />
        <Route element={<Inclusao />} path="/Inclusao" />
        <Route element={<Contato />} path="/Contato" />
      </Routes>
    </BrowserRouter>
  );
};

export { Router };
