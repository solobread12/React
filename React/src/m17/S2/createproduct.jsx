import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !price || !description) {
      setMessage("All fields are required!");
      return;
    }

    const newProduct = { title, price, description };
    const existingProducts = JSON.parse(localStorage.getItem("products")) || [];
    existingProducts.push(newProduct);

    localStorage.setItem("products", JSON.stringify(existingProducts));
    setMessage("Product added successfully!");

    // Reset form
    setTitle("");
    setPrice("");
    setDescription("");

    // Navigate to Product List after adding the product
    setTimeout(() => {
      navigate("/product-list");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-xl w-full space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Add New Product</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-lg font-semibold text-gray-700">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Product Title"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
            />
          </div>

          <div>
            <label className="block text-lg font-semibold text-gray-700">Price</label>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Product Price"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
            />
          </div>

          <div>
            <label className="block text-lg font-semibold text-gray-700">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Product Description"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Add Product
          </button>
        </form>

        {message && (
          <p
            className={`mt-4 text-center font-semibold ${
              message === "Product added successfully!" ? "text-green-500" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default CreateProduct;