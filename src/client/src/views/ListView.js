import React, { Component } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
import Home from './Home';
import '../styles/ListView.css';

class ListView extends Component {
  render() {
    const { homesList } = this.props;
    const homes = [ <Home />,<Home />,<Home />,<Home />,<Home />,<Home />,<Home />,<Home />,<Home />,<Home />,  <Home />,<Home />,];
    return (
        <InfiniteScroll className="ListView">
          {homes}
        </InfiniteScroll>
    );
  }
}

const mapStateToProps = state => ({
  homesList: state.api.homesList,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ListView);
