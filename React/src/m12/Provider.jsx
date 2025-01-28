import React from "react";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

// Komponen Halaman Utama
function HomePage() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Halaman Utama</h2>
      <nav>
        <Link to="/second-place" style={styles.link}>
          Ke Halaman 2
        </Link>
      </nav>
    </div>
  );
}

// Komponen Halaman Kedua
function SecondPage() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Halaman 2</h2>
      <nav>
        <Link to="/" style={styles.link}>
          Kembali ke Halaman Utama
        </Link>
      </nav>
    </div>
  );
}

// Komponen Halaman 404 (Tidak Ditemukan)
function NotFoundPage() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>404 - Halaman Tidak Ditemukan</h2>
      <Link to="/" style={styles.link}>
        Kembali ke Halaman Utama
      </Link>
    </div>
  );
}

// Konfigurasi Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/second-place",
    element: <SecondPage />,
  },
  {
    path: "*", // Wildcard untuk semua jalur yang tidak cocok
    element: <NotFoundPage />,
  },
]);

// Komponen Utama Aplikasi
function App() {
  return <RouterProvider router={router} />;
}

// Gaya CSS Inline
const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    color: "#333",
    fontSize: "24px",
    marginBottom: "20px",
  },
  link: {
    textDecoration: "none",
    color: "#007BFF",
    fontSize: "18px",
  },
};

export default App;