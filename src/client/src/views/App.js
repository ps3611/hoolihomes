import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHomesList } from '../actions/apiActions';
import Navbar from './Navbar/Navbar';
import ListView from './ListView/ListView';
import MapView from './MapView/MapView';
import '../styles/App.css';

class App extends Component {
  componentWillMount() {
    this.props.fetchHomesList(this.props.queryParameters);
  }

  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='MainView'>
          <ListView />
          <MapView />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  queryParameters: state.settings.queryParameters,
});

const mapDispatchToProps = dispatch => ({
  fetchHomesList: page => dispatch(fetchHomesList(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
