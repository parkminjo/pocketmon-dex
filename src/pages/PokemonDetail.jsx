import React from "react";
import MOCK_DATA from "../API/MOCK_DATA";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addPokemon, removePokemon } from "../redux/slices/pokemonSlice";

import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Slide, toast, ToastContainer } from "react-toastify";

import { TitleStyle, ParagraphStyle } from "../styled-component/CommonStyle";
import { PokemonDetailStyle as S } from "../styled-component/PokemonDetailStyle";

const PokemonDetail = () => {
  /** 사용자가 등록한 포켓몬 리스트 */
  const pokemonList = useSelector((state) => state.pokemon);

  /** 클릭한 queryString 가져오기 */
  const [searchParam] = useSearchParams();
  const queryId = searchParam.get("id");

  const { img_url, korean_name, types, description, id } = MOCK_DATA.find(
    (pokemon) => pokemon.id === +queryId
  );

  const dispatch = useDispatch();

  /** 포켓몬 정보 페이지 UI */
  return (
    <S.Container>
      <S.DetailBox>
        {pokemonList.some((pokemon) => pokemon.id === id) ? (
          <S.Button
            onClick={() => {
              toast.info("포켓몬 등록이 취소되었습니다");
              dispatch(removePokemon(id));
            }}
          >
            <FontAwesomeIcon icon={faSolidHeart} />
          </S.Button>
        ) : (
          <S.Button
            onClick={() => {
              toast.info("포켓몬이 등록되었습니다");
              dispatch(addPokemon({ id, img_url, korean_name, types }));
            }}
          >
            <FontAwesomeIcon icon={faRegularHeart} />
          </S.Button>
        )}
        <ParagraphStyle $fontSize="16px" $marginBottom="8px">
          NO. {id}
        </ParagraphStyle>
        <TitleStyle $fontSize="2rem">{korean_name}</TitleStyle>

        <S.PokemonImg src={img_url} alt="포켓몬사진" />

        <S.TypesBox>
          {types.map((type) => (
            <S.Type key={type}>{type}</S.Type>
          ))}
        </S.TypesBox>

        <ParagraphStyle $fontSize="18px" $marginBottom="1rem">
          {description}
        </ParagraphStyle>

        <S.BackButton to="/dex">뒤로가기</S.BackButton>
      </S.DetailBox>
      <ToastContainer
        position="top-center"
        limit={1}
        closeButton={false}
        autoClose={500}
        hideProgressBar={true}
        transition={Slide}
      />
    </S.Container>
  );
};

export default PokemonDetail;
