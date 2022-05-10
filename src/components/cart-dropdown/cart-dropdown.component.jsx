import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import { useSelector } from 'react-redux'
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";
import { selectCartItems } from "../../store/cart/cart.selector";

const CartDropdown = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems)

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
      {
        cartItems.map(item => <CartItem cartItem={item} key={item.id}/>)
      }
      </div>
      <Button onClick={goToCheckoutHandler}>Go To Checkout</Button>
    </div>
  );
};

export default CartDropdown;
