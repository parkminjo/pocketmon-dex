import styled from "styled-components";

export const PokemonCardStyle = {
  CardBox: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 260px;
    background-color: white;
    border: 4px solid #ffcb03;
    border-radius: 1rem;

    transition: all 0.3s ease-in-out;
    &:hover {
      transform: translateY(-10px);
      opacity: 80%;
    }
  `,

  TypesBox: styled.div`
    display: flex;
    gap: 6px;
    margin: 10px 0 1rem 0;
  `,

  Type: styled.button`
    width: 20px;
    background-color: #ced4d9;
    border: none;
    border-radius: 5px;
    padding: 5px;
    width: 50px;
    font-size: 16px;
  `,

  AddButton: styled.button`
    border: none;
    background-color: transparent;
    font-size: 20px;
    color: #697076;
    cursor: pointer;
    &:hover {
      color: #ee4e4e;
    }
  `,
};
