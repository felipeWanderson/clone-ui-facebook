import React from 'react';

import 'normalize.css';
import './App.css';

import Header from './components/Header';
import PostList from './components/PostList';


function App() {
  return (
      <>
        <Header/>
        <PostList />
        <PostList />
        <PostList />
        <PostList />
        <PostList />

      </>
  );
}

export default App;