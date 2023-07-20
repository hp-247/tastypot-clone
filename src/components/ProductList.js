import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import pots from "../data/pots.json";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(pots);
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex justify-center flex-wrap">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
