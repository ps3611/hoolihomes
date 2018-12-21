import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import ListView from './ListView';
import MapView from './MapView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div style={{flex:1,display:'flex',flexDirection:'row'}}>
          <ListView />
          <MapView />
        </div>
      </div>
    );
  }
}

export default App;
