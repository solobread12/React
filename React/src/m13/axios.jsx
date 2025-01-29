import axios from "axios";
import React, { useEffect, useState } from "react";

function CobaAxios() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data", error);
            });
    }, []); // Array dependency kosong memastikan efek hanya dijalankan sekali saat komponen pertama kali dirender

    return (
        <div>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.body}</li>
                ))}
            </ul>
        </div>
    );
}

export default CobaAxios;