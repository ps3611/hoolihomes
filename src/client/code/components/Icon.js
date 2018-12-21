import React, {Component} from 'react'
import './Icon.css'

class Icon extends Component {

	render() {
  
		return (
			<a href={this.props.url}>
				{this.props.deviation}
				<img className ="image" src={this.props.thumbnail}/>
			</a>
		)
	}
}
export default Icon