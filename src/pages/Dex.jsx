import React, { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard";
import styled from "styled-components";
import PokemonList from "../components/PokemonList";
import Header from "../components/Header";

const Dex = () => {
  const [pokemonList, setPokemonList] = useState(
    JSON.parse(localStorage.getItem("pokemonList")) || []
  );

  /** 로컬 스토리지 저장 */
  useEffect(() => {
    localStorage.setItem("pokemonList", JSON.stringify(pokemonList));
  }, [pokemonList]);

  /** UI */
  return (
    <div>
      <Header />
      <Container>
        <Dashboard pokemonList={pokemonList} setPokemonList={setPokemonList} />
        <PokemonList
          pokemonList={pokemonList}
          setPokemonList={setPokemonList}
        />
      </Container>
    </div>
  );
};

export default Dex;

const Container = styled.div`
  height: 100vh;
  margin: 0 3rem 0 3rem;
  padding-top: 1rem;
`;
