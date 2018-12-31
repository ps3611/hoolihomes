import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import '../../styles/Pagination.css'

class Pagination extends Component {
  render() {
    const { page, totalPages, handlePaginationClick } = this.props;
    const previousClassName = page === 1 ? 'hidden' : 'navClassName';
    const nextClassName = page === totalPages ? 'hidden' : 'navClassName';
    return (
      <div className='Pagination'>
        <ReactPaginate
          pageCount={totalPages}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          forcePage={page-1}
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          onPageChange={handlePaginationClick}
          containerClassName='containerClassName'
          pageClassName='pageClassName'
          activeClassName='activeClassName'
          breakClassName='breakClassName'
          previousClassName={previousClassName}
          nextClassName={nextClassName}
          />
        <div className='HomesCount'>
          Text..
        </div>
      </div>
    );
  }
}

export default Pagination;
