import React from "react";
import styled from "styled-components";
import MOCK_DATA from "../API/MOCK_DATA";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const PokemonCard = ({ pokemonList, setPokemonList }) => {
  /**
   * 포켓몬 카드 추가 함수
   * @param {*} id
   * @param {*} img_url
   * @param {*} korean_name
   * @param {*} types
   */
  const addPokemon = (id, img_url, korean_name, types) => {
    /** 예외상황01: 이미 등록된 포켓몬일 때 */
    if (pokemonList.some((pokemon) => pokemon.id === id)) {
      alert("이미 등록된 포켓몬입니다");
      return;
    }
    /** 예외상황02: 포켓몬 6마리 모두 등록됐을 때 */
    if (pokemonList.length > 5) {
      alert("포켓몬 6마리를 모두 등록하셨습니다");
      return;
    }

    setPokemonList((prev) => {
      return [...prev, { id, img_url, korean_name, types }];
    });
  };

  const navigate = useNavigate();

  /** UI */
  return (
    <>
      {MOCK_DATA.map((pokemon) => {
        const { id, img_url, korean_name, types } = pokemon;
        return (
          <Card key={id} onClick={() => navigate(`/detail?id=${id}`)}>
            <img src={img_url} alt="포켓몬 사진" />
            <P>No. {id}</P>
            <H1>{korean_name}</H1>

            <TypesDiv>
              {types.map((type) => (
                <Type key={type}>{type}</Type>
              ))}
            </TypesDiv>

            <AddButton
              onClick={(event) => {
                event.stopPropagation();
                addPokemon(id, img_url, korean_name, types);
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
  border-radius: 1rem;
  box-shadow: 0 0 6px 1px #acb5bd;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 10px 1px #acb5bd;
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
  }
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
  font-size: 20px;
  color: #697076;
  cursor: pointer;
  &:hover {
    color: #ee4e4e;
  }
`;
