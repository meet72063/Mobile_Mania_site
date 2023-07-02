import React from "react";
import Title from "./Title";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Product from "./Product";

const Products = () => {
  const { products } = useSelector((store) => store.product);

  return (
    <div>
      <Title />
      <div className="columns-2 mt-10">
        {products.map((product) => {
          return <Product {...product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default Products;
