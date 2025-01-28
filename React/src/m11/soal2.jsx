// import React from "react";
// import { useTaskStatus } from "./useTaskStatus"; // Import custom hook

// function App() {
//     const { isTaskCompleted, toggleTaskStatus } = useTaskStatus(); // Gunakan custom hook

//     return (
//         <div style={styles.container}>
//             <h1 style={styles.status}>
//                 {isTaskCompleted ? "✓ Task Completed" : "❌ Task Not Completed"}
//             </h1>
//             <button style={styles.button} onClick={toggleTaskStatus}>
//                 Toggle Task
//             </button>
//         </div>
//     );
// }

// // Gaya CSS inline sederhana
// const styles = {
//     container: {
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         height: "100vh",
//         backgroundColor: "#f0f0f0",
//         fontFamily: "Arial, sans-serif",
//     },
//     status: {
//         fontSize: "2rem",
//         marginBottom: "20px",
//     },
//     button: {
//         padding: "10px 20px",
//         fontSize: "1rem",
//         cursor: "pointer",
//         borderRadius: "5px",
//         border: "none",
//         backgroundColor: "#007BFF",
//         color: "#fff",
//     },
// };

// export default App;