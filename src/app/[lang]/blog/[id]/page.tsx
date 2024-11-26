import React from "react";
import "./posts.css";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { BlogProps, Post } from '../page';

const supabaseUrl = process.env.SUPABASE_URL ?? "";
const supabaseKey = process.env.SUPABASE_KEY ?? "";
const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

// Fetch single post by ID with correct return type
async function fetchPost(id: number): Promise<Post | null> {
  try {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

// React component to display the post
export default async function PostPage({ params }: BlogProps) {
  const post = await fetchPost(params.id);

  if (!post) {
    return (
      <div className="h-screen flex items-center">
        <div className="blogContainer">
          <p>Post not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex items-center">
      <div className="blogContainer">
        <h2 className="blogTitle">Blog Post</h2>
        <div className="blogPost">
          <h1>{params.lang === "ka" ? post.title_ka : post.title_en}</h1>
          <p>{params.lang === "ka" ? post.body_ka : post.body_en}</p>
        </div>
      </div>
    </div>
  );
}
