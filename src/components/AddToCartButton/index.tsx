import * as React from "react";
import { useContext, FC, useState } from "react";

import { StoreContext } from "../../services/contexts";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";

import { AddToCartButton } from "./ui";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

interface addToCartProps {
  data: { [key: string]: any };
  size: "small" | "medium" | "large" | undefined;
}

const AddToCart: FC<addToCartProps> = ({ data, size }) => {
  const storeContext = useContext(StoreContext);

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
    <>
      <AddToCartButton
        onClick={() => saveItemOnCart()}
        endIcon={<ShoppingCartIcon />}
        aria-label="Pegar"
        size={size}
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
    </>
  );
};

export default AddToCart;
