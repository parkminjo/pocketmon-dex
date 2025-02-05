import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  const navigate = useNavigate();

  /** 홈 UI */
  return (
    <Div>
      <Button onClick={() => navigate("/dex")}>
        <Img src="https://ifh.cc/g/nvSXBK.webp" alt="포켓몬도감" />
      </Button>
    </Div>
  );
};

export default Home;

/** styled component */
const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 100vh;
  background-color: #121212;
`;

const Img = styled.img`
  width: 600px;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  opacity: 80%;
  &:hover {
    opacity: 100%;
    transform: scale(1.1, 1.1);
    transition-duration: 0.2s;
    transition-timing-function: ease-in;
  }
`;
