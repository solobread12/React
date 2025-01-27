import React, { useState, useEffect } from "react";

function WithDependency() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    useEffect(() => {
        console.log(`Count berubah: ${count}`); // Efek akan dijalankan saat 'count' berubah
    }, [count]); // Dependency array untuk menjalankan efek saat 'count' berubah

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Tambah</button>
            <br />
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="ketik sesuatu..."
            />
            </div>
    );
}

export default WithDependency;