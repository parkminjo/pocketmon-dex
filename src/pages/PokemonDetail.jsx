import React from "react";
import MOCK_DATA from "../API/MOCK_DATA";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import styled from "styled-components";

const PokemonDetail = () => {
  const [searchParam] = useSearchParams();
  const queryId = searchParam.get("id");

  const { img_url, korean_name, types, description, id } = MOCK_DATA.find(
    (pokemon) => pokemon.id === +queryId
  );

  return (
    <Div>
      <DetailDiv>
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
      </DetailDiv>
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
  margin-bottom: 10px;
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
