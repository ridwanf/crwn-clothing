import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux'

import { selectCategoriesMap } from "../../store/categories/categories.selector";
import ProductCard from "../../product-card/product-card.component";
import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap)
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap]);
   
  return (
    <div className="category-container">
      <h2 className="title">
        {category.toUpperCase()}
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
