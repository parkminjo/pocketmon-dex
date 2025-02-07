import React from "react";
import Dashboard from "../components/Dashboard";
import Header from "../components/Header";
import PokemonList from "../components/PokemonList";
import { DexStyle as S } from "../styled-component/DexStyle";

const Dex = () => {
  /** 포켓몬 도감 UI */
  return (
    <S.DexContainer>
      <Header />
      <S.Container>
        <Dashboard />
        <PokemonList />
      </S.Container>
    </S.DexContainer>
  );
};

export default Dex;
