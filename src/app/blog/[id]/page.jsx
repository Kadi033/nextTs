import axios from "axios";

async function fetchPost(id) {
  try {
    const res = await axios.get(`https://dummyjson.com/posts/${id}`);
    return res.data;
  } catch (error) {
    console.error(error);
    return null; 
  }
}

export default async function Post({ params }) {
  const post = await fetchPost(params.id); 

  return (
    <div className="blogContainer">
      <h2 className="blogTitle">Blog Posts</h2>
      {post ? ( 
        <div className="blogPost">
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ) : (
        <p>Loading...</p> 
      )}
    </div>
  );
}
