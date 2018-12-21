import React, { Component } from 'react';
import Map from './Map';
import ItemList from './ItemList';
import { connect } from 'react-redux';
import { getFilteredHomes } from '../redux/actions.js';


class Display extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mapWidthAndHeight: 300
		}
	}

	componentDidMount () {
		this.props.getFilteredHomes(this.props.queryParameters);
		window.addEventListener("resize", this.resize);
		this.setState({mapWidthAndHeight : this.mapContainer.offsetWidth})
	}

	resize = () => {
		this.setState({ mapWidthAndHeight: this.mapContainer.offsetWidth })
	}

	refreshDisplay = () => {
    this.setState({ state: this.state });
	}

	render() {
		if(this.props.isMapOn) {
			return (
				<div ref={(r)=>this.mapContainer = r} className="Display">
					<Map
						widthAndHeight={this.state.mapWidthAndHeight}
						refreshDisplay={this.refreshDisplay}
						itemsAndMapInfo = {this.props.filteredHomes}
					/>
				</div>
			)
		} else {
			return (
				<div ref={(r)=>this.mapContainer = r} className="Display">
					<ItemList
						itemList = {this.props.filteredHomes.homesList}
					/>
				</div>
			)
		}
	}
}

const mapStateToProps = (state) => ({
	filteredHomes: state.filteredHomes,
	queryParameters: state.queryParameters,
	isMapOn: state.isMapOn
})

const mapDispatchToProps = (dispatch) => ({
  getFilteredHomes: (queryParameters) => dispatch(getFilteredHomes(queryParameters))
});

export default connect(mapStateToProps, mapDispatchToProps)(Display)
