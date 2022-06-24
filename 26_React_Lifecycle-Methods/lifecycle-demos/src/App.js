import React, { Component } from 'react';
import ZenQuote from './ZenQuote';
import './App.css';
import GithubUserInfo from './GithubUserInfo';

class App extends Component {

  render() {

  return (
    <div className='App'>
      <GithubUserInfo  username='facebook' />
      <GithubUserInfo  username='colt' />
      <GithubUserInfo  username='gaearon' />
      <GithubUserInfo  username='aniasieuczy' />
    
    </div>
  );
}
}

export default App;
