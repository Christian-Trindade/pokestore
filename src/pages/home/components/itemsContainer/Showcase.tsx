import React, { useState, useRef, useLayoutEffect } from "react";

import nameCapitalized from "../../../../services/upperCaseName";
import monetaryFormatter from "../../../../services/monetaryFormat";

import {
  Image,
  ShowcaseContainer,
  Name,
  Price,
  PriceParcelate,
  AddToCartButton,
} from "./ui";

import { StylesProvider } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

interface ShowCaseProps {
  data: { [key: string]: any };
}

const PokemonShowcase: React.FC<ShowCaseProps> = ({ data }) => {
  const [pokemonImageUrl, setPokemonImageUrl] = useState<string>(
    data.pokemon.image
  );
  const imageRef = useRef<HTMLImageElement>(null);

  const setUnknowImage = () => {
    setPokemonImageUrl("./assets/images/unknow.webp");
  };

  useLayoutEffect(() => {
    if (!imageRef.current) return;
    imageRef.current.addEventListener("error", setUnknowImage);
  });

  return (
    <ShowcaseContainer>
      <Image src={pokemonImageUrl} ref={imageRef} />
      <Name> {nameCapitalized(data.pokemon.name)}</Name>
      <Price>{monetaryFormatter(data.pokemon.id)}</Price>
      <PriceParcelate>
        12x de {monetaryFormatter(data.pokemon.id / 12)}
      </PriceParcelate>
      <StylesProvider injectFirst>
        <AddToCartButton endIcon={<ShoppingCartIcon />}>Pegar</AddToCartButton>
      </StylesProvider>
    </ShowcaseContainer>
  );
};

export default PokemonShowcase;
