import axios from "axios";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export const getPokemonById = (pokemonId: number) =>
  api.get(`pokemon/${pokemonId}`);

export const getPokemonByType = (typeId: number) => api.get(`type/${typeId}`);

export const POKEMON_IMAGE_URL_PATH =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

export default api;
