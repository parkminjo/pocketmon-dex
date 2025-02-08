import styled from "styled-components";

export const DashboardStyle = {
  CardContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 1rem;
    padding: 2rem;
    border: 4px solid #ffcb03;
  `,

  CardBox: styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
  `,

  PokeballBox: styled.div`
    display: flex;
    width: 100px;
    height: 100px;
  `,

  PokeballImg: styled.img`
    object-fit: cover;
  `,

  SelectedCardBox: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 180px;
    height: 100px;
    padding-right: 8px;
    border-radius: 1rem;
    background-color: #ffcb03;
    cursor: pointer;

    transition: all 0.3s ease-in-out;
    &:hover {
      transform: translateY(-5px);
      opacity: 80%;
    }
  `,

  PokemonImg: styled.img`
    width: 65px;
  `,

  DeleteButton: styled.button`
    margin-left: 10px;
    border: none;
    background-color: transparent;
    font-size: 20px;
    color: #ee4e4e;
    cursor: pointer;

    &:hover {
      color: #697076;
    }
  `,
};
