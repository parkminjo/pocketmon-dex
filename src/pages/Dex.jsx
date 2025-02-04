import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import Header from "../components/Header";
import PokemonList from "../components/PokemonList";

const Dex = () => {
  /** 로컬 스토리지 저장 */
  const pokemonList = useSelector((state) => state.pokemon);
  useEffect(() => {
    localStorage.setItem("pokemonList", JSON.stringify(pokemonList));
  }, [pokemonList]);

  /** UI */
  return (
    <Div>
      <Header />
      <Container>
        <Dashboard />
        <PokemonList />
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
