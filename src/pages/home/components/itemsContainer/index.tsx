import React, { useContext, useState, useEffect, useRef } from "react";
import api from "../../../../services/api";

import { StoreContext, SearchContext } from "../../../../services/contexts";

import flattenObjects from "../../../../services/flattenObjects";
import deepClone from "../../../../services/deepClone";
import search from "../../../../services/search";

import Showcase from "./Showcase";
import {
  PrimaryContainer,
  ItemsLoading,
  LoadMoreButton,
  LoadMoreContainer,
} from "./ui";

const POKEMON_IMAGE_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

interface PokemonParams {
  pokemon: { [key: string]: String };
}
const paginationItems = window.innerWidth < 650 ? 6 : 12;

const ItemsContainer: React.FC = () => {
  const context = useContext(StoreContext);
  const searchText = useContext(SearchContext);
  useEffect(() => {
    searchAndSetItems(items);
  }, [searchText]);

  const [items, setItems] = useState<Object[]>([]);
  const [activeItems, setActiveItems] = useState<Object[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [itemsToRender, setItemsToRender] = useState<number>(paginationItems);
  const [hideLoadMoreButton, setHideLoadMoreButton] = useState(false);

  const listRef = useRef<HTMLDivElement>(null);

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
    setActiveItems(pokemon);

    setLoading(false);
  };

  // search and set items
  const searchAndSetItems = (data: object[]): void => {
    let flatenItems = data.map((item: any) => {
      return flattenObjects(item);
    });

    let searchresult = search(searchText, flatenItems);
    let searchids = searchresult.result.map(
      (item: { [key: string]: any }) => item["pokemon.id"]
    );

    let searchItems: object[] = [];

    searchids.forEach((element: string) => {
      let itemPush = data.find(
        (item: { [key: string]: any }) => item.pokemon.id == element
      );

      searchItems.push(deepClone(itemPush));
    });

    setActiveItems(searchItems);
  };

  const addMoreItems = () => {
    setItemsToRender(itemsToRender + paginationItems);

    if (itemsToRender + paginationItems >= items.length) {
      setHideLoadMoreButton(true);
    }
  };

  useEffect(() => {
    let lista = listRef.current;
    if (lista) {
      lista.addEventListener("scroll", () => {
        console.log("final2");
        if (
          lista &&
          lista.scrollTop + lista.offsetHeight == lista.scrollHeight
        ) {
          console.log("final");
        }
      });
    }

    getItems();
  }, []);

  return (
    <>
      <PrimaryContainer ref={listRef}>
        {!loading
          ? activeItems.map((item, index) => {
              if (index < itemsToRender) {
                return <Showcase data={item} key={index} />;
              }
            })
          : ItemsLoading()}
      </PrimaryContainer>

      {!hideLoadMoreButton && activeItems.length !== 0 && (
        <LoadMoreContainer>
          <LoadMoreButton onClick={() => addMoreItems()}>
            Carregar mais Pokemons
          </LoadMoreButton>
        </LoadMoreContainer>
      )}
    </>
  );
};

export default ItemsContainer;
