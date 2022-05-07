import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../product-card/product-card.component";
import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap]);
   
  return (
    <div className="category-container">
      <h2>
        <span className="title">{category.toUpperCase()}</span>
      </h2>
      <div className="preview">
        {products && 
          products.map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })
        }
      </div>
    </div>
  );
};

export default Category;
