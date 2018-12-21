import React, { Component } from 'react';
import { connect } from 'react-redux';
import { debounce } from 'lodash';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Filter.css';
import qs from 'qs';
import { queryParameters } from '../redux/actions';
import SliderSelector from './SliderSelector'
import CitySelector from './CitySelector'
import { getFilteredHomes } from '../redux/actions.js';
const mapInfo = require('./mapInfo.json');

const discountMax = {
	'-50': <strong>-50%</strong>,
	0: 0,
	50: <strong>+50%</strong>,
}

const sizeRange = {
	0: <strong>0</strong>,
	100: 100,
	200: <strong>200m</strong>,
}

const priceRange = {
	0: <strong>0</strong>,
	1000000: 1,
	2000000: <strong>2MM€</strong>,
}

const sliderDiscountSetup = {
	min: -50,
	max: 50,
	step: 10,
	included: false,
	defaultValue: [-50,50],
	allowCross: false,
}

const rangePriceSetup = {
	min: 0,
	max: 2000000,
	step: 100000,
	included: false,
	defaultValue: [0,2000000],
	allowCross: false,
}

const rangeSizeSetup = {
	min: 0,
	max: 200,
	step: 10,
	included: false,
	defaultValue: [0,200],
	allowCross: false,
}

class Filter extends Component {

	// this is ugly code duplication... needs refactoring!
	handleFilterChangePrice = (value) => {
		const newQueryParameters = this.props.queryParameters
		newQueryParameters.price = value
		this.props.getFilteredHomes(newQueryParameters);
	}
	handleFilterChangeSize = (value) => {
		const newQueryParameters = this.props.queryParameters
		newQueryParameters.size = value
		this.props.getFilteredHomes(newQueryParameters);
	}
	handleFilterChangeDiscount = (value) => {
		const newQueryParameters = this.props.queryParameters
		newQueryParameters.estimatedPricePercentageDifference = value
		this.props.getFilteredHomes(newQueryParameters);
	}

	render() {
		return (
			<div className="Filter">
				<CitySelector />
				<SliderSelector
					title='Price'
					min={rangePriceSetup.min}
					max={rangePriceSetup.max}
					marks={priceRange}
					step={rangePriceSetup.step}
					included={rangePriceSetup.included}
					defaultValue={rangePriceSetup.defaultValue}
					allowCross={rangePriceSetup.allowCross}
					onChange={this.handleFilterChangePrice}
				/>
				<SliderSelector
					title='Size'
					min={rangeSizeSetup.min}
					max={rangeSizeSetup.max}
					step={rangeSizeSetup.step}
					marks={sizeRange}
					included={rangeSizeSetup.included}
					defaultValue={rangeSizeSetup.defaultValue}
					allowCross={rangeSizeSetup.allowCross}
					onChange={this.handleFilterChangeSize}
				/>
				<SliderSelector
					title='Discount %'
					min={sliderDiscountSetup.min}
					max={sliderDiscountSetup.max}
					step={sliderDiscountSetup.step}
					marks={discountMax}
					included={sliderDiscountSetup.included}
					defaultValue={sliderDiscountSetup.defaultValue}
					onChange={this.handleFilterChangeDiscount}
				/>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	queryParameters: state.queryParameters
})

const mapDispatchToProps = (dispatch) => ({
	getFilteredHomes: (queryParameters) => dispatch(getFilteredHomes(queryParameters))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
