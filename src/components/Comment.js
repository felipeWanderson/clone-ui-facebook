import React from 'react';

function Comments({ comment }) {
  return (
    <div className="post-comments">
        <div key={comment.id} className="comment">
          <img className="avatar" src={comment.author.avatar} />
          <p>
            <span>{comment.author.name}</span>
            {comment.content}
          </p>
        </div>    
    </div>
  );
}

export default Comments;

