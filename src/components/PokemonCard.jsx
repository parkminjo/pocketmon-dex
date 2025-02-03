import React from "react";
import styled from "styled-components";
import MOCK_DATA from "../API/MOCK_DATA";

const PokemonCard = ({ pokemonList, setPokemonList }) => {
  const addPokemon = (id, img_url, korean_name, types) => {
    setPokemonList((prev) => {
      return [...prev, { id, img_url, korean_name, types }];
    });
  };

  /** UI */
  return (
    <>
      {MOCK_DATA.map((pokemon) => {
        const { id, img_url, korean_name, types } = pokemon;
        return (
          <Card key={id}>
            <img src={img_url} alt="포켓몬 사진" />
            <P>No. {id}</P>
            <H1>{korean_name}</H1>
            <TypesDiv>
              {types.map((type) => (
                <Type key={type}>{type}</Type>
              ))}
            </TypesDiv>
            <AddButton
              onClick={() => addPokemon(id, img_url, korean_name, types)}
            >
              추가
            </AddButton>
          </Card>
        );
      })}
    </>
  );
};

export default PokemonCard;

/** styled component */
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 240px;
  border-radius: 1rem;
  box-shadow: 0 0 5px 1px #acb5bd;
`;

const P = styled.p`
  font-size: 16px;
  margin-bottom: 8px;
`;

const H1 = styled.h1`
  font-size: 20px;
  margin-bottom: 8px;
`;

const TypesDiv = styled.div`
  display: flex;
  gap: 6px;
  margin-bottom: 1rem;
`;

const Type = styled.button`
  width: 20px;
  background-color: #ced4d9;
  border: none;
  border-radius: 5px;
  padding: 5px;
  width: 50px;
`;

const AddButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
