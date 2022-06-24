
import React, { Component } from 'react';
import Dog from './Dog';
import About from './About';
import Contact from './Contact';
import './App.css';

class FakeRouting extends Component {

constructor(props) {
    super(props);
    this.state = {page: "about"};
  }
  changePage(newPage) {
    this.setState({page: newPage})
  }

  renderPage() {
    if(this.state.page === 'about') return <About />
    else if(this.state.page === 'dog') return <Dog />
    else if(this.state.page === 'contact') return <Contact />
  }
  render() {
  return (
    <div className="App">
      <nav>
        <a onClick={() => this.changePage('about')}>About</a>
        <a onClick={() => this.changePage('dog')}>Dog</a>
        <a onClick={() => this.changePage('contact')}>Contact</a>
      </nav>
      {this.renderPage()}
    </div>
  );
}
}

export default FakeRouting;