import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { fetchHomesList } from '../actions/apiActions';
import Home from './Home';
import '../styles/ListView.css';

class ListView extends Component {

  handlePaginationClick = (data) => {
    const newQueryParameters = this.props.queryParameters;
    newQueryParameters.page = data.selected+1;
    this.props.fetchHomesList(newQueryParameters);
  }

  render() {
    const { homesList, totalPages } = this.props;
    const homes = homesList.map((home, i) => (
        <Home
          key={i}
          picture={home.thumbnail}
          title={home.title}
          size={home.size}
          price={home.price}
          pricePerSquareMeter={home.pricePerSquareMeter}
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
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            onPageChange={this.handlePaginationClick}
            pageCount={totalPages}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
          />
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
  fetchHomesList: page => dispatch(fetchHomesList(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListView);
