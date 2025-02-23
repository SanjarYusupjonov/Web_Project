import React, { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "🍽️ New Canteen Menu Update!",
    content:
      "We’ve added fresh salads, fruit bowls, and vegan-friendly meals. Try our new Quinoa Salad today!",
    image: "https://i.pinimg.com/736x/a2/3f/34/a23f34a3a2a3bc1f5bfc951ae722e2b3.jpg",
  },
  {
    id: 2,
    title: "🔥 Student Favorite: Manti",
    content:
      "Our manti is now the most popular dish in the canteen! Have you tried it yet?",
    image: "https://i.pinimg.com/736x/6e/2b/13/6e2b13db4d8093fd15ace1b21074f029.jpg",
  },
  {
    id: 3,
    title: "💰 Get 20% Off on Fridays!",
    content:
      "Every Friday, enjoy a 20% discount on all main meals when you show your student ID.",
    image: "https://i.pinimg.com/736x/31/98/56/319856ae89374e02341a782e08f64310.jpg",
  },
  {
    id: 4,
    title: "🌍 Eco-Friendly Initiative: Bring Your Own Cup!",
    content:
      "We’re reducing waste! Bring your own reusable cup and get a discount on all hot drinks.",
    image: "https://i.pinimg.com/736x/c0/47/55/c047550514b572161c31191d84a7c148.jpg",
  },
  {
    id: 5,
    title: "🏆 Ramadan charity – Join Now!",
    content:
      "You want Ramadan wibe and dua’? Show off your skills in preparing iftaar and share with people !",
    image: "https://i.pinimg.com/736x/76/33/ef/7633efdbd95dfa985347777379ee8f69.jpg",
  },
  {
    id: 6,
    title: "📢 Your Feedback Matters!",
    content:
      "Tell us what new meals you’d like to see on the menu. Vote in our monthly canteen survey!",
    image: "https://i.pinimg.com/736x/3a/91/95/3a9195ed78e260c9cde86c9bfc3e7717.jpg",
  },
];

function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="blog-container">
      {selectedPost ? (
        <div className="blog-detail">
          <button onClick={() => setSelectedPost(null)}>← Back</button>
          <h2>{selectedPost.title}</h2>
          <img src={selectedPost.image} alt={selectedPost.title} />
          <p>{selectedPost.content}</p>
        </div>
      ) : (
        <div className="blog-list">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-card" onClick={() => setSelectedPost(post)}>
              <img src={post.image} alt={post.title} />
              <h3>{post.title}</h3>
              <p>{post.content.substring(0, 50)}...</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Blog;


