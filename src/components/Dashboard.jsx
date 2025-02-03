import React from "react";
import styled from "styled-components";

const Dashboard = ({ pokemonList, setPokemonList }) => {
  const handleDelete = (id) => {
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
          <PokemonCard key={pokemon.id}>
            <img src={pokemon.img_url} alt="포켓몬사진" />
            <div>
              <P>NO. {pokemon.id}</P>
              <H1>{pokemon.korean_name}</H1>
            </div>
            <button onClick={() => handleDelete(pokemon.id)}>삭제</button>
          </PokemonCard>
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
  gap: 50px;
`;

const Pokeball = styled.div`
  display: flex;
  width: 100px;
  height: 100px;
`;

const Img = styled.img`
  object-fit: cover;
`;

const PokemonCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 200px;
  height: 100px;
  padding-right: 1rem;
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
