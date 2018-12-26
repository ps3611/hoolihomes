import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { fetchHomesList } from '../actions/apiActions';
import Home from './Home';
import '../styles/ListView.css';

class ListView extends Component {

  constructor(props) {
      super(props);
      this.state = {
          page: 1,
          totalPages: null,
      };
  }

  // componentDidMount() {
  //   document.querySelector('.ListView').addEventListener('scroll', (e) => {
  //     this.handleScroll(e);
  //   });
  // }

  // handleScroll = (e) => {
  //   if (this.props.loading) return;
  //   const homeDivs = document.querySelectorAll('.Home');
  //   const lastHomeDiv = homeDivs[homeDivs.length - 1];
  //   const listViewDiv = document.querySelector('.ListView');
  //   if (lastHomeDiv.offsetTop < listViewDiv.scrollTop + 2000) this.loadMore();
  // }

  loadMore = () => {
    this.setState(state => ({
      page: state.page + 1,
    }), () => {
      const newQueryParameters = this.props.queryParameters;
      newQueryParameters.page = this.state.page;
      this.props.fetchHomesList(newQueryParameters);
    });
   }

  render() {
    const { homesList } = this.props;
    const homes = homesList.map((home, i) => {
      return (
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
      );
    });
    return (
        <div className='ListView'>
          <div className='HomesList'>
            {homes}
          </div>
          <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={10}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
          />
        </div>
    );
  }
}

const mapStateToProps = state => ({
  homesList: state.api.homesList,
  pagesLoaded: state.api.pagesLoaded,
  queryParameters: state.api.queryParameters,
  loading: state.listViewPage.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchHomesList: page => dispatch(fetchHomesList(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListView);
