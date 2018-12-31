import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';
import { fetchHomesList } from '../../actions/apiActions';
import '../../styles/Pagination.css'

class Pagination extends Component {

  handlePaginationClick = (data) => {
    const newQueryParameters = this.props.queryParameters;
    newQueryParameters.page = data.selected + 1;
    this.props.fetchHomesList(newQueryParameters);
  }

  render() {
    const { queryParameters, totalPages } = this.props;
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
          <p>1 – 18 of 300+ Homes</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  totalPages: state.api.totalPages,
  queryParameters: state.settings.queryParameters,
});

const mapDispatchToProps = dispatch => ({
  fetchHomesList: queryParameters => dispatch(fetchHomesList(queryParameters)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
