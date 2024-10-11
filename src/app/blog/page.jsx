"use client";
import axios from "axios";
import "./Blog.css";
import { useEffect, useState } from "react";
import Link from "next/link";

function Blog() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    async function getPost() {
      try {
        const response = await axios.get("https://dummyjson.com/posts");
        setPosts(response.data.posts)
      } catch (error) {
        console.error(error);
      }
  }
  getPost()
  }, [])

  return (
    <div className="blogContainer">
      <h2 className="blogTitle">Blog Posts</h2>
      <Link href={`/blog/${posts.id}`}>
      <ul className="blogPosts">
        {posts.map((post) => (
          <li key={post.id} className="blogPost">
            <h3 className="postTitle">{post.title}</h3>
            <p className="postContent">{post.content}</p>
          </li>
        ))}
      </ul>
      </Link>
      
    </div>
  );
}

export default Blog;