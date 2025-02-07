import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MOCK_DATA from "../API/MOCK_DATA";

import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Slide, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PokemonCard = ({ pokemonList, setPokemonList }) => {
  const navigate = useNavigate();

  /**
   * 포켓몬 추가 함수
   * @param {*} selectedPokemon
   */
  const addPokemon = (selectedPokemon) => {
    /** 예외상황01: 포켓몬이 이미 등록됐을 때 */
    if (pokemonList.some((pokemon) => pokemon.id === selectedPokemon.id)) {
      toast.error("이미 등록된 포켓몬입니다");
      return;
    }
    /** 예외상황02: 포켓몬 6마리 모두 등록됐을 때 */
    if (pokemonList.length > 5) {
      toast.error("포켓몬 6마리를 모두 등록하셨습니다");
      return;
    }
    setPokemonList((prev) => [...prev, selectedPokemon]);
  };

  /** 포켓몬 카드 UI */
  return (
    <>
      {MOCK_DATA.map((pokemon) => {
        const { id, img_url, korean_name, types } = pokemon;
        return (
          <Card key={id} onClick={() => navigate(`/detail?id=${id}`)}>
            <P>No. {id}</P>
            <H1>{korean_name}</H1>

            <img src={img_url} alt="포켓몬 사진" />

            <TypesDiv>
              {types.map((type) => (
                <Type key={type}>{type}</Type>
              ))}
            </TypesDiv>

            <AddButton
              onClick={(event) => {
                event.stopPropagation();

                addPokemon(pokemon);
              }}
            >
              {pokemonList.some((pokemon) => pokemon.id === id) ? (
                <FontAwesomeIcon icon={faSolidHeart} />
              ) : (
                <FontAwesomeIcon icon={faRegularHeart} />
              )}
            </AddButton>
          </Card>
        );
      })}
      <ToastContainer
        position="top-center"
        limit={1}
        closeButton={false}
        autoClose={1000}
        theme="dark"
        transition={Slide}
      />
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
  width: 200px;
  height: 260px;
  background-color: white;
  border: 4px solid #ffcb03;
  border-radius: 1rem;

  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    opacity: 80%;
  }
`;

const P = styled.p`
  font-size: 16px;
  margin-bottom: 8px;
`;

const H1 = styled.h1`
  font-size: 20px;
`;

const TypesDiv = styled.div`
  display: flex;
  gap: 6px;
  margin: 10px 0 1rem 0;
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
  font-size: 20px;
  color: #697076;
  cursor: pointer;
  &:hover {
    color: #ee4e4e;
  }
`;
