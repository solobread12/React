import { useEffect, useState } from "react";
import "./App.css";

// SOAL 1
const ToggleSwitch = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="toggle-switch-container">
            <label className="toggle-switch">
                <input
                    type="checkbox"
                    checked={theme === "dark"}
                    onChange={toggleTheme} // Langsung gunakan event handler React
                />
                <span className="toggle-switch-label"></span>
            </label>
            <h1>{theme === "dark" ? "🌙 Dark Theme" : "☀️ Light Theme"}</h1>
        </div>
    );
};

// Custom hook untuk tema
const useTheme = () => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        console.log("Theme berubah menjadi : " + newTheme);
    };

    return { theme, toggleTheme };
};

// SOAL 2
const ToggleTask = () => {
    const { isTaskCompleted, toggleTask } = useToggleTask();

    return (
        <div>
            <h1>{isTaskCompleted ? "✅ Task Completed" : "❌ Task Not Completed"}</h1>
            <button onClick={toggleTask}>Toggle Task</button>
        </div>
    );
};

// Custom hook untuk tugas
const useToggleTask = () => {
    const [isTaskCompleted, setIsTaskCompleted] = useState(false);

    const toggleTask = () => {
        setIsTaskCompleted((prev) => !prev);
    };

    return { isTaskCompleted, toggleTask };
};

function App() {
    return (
        <div>
            <h1>SOAL 1</h1>
            <ToggleSwitch />

            <h1>SOAL 2</h1>
            <ToggleTask />
        </div>
    );
}


export default ToggleSwitch;