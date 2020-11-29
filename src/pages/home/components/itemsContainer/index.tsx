import React, { useContext, useState, useEffect } from "react";
import api from "../../../../services/api";

import { StoreContext } from "../../../../services/contexts";
import Showcase from "./Showcase";
import { PrimaryContainer } from "./ui";

const POKEMON_IMAGE_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

interface PokemonParams {
  pokemon: { [key: string]: String };
}

const ItemsContainer: React.FC = () => {
  const context = useContext(StoreContext);
  const [items, setItems] = useState([]);

  // receive a pokemon and add image and pokemon id in the object
  const modifyPokemonData = (el: PokemonParams): void => {
    let paramsArray = el.pokemon.url.split("/");
    let pokemonId = paramsArray[6];
    let pokemonImageUrl = `${POKEMON_IMAGE_URL}${pokemonId}.png`;
    el.pokemon.image = pokemonImageUrl;
    el.pokemon.id = pokemonId;
  };

  // receive a pokemon list filtered by type of store
  const getItems = async (): Promise<void> => {
    let url = `type/${context.type_id}`;
    let responseItems = await api.get(url);
    let pokemon = responseItems.data.pokemon;
    pokemon.forEach((el: PokemonParams) => modifyPokemonData(el));
    setItems(pokemon);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <PrimaryContainer>
      {items.map((item, index) => (
        <Showcase data={item} key={index} />
      ))}
    </PrimaryContainer>
  );
};

export default ItemsContainer;
