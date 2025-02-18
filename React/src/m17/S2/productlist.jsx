import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  return (
    <div className="p-6 max-w-screen-lg mx-auto">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Product List
      </h2>
      <Link
        to="/"
        className="inline-block text-blue-600 text-lg mb-4 hover:text-blue-800 transition duration-300"
      >
        Back to Create Product
      </Link>
      {products.length === 0 ? (
        <p className="text-center text-xl text-gray-500">No products available.</p>
      ) : (
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="py-3 px-6 text-left">Title</th>
              <th className="py-3 px-6 text-left">Price</th>
              <th className="py-3 px-6 text-left">Description</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {products.map((product, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-blue-50 transition duration-300 ease-in-out"
              >
                <td className="py-3 px-6">{product.title}</td>
                <td className="py-3 px-6">{product.price}</td>
                <td className="py-3 px-6">{product.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductList;