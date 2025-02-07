import { Link } from "react-router-dom";
import styled from "styled-components";

export const PokemonDetailStyle = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #121212;
  `,

  DetailBox: styled.div`
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
  `,

  BackButton: styled(Link)`
    border: none;
    font-size: 1rem;
    background-color: #ee4e4e;
    color: white;
    padding: 6px;
    border-radius: 5px;
    text-decoration: none;

    &:hover {
      background-color: #bf3434;
    }
  `,

  PokemonImg: styled.img`
    width: 150px;
  `,

  TypesBox: styled.div`
    display: flex;
    gap: 6px;
    margin-bottom: 2rem;
  `,

  Type: styled.button`
    width: 20px;
    background-color: #ced4d9;
    border: none;
    border-radius: 5px;
    padding: 5px;
    width: 50px;
  `,

  P: styled.p`
    font-size: 20px;
    margin-bottom: 1rem;
    background-size: cover;
    text-align: center;
    width: 100%;
  `,

  Button: styled.button`
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
  `,
};
