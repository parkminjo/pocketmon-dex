import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MOCK_DATA from "../API/MOCK_DATA";
import { addPokemon } from "../redux/slices/pokemonSlice";

import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Slide, toast, ToastContainer } from "react-toastify";

import { ParagraphStyle, TitleStyle } from "../styled-component/CommonStyle";
import { PokemonCardStyle as S } from "../styled-component/PokemonCardStyle";

const PokemonCard = () => {
  /** 사용자가 등록한 포켓몬 리스트 */
  const pokemonList = useSelector((state) => state.pokemon);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  /** 포켓몬 카드 UI */
  return (
    <>
      {MOCK_DATA.map((pokemon) => {
        const { id, img_url, korean_name, types } = pokemon;
        return (
          <S.CardBox
            key={id}
            onClick={() => {
              navigate(`/detail?id=${id}`);
            }}
          >
            <ParagraphStyle $fontSize="16px" $marginBottom="5px">
              No. {id}
            </ParagraphStyle>
            <TitleStyle $fontSize="20px">{korean_name}</TitleStyle>

            <img src={img_url} alt="포켓몬 사진" />

            <S.TypesBox>
              {types.map((type) => (
                <S.Type key={type}>{type}</S.Type>
              ))}
            </S.TypesBox>

            <S.AddButton
              onClick={(event) => {
                event.stopPropagation();

                /** 예외상황01: 포켓몬이 이미 등록됐을 때 */
                if (pokemonList.some((pokemon) => pokemon.id === id)) {
                  toast.error("이미 등록된 포켓몬입니다");
                  return;
                }
                /** 예외상황02: 포켓몬 6마리 모두 등록됐을 때 */
                if (pokemonList.length > 5) {
                  toast.error("포켓몬 6마리를 모두 등록하셨습니다");
                  return;
                }
                dispatch(addPokemon({ id, img_url, korean_name, types }));
              }}
            >
              {pokemonList.some((pokemon) => pokemon.id === id) ? (
                <FontAwesomeIcon icon={faSolidHeart} />
              ) : (
                <FontAwesomeIcon icon={faRegularHeart} />
              )}
            </S.AddButton>
          </S.CardBox>
        );
      })}
      <ToastContainer
        position="top-center"
        limit={1}
        closeButton={false}
        autoClose={1000}
        theme="dark"
        transition={Slide}
      />
    </>
  );
};

export default PokemonCard;
