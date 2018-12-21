import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getFilteredHomes } from '../redux/actions.js'
import 'rc-slider/assets/index.css'
import './Filter.css'
const { mapInfo } = require('./mapInfo.json')
/* eslint-disable indent*/

class CitySelector extends Component {

  handleChange = (cityObj) => {
    // hardcoded and doesnt work...
    cityObj = {
      "name": "barcelona",
      "label": "Barcelona",
      "latitude": 41.385063,
      "longitude": 2.173404,
      "radius": 50000
    };
    console.log('handleChange');
    const newQueryParameters = this.props.queryParameters
    newQueryParameters.city = cityObj.name
    newQueryParameters.centerLatitude = cityObj.latitude
    newQueryParameters.centerLongitude = cityObj.longitude
    newQueryParameters.radius = cityObj.radius
    console.log(newQueryParameters);
    this.props.getFilteredHomes(newQueryParameters);
  }

  render () {
    const options = mapInfo.map((cityObj, i) => {
      return (
        <option
          key={i}
          value={cityObj}
        >
        {cityObj.label}
        </option>
      )}
    )

    return (
      <article className="message is-link">
        <div className="message-header">
        <h4><strong>City</strong></h4>
        </div>
        <div className="message-body">
          <div className="field has-addons">
            <div className="control is-expanded">
              <div className="select is-fullwidth is-link">
                <select name="city" onChange={this.handleChange}>
                  <option >Select one</option>
                  {options}
                </select>
              </div>
            </div>
          </div>
        </div>
      </article>
    )
  }
};

const mapStateToProps = (state) => ({
	queryParameters: state.queryParameters
})

const mapDispatchToProps = (dispatch) => ({
	getFilteredHomes: (queryParameters) => dispatch(getFilteredHomes(queryParameters))
});

export default connect(mapStateToProps, mapDispatchToProps)(CitySelector)
