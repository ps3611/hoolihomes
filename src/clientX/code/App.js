import { Component } from 'react'
import * as React from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import './App.css'

import Navbar from './components/Navbar'
import Display from './components/Display'
import Filter from './components/Filter'
import SwitchViews from './components/SwitchViews'

class App extends Component {
	render() {
		return (
			<div className="tile is-ancestor is-vertical">
				<div className="tile is-parent">
					<div className="NavBar tile is-child">
						<Navbar />
					</div>
				</div>
				<div className="tile is-parent">
					<div className="tile is-4 is-child impala">
						<SwitchViews/>
						<Filter/>
					</div>
					<div className="tile is-child">
						<Display />
					</div>
				</div>
			</div>
		)
	}
}

export default App
