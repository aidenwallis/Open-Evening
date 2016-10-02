import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import Home from './components/home'
import Welcome from './components/welcome'
import Start from './components/start'
import Years from './components/years'
import Y7 from './components/years/y7'

export default (
	<Route path="/" component={App}>
		<Route path="welcome" component={Welcome} />
		<Route path="start" component={Start} />
		<Route path="tour/" component={Years}>
			<Route path="y7" component={Y7} />
		</Route>
		<IndexRoute component={Home} />
	</Route>
)