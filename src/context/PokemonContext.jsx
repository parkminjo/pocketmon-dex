import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/** 전역 context */
export const PokemonContext = createContext(null);

export const PokemonProvider = ({ children }) => {
  const [pokemonList, setPokemonList] = useState(
    JSON.parse(localStorage.getItem("pokemonList")) || []
  );

  /** 로컬 스토리지 저장 */
  useEffect(() => {
    localStorage.setItem("pokemonList", JSON.stringify(pokemonList));
  }, [pokemonList]);

  /**
   * 포켓몬 카드 추가 함수
   * @param {*} id
   * @param {*} img_url
   * @param {*} korean_name
   * @param {*} types
   */
  const addPokemon = (selectedPokemon) => {
    /** 예외상황01: 이미 등록된 포켓몬일 때 */
    if (pokemonList.some((pokemon) => pokemon.id === selectedPokemon.id)) {
      toast.error("이미 등록된 포켓몬입니다");
      return;
    }
    /** 예외상황02: 포켓몬 6마리 모두 등록됐을 때 */
    if (pokemonList.length > 5) {
      toast.error("포켓몬 6마리를 모두 등록하셨습니다");
      return;
    }

    setPokemonList((prev) => {
      return [...prev, selectedPokemon];
    });
  };

  /**
   * 포켓몬 카드 삭제 함수
   * @param {*} id
   */
  const removePokemon = (id) => {
    setPokemonList((prev) => prev.filter((pokemon) => pokemon.id !== id));
  };

  const value = {
    pokemonList,
    addPokemon,
    removePokemon,
  };

  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  );
};
