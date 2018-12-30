import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHomesList, fetchHomesListCity } from '../../actions/apiActions';
import { selectPriceRange, selectM2PriceRange, selectSizeRange, selectCity, resetFilters } from '../../actions/settingsActions';
import Filter from './Filter';
import SliderPopup from './SliderPopup';
import CityPopup from './CityPopup';
import { numberFormater } from '../helper';
import '../../styles/Navbar.css';

class Navbar extends Component {

  formatPriceLabel = (queryParameters) => {
    return `${numberFormater(queryParameters.price[0],1000,3,'k€')} - ${numberFormater(queryParameters.price[1],1000,3,'k€')}`;
  }

  formatSizeLabel = (queryParameters) => {
    return `${numberFormater(queryParameters.size[0],1,0,'m²')} - ${numberFormater(queryParameters.size[1],1,0,'m²')}`;
  }

  formatM2PriceLabel = (queryParameters) => {
    return `${numberFormater(queryParameters.m2Price[0],1,0,'€/m²')} - ${numberFormater(queryParameters.m2Price[1],1,0,'€/m²')}`;
  }

  handleResetClick = () => {
    this.props.resetFilters();
    this.props.fetchHomesListCity(this.props.queryParameters);
  }

  render() {
    const {
      selectedCity,
      fetchHomesList,
      queryParameters,
      selectPriceRange,
      selectM2PriceRange,
      selectSizeRange,
      selectCity,
      priceFilterActive,
      sizeFilterActive,
      m2PriceFilterActive,
    } = this.props;
    const resetClassName = priceFilterActive || sizeFilterActive || m2PriceFilterActive ? 'Reset' : 'Reset ResetHidden';
    const priceLabel = priceFilterActive ? this.formatPriceLabel(queryParameters) : 'Price';
    const sizeLabel = sizeFilterActive ? this.formatSizeLabel(queryParameters) : 'Size';
    const m2PriceLabel = m2PriceFilterActive ? this.formatM2PriceLabel(queryParameters) : 'm² Price';
    return (
      <div className='Navbar'>
        <div className='NavbarLogo'>
          <img src={require('../../assets/HooliLogo.svg')} alt='logo' className='NavbarLogoImg'/>
        </div>
        <div className='NavbarFilters'>
          <div
            className={resetClassName}
            onClick={this.handleResetClick}
          >
            <h4>Reset</h4>
          </div>
          <Filter
            id='price'
            label={priceLabel}
            isActive={priceFilterActive}
            popupContent={
              <SliderPopup
                key={1}
                title={`The average price is ${numberFormater(this.props.avgPrice,1000,0)}€`}
                unit='€'
                values={queryParameters.price}
                updateValues={selectPriceRange}
                min={this.props.minPrice}
                max={this.props.maxPrice}
                step={1000}
                fetchHomesList={fetchHomesList}
                queryParameters={queryParameters}
              />
            }
          />
          <Filter
            id='size'
            label={sizeLabel}
            isActive={sizeFilterActive}
            popupContent={
              <SliderPopup
                key={2}
                title={`The average home size is ${numberFormater(this.props.avgSize,1,0)}m²`}
                unit='m²'
                values={queryParameters.size}
                updateValues={selectSizeRange}
                min={this.props.minSize}
                max={this.props.maxSize}
                step={1}
                fetchHomesList={fetchHomesList}
                queryParameters={queryParameters}
              />
            }
          />
        <Filter
          id='m2'
          label={m2PriceLabel}
          isActive={m2PriceFilterActive}
          popupContent={
            <SliderPopup
              key={3}
              title={`The average m² price is ${numberFormater(this.props.avgM2Price,1,0)}€`}
              unit='€/m²'
              values={queryParameters.m2Price}
              updateValues={selectM2PriceRange}
              min={this.props.minM2Price}
              max={this.props.maxM2Price}
              step={1}
              fetchHomesList={fetchHomesList}
              queryParameters={queryParameters}
            />
          }
          />
          <Filter
            id='city'
            label={selectedCity}
            popupContent={
              <CityPopup
                updateValues={selectCity}
                fetchHomesListCity={this.props.fetchHomesListCity}
                queryParameters={queryParameters}
              />
            }
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  priceValues: state.settings.queryParameters.price,
  m2PriceValues: state.settings.queryParameters.m2Price,
  sizeValues: state.settings.queryParameters.size,
  selectedCity: state.settings.selectedCity,
  priceFilterActive: state.settings.priceFilterActive,
  m2PriceFilterActive: state.settings.m2PriceFilterActive,
  sizeFilterActive: state.settings.sizeFilterActive,
  minPrice: state.settings.minPrice,
  avgPrice: state.settings.avgPrice,
  maxPrice: state.settings.maxPrice,
  minSize: state.settings.minSize,
  avgSize: state.settings.avgSize,
  maxSize: state.settings.maxSize,
  minM2Price: state.settings.minM2Price,
  avgM2Price: state.settings.avgM2Price,
  maxM2Price: state.settings.maxM2Price,
  queryParameters: state.settings.queryParameters,
});

const mapDispatchToProps = dispatch => ({
  selectPriceRange: range => dispatch(selectPriceRange(range)),
  selectM2PriceRange: range => dispatch(selectM2PriceRange(range)),
  selectSizeRange: range => dispatch(selectSizeRange(range)),
  selectCity: city => dispatch(selectCity(city)),
  resetFilters: () => dispatch(resetFilters()),
  fetchHomesList: queryParameters => dispatch(fetchHomesList(queryParameters)),
  fetchHomesListCity: queryParameters => dispatch(fetchHomesListCity(queryParameters)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
