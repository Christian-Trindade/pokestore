import * as React from "react";
import { FC } from "react";

import nameCapitalized from "../../../../services/upperCaseName";
import monetaryFormatter from "../../../../services/monetaryFormat";

import AddToCart from "../../../../components/AddToCartButton";

import {
  PrimaryContainer,
  ProductName,
  ProductImage,
  StatusContainer,
  StatusTitle,
  StatusValue,
  SecondaryContainer,
  ThirdContainer,
  Price,
  PriceParcelate,
} from "./ui";

interface ProductContainerProps {
  data: { [key: string]: any };
}

interface StatsParams {
  stat: {
    name: string;
  };
  base_stat: string;
}

const ProductContainer: FC<ProductContainerProps> = ({ data }) => {
  console.log("image path", data.sprites.other.official_artwork);
  return (
    <PrimaryContainer>
      <ProductName>{nameCapitalized(data.name)}</ProductName>
      <SecondaryContainer>
        <ProductImage
          src={data.sprites.other["official-artwork"].front_default}
          width={280}
        />
        <ThirdContainer>
          <StatusContainer>
            {data.stats.map((item: StatsParams) => (
              <>
                <StatusTitle>{nameCapitalized(item.stat.name)}</StatusTitle>
                <StatusValue>{item.base_stat}</StatusValue>
              </>
            ))}
          </StatusContainer>
          <Price>{monetaryFormatter(data.id)}</Price>
          <PriceParcelate>
            12x de {monetaryFormatter(data.id / 12)}
          </PriceParcelate>
          <AddToCart
            data={{
              pokemon: {
                name: data.name,
                id: data.id,
                image: data.sprites.other["official-artwork"].front_default,
              },
            }}
            size="large"
          />
        </ThirdContainer>
      </SecondaryContainer>
    </PrimaryContainer>
  );
};

export default ProductContainer;
