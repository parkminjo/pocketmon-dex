import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { useParams } from "react-router-dom";

const PokemonList = ({ pokemonList, setPokemonList }) => {
  const param = useParams();

  /** UI */
  return (
    <Div>
      <PokemonCard pokemonList={pokemonList} setPokemonList={setPokemonList} />
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
