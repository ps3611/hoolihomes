import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Home from './Home';
import '../styles/ListView.css'

class ListView extends Component {
  render() {
    const homes = [ <Home />,<Home />,<Home />,<Home />,<Home />,<Home />,<Home />,<Home />,<Home />,<Home />,  <Home />,<Home />,];
    return (
        <InfiniteScroll
          className="ListView"
        >
          {homes}
        </InfiniteScroll>
    );
  }
}

export default ListView;
