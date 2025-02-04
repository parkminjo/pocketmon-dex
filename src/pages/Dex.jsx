import React, { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard";
import styled from "styled-components";
import PokemonList from "../components/PokemonList";
import Header from "../components/Header";

const Dex = () => {
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
