import "./product-card.styles.scss";
import {useDispatch, useSelector} from 'react-redux'
import { selectCartItems } from "../store/cart/cart.selector";

import Button from "../components/button/button.component";
import { addItemToCart } from "../store/cart/cart.action";
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const { name, price, imageUrl } = product;

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product))
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt="" />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>

      <Button buttonType="inverted" onClick={addProductToCart} >Add To Chart</Button>
    </div>
  );
};

export default ProductCard;
