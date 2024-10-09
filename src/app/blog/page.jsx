import "./Blog.css";

function Blog() {
  const posts = [
    { id: 1, title: 'Post 1', content: 'This is the first post.' },
    { id: 2, title: 'Post 2', content: 'This is the second post.' },
    { id: 3, title: 'Post 3', content: 'This is the third post.' },
    { id: 4, title: 'Post 4', content: 'This is the fourth post.' },
    { id: 5, title: 'Post 5', content: 'This is the fifth post.' },
    { id: 6, title: 'Post 6', content: 'This is the sixth post.' },
  ];

  return (
    <div className="blogContainer">
      <h2 className="blogTitle">Blog Posts</h2>
      <ul className="blogPosts">
        {posts.map((post) => (
          <li key={post.id} className="blogPost">
            <h3 className="postTitle">{post.title}</h3>
            <p className="postContent">{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blog;