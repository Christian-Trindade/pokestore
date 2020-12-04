import React, { useRef, useEffect } from "react";

import nameCapitalized from "../../../../services/upperCaseName";
import monetaryFormatter from "../../../../services/monetaryFormat";
import history from "../../../../services/History";

import AddToCart from "../../../../components/AddToCartButton";

import { Image, ShowcaseContainer, Name, Price, PriceParcelate } from "./ui";

interface ShowCaseProps {
  data: { [key: string]: any };
}

const imageSize = window.innerWidth < 420 ? 112 : 152;

const PokemonShowcase: React.FC<ShowCaseProps> = ({ data }) => {
  const imageRef = useRef<HTMLImageElement>(null);

  const setUnknowImage = () => {
    if (!imageRef.current) return;
    imageRef.current.src = "./assets/images/unknow.png";
  };

  useEffect(() => {
    if (!imageRef.current) return;
    imageRef.current.addEventListener("error", setUnknowImage);
  });

  return (
    <ShowcaseContainer>
      <div
        onClick={() =>
          history.push({
            pathname: `product/${data.pokemon.id}`,
          })
        }
      >
        <Image
          src={data.pokemon.image}
          loading="lazy"
          alt={`Image do pokemon ${data.pokemon.name}`}
          ref={imageRef}
          width={imageSize}
          height={imageSize}
        />
        <Name> {nameCapitalized(data.pokemon.name)}</Name>
        <Price>{monetaryFormatter(data.pokemon.id)}</Price>
        <PriceParcelate>
          12x de {monetaryFormatter(data.pokemon.id / 12)}
        </PriceParcelate>
      </div>
      <AddToCart data={data} size="small" />
    </ShowcaseContainer>
  );
};

export default PokemonShowcase;
