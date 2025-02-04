import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { removePokemon } from "../redux/\bslices/PokemonSlice";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const pokemonList = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /** UI */
  return (
    <Div>
      <H2>나만의 포켓몬</H2>
      <CardDiv>
        {pokemonList.map((pokemon) => {
          return (
            <SelectedCard
              key={pokemon.id}
              onClick={() => navigate(`/detail?id=${pokemon.id}`)}
            >
              <PokemonImg src={pokemon.img_url} alt="포켓몬사진" />

              <div>
                <P>NO. {pokemon.id}</P>
                <H1>{pokemon.korean_name}</H1>
              </div>

              <DeleteButton
                onClick={(event) => {
                  event.stopPropagation();
                  dispatch(removePokemon(pokemon.id));
                }}
              >
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

  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    opacity: 80%;
  }
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
