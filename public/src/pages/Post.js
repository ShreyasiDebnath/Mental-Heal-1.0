import React, { useState } from 'react';
import './Post.css';

function Post() {
  const [posts, setPosts] = useState([]);
  const [postText, setPostText] = useState('');
  const [comments, setComments] = useState({});

  const postData = async (e) => {
    e.preventDefault();
  
    const data = {
      posts,
      comments,
    };
  
    try {
      const response = await fetch(
        "https://comment-f3832-default-rtdb.firebaseio.com/data.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
  
      if (!response.ok) {
        throw new Error("Failed to submit data");
      }
  
      // Optionally, you can clear the form fields or show a success message here
      setPosts([]);
      setComments({});
      setPostText('');
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  const addPost = () => {
    if (!postText) return;

    const newPost = {
      text: postText,
      date: new Date().toLocaleDateString(),
    };

    setPosts([...posts, newPost]);
    setPostText('');
  };

  const addComment = (postId, commentText) => {
    if (!commentText) return;

    const newComment = {
      text: commentText,
      date: new Date().toLocaleDateString(),
    };

    setComments((prevComments) => ({
      ...prevComments,
      [postId]: [...(prevComments[postId] || []), newComment],
    }));
  };

  return (
    <div className="App">
      <header>
        <h1>Share your thoughts</h1>
      </header>

      <div className="container">
        <div className="left-side">
          <div id="post-form">
            <div className="user-profile">
              {/* ... User profile content ... */}
            </div>

            <h2>Create a Post</h2>
            <textarea
              id="post-text"
              rows="4"
              placeholder="What's on your mind?"
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
            ></textarea>
            <br />
            <button onClick={addPost}>Post</button>
          </div>

          <div id="feed">
            <h2>Feed</h2>
            {posts.map((post, index) => (
              <div key={index} className="post">
                <div className="user-profile">
                  {/* ... User profile content ... */}
                </div>

                <p>{post.text}</p>
                <div className="post-row">
                  <div className="activity-icons">
                    <div>
                      <img
                        src="image/Big-gold-like-sign-3d-render-image-free-PNG.png"
                        alt="Like"
                      />
                      1
                    </div>
                    <div>
                      <button
                        onClick={() =>
                          addComment(index, "New comment text")
                        }
                      >
                        Comment
                      </button>
                    </div>
                    <div>
                      <img
                        src="image/Share-icon-with-red-color-on-transparent-background-PNG.png"
                        alt="Share"
                      />
                      Share
                    </div>
                  </div>

                  <div className="profile-icon"></div>
                </div>

                {/* Render comments for this post */}
                {comments[index] &&
                  comments[index].map((comment, commentIndex) => (
                    <div key={commentIndex} className="comment">
                      <p>{comment.text}</p>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
