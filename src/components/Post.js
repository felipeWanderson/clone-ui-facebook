import React from 'react';

import avatar from '../assets/perfil.jpeg'

function Post () {
    return (
      <section className="post-container">
          <header className="post-header">
            <img className="avatar" src={avatar} alt="avatar"/>
            <div className="details">
              <span>Felipe Leal</span>
              <span>04 Dez</span>
            </div>
          </header>
          <p className="post-content">Pessoal alguém sabe se a Rocketseat está contratando?</p>
          <div className="bar" ></div>
          <section className="post-comments">
            <div className="comment">
              <img className="avatar" src="https://avatars1.githubusercontent.com/u/2254731?s=460&u=dc1a4fd280cdc3c6977bacf57cbfeb8ba0917f27&v=4" />
              <p>
                <span>Diego Shell</span>
                Conteúdo do comentário
              </p>
            </div>
          </section>
          <section className="post-comments">
            <div className="comment">
              <img className="avatar" src="https://avatars1.githubusercontent.com/u/2254731?s=460&u=dc1a4fd280cdc3c6977bacf57cbfeb8ba0917f27&v=4" />
              <p>
                <span>Diego Shell</span>
                Conteúdo do comentário
              </p>
            </div>
          </section>
      </section>
    );
}

export default Post;