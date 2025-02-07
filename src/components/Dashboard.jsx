import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removePokemon } from "../redux/slices/pokemonSlice";

import { ParagraphStyle, TitleStyle } from "../styled-component/CommonStyle";
import { DashboardStyle as S } from "../styled-component/DashboardStyle";

const Dashboard = () => {
  /** 사용자가 등록한 포켓몬 리스트 */
  const pokemonList = useSelector((state) => state.pokemon);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  /** 사용자가 등록한 포켓몬 카드 UI */
  return (
    <S.CardContainer>
      <TitleStyle $fontSize="24px" $marginBottom="1rem">
        나만의 포켓몬
      </TitleStyle>

      <S.CardBox>
        {pokemonList.map((pokemon) => {
          return (
            <S.SelectedCardBox
              key={pokemon.id}
              onClick={() => navigate(`/detail?id=${pokemon.id}`)}
            >
              <S.PokemonImg src={pokemon.img_url} alt="포켓몬사진" />

              <div>
                <ParagraphStyle $fontSize="16px" $marginBottom="5px">
                  NO. {pokemon.id}
                </ParagraphStyle>
                <TitleStyle $fontSize="20px">{pokemon.korean_name}</TitleStyle>
              </div>

              <S.DeleteButton
                onClick={(event) => {
                  event.stopPropagation();
                  dispatch(removePokemon(pokemon.id));
                }}
              >
                <FontAwesomeIcon icon={faHeart} />
              </S.DeleteButton>
            </S.SelectedCardBox>
          );
        })}

        {pokemonList.length < 6 &&
          new Array(6 - pokemonList.length).fill(null).map((_, idx) => {
            return (
              <S.PokeballBox key={idx}>
                <S.PokeballImg src="https://ifh.cc/g/B87CRh.png" alt="포켓볼" />
              </S.PokeballBox>
            );
          })}
      </S.CardBox>
    </S.CardContainer>
  );
};

export default Dashboard;
