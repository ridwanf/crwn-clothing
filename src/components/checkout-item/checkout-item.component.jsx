import "./checkout-item.styles.scss";
import {useDispatch, useSelector} from 'react-redux'
import { addItemToCart, clearItemFromCart, removeItemFromCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";


const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { id, name, quantity, imageUrl, price } = cartItem;
  const cartItems = useSelector(selectCartItems);

  const removeItem = (cartItem) => {
    dispatch(removeItemFromCart(cartItems, cartItem))
  }

  const addItem = (cartItem) => {
    dispatch(addItemToCart(cartItems, cartItem))
  }

  const clearItem = (cartItem) => {
    dispatch(clearItemFromCart(cartItems, cartItem))
  }
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={id} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <span onClick={() => removeItem(cartItem)} className="arrow"> &#10094; </span>
        <span className="value">{quantity}</span>
        <span onClick={() => addItem(cartItem)}  className="arrow"> &#10095; </span>
      </div>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</span>
    </div>
  );
};

export default CheckoutItem;
