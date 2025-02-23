import React, { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "🍽️ New Canteen Menu Update!",
    content:
      "We’ve added fresh salads, fruit bowls, and vegan-friendly meals. Try our new Quinoa Salad today!",
    image: "https://source.unsplash.com/300x200/?salad,healthy",
  },
  {
    id: 2,
    title: "🔥 Student Favorite: Spicy Chicken Wrap",
    content:
      "Our famous spicy chicken wrap is now the most popular dish in the canteen! Have you tried it yet?",
    image: "https://source.unsplash.com/300x200/?chicken,wrap",
  },
  {
    id: 3,
    title: "💰 Get 20% Off on Fridays!",
    content:
      "Every Friday, enjoy a 20% discount on all main meals when you show your student ID.",
    image: "https://source.unsplash.com/300x200/?discount,food",
  },
  {
    id: 4,
    title: "🌍 Eco-Friendly Initiative: Bring Your Own Cup!",
    content:
      "We’re reducing waste! Bring your own reusable cup and get a discount on all hot drinks.",
    image: "https://source.unsplash.com/300x200/?coffee,cup",
  },
  {
    id: 5,
    title: "🏆 Cooking Competition – Join Now!",
    content:
      "Think you’re a great cook? Show off your skills in our student cooking competition next week!",
    image: "https://source.unsplash.com/300x200/?cooking,competition",
  },
  {
    id: 6,
    title: "📢 Your Feedback Matters!",
    content:
      "Tell us what new meals you’d like to see on the menu. Vote in our monthly canteen survey!",
    image: "https://source.unsplash.com/300x200/?feedback,survey",
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

