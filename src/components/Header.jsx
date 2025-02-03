import React from "react";
import styled from "styled-components";

const Header = () => {
  /** UI */
  return (
    <Div>
      <Img src="../../img/pokemonLogo.png" alt="로고" />
      <Input type="text" placeholder="포켓몬을 검색하세요" />
    </Div>
  );
};

export default Header;

/** styled component */
const Div = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px 3rem 10px 3rem;
  background-color: black;
`;

const Img = styled.img`
  width: 70px;
`;

const Input = styled.input`
  width: 200px;
  height: 30px;
  border: 1px solid #acb5bd;
  padding-left: 16px;
  border-radius: 100px;
`;
