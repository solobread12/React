import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")); // Ambil data user dari localStorage jika ada

  const handleLogout = () => {
    localStorage.removeItem("user"); // Menghapus data user saat logout
    navigate("/login"); // Arahkan pengguna ke halaman login
  };

  return (
    <div>
      <nav>
        <h1>Welcome {user ? user.name : "Guest"}</h1>
        {user ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </div>
  );
};

export default Navbar;