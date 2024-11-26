import axios from "axios";
import "./posts.css";
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function fetchPost(id) {
  try {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error(error);
  }
}

export default async function Post({ params }) {
  const post = await fetchPost(params.id);

  return (
    <div className="h-screen flex items-center">
      <div className="blogContainer ">
        <h2 className="blogTitle">Blog Posts</h2>
        {post ? (
          <div className="blogPost">
            <h1>{post.title_en}</h1>
            <p>{post.body_en}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
