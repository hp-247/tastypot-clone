import React from "react";

const ProductItem = ({ product }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4 flex flex-col justify-center items-center">
      <div className="h-40 w-full bg-gray-300 flex items-center justify-center overflow-hidden">
        <div className="aspect-w-4 aspect-h-3">
          <img
            src={`${process.env.PUBLIC_URL}/${product.image}`}
            alt={product.name}
            className="object-cover h-full w-full"
          />
        </div>
      </div>

      <div className="px-6 py-4 text-center">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base h-20 overflow-hidden">
          {product.description}
        </p>
        <div className="flex flex-col items-center">
          {" "}
          {/* Updated line */}
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">
            ${product.price.toFixed(2)}
          </span>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
