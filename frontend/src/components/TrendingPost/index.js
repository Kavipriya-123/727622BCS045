import { useEffect, useState } from "react";
import "./index.css";

const TrendingPost = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simulate API data
    const mockPosts = [
      { id: 1, title: "React 19 Features", author: "John Doe", likes: 120 },
      { id: 2, title: "JavaScript Tips", author: "Jane Smith", likes: 98 },
      { id: 3, title: "Frontend vs Backend", author: "Alex Lee", likes: 89 },
    ];
    setPosts(mockPosts);
  }, []);

  return (
    <div className="trending-posts-container">
      <h2>Trending Posts</h2>
      <div className="post-cards">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <h3>{post.title}</h3>
            <p>By: {post.author}</p>
            <p>Likes: {post.likes}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingPost;
