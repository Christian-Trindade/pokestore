import React, { useContext, useState, useEffect } from "react";

import {
  getPokemonByType,
  POKEMON_IMAGE_URL_PATH,
} from "../../../../services/api";

import { StoreContext, SearchContext } from "../../../../services/contexts";

import flattenObjects from "../../../../services/flattenObjects";
import deepClone from "../../../../services/deepClone";
import search from "../../../../services/search";
import initialSearchParam from "../../../../services/search/getSearchParams";

import Showcase from "./Showcase";
import {
  PrimaryContainer,
  ItemsLoading,
  LoadMoreButton,
  LoadMoreContainer,
} from "./ui";

interface PokemonParams {
  pokemon: { [key: string]: String };
}

const paginationItems = window.innerWidth < 650 ? 6 : 12;

const ItemsContainer: React.FC = () => {
  const context = useContext(StoreContext);
  const searchText = useContext(SearchContext);

  useEffect(() => {
    searchAndSetItems(items, searchText);
  }, [searchText]);

  const [items, setItems] = useState<Object[]>([]);
  const [activeItems, setActiveItems] = useState<Object[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [itemsToRender, setItemsToRender] = useState<number>(paginationItems);
  const [hideLoadMoreButton, setHideLoadMoreButton] = useState(false);

  // receive a pokemon and add image and pokemon id in the object
  const modifyPokemonData = (el: PokemonParams): void => {
    const paramsArray = el.pokemon.url.split("/");
    const pokemonId = paramsArray[6];
    const pokemonImageUrl = `${POKEMON_IMAGE_URL_PATH}${pokemonId}.png`;
    el.pokemon.image = pokemonImageUrl;
    el.pokemon.id = pokemonId;
  };

  // receive a pokemon list filtered by type of store
  const getItems = async (): Promise<void> => {
    const responseItems = await getPokemonByType(context.type_id);
    const pokemon = responseItems.data.pokemon;
    pokemon.forEach((el: PokemonParams) => modifyPokemonData(el));

    setItems(pokemon);
    setActiveItems(pokemon);

    if (initialSearchParam) {
      searchAndSetItems(pokemon, initialSearchParam);
    }

    setLoading(false);
  };

  // search and set items
  const searchAndSetItems = (data: object[], text: string): void => {
    let flatenItems = data.map((item: any) => {
      return flattenObjects(item);
    });

    let searchresult = search(text, flatenItems);

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
    getItems();
  }, []);

  return (
    <>
      <PrimaryContainer>
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
            Carregar mais Pokemon
          </LoadMoreButton>
        </LoadMoreContainer>
      )}
    </>
  );
};

export default ItemsContainer;
