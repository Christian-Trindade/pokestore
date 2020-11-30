import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "../../../../../services/contexts";
import monetaryFormatter from "../../../../../services/monetaryFormat";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import { ItemsContainer, BuyButton, SuccessModal } from "../ui";

import CartShowCase from "./CartShowcase";

interface PokemonParams {
  pokemon: { [key: string]: any };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  })
);

const Containercart: React.FC = () => {
  const [items, setItems] = useState<Object[]>([]);
  const [cartTotal, setCartTotal] = useState<number>(0);
  const [openModal, setOpenModal] = React.useState(false);
  const classes = useStyles();

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const storeContext = useContext(StoreContext);

  const handleBuy = () => {
    window.localStorage.removeItem(`@${storeContext.title}`);
    getAndSetItems();
    handleOpenModal();
  };

  const getAndSetItems = () => {
    let JSONItems = window.localStorage.getItem(`@${storeContext.title}`);

    if (!JSONItems) {
      setItems([]);
      return;
    }
    let parsedItems = JSON.parse(JSONItems);
    setItems(parsedItems);

    let total = 0;
    parsedItems.forEach(
      (item: PokemonParams) => (total = total + Number(item.pokemon.id))
    );

    setCartTotal(total);
  };

  useEffect(() => {
    getAndSetItems();
  }, []);

  return (
    <ItemsContainer>
      {items.length > 0 ? (
        <>
          {items.map((item, index) => (
            <CartShowCase
              data={item}
              key={index}
              getAndSetItems={getAndSetItems}
            />
          ))}
          <p>Valor Total: {monetaryFormatter(cartTotal)}</p>
          <BuyButton onClick={handleBuy}>Finalizar</BuyButton>
        </>
      ) : (
        <p>Seu carrinho está vazio</p>
      )}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        className={classes.modal}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <SuccessModal>
            <h3>Você comprou na {storeContext.title}</h3>
            <p>Você está mais próximo de ser um mestre pokemon agora!</p>
          </SuccessModal>
        </Fade>
      </Modal>
    </ItemsContainer>
  );
};

export default Containercart;
