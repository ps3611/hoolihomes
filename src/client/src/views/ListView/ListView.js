import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { fetchHomesList } from '../../actions/apiActions';
import Home from './Home';
import EmptyList from './EmptyList';
import '../../styles/ListView.css';

class ListView extends Component {

  handlePaginationClick = (data) => {
    const newQueryParameters = this.props.queryParameters;
    newQueryParameters.page = data.selected+1;
    this.props.fetchHomesList(newQueryParameters);
  }

  render() {
    const { homesList, totalPages, loading, queryParameters } = this.props;
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
          <ReactPaginate
            pageCount={totalPages}
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
            forcePage={queryParameters.page-1}
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            onPageChange={this.handlePaginationClick}
            containerClassName='containerClassName'
            pageClassName='pageClassName'
            activeClassName='activeClassName'
            previousClassName='navClassName'
            nextClassName='navClassName'
            breakClassName='breakClassName'
          />
          <div>
            Text..
          </div>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  homesList: state.api.homesList,
  totalPages: state.api.totalPages,
  queryParameters: state.settings.queryParameters,
  loading: state.listViewPage.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchHomesList: queryParameters => dispatch(fetchHomesList(queryParameters)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListView);
