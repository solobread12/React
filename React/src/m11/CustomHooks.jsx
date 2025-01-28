import { useState, useEffect } from "react";

// Custom Hook
export function useOnlineStatus(initialState) {
    const [state, setState] = useState(initialState);  // Function adalah blok kode yang dapat dieksekusi dan digunakan untuk mengorganisasi logika yang bisa dipanggil kembali berkali-kali //
                                                       // Custom Hook adalah fungsi khusus di React yang dibuat untuk mengelola logika stateful atau bekerja dengan fitur React Hooks seperti useState, useEffect, dll //
    useEffect(() => {                                  // berawal kata dengan "use" //xx
        function handleOnline() {
            setState(true);
        }
        function handleOffline() {
            setState(false);
        }

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        // Cleanup function
        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, []);

    return state;
}

// Statusbar Component
export function Statusbar() {
    const isOnline = useOnlineStatus(navigator.onLine);

    return <h1>{isOnline ? "✅ Online" : "❌ Offline"}</h1>;
}

// SaveButton Component
export function SaveButton() {
    const isOnline = useOnlineStatus(navigator.onLine);

    function handleSaveClick() {
        console.log("✅ Save Progress");
    }

    return (
        <button disabled={!isOnline} onClick={handleSaveClick}>
            {isOnline ? "Save Progress" : "Reconnecting..."}
        </button>
    );
}

// Default Export
export default Statusbar;