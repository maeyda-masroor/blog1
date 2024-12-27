'use client';

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
    <div>
    <div style={{ marginTop: '2rem'}}>
      <h2>Comments</h2>
      <div className="emoji-reactions">
        <div className="emoji">
          <span onClick={handleClap} role="button" aria-label="Clap">
            👏 {clapCount}
          </span>
        </div>
        <div className="emoji">
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
            style={{ display: 'block', width: '100%', padding: '0.5rem', marginTop: '0.3rem' }}
          />
        </div>
        <div style={{ marginBottom: '0.5rem' }}>
          <label htmlFor="message">Comment:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Comment"
            style={{ display: 'block', width: '100%', padding: '0.5rem', marginTop: '0.3rem' }}
          />
        </div>
        <button className='bg-orange-400 p-4'>Submit</button>
      </form>
      </div>
      {/* Display Comments */}
      <div>
        {comments.length === 0 ? (
          <p>No comments yet. Be the first to comment!</p>
        ) : (
          <ul>
            {comments.map((comment, index) => (
              <li key={index} style={{ marginBottom: '1rem' }}>
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