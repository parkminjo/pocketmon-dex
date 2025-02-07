import React from "react";
import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import Header from "../components/Header";
import PokemonList from "../components/PokemonList";

const Dex = () => {
  /** 포켓몬 도감 UI */
  return (
    <DexContainer>
      <Header />
      <Container>
        <Dashboard />
        <PokemonList />
      </Container>
    </DexContainer>
  );
};

export default Dex;

/** styled component */
const DexContainer = styled.div`
  background-color: #121212;
  min-height: 100vh;
`;

const Container = styled.div`
  margin: 0 3rem 0 3rem;
  padding: 1rem 0 5rem 0;
  min-height: auto;
`;
