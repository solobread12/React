import { useState } from "react";

const SimpleNameList = () => {
    const [names, setNames] = useState(["Alice", "Bob"]);

    return (
        <div>
            <h2>Daftar Nama:</h2>
            <ul>
                {names.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
            <button
                onClick={() => setNames([...names, "Charlie"])} // Pindahkan onClick ke sini
                className="px-4 py-2 bg-blue-500 text-white rounded"
            >
                Tambahkan Nama
            </button>
        </div>
    );
};

export default SimpleNameList;