import React, { useState } from 'react';
import './Post.css'; // Import the CSS file
import { auth } from '../Firebase'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react';
const initialUser = {
  name: '',
  profilePic: '', // You can replace this with the actual image URL
};

const initialPost = {
  user: initialUser,
  title: 'My First Blog Post',
  content: 'This is the content of my first blog post.',
};

const Post = () => {
  const {currentUser} = useContext(AuthContext);
  const [user, setUser] = useState(initialUser);
  const [posts, setPosts] = useState([initialPost]);
  const [currentPost, setCurrentPost] = useState({ title: '', content: '' });
  const [comments, setComments] = useState([]);
  const [likeCount, setLikeCount] = useState(0);
  const [shareCount, setShareCount] = useState(0);
  const [commentText, setCommentText] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim() === '') return;
    const newComment = {
      text: commentText,
      timestamp: new Date().toLocaleString(),
    };
    setComments([...comments, newComment]);
    setCommentText('');
  };

  const handleLikeClick = () => {
    setLikeCount(likeCount + 1);
  };

  const handleShareClick = () => {
    setShareCount(shareCount + 1);
  };

  const handlePostSubmit = () => {
    if (currentPost.title.trim() === '' || currentPost.content.trim() === '') return;
    setPosts([...posts, { ...currentPost, user }]);
    setCurrentPost({ title: '', content: '' });
  };

  return (
    <div className="container">
      <div className="user-profile">
        <img src={currentUser.photoURL} alt="Profile" />
        <h2>{currentUser.displayName}</h2>
      </div>

      <div className="new-post">
        <h2>Create New Blog Post</h2>
        <input
          type="text"
          placeholder="Title"
          value={currentPost.title}
          onChange={(e) => setCurrentPost({ ...currentPost, title: e.target.value })}
        />
        <textarea
          placeholder="Content"
          value={currentPost.content}
          onChange={(e) => setCurrentPost({ ...currentPost, content: e.target.value })}
        />
        <button onClick={handlePostSubmit}>Create Post</button>
      </div>

      <hr />

      {posts.map((post, index) => (
        <div key={index} className="blog-post">
          <div className="user-profile">
            <img src={currentUser.photoURL} alt="Profile" />
            <h2>{currentUser.displayName}</h2>
          </div>
          <h1>{post.title}</h1>
          <p>{post.content}</p>

          <div className="interaction-buttons">
            <button onClick={handleLikeClick}>Like</button>
            <span>{likeCount} Likes</span>

            <button onClick={handleShareClick}>Share</button>
            <span>{shareCount} Shares</span>
          </div>

          <hr />

          <div className="comments-section">
            <h2>Comments</h2>
            <form onSubmit={handleCommentSubmit}>
              <input
                type="text"
                placeholder="Add a comment..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
              />
              <button type="submit">Submit</button>
            </form>
            <ul>
              {comments.map((comment, index) => (
                <li key={index} className="comment">
                  <p>{comment.text}</p>
                  <p className="timestamp">{comment.timestamp}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
