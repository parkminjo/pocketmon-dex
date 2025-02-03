import React from "react";
import styled from "styled-components";
import MOCK_DATA from "../API/MOCK_DATA";

const PokemonCard = () => {
  return (
    <>
      {MOCK_DATA.map((pokemon) => {
        return (
          <Card key={pokemon.id}>
            <img src={pokemon.img_url} alt="포켓몬 사진" />
            <P>No. {pokemon.id}</P>
            <H1>{pokemon.korean_name}</H1>
            <Button>추가</Button>
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
  border-radius: 16px;
  box-shadow: 0 0 5px 1px #acb5bd;
`;

const H1 = styled.h1`
  font-size: 20px;
  margin-bottom: 16px;
`;

const P = styled.p`
  font-size: 16px;
  margin-bottom: 8px;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
