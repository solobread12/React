import React, { useState, useEffect } from "react";
import axios from "axios";

const ReadUsers = () => {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/users/")
      .then((response) => setUsers(response.data))
      .catch((error) => setMessage(`Error: ${error.message}`));
  }, []);

  return (
    <div>
      <h2>Users List</h2>
      {message && <p>{message}</p>}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReadUsers;