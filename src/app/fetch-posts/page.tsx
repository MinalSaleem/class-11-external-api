"use client"

import { useState, useEffect } from "react";
import { Theme } from "../context/ThemeContext";

export default function FetchPostsPage() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/external")
        .then((res) =>res.json())
        .then((data) => {
            if(data.success){
                setPosts(data.data)
            } else {
                setError(data.message)
            }
        })
        .catch((err) => setError("An unexpected error"))
        .finally(() => setLoading(false))
    }, []);

    return(
      <div className="flex flex-col items-center bg-slate-100 dark:bg-gray-900 dark:text-gray-100 text-black py-8" >
        <Theme />
        <h1 className="font-bold text-4xl text-center bg-zinc-900 dark:bg-zinc-700 text-white my-10 w-[800px] rounded-lg py-4 hover:z-10 duration-100 hover:scale-110">
          Posts
        </h1>
        <ul className="bg-zinc-900 dark:bg-zinc-800 rounded-lg shadow-2xl w-[1500px] mt-6 p-4 grid grid-cols-3">
            {posts.map((post: {id:number, title:string})  => (
              <li key={post.id}
              className="fade-in bg-white dark:bg-gray-700 text-black dark:text-gray-100 py-2 rounded-lg px-4 h-32 flex items-center justify-center text-center shadow-md m-6 my-6 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:bg-zinc-400 hover:shadow-lg hover:font-semibold">
                {post.title}
              </li>   
            ))}
        </ul> 
      </div>
    )
};