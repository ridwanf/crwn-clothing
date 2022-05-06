import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout-item.styles.scss";
const CheckoutItem = ({ cartItem }) => {
  const { addItemToCart, removeItemFromCart, removeItemFromCheckout } = useContext(CartContext);
  const { id, name, quantity, imageUrl, price } = cartItem;
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={id} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <span onClick={() => removeItemFromCart(cartItem)} className="arrow"> &#10094; </span>
        <span className="value">{quantity}</span>
        <span onClick={() => addItemToCart(cartItem)}  className="arrow"> &#10095; </span>
      </div>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={() => removeItemFromCheckout(cartItem)}>&#10005;</span>
    </div>
  );
};

export default CheckoutItem;
