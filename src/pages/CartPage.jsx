import React from "react";
import Cart from "../components/Cart";

function CartPage(props) {
  return (
    <>
      <Cart cartItem={props.cartItem} setCart={props.setCart} />
    </>
  );
}

export default CartPage;
