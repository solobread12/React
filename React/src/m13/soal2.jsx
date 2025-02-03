import React, { useState, useEffect } from "react";
import axios from "axios";

function ProductCard({ product }) {
    const [quantity, setQuantity] = useState(1);

    // Hitung total harga berdasarkan quantity
    const totalPrice = (product.price * quantity).toFixed(2);

    return (
        <div style={styles.card}>
            <img src={product.image} alt={product.title} style={styles.image} />
            <h2 style={styles.title}>{product.title}</h2>
            <p style={styles.price}>Price: <strong>${product.price.toFixed(2)}</strong></p>
            <div style={styles.quantityWrapper}>
                <label style={styles.label}>
                    Quantity:{" "}
                    <input
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        style={styles.input}
                    />
                </label>
            </div>
            <p style={styles.total}>Total: <strong>${totalPrice}</strong></p>
        </div>
    );
}

export default function App() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products")
            .then((response) => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
                setError("Failed to load products. Please try again later.");
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div style={styles.loading}>Loading...</div>;
    }

    if (error) {
        return <div style={styles.error}>{error}</div>;
    }

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Product Store</h1>
            <div style={styles.grid}>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

// Styling elegan untuk tampilan aplikasi
const styles = {
    container: {
        padding: "20px",
        maxWidth: "1200px",
        margin: "0 auto",
        fontFamily: "'Poppins', sans-serif",
    },
    heading: {
        textAlign: "center",
        color: "#333",
        fontSize: "2.5rem",
        marginBottom: "30px",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px",
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        textAlign: "center",
        transition: "transform 0.2s, box-shadow 0.2s",
    },
    cardHover: {
        transform: "scale(1.03)",
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
    },
    image: {
        width: "100%",
        height: "200px",
        objectFit: "contain",
        marginBottom: "15px",
    },
    title: {
        fontSize: "1.2rem",
        color: "#333",
        marginBottom: "10px",
    },
    price: {
        fontSize: "1rem",
        color: "#007BFF",
        marginBottom: "15px",
    },
    quantityWrapper: {
        marginBottom: "10px",
    },
    label: {
        fontSize: "1rem",
        color: "#555",
    },
    input: {
        width: "50px",
        padding: "5px",
        fontSize: "1rem",
        marginLeft: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        textAlign: "center",
    },
    total: {
        fontSize: "1.1rem",
        color: "#333",
        fontWeight: "bold",
        marginTop: "10px",
    },
    loading: {
        textAlign: "center",
        fontSize: "1.5rem",
        color: "#555",
        marginTop: "50px",
    },
    error: {
        textAlign: "center",
        fontSize: "1.5rem",
        color: "red",
        marginTop: "50px",
    },
};  