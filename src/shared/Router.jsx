import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dex from "../pages/Dex";
import Home from "../pages/Home";
import PokemonDetail from "../pages/PokemonDetail";
import { useState } from "react";
import { useEffect } from "react";

const Router = () => {
  /** 사용자가 등록한 포켓몬 state */
  const [pokemonList, setPokemonList] = useState(
    JSON.parse(localStorage.getItem("pokemonList")) || []
  );

  /** 로컬 스토리지 저장 */
  useEffect(() => {
    localStorage.setItem("pokemonList", JSON.stringify(pokemonList));
  }, [pokemonList]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dex"
          element={
            <Dex pokemonList={pokemonList} setPokemonList={setPokemonList} />
          }
        />
        <Route
          path="/detail"
          element={
            <PokemonDetail
              pokemonList={pokemonList}
              setPokemonList={setPokemonList}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
