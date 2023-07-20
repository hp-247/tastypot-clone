import React from "react";
import ProductList from "../components/ProductList";

const Order = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-4xl font-bold mb-4">Order Online</h2>
      <ProductList />
    </div>
  );
};

export default Order;
