import React, { useContext } from "react";
import MOCK_DATA from "../API/MOCK_DATA";
import { Link, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { PokemonContext } from "../context/PokemonContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { Slide, toast, ToastContainer } from "react-toastify";

const PokemonDetail = () => {
  const [searchParam] = useSearchParams();
  const queryId = searchParam.get("id");

  const { img_url, korean_name, types, description, id } = MOCK_DATA.find(
    (pokemon) => pokemon.id === +queryId
  );

  const notifyAdd = () => toast.info("포켓몬이 등록되었습니다");
  const notifyRemove = () => toast.info("포켓몬 등록이 취소되었습니다");

  const { pokemonList, addPokemon, removePokemon } = useContext(PokemonContext);

  return (
    <Div>
      <DetailDiv>
        {pokemonList.some((pokemon) => pokemon.id === id) ? (
          <Button
            onClick={() => {
              notifyRemove();
              removePokemon(id);
            }}
          >
            <FontAwesomeIcon icon={faSolidHeart} />
          </Button>
        ) : (
          <Button
            onClick={() => {
              notifyAdd();
              addPokemon(id, img_url, korean_name, types);
            }}
          >
            <FontAwesomeIcon icon={faRegularHeart} />
          </Button>
        )}
        <p>NO. {id}</p>
        <H1>{korean_name}</H1>

        <Img src={img_url} alt="포켓몬사진" />

        <TypesDiv>
          {types.map((type) => (
            <Type key={type}>{type}</Type>
          ))}
        </TypesDiv>

        <P>{description}</P>

        <Link to="/dex">
          <CloseButton>뒤로가기</CloseButton>
        </Link>
      </DetailDiv>
      <ToastContainer
        position="top-center"
        limit={1}
        closeButton={false}
        autoClose={500}
        hideProgressBar={true}
        transition={Slide}
      />
    </Div>
  );
};

export default PokemonDetail;

/** styled component */
const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #121212;
`;

const DetailDiv = styled.div`
  width: 600px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 8px solid #ffcb03;
  border-radius: 1rem;
  position: absolute;
`;

const CloseButton = styled.button`
  border: none;
  font-size: 1rem;
  background-color: #ee4e4e;
  color: white;
  padding: 6px;
  border-radius: 5px;
  &:hover {
    background-color: #bf3434;
  }
`;

const Img = styled.img`
  width: 150px;
`;

const H1 = styled.h1`
  font-size: 2rem;
  margin-top: 8px;
`;

const TypesDiv = styled.div`
  display: flex;
  gap: 6px;
  margin-bottom: 2rem;
`;

const Type = styled.button`
  width: 20px;
  background-color: #ced4d9;
  border: none;
  border-radius: 5px;
  padding: 5px;
  width: 50px;
`;

const P = styled.p`
  font-size: 20px;
  margin-bottom: 1rem;
  background-size: cover;
  text-align: center;
  width: 100%;
`;

const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin: 1rem;

  border: none;
  background-color: transparent;
  font-size: 30px;
  color: #ee4e4e;
  cursor: pointer;
  &:hover {
    color: #697076;
  }
`;
