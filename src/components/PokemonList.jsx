import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemonList, setPokemonList }) => {
  /** 포켓몬 전체 카드 리스트 UI */
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
