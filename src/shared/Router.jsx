import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dex from "../pages/Dex";
import Home from "../pages/Home";
import PokemonDetail from "../pages/PokemonDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dex" element={<Dex />} />
        <Route path="/detail" element={<PokemonDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
