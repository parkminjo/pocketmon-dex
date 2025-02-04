import React from "react";
import styled from "styled-components";

const Header = () => {
  /** UI */
  return (
    <Div>
      <Img src="https://ifh.cc/g/WOXQw7.png" alt="로고" />
    </Div>
  );
};

export default Header;

/** styled component */
const Div = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px 3rem 10px 3rem;
  background-color: #121212;
`;

const Img = styled.img`
  width: 70px;
`;
