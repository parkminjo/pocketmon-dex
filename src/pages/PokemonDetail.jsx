import React from "react";
import MOCK_DATA from "../API/MOCK_DATA";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const PokemonDetail = () => {
  const param = useParams();
  const { img_url, korean_name, types, description, id } = MOCK_DATA.find(
    (pokemon) => pokemon.id === +param.id
  );

  return (
    <Div>
      <Img src={img_url} alt="포켓몬사진" />
      <p>NO. {id}</p>
      <H1>{korean_name}</H1>
      <TypesDiv>
        {types.map((type) => (
          <Type key={type}>{type}</Type>
        ))}
      </TypesDiv>
      <P>{description}</P>
      <Link to="/dex">
        <CloseButton>뒤로가기</CloseButton>
      </Link>
    </Div>
  );
};

export default PokemonDetail;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const CloseButton = styled.button`
  border: none;
  padding: 5px;
`;

const Img = styled.img`
  width: 150px;
`;

const H1 = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
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

const P = styled.p`
  font-size: 20px;
  margin-bottom: 1rem;
  background-size: cover;
  text-align: center;
  width: 100%;
`;
