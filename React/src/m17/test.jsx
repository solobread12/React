import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const CreateUser = () => {
  const [formData, setFormData] = useState({
    name: "bedil",
    email: "rafif@gmail.com",
    password: "654321",
    role: "customer", // default role
    avatar: "https://i.imgur.com/LD004Qs.jpg", // default avatar
  });
  const [message, setMessage] = useState("");

  const handleCreateUser = (e) => {
    e.preventDefault();
    // Menambahkan data baru ke API dengan format yang diminta
    const newUser = {
      ...formData,
      creationAt: new Date().toISOString(), // Menambahkan timestamp saat pembuatan
      updatedAt: new Date().toISOString(), // Menambahkan timestamp saat pembuatan
    };
    axios
      .post("https://api.escuelajs.co/api/v1/users/", newUser)
      .then((response) => setMessage(`User created: ${response.data.name}`))
      .catch((error) => setMessage(`Error: ${error.message}`));
  };
  setFormData({
    name: "bedil",
    email: "rafif@gmail.com",
    password: "654321",
    role: "customer",
    avatar: "https://i.imgur.com/LD004Qs.jpg",
  });

  return (
    <div>
      <h2 className=" bg-blue-500 w-40 ml-2 mt-2 mb-4">Create User</h2>
      <Link to="/" className=" bg-red-300 w-1/2 mx-auto mb-2">
        Back to Login
      </Link>
      <form onSubmit={handleCreateUser}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleCha}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleClick}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleClick}
          placeholder="Password"
          required
        />
        <button type="submit">Create User</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CreateUser;