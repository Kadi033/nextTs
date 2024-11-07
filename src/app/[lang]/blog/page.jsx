import axios from "axios";
import "./Blog.css";
import Link from "next/link";

async function getPosts() {
  try {
    const response = await axios.get("https://dummyjson.com/posts");
    return response.data.posts; 
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function Blog() {
  const posts = await getPosts();

  return (
    <div className="blogContainer">
      <h2 className="blogTitle">Blog Posts</h2>
      <div className="blogPosts">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="blogPost">
              <Link href={`/blog/${post.id}`}> 
                <h3 className="postTitle">{post.title}</h3>
                <p className="postContent">{post.body}</p> 
              </Link>
            </div>
          ))
        ) : (
          <p>No posts available.</p> // უკეთესი ტექსტი
        )}
      </div>
    </div>
  );
}
