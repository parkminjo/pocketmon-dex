import React from "react";
import Dashboard from "../components/Dashboard";
import styled from "styled-components";
import PokemonList from "../components/PokemonList";

const Dex = () => {
  return (
    <div>
      <Header>
        <Img src="../../img/pokemonLogo.png" alt="로고" />
      </Header>
      <Container>
        <Dashboard />
        <PokemonList />
      </Container>
    </div>
  );
};

export default Dex;

const Img = styled.img`
  width: 70px;
`;

const Header = styled.header`
  display: flex;
  padding: 10px;
  width: 100%;
  background-color: black;
`;

const Container = styled.div`
  margin: 0 24px 0 24px;
  background-color: beige;
`;
