import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapToggle } from '../redux/actions';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkedAlt, faListUl } from '@fortawesome/free-solid-svg-icons'
import './SwitchViews.css'
library.add(faMapMarkedAlt, faListUl)


class SwitchViews extends Component {
	constructor(props) {
		super(props)
	}

	mapToggleOn = () => {
		this.props.mapToggle(true)
	}

	mapToggleOff = () => {
		this.props.mapToggle(false)
	}

	render() {
		return (
		<div className="SwitchViews">
		  <div className="tabs is-toggle is-fullwidth is-dark">
		    <ul>
		      <li>
						<a onClick={()=> this.mapToggleOff()}>
		          <span className="element"><FontAwesomeIcon icon="list-ul" /></span>
		          <strong><span className="element">List</span></strong>
		        </a>
		      </li>
		      <li>
		        <a onClick={()=> this.mapToggleOn()}>
		          <span className="element"><FontAwesomeIcon icon="map-marked-alt" /></span>
		          <strong><span className="element">Map</span></strong>
		        </a>
		      </li>
		    </ul>
		  </div>
		</div>
	)
	}
}

const mapDispatchToProps = (dispatch) => ({
	mapToggle: (bool) => dispatch(mapToggle(bool))
});

export default connect(null, mapDispatchToProps)(SwitchViews)
