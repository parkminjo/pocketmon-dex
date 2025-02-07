import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomeStyle = {
  Container: styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    height: 100vh;
    background-color: #121212;
  `,

  DexImg: styled.img`
    width: 600px;
  `,

  DexButton: styled.button`
    border: none;
    background-color: transparent;
    opacity: 80%;
    &:hover {
      opacity: 100%;
      transform: scale(1.1, 1.1);
      transition-duration: 0.2s;
      transition-timing-function: ease-in;
    }
  `,
};
