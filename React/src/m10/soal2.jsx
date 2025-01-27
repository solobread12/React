import React, { useState, useEffect } from "react";

export default function CountLogger() {
    const [count, setCount] = useState(0);

    // useEffect dengan dependency array berisi 'count'
    useEffect(() => {
        console.log(`Count berubah menjadi: ${count}`);
    }, [count]); // Efek hanya dijalankan ketika 'count' berubah

    // Styling dengan CSS-in-JS
    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            backgroundColor: "#f0f4f8",
            fontFamily: "'Poppins', sans-serif",
            color: "#2c3e50",
        },
        card: {
            backgroundColor: "#ffffff",
            padding: "30px",
            borderRadius: "15px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            width: "300px",
        },
        countText: {
            fontSize: "48px",
            fontWeight: "bold",
            color: "#34495e",
            margin: "20px 0",
        },
        button: {
            backgroundColor: "#3498db",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
        },
        buttonHover: {
            backgroundColor: "#2980b9",
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