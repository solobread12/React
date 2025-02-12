import { useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const HandleLogin = () => {
  // State untuk menyimpan data login dan profil pengguna
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userProfile, setUserProfile] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mengubah status menjadi loading saat login
    setLoading(true);
    setError("");

    // Melakukan request login ke API
    axios
      .post("https://api.escuelajs.co/api/v1/auth/login", { email, password })
      .then((response) => {
        const token = response.data.access_token;
        if (token) {
          // Jika token ada, decode token dan simpan user profile
          const decoded = jwtDecode(token);
          setUserProfile(decoded);

          // Mengambil profil pengguna menggunakan token
          axios
            .get("https://api.escuelajs.co/api/v1/auth/profile", {
              headers: { Authorization: `Bearer ${token}` },
            })
            .then((profileResponse) => {
              // Mengupdate profil pengguna setelah berhasil diambil
              setUserProfile(profileResponse.data);
              setLoading(false);
            })
            .catch(() => {
              setError("Unable to fetch profile.");
              setLoading(false);
            });
        }
      })
      .catch(() => {
        setError("Login failed.");
        setLoading(false);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </form>

        {error && <p className="mt-4 text-center text-red-500">{error}</p>}

        {userProfile && (
          <div className="mt-6 text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Welcome, {userProfile.name}</h3>
            <p className="text-gray-600">Email: {userProfile.email}</p>
            <p className="text-gray-600">Role: {userProfile.role}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HandleLogin;