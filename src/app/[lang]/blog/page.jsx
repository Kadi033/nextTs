import axios from "axios";
import "./Blog.css";
import Link from "next/link";

async function getPosts() {
  try {
    const { data: blog } = await axios.get(`http://localhost:3000/api/blog`);
    return blog;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function Blog({ params: { lang: locale } }) {
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
