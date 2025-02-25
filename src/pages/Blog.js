import React, { useState } from "react";
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import '../style/blog.css'; 

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
    image: "https://i.pinimg.com/736x/7d/92/d8/7d92d835c72726e01829caeb6bd53cb4.jpg",
  },
];

function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [feedbackType, setFeedbackType] = useState("New Meal Request");
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [reactions, setReactions] = useState({ 
    "👍": 0, 
    "😍": 0, 
    "🤔": 0, 
    "👎": 0 
  });

  const handleFeedbackSubmit = () => {
    if (feedback.trim()) {
      setFeedbackSubmitted(true);
    }
  };

  const handleReaction = (emoji) => {
    setReactions((prev) => ({ ...prev, [emoji]: prev[emoji] + 1 }));
  };

  return (
    <>
    <div>
        <NavBar />
    </div>
    <div className="a">
    <div className="my-4 py-4 justify-center items-center mt-14 w-full bg-white py-12 lg:py-24 " data-aos="zoom-in-down">
        <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Blog Posts</h2>
        
        <div className='flex justify-center'>
            <div className='w-24 border-b-4 border-blue-900'></div>
        </div>
        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">We are deeply committed to the growth and success of our clients.</h2>
    </div>
    <div className="blog-container" data-aos="zoom-in-down">
      {selectedPost ? (
        <div className="blog-detail mx-auto px-4 lg:px-20">
          <button onClick={() => { setSelectedPost(null); setFeedbackSubmitted(false); setFeedback(""); }}>← Back</button>
          <h2>{selectedPost.title}</h2>
          <img src={selectedPost.image} alt={selectedPost.title} />
          <p>{selectedPost.content}</p>

          {selectedPost.id === 6 && (
            <div className="feedback-section">
              {!feedbackSubmitted ? (
                <>
                  <textarea
                    placeholder="Leave your feedback here..."
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                  />
                  <select value={feedbackType} onChange={(e) => setFeedbackType(e.target.value)}>
                    <option>New Meal Request</option>
                    <option>General Feedback</option>
                  </select>
                  <button onClick={handleFeedbackSubmit}>Submit</button>
                </>
              ) : (
                <p>Thank you for your feedback! 🎉</p>
              )}
            </div>
          )}

          <div className="reaction-section">
            {Object.keys(reactions).map((emoji) => (
              <button key={emoji} onClick={() => handleReaction(emoji)}>
                {emoji} {reactions[emoji]}
              </button>
            ))}
          </div>
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
    </div>
    <Footer />
    </>
  );
}

export default Blog;


