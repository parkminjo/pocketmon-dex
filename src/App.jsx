import React, { useEffect } from "react";
import Router from "./shared/Router";
import { useSelector } from "react-redux";

const App = () => {
  /** 사용자가 등록한 포켓몬 리스트 */
  const pokemonList = useSelector((state) => state.pokemon);

  /** 로컬 스토리지 저장 */
  useEffect(() => {
    localStorage.setItem("pokemonList", JSON.stringify(pokemonList));
  }, [pokemonList]);

  return (
    <>
      <Router />
    </>
  );
};

export default App;
