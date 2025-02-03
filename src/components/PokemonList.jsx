import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
  return (
    <Div>
      <PokemonCard />
    </Div>
  );
};

export default PokemonList;

/** styled component */
const Div = styled.div`
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;
