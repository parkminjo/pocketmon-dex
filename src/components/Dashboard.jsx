import React, { useContext } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import PokemonContext from "../context/PokemonContext";

const Dashboard = () => {
  const { pokemonList, setPokemonList } = useContext(PokemonContext);

  /**
   * 포켓몬 카드 삭제 함수
   * @param {*} id
   */
  const removePokemon = (id) => {
    setPokemonList((prev) => prev.filter((pokemon) => pokemon.id !== id));
  };

  /** UI */
  return (
    <Div>
      <H2>나만의 포켓몬</H2>
      <CardDiv>
        {pokemonList.map((pokemon) => {
          return (
            <SelectedCard key={pokemon.id}>
              <PokemonImg src={pokemon.img_url} alt="포켓몬사진" />

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

        {pokemonList.length < 6 &&
          new Array(6 - pokemonList.length).fill(null).map((_, idx) => {
            return (
              <Pokeball key={idx}>
                <Img src="../../img/ball.png" alt="포켓볼" />
              </Pokeball>
            );
          })}
      </CardDiv>
    </Div>
  );
};

export default Dashboard;

/** styled component */
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 1rem;
  padding: 2rem;
  border: 4px solid #ffcb03;
`;
const H2 = styled.h2`
  font-size: 20px;
  margin-bottom: 1rem;
`;

const CardDiv = styled.div`
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
  padding-right: 8px;
  border-radius: 1rem;
  background-color: #ffcb03;
`;

const PokemonImg = styled.img`
  width: 65px;
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
