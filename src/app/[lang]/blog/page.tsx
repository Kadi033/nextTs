import React from "react";
import axios from "axios";
import "./Blog.css";
import Link from "next/link";

export interface Post {
  id: number;
  title_en: string;
  title_ka: string;
  body_en: string;
  body_ka: string;
}
export interface BlogProps {
  params: {
    id: number;
    lang: "en" | "ka";
  };
}

async function getPosts(): Promise<Post[]> {
  try {
    const { data: blog } = await axios.get<Post[]>(
      "http://localhost:3000/api/blog"
    );
    return blog;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function Blog({ params: { lang: locale } }: BlogProps) {
  const blog = await getPosts();

  return (
    <div className="blogContainer">
      <h2 className="blogTitle">Blog Posts</h2>
      <div className="blogPosts">
        {blog.length > 0 ? (
          blog.map(({ id, title_ka, title_en, body_ka, body_en }) => (
            <div key={id} className="blogPost">
              <Link href={`/blog/${id}`}>
                <h3 className="postTitle">
                  {locale === "ka" ? title_ka : title_en}
                </h3>
                <p className="postContent">
                  {locale === "ka" ? body_ka : body_en}
                </p>
              </Link>
            </div>
          ))
        ) : (
          <p>No posts available.</p>
        )}
      </div>
    </div>
  );
}
