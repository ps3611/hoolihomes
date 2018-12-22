import React, { Component } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
import Home from './Home';
import '../styles/ListView.css';

class ListView extends Component {
  render() {
    const { homesList } = this.props;
    console.log(homesList);
    const homes = homesList.map((home, i) => {
      return (
        <Home
          key={i}
          picture={home.thumbnail}
          size={home.size}
          price={home.price}
          pricePerSquareMeter={home.pricePerSquareMeter}
          estimatedPrice={home.estimatedPrice}
          url={home.url}
        />
      );
    });
    return (
        <InfiniteScroll className='ListView'>
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
