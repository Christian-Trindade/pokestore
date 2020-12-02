import React from "react";

import { makeStyles, createStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import IconButton from "@material-ui/core/IconButton";

import Containercart from "./containerCart";

const useStyles = makeStyles(() =>
  createStyles({
    icon: {
      color: "#fff",
      "&:hover": {
        color: "gray",
      },
    },
  })
);

const Cart: React.FC = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <IconButton onClick={handleClick}>
        <ShoppingCartOutlinedIcon
          className={classes.icon}
          fontSize="large"
          aria-label="Carrinho"
        >
          Carrinho
        </ShoppingCartOutlinedIcon>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Containercart />
      </Popover>
    </div>
  );
};
export default Cart;
