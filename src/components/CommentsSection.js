import React, { useState } from 'react';

const CommentsSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [replyInputs, setReplyInputs] = useState({});

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, { content: newComment, replies: [], id: Date.now(), username: 'User1' }]);
      setNewComment('');
    }
  };

  const handleDeleteComment = (commentId) => {
    const updatedComments = comments.filter((comment) => comment.id !== commentId);
    setComments(updatedComments);
  };

  const handleAddReply = (parentId, reply) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === parentId) {
        return { ...comment, replies: [...comment.replies, reply] };
      }
      return comment;
    });
    setComments(updatedComments);
    setReplyInputs({ ...replyInputs, [parentId]: '' }); // Reset the specific reply input after adding the reply
  };

  const handleDeleteReply = (commentId, replyId) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return { ...comment, replies: comment.replies.filter((reply) => reply.id !== replyId) };
      }
      return comment;
    });
    setComments(updatedComments);
  };

  const handleReplyInputChange = (parentId, value) => {
    setReplyInputs({ ...replyInputs, [parentId]: value });
  };

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.username}</strong>: {comment.content} {/* Display the username here */}
            <button type="button" className="btn btn-danger" onClick={() => handleDeleteComment(comment.id)}>
              Delete
            </button>
            <div>
              <input
                type="text"
                value={replyInputs[comment.id] || ''}
                onChange={(e) => handleReplyInputChange(comment.id, e.target.value)}
                placeholder="Write a reply..."
              />
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => handleAddReply(comment.id, { content: replyInputs[comment.id], id: Date.now(), username: 'User1' })}
              >
                Reply
              </button>
            </div>
            {comment.replies.length > 0 && (
              <ul>
                {comment.replies.map((reply) => (
                  <li key={reply.id}>
                    <strong>{reply.username}</strong>: {reply.content} {/* Display the username for replies */}
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleDeleteReply(comment.id, reply.id)}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
        />
        <button type="button" className="btn btn-secondary" onClick={handleAddComment}>Submit</button>
      </div>
    </div>
  );
};

export default CommentsSection;
