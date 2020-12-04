import React, { useState, useRef, useEffect, useContext } from "react";

import nameCapitalized from "../../../../../services/upperCaseName";
import monetaryFormatter from "../../../../../services/monetaryFormat";

import { StoreContext } from "../../../../../services/contexts";

import { Image, ShowcaseContainer, Name, Price } from "../ui";

import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";

interface ShowCaseProps {
  data: { [key: string]: any };
  getAndSetItems: Function;
}

interface PokemonParams {
  pokemon: { [key: string]: String };
}

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const CartShowCase: React.FC<ShowCaseProps> = ({ data, getAndSetItems }) => {
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

  const removeItemOnCart = () => {
    let cartItemsJson = window.localStorage.getItem(`@${storeContext.title}`);
    let cartItems: PokemonParams[] = [];

    if (cartItemsJson) {
      cartItems = JSON.parse(cartItemsJson);
    }

    let itemRemoved = false;
    let newCartItems = cartItems.filter((item) => {
      if (item.pokemon.id == data.pokemon.id && !itemRemoved) {
        itemRemoved = true;
        return false;
      }
      return item;
    });

    window.localStorage.setItem(
      `@${storeContext.title}`,
      JSON.stringify(newCartItems)
    );
    getAndSetItems();
    showSuccessMessage();
  };

  return (
    <ShowcaseContainer>
      <Image src={data.pokemon.image} ref={imageRef} />
      <div>
        <Name> {nameCapitalized(data.pokemon.name)}</Name>
        <Price>{monetaryFormatter(data.pokemon.id)}</Price>
      </div>

      <IconButton color="secondary" onClick={() => removeItemOnCart()}>
        <HighlightOffIcon />
      </IconButton>
      <Snackbar
        open={openAddMessage}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error">
          O Pokemon {data.pokemon.name} foi removido ao seu carrinho
        </Alert>
      </Snackbar>
    </ShowcaseContainer>
  );
};

export default CartShowCase;
