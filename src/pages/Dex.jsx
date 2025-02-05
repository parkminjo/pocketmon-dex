import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import Header from "../components/Header";
import PokemonList from "../components/PokemonList";

const Dex = () => {
  /** 사용자가 등록한 포켓몬 state */
  const [pokemonList, setPokemonList] = useState(
    JSON.parse(localStorage.getItem("pokemonList")) || []
  );

  /** 로컬 스토리지 저장 */
  useEffect(() => {
    localStorage.setItem("pokemonList", JSON.stringify(pokemonList));
  }, [pokemonList]);

  /** 포켓몬 도감 UI */
  return (
    <Div>
      <Header />
      <Container>
        <Dashboard pokemonList={pokemonList} setPokemonList={setPokemonList} />
        <PokemonList
          pokemonList={pokemonList}
          setPokemonList={setPokemonList}
        />
      </Container>
    </Div>
  );
};

export default Dex;

/** styled component */
const Div = styled.div`
  background-color: #121212;
  min-height: 100vh;
`;

const Container = styled.div`
  margin: 0 3rem 0 3rem;
  padding: 1rem 0 5rem 0;
  min-height: auto;
`;
