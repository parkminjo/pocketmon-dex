import { configureStore } from "@reduxjs/toolkit";
import { pokemonSlice } from "../\bslices/PokemonSlice";

const store = configureStore({
  reducer: {
    pokemon: pokemonSlice.reducer,
  },
});

export default store;
