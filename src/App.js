import React, { Component } from 'react';
import Header from './header';
import PollForm from './poll_form';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <PollForm />
      </div>
    );
  }
}

export default App;
