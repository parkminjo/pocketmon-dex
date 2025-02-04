import React, { useEffect } from "react";
import Router from "./shared/Router";
import { useSelector } from "react-redux";

const App = () => {
  /** 로컬 스토리지 저장 */
  const pokemonList = useSelector((state) => state.pokemon);

  useEffect(() => {
    localStorage.setItem("pokemonList", JSON.stringify(pokemonList));
  }, [pokemonList]);

  return (
    <div>
      <Router />
    </div>
  );
};

export default App;
