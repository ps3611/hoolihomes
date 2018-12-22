import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHomesList } from '../actions/apiActions';
import Navbar from './Navbar';
import ListView from './ListView';
import MapView from './MapView';
import '../styles/App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchHomesList(1);
  }

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

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  fetchHomesList: page => dispatch(fetchHomesList(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
