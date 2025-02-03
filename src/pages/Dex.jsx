import React from "react";
import Dashboard from "../components/Dashboard";
import styled from "styled-components";
import PokemonList from "../components/PokemonList";
import Header from "../components/Header";

const Dex = () => {
  return (
    <div>
      <Header />
      <Container>
        <Dashboard />
        <PokemonList />
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
