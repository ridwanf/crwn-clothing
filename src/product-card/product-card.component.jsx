import "./product-card.styles.scss";

import Button from "../components/button/button.component";
import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";
const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const {addItemToCart} = useContext(CartContext)

  const addProductToCart = () => addItemToCart(product)
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
