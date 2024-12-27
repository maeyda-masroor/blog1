"use client";

import { useState } from 'react';

interface Comment {
  name: string;
  message: string;
}

const Comments = () => {
  const [comments, setComments] = useState<Comment[]>([]); // Store comments in state
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [clapCount, setClapCount] = useState(0);
  const [loveCount, setLoveCount] = useState(0);

  const handleClap = () => {
    setClapCount(clapCount + 1);
  };

  const handleLove = () => {
    setLoveCount(loveCount + 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && message.trim()) {
      // Add the new comment to the list
      setComments((prev) => [...prev, { name, message }]);
      // Clear the form fields
      setName('');
      setMessage('');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '', padding: '1rem' }}>
      <div style={{ marginTop: '2rem' }}>
        <h2>Comments</h2>
        {/* Emoji Reactions */}
        <div
          className="emoji-reactions"
          style={{ display: 'flex', justifyContent: 'left', gap: '1rem', marginBottom: '1rem' }}
        >
          <div className="emoji" style={{ cursor: 'pointer' }}>
            <span onClick={handleClap} role="button" aria-label="Clap">
              👏 {clapCount}
            </span>
          </div>
          <div className="emoji" style={{ cursor: 'pointer' }}>
            <span onClick={handleLove} role="button" aria-label="Love">
              ❤️ {loveCount}
            </span>
          </div>
        </div>

        {/* Comment Form */}
        <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
          <div style={{ marginBottom: '0.5rem' }}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              style={{
                display: 'block',
                width: '100%',
                padding: '0.5rem',
                marginTop: '0.3rem',
                borderRadius: '8px',
                border: '1px solid #ccc',
              }}
            />
          </div>
          <div style={{ marginBottom: '0.5rem' }}>
            <label htmlFor="message">Comment:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Comment"
              style={{
                display: 'block',
                width: '100%',
                padding: '0.5rem',
                marginTop: '0.3rem',
                borderRadius: '8px',
                border: '1px solid #ccc',
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#007BFF',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            Submit
          </button>
        </form>
      </div>

      {/* Display Comments */}
      <div>
        {comments.length === 0 ? (
          <p>No comments yet. Be the first to comment!</p>
        ) : (
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {comments.map((comment, index) => (
              <li
                key={index}
                style={{
                  marginBottom: '1rem',
                  padding: '1rem',
                  borderRadius: '8px',
                  backgroundColor: '#f9f9f9',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                }}
              >
                <strong>{comment.name}</strong>
                <p>{comment.message}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Comments;
