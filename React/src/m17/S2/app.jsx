import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CreateProduct from "./CreateProduct";
import ProductList from "./ProductList";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 flex flex-col items-center py-8">
        <h1 className="text-4xl font-extrabold text-white mb-6 animate__animated animate__fadeIn">
          Product Management
        </h1>
        
        <nav className="mb-8">
          <Link
            to="/"
            className="text-white text-xl mx-4 hover:text-indigo-300 transition duration-300"
          >
            Create Product
          </Link>
          <Link
            to="/product-list"
            className="text-white text-xl mx-4 hover:text-indigo-300 transition duration-300"
          >
            Product List
          </Link>
        </nav>

        <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105">
          <Routes>
            <Route path="/" element={<CreateProduct />} />
            <Route path="/product-list" element={<ProductList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;