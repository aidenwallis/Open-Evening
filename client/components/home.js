import React from 'react'
import { browserHistory } from 'react-router'

class Home extends React.Component {

	constructor(props){
		super(props)
	}

	componentDidMount() {
		setTimeout(() => {
			document.body.className += ' pageLoaded';
		}, 1500)
		setTimeout(() => {
			browserHistory.push('/welcome');
		}, 1900)
	}

	render() {
		return (
			<div id="preload" className="clearfix animated fadeIn centerall">
				<div id="preload-inner">
					<svg className="circular" viewBox="25 25 50 50">
						<circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10"/>
					</svg>
					<img src="/assets/images/logo.png" draggable="false" />
				</div>
			</div>
		);
	}
}

export default Home