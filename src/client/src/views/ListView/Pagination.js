import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';
import { fetchHomesPagination } from '../../actions/apiActions';
import '../../styles/Pagination.css'

class Pagination extends Component {

  handlePaginationClick = (data) => {
    const newQueryParameters = this.props.queryParameters;
    newQueryParameters.page = data.selected + 1;
    this.props.fetchHomesPagination(newQueryParameters);
  }

  render() {
    const { homesList, totalPages, totalResults, queryParameters } = this.props;
    const previousClassName = queryParameters.page === 1 ? 'hidden' : 'navClassName';
    const nextClassName = queryParameters.page === totalPages ? 'hidden' : 'navClassName';
    return (
      <div className='Pagination'>
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
          breakClassName='breakClassName'
          previousClassName={previousClassName}
          nextClassName={nextClassName}
          />
        <div className='HomesCount'>
          <p>{`${(queryParameters.page-1) * 20 + 1} – ${(queryParameters.page - 1) * 20 + homesList.length} of ${totalResults} Homes`}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  homesList: state.api.homesList,
  totalPages: state.api.totalPages,
  totalResults: state.api.totalResults,
  queryParameters: state.settings.queryParameters,
});

const mapDispatchToProps = dispatch => ({
  fetchHomesPagination: queryParameters => dispatch(fetchHomesPagination(queryParameters)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
