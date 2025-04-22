import { useEffect, useState } from "react";
import "./index.css";

const Feed = () => {
  const [feedItems, setFeedItems] = useState([]);

  useEffect(() => {
    // Simulate API feed data
    const mockFeed = [
      { id: 1, user: "Kavi", content: "Just completed a new React project!", time: "2h ago" },
      { id: 2, user: "Maya", content: "Loving the new CSS animations!", time: "5h ago" },
      { id: 3, user: "Arun", content: "Deploying my full-stack app on Vercel", time: "1d ago" },
    ];
    setFeedItems(mockFeed);
  }, []);

  return (
    <div className="feed-container">
      <h2>Feed</h2>
      <div className="feed-items">
        {feedItems.map((item) => (
          <div key={item.id} className="feed-item">
            <p><strong>{item.user}</strong>: {item.content}</p>
            <span className="time">{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
