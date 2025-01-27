import React, { useState, useEffect } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    // useEffect tanpa dependency array
    useEffect(() => {
        console.log("Efek dijalankan!");
    });

    // Styling dengan CSS-in-JS
    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            backgroundColor: "#f4f4f9",
            fontFamily: "'Arial', sans-serif",
            color: "#333",
        },
        card: {
            backgroundColor: "#fff",
            padding: "20px 40px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
        },
        countText: {
            fontSize: "48px",
            fontWeight: "bold",
            margin: "10px 0",
        },
        button: {
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer",
            marginTop: "10px",
        },
        buttonHover: {
            backgroundColor: "#45a049",
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <p style={styles.countText}>Count: {count}</p>
                <button
                    style={styles.button}
                    onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                    onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
                    onClick={() => setCount(count + 1)}
                >
                    Tambah
                </button>
            </div>
        </div>
    );
}