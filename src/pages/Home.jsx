import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  const navigate = useNavigate();

  /** UI */
  return (
    <Div>
      <Img src="../../img/pokemonDex.webp" alt="포켓몬도감" />
      <button onClick={() => navigate("/dex")}>포켓몬 도감 시작하기</button>
    </Div>
  );
};

export default Home;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 500px;
`;
