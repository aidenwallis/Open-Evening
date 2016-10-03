import React from 'react'
import { browserHistory } from 'react-router'

class Welcome extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
		window.onkeypress = (e) => {
			if(e.keyCode == 13) {
				document.getElementById('welcome').className += ' animated fadeOut'
				setTimeout(() => {
					browserHistory.push('/start')
				}, 1000)
			}
			return false;
		}
	}

	render() {
		return (
			<div id="welcome" className="clearfix centerall">
				<div id="welcomeInner" className="centerInner">
					<img src="/assets/images/logo.png" height="140" draggable="false" className="center-block" />
					<div className="welcome-block" />
					<h2 className="animated fadeInUp">Welcome to TWGSB Open Evening</h2>
					<p className="animate fadeInUp">(Press "Enter" to begin)</p>
				</div>
			</div>
		)
	}

}

export default Welcome