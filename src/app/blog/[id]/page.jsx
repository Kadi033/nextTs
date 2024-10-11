"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Post({}) {
  const [pos, setPos] = useState([null]);
  const postId = 1;
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`https://dummyjson.com/posts/${postId}`);
        setPos(res.data);
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="blogContainer">
      <h2 className="blogTitle">Blog Posts</h2>
      {pos ? (
        <ul className="blogPosts">
          <h1>{pos.title}</h1>
          <p>{pos.body}</p>
        </ul>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}
