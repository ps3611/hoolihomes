import React, { Component } from 'react';
import Home from './Home';
import '../styles/ListView.css'

class ListView extends Component {
  render() {
    return (
      <div className="ListView">
        <Home />
        <Home />
        <Home />
        <Home />
        <Home />
        <Home />
      </div>
    );
  }
}

export default ListView;
