import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

// Komponen Halaman Home
const Home = () => (
  <div style={styles.container}>
    <h1 style={styles.heading}>Home Page</h1>
    <nav>
      <Link to="/about" style={styles.link}>
        Go to About
      </Link>{" "}
      |{" "}
      <Link to="/contact" style={styles.link}>
        Go to Contact
      </Link>
    </nav>
  </div>
);

// Komponen Halaman About
const About = () => (
  <div style={styles.container}>
    <h1 style={styles.heading}>About Page</h1>
    <Link to="/" style={styles.link}>
      Back to Home
    </Link>
  </div>
);

// Komponen Halaman Contact
const Contact = () => (
  <div style={styles.container}>
    <h1 style={styles.heading}>Contact Page</h1>
    <Link to="/" style={styles.link}>
      Back to Home
    </Link>
  </div>
);

// Komponen Halaman 404
const NotFound = () => (
  <div style={styles.container}>
    <h1 style={styles.heading}>404 - Page Not Found</h1>
    <Link to="/" style={styles.link}>
      Back to Home
    </Link>
  </div>
);

// Membuat router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*", // Wildcard untuk menangani rute yang tidak ditemukan
    element: <NotFound />,
  },
]);

// Komponen Utama Aplikasi
const App = () => {
  return <RouterProvider router={router} />;
};

// Gaya CSS Inline
const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    color: "#333",
    fontSize: "28px",
    marginBottom: "20px",
  },
  link: {
    textDecoration: "none",
    color: "#007BFF",
    fontSize: "18px",
    margin: "0 10px",
  },
};

// Render aplikasi
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;