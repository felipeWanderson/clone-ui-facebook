import React from 'react';

import Comment from './Comment';

function Post ({ data }) {
    return (
      <section className="post-container">
          <header className="post-header">
            <img className="avatar" src={data.author.avatar} alt="avatar"/>
            <div className="details">
              <span>{data.author.name}</span>
              <span>{data.date}</span>
            </div>
          </header>
          <p className="post-content">
            {data.content}  
          </p>
          <div className="bar" ></div>
          {data.comments.map(
            comment => <Comment key={comment.id} comment={comment}/>
          )}
      </section>
    );
}

export default Post;