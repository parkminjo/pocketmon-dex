import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Dashboard = ({ pokemonList, setPokemonList }) => {
  const removePokemon = (id) => {
    console.log(pokemonList);
    setPokemonList((prev) => prev.filter((pokemon) => pokemon.id !== id));
  };
  /** UI */
  return (
    <Div>
      {pokemonList.length === 0 && (
        <Pokeball>
          <Img src="../../img/ball.png" alt="포켓볼" />
        </Pokeball>
      )}

      {pokemonList.map((pokemon) => {
        return (
          <SelectedCard key={pokemon.id}>
            <img src={pokemon.img_url} alt="포켓몬사진" />
            <div>
              <P>NO. {pokemon.id}</P>
              <H1>{pokemon.korean_name}</H1>
            </div>
            <DeleteButton onClick={() => removePokemon(pokemon.id)}>
              <FontAwesomeIcon icon={faHeart} />
            </DeleteButton>
          </SelectedCard>
        );
      })}
    </Div>
  );
};

export default Dashboard;

/** styled component */
const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;

const Pokeball = styled.div`
  display: flex;
  width: 100px;
  height: 100px;
`;

const Img = styled.img`
  object-fit: cover;
`;

const SelectedCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 180px;
  height: 100px;
  padding-right: 10px;
  border: 1px solid #acb5bd;
  border-radius: 1rem;
`;

const P = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
`;

const H1 = styled.h1`
  font-size: 20px;
`;

const DeleteButton = styled.button`
  margin-left: 10px;
  border: none;
  background-color: transparent;
  font-size: 20px;
  color: #ee4e4e;
  &:hover {
    color: #697076;
  }
`;
