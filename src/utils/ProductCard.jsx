import React, { forwardRef } from "react";

export const ProductCard = forwardRef(
  ({ name, price, categories, quantity, img }, ref) => {
    return (
      <div className=" h-52 rounded overflow-hidden shadow-lg m-4">
        {/* <img className="w-full" src={img} alt={name} /> */}

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>

          <p className="text-gray-700 text-base mb-2">Price: ${price}</p>

          <p className="text-gray-700 text-base mb-2">
            Categories: {categories}
          </p>

          <p className="text-gray-700 text-base mb-2">Quantity: {quantity}</p>
        </div>
      </div>
    );
  }
);
