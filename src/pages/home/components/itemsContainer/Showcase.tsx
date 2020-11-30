import React, { useState, useRef, useEffect, useContext } from "react";

import nameCapitalized from "../../../../services/upperCaseName";
import monetaryFormatter from "../../../../services/monetaryFormat";

import { StoreContext } from "../../../../services/contexts";

import {
  Image,
  ShowcaseContainer,
  Name,
  Price,
  PriceParcelate,
  AddToCartButton,
} from "./ui";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";

interface ShowCaseProps {
  data: { [key: string]: any };
}

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const PokemonShowcase: React.FC<ShowCaseProps> = ({ data }) => {
  const storeContext = useContext(StoreContext);

  const [pokemonImageUrl, setPokemonImageUrl] = useState<string>(
    data.pokemon.image
  );

  const [openAddMessage, setOpenAddMessage] = React.useState(false);

  const showSuccessMessage = () => {
    setOpenAddMessage(true);
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAddMessage(false);
  };

  const imageRef = useRef<HTMLImageElement>(null);

  const setUnknowImage = () => {
    if (!imageRef.current) return;
    imageRef.current.src = "./assets/images/unknow.png";
  };

  useEffect(() => {
    if (!imageRef.current) return;
    imageRef.current.addEventListener("error", setUnknowImage);
  });

  const saveItemOnCart = () => {
    let cartItemsJson = window.localStorage.getItem(`@${storeContext.title}`);
    let cartItems: Object[] = [];

    if (cartItemsJson) {
      cartItems = JSON.parse(cartItemsJson);
    }

    cartItems.push(data);

    window.localStorage.setItem(
      `@${storeContext.title}`,
      JSON.stringify(cartItems)
    );

    showSuccessMessage();
  };

  return (
    <ShowcaseContainer>
      <Image src={data.pokemon.image} ref={imageRef} />
      <Name> {nameCapitalized(data.pokemon.name)}</Name>
      <Price>{monetaryFormatter(data.pokemon.id)}</Price>
      <PriceParcelate>
        12x de {monetaryFormatter(data.pokemon.id / 12)}
      </PriceParcelate>
      <AddToCartButton
        onClick={() => saveItemOnCart()}
        endIcon={<ShoppingCartIcon />}
      >
        Pegar
      </AddToCartButton>
      <Snackbar
        open={openAddMessage}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          O Pokemon {data.pokemon.name} foi adicionado ao seu carrinho!
        </Alert>
      </Snackbar>
    </ShowcaseContainer>
  );
};

export default PokemonShowcase;
