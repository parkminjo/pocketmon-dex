import { createSlice } from "@reduxjs/toolkit";

/** 초기 state */
const initialState = JSON.parse(localStorage.getItem("pokemonList")) || [];

/** RTK */
export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      state.push(action.payload);
    },

    removePokemon: (state, action) => {
      const filteredPokemonList = state.filter(
        (pokemon) => pokemon.id !== action.payload
      );
      return filteredPokemonList;
    },
  },
});

export const { addPokemon, removePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
