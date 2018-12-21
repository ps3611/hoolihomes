import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from './redux/reducers'
import { apiMiddleware } from 'redux-api-middleware'

const Store = createStore(
	reducer,
	applyMiddleware(apiMiddleware)
)

ReactDOM.render(
	<Provider store={Store}>
		<App />
	</Provider>,
	document.getElementById('root')
)

serviceWorker.unregister()
