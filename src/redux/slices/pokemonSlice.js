import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("pokemonList")) || [];

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addPokemon: () => {
      if (pokemonList.some((pokemon) => pokemon.id === id)) {
        alert("이미 등록된 포켓몬입니다");
        return;
      }
      /** 예외상황02: 포켓몬 6마리 모두 등록됐을 때 */
      if (pokemonList.length > 5) {
        alert("포켓몬 6마리를 모두 등록하셨습니다");
        return;
      }
      return [...prev, { id, img_url, korean_name, types }];
    },
  },
});

export const { addPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
