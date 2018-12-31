import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from './Home';
import Pagination from './Pagination';
import EmptyList from './EmptyList';
import '../../styles/ListView.css';

class ListView extends Component {

  render() {
    const { homesList, loading } = this.props;
    if (loading) {
      return (
        <div className='ListView'>
          <img src={require('../../assets/Loading.gif')} alt='loading'/>
        </div>
      )
    }
    if (homesList.length === 0) {
      return (
        <div className='ListView'>
          <EmptyList />
        </div>
      )
    }
    const homes = homesList.map((home, i) => (
        <Home
          key={i}
          picture={home.thumbnail}
          title={home.title}
          size={home.size}
          price={home.price}
          m2Price={home.m2Price}
          estimatedPrice={home.estimatedPrice}
          url={home.url}
        />
      )
    );
    return (
        <div className='ListView'>
          <div className='HomesList'>
            {homes}
          </div>
          <Pagination />
        </div>
    );
  }
}

const mapStateToProps = state => ({
  homesList: state.api.homesList,
  loading: state.listViewPage.loading,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ListView);
