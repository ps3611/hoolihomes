import React, { Component } from 'react'
import ReactMapGL, {Marker} from 'react-map-gl'
import { connect } from 'react-redux'
import './Map.css'
import { getFilteredHomes } from '../redux/actions.js'
import {debounce} from 'lodash'

const accessToken = 'pk.eyJ1Ijoic3RldmVuc3B5cmFtaWQiLCJhIjoiY2puMWl4NDluM3g5aTNwcG56YWVhb293YiJ9.UpzML4DXnrPKkVdvY0IOJQ'

class Map extends Component {
	constructor(props){
		super(props)
		this.state = {
			viewport: {
				width: this.props.widthAndHeight,
				height: this.props.widthAndHeight,
				latitude: this.props.itemsAndMapInfo.centerLatitude,
				longitude: this.props.itemsAndMapInfo.centerLongitude,
				zoom: Math.log2(156543.03/(this.props.itemsAndMapInfo.radius/(this.props.widthAndHeight/2)))
			}
		}
		this.refreshPage = debounce(this.refreshPage, 300)
	}
	componentDidUpdate(prevProps) {
		if(prevProps.width !== this.props.width) {
			this.setState({ viewport: {
				...this.state.viewport,
				width: this.props.width
			}})
		}
	}

	refreshWidth () {
		return this.props.refreshDisplay()
	}


	refreshPage(viewport){
		const newQueryParameters = this.props.queryParameters
		newQueryParameters.centerLatitude = viewport.latitude
		newQueryParameters.centerLongitude = viewport.longitude
		newQueryParameters.radius = (156543.03/(Math.pow(2,viewport.zoom)))*(this.props.widthAndHeight/2)
		this.props.getFilteredHomes(newQueryParameters)
	}

	render() {

		const positiveNegative = (num)=>num>0 ? 'danger' : 'success'
		const list = this.props.itemsAndMapInfo.homesList.map((home, i)=>{
			return(
				<Marker key={i} latitude={home.latitude} longitude={home.longitude}>
					<span className={`tag is-${positiveNegative(home.estimatedPricePercentageDifference)}`}>
						<div className="tooltip">
							{home.estimatedPricePercentageDifference}%
							<span className="tooltiptext">
								<a href={home.url}>
									<img src={home.thumbnail}/>
								</a>
							</span>
						</div>
					</span>
				</Marker>
			)
		}
		)

		return (
			<ReactMapGL
				mapboxApiAccessToken={accessToken}
				{...this.state.viewport}
				onViewportChange={(viewport) =>{
					this.refreshPage(viewport)
					this.refreshWidth()
					this.setState({viewport:{
						...this.state.viewport,
						latitude: viewport.latitude,
						longitude: viewport.longitude,
						zoom: viewport.zoom,
					}})
				}
				}
			>
				{list}
			</ReactMapGL>
		)
	}
}

const mapStateToProps = (state) => ({
	queryParameters: state.queryParameters
})

const mapDispatchToProps = (dispatch) => ({
	getFilteredHomes: (queryParameters) => dispatch(getFilteredHomes(queryParameters))
});

export default connect(mapStateToProps, mapDispatchToProps)(Map)
