import React, { useState, useEffect } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`Count saat ini: ${count}`);
    }, [count]); // Dependency array untuk menjalankan efek saat 'count' berubah

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Tambah</button>
        </div>
    );
}